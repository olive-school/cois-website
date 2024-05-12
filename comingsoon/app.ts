import { Router } from '@vaadin/router';
const outlet = document.getElementById( 'outlet' );
const router = new Router( outlet );
import './src/app-home';
router.setRoutes( [
    { path: '/', component: 'app-home' },
    { path: '(.*)', component: 'app-home' },
] );