import dashboardRouter from './dashboard/router';

const routes = {
    path: '',
    name: 'Home',
    component: () => import('./Home.vue'),
    children: [
        dashboardRouter
    ],
};

export default routes;