import { useLoaderData } from 'react-router';
import type { Route } from '../+types/root';

// sunucu tabanlı veri çeken sayfa yüklemeden önce sunu tarafında veriyi hazırlayan loader
// birden fazla veri dönecek ise o zaman await ile arka arka tüm responseları alacak şekilde tanımlayalım.

interface User {
	id: number;
	name: string;
}

export async function loader({ params }: Route.ClientLoaderArgs) {
	console.log('params', params);
	const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
	const data = await res.json();
	console.log('serverLoader', data);

	// sunucu taraflı servis hatası
	// return Promise.reject({ message: 'Veri çekerken bir hata meydana geldi' });

	return data as User[];
}

function ServerLoaders() {
	const data = useLoaderData<typeof loader>();

	return (
		<>
			{data.map((item: User) => {
				return <div key={item.id}>{item.name}</div>;
			})}
		</>
	);
}

export default ServerLoaders;
