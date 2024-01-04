import { HeaderOnly } from '../Layout';

import config from '../config';
import Home from '../Pages/Home';
import Following from '../Pages/Following';
import Uploading from '../Pages/Uploading';
import Profile from '../Pages/Profile';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Uploading, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
