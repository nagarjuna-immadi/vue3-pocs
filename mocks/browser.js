import { setupWorker } from 'msw';
import handlers from './handlers';

// eslint-disable-next-line
export const worker = setupWorker(...handlers);
