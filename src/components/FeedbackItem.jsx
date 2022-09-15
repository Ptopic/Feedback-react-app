import { FaTimes, FaEdit } from 'react-icons/fa';
import Card from './shared/Card';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({ item }) {
	const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
	// const [rating, setRating] = useState(7);
	// const [text, setText] = useState("This is an example of a feedback");

	// const handleClick = () => {
	//     setRating((prev) => {
	//         console.log(prev);
	//         return prev + 1;
	//     });
	// }
	return (
		<Card>
			<div className="num-display">{item.rating}</div>
			<button onClick={() => deleteFeedback(item.id)} className="close">
				<FaTimes color="purple"></FaTimes>
			</button>
			<button onClick={() => editFeedback(item)} className="edit">
				<FaEdit color="purple" />
			</button>
			<div className="text-display">{item.text}</div>
		</Card>
	);
}

export default FeedbackItem;
