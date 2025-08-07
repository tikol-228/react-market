import express from "express";
import dotenv from "dotenv";
import fetch from "node-fetch";
import { OAuth2Client, generateCodeVerifier } from "@badgateway/oauth2-client";

dotenv.config();

const app = express();
const port = 3001;

// Для PKCE: храним codeVerifier на пользователя (в демо — глобально, для продакшена — в сессии)
let codeVerifierGlobal = "";

const client = new OAuth2Client({
  server: "https://accounts.google.com/",
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  authorizationEndpoint: "/o/oauth2/v2/auth",
  tokenEndpoint: "https://oauth2.googleapis.com/token",
});

app.get("/auth/google", async (req, res) => {
  const codeVerifier = await generateCodeVerifier();
  codeVerifierGlobal = codeVerifier; // В реальном приложении — сохранять в сессии пользователя!

  const authUri = await client.authorizationCode.getAuthorizeUri({
    redirectUri: process.env.GOOGLE_REDIRECT_URI,
    scope: ["openid", "profile", "email"],
    state: "random-state",
    codeVerifier,
  });
  res.redirect(authUri);
});

app.get("/oauth2/callback", async (req, res) => {
  try {
    const url = req.protocol + "://" + req.get("host") + req.originalUrl;
    const token = await client.authorizationCode.getTokenFromCodeRedirect(
      url,
      {
        redirectUri: process.env.GOOGLE_REDIRECT_URI,
        state: "random-state",
        codeVerifier: codeVerifierGlobal, // В реальном приложении — брать из сессии!
      }
    );

    const resp = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: { Authorization: `Bearer ${token.accessToken}` }
    });
    const user = await resp.json();
    console.log("Профиль:", user);
    res.json(user);
  } catch (e) {
    console.error(e);
    res.status(500).send("OAuth2 Error");
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен: http://localhost:${port}`);
});
