import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Spinner from '../../pages/Spinner/Spinner';
import { AuthContext } from '../../providers/AuthProvider';

const PrivateRoutes = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	if (loading) {
		return <Spinner></Spinner>;
	}
	if (user) {
		return children;
	} else {
	Swal.fire({
		icon: 'error',
		title: 'Oops...',
		text: 'You have to log in first to view details',
		footer: '<a href="">Why do I have this issue?</a>',
	});
	}
	return (
		<Navigate to='/login' state={{ from: location }} replace={true}></Navigate>
	);
};

export default PrivateRoutes;
