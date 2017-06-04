
import Home from './Home';
import Launch from './Launch';
import Login from './Login';

export const createRoutes = (store) => ({
    path: '/',
    IndexRoute: Launch,
    Route: {
        path: '/home',
        component: Launch,
            childRoutes: [
            Login(),
            Home()
        ]
    }
});

export default createRoutes;