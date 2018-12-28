import LoginContainer from './containers/LoginContainer';
import WelcomeContainer from './containers/WelcomeContainer';
import PlacesIndexContainer from './containers/PlacesIndexContainer';
import PlacesEditContainer from './containers/PlacesEditContainer';

const routes = [
    {
        path: '',
        component: WelcomeContainer
    },
    {
        path: '/login',
        component: LoginContainer
    },
    {
        path: '/places',
        component: PlacesIndexContainer
    },
    {
        path: '/places/:id',
        component: PlacesEditContainer
    }
];

export default routes;