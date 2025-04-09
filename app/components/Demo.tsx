import { useState } from 'react';

function Demo() {
	const [counter, setCounter] = useState<number>(0);

	return (
		<>
			<p className="text-lg">Counter: {counter}</p>
			<hr></hr>
			<button onClick={() => setCounter(counter + 1)}>(+)</button>
		</>
	);
}

export default Demo;
