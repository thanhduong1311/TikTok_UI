import { HeaderOnly } from '../Components/Layout';

import Home from '../Pages/Home';
import Following from '../Pages/Following';
import Uploading from '../Pages/Uploading';
import Profile from '../Pages/Profile';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/uploading', component: Uploading, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
