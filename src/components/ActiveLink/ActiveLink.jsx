import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
	return (
		<div>
			<NavLink
				to={to}
				className={({ isActive }) => (isActive ? 'bg-cyan-600 py-2 px-3 rounded' : '')}>
				{children}
			</NavLink>
		</div>
	);
};

export default ActiveLink;
