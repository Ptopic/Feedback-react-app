import { Navigate, useNavigate, Routes, Route } from 'react-router-dom';

function PostNew() {
	// const status = 404;

	const navigate = useNavigate();

	// if (status === 404) {
	// 	return <Navigate to="/notfound" />;
	// }

	const onClick = () => {
		console.log('hello');
		navigate('/about');
	};

	return (
		<div>
			<h1>PostNew</h1>
			<button onClick={onClick}>Click</button>

			<Routes>
				<Route path="/show" element={<h1>Hello</h1>} />
			</Routes>
		</div>
	);
}

export default PostNew;
