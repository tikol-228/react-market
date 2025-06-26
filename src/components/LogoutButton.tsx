import { useAuth } from "../providers/AuthProvider";

export default function LogoutButton() {
  const auth = useAuth();
  return (
    <button onClick={() => auth.signout(() => window.location.href = "/auth")}>Выйти</button>
  );
}