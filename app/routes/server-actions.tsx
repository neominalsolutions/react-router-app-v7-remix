import { Form, useActionData } from 'react-router';
import type { Route } from '../+types/root';

// server action asenkron çalışan bir function backend de form verilerini işlememizi sağlar

export type FormState = {
	title: string;
	description: string;
	errors: { title: string; description: string };
	status: 'error' | 'success';
};

export async function action({ request }: Route.ActionArgs) {
	let formData = await request.formData();
	let title = formData.get('title');
	let description = formData.get('description');

	const errors = { title: '', description: '' };

	if (title === null || title === '') {
		errors['title'] = 'Title is required';
	}

	if (description === null || description === '') {
		errors['description'] = 'Description is required';
	}

	if (errors.title || errors.description) {
		// Not Response olarak 'Content-Type': 'application/json', olarak gönderelim Yoksa sayfa yeniden yüklenir.
		return new Response(JSON.stringify({ errors, status: 'error' }), {
			headers: {
				'Content-Type': 'application/json',
			},
		});
	}

	console.log('Server Action', title, description);
	return new Response(
		JSON.stringify({ title, description, status: 'success' }),
		{
			headers: {
				'Content-Type': 'application/json',
			},
		}
	);
}

function ServerActions() {
	const data = useActionData<FormState>();

	console.log('action-data', data);

	return (
		<>
			<div className="flex flex-col justify-center items-center">
				{data && (
					<div className="bg-amber-700 p-2 m-2 rounded-md text-white">
						Response: {data?.title as string} / {data?.status}
					</div>
				)}
				<Form className="p-2" method="post">
					<input
						className="border-2 p-2"
						type="text"
						name="title"
						placeholder="Title"
					/>
					<br></br>
					<span>{data?.errors?.title}</span>
					<br></br>
					<input
						className="border-2 p-2"
						type="text"
						name="description"
						placeholder="Description"
					/>
					<br></br>
					<span>{data?.errors?.description}</span>
					<br></br>
					<button
						className="bg-amber-700 p-2 float-end mt-2 cursor-pointer"
						type="submit"
					>
						Submit
					</button>
				</Form>
			</div>
		</>
	);
}

export default ServerActions;
