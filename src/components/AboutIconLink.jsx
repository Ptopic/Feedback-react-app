import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function AboutIconLink() {
	return (
		<div className="about-link">
			<Link
				to={{
					pathname: '/about',
					// Add query params
					search: '?sort=name',
				}}
			>
				<FaQuestion size={30} />
			</Link>
		</div>
	);
}

export default AboutIconLink;
