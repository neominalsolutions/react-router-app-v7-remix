import { useParams } from 'react-router';

// user/ali
function UserDetails() {
	const params = useParams();

	console.log('username', params.username);

	return (
		<>
			<p>Dinamik Rota {params.username}</p>
		</>
	);
}

export default UserDetails;
