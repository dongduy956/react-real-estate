import { routes } from '~/config/routes';
import { Home,Contact } from '~/pages';

export const publicRoutes = [
    {
        path: routes.home,
        element: Home,
    },
    {
        path: routes.contact,
        element: Contact,
    },
];
export const privateRoutes = [];
