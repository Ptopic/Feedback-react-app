import { createContext, useState, useEffect } from 'react';
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [feedback, setFeedback] = useState([]);
	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	});

	useEffect(() => {
		fetchFeedback();
	}, []);

	// fetch feedback data
	const fetchFeedback = async () => {
		const response = await fetch(
			'http://localhost:5000/feedback?_sort=id&_order=desc'
		);
		const data = await response.json();
		setFeedback(data);
		setIsLoading(false);
	};

	// Add feedback
	const addFeedback = async (newFeedback) => {
		const response = await fetch(`http://localhost:5000/feedback`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newFeedback),
		});

		const data = await response.json();

		setFeedback([data, ...feedback]);
	};

	// Update feedback item
	const updateFeedback = async (id, updatedItem) => {
		const response = await fetch(`http://localhost:5000/feedback/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(updatedItem),
		});

		const data = await response.json();

		setFeedback(
			feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
		);
	};

	// Delete feedback
	const deleteFeedback = async (id) => {
		if (window.confirm('Are you sure you want to delete this feedback?')) {
			await fetch(`http://localhost:5000/feedback/${id}`, { method: 'DELETE' });
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};

	// Set item to be updated
	const editFeedback = (item) => {
		setFeedbackEdit({
			item,
			edit: true,
		});
	};

	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				deleteFeedback,
				addFeedback,
				isLoading,
				editFeedback,
				feedbackEdit,
				updateFeedback,
			}}
		>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
