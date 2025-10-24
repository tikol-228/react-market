// import { setupWorker } from 'msw';
// import { rest } from 'msw';

// // Inline handlers to avoid missing-module error; replace or move to ./handlers.ts as needed
// interface ExampleResponse {
//     message: string;
// }

// type RestGetHandler = ReturnType<typeof rest.get>;
// type RestGetResolverParams = Parameters<RestGetHandler>;

// const handlers: RestGetHandler[] = [
//     rest.get(
//         '/api/example',
//         (_req: RestGetResolverParams[0], res: RestGetResolverParams[1], ctx: RestGetResolverParams[2]) => {
//             return res(ctx.status(200), ctx.json<ExampleResponse>({ message: 'ok' }));
//         }
//     ),
// ];

// // Setup the MSW worker with the handlers
// export const worker = setupWorker(...handlers);

// // Start the service worker when the app is mounted
// worker.start();