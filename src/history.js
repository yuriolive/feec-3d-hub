import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
export const historyMiddleware = routerMiddleware(history);
