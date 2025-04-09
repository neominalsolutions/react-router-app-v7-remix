import { type RouteConfig, index, route } from '@react-router/dev/routes';
import { flatRoutes } from '@react-router/fs-routes';

export default [
	// index('routes/home.tsx'),
	// route('about', 'routes/about.tsx'),
	...(await flatRoutes()),
] satisfies RouteConfig;
