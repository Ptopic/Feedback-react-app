import {
	BrowserRouter as Router,
	Route,
	Routes,
	NavLink,
} from 'react-router-dom';
import { FeedbackProvider } from './context/FeedbackContext';
import Card from './components/shared/Card';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import Post from './components/Post';
import PostNew from './components/PostNew';

function App() {
	return (
		<FeedbackProvider>
			<Router>
				<Header />

				<div className="container">
					<Routes>
						<Route
							exact
							path="/"
							element={
								<>
									<FeedbackForm />
									<FeedbackStats />
									<FeedbackList />
								</>
							}
						></Route>
						<Route path="/about" element={<AboutPage />} />
						{/* <Route path="/post/:id/:name" element={<Post />} /> */}
						{/* / * is for /postNew/show */}
						{/* <Route path="/postNew/*" element={<PostNew />} /> */}
					</Routes>
				</div>

				{/* <Card>
				<NavLink to="/" activeClassName="active">
					Home
				</NavLink>
				<NavLink to="/about" activeClassName="active">
					About
				</NavLink>
			</Card> */}
				<AboutIconLink />
			</Router>
		</FeedbackProvider>
	);

	// const title = 'Blog post';
	// const body = 'This is blog post';

	// const comments = [
	// 	{ id: 1, text: 'Comment one' },
	// 	{ id: 2, text: 'Comment two' },
	// 	{ id: 3, text: 'Comment three' },
	// ];

	// const loading = false;
	// const showComments = true;

	// if (loading) return <h1>Loading...</h1>;

	// const commentBlock = (
	// 	<div className="comments">
	// 		<h3>Comments ({comments.length})</h3>

	// 		<ul>
	// 			{comments.map((comment, index) => (
	// 				<li key={index}>{comment.text}</li>
	// 			))}
	// 		</ul>
	// 	</div>
	// );
	// return (
	// 	<div className="container">
	// 		<h1>{title}</h1>
	// 		<p>{body}</p>

	// 		{showComments && commentBlock}
	// 	</div>
	// );
}

export default App;
