import type { Route } from './+types/_index';
import { Welcome } from '../welcome/welcome';
import Demo from '~/components/Demo';
import { Link } from 'react-router';

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Anasayfa' },
		{ name: 'description', content: 'Welcome Home!' },
	];
}

export default function Home() {
	return (
		<>
			<Link to="/server-loaders">Server Loaders</Link>
			{' | '}
			<Link to="/client-loaders">Client Loaders</Link>
			{' | '}
			<Link to="/server-actions">Server Actions</Link>
			<Demo />
			<Welcome />;
		</>
	);
}
