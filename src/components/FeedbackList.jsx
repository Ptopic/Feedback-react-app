import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';
import Spinner from './shared/Spinner';

function FeedbackList() {
	const { feedback, isLoading } = useContext(FeedbackContext);

	if (!isLoading && (!feedback || feedback.length === 0)) {
		return <p>No feedback yet!</p>;
	}

	return isLoading ? (
		<Spinner></Spinner>
	) : (
		<div className="feedback-list">
			<AnimatePresence>
				{feedback.map((item) => (
					<motion.div
						key={item.id}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 1, times: [0, 0.4, 1] }}
					>
						<FeedbackItem key={item.id} item={item} />
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	);

	// return (
	// 	<div className="feedback-list">
	// 		{feedback.map((item) => (
	// 			<FeedbackItem
	// 				key={item.id}
	// 				item={item}
	// 				handleDelete={handleDelete}
	// 			></FeedbackItem>
	// 		))}
	// 	</div>
	// );
}

// FeedbackList.propTypes = {
// 	feedback: PropTypes.arrayOf(
// 		PropTypes.shape({
// 			id: PropTypes.number.isRequired,
// 			text: PropTypes.string.isRequired,
// 			rating: PropTypes.number.isRequired,
// 		})
// 	),
// };

export default FeedbackList;
