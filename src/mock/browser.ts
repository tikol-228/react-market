import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

// Setup the MSW worker with the handlers
export const worker = setupWorker(...handlers);

// Start the service worker when the app is mounted
worker.start();