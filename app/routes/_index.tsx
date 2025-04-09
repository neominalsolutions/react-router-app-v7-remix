import type { Route } from './+types/_index';
import { Welcome } from '../welcome/welcome';
import Demo from '~/components/Demo';

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Anasayfa' },
		{ name: 'description', content: 'Welcome Home!' },
	];
}

export default function Home() {
	return (
		<>
			<Demo />
			<Welcome />;
		</>
	);
}
