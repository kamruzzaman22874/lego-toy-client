import { useEffect } from 'react';

const Hook = (title) => {
	useEffect(() => {
		document.title = `${title} - lego toy`;
	}, [title]);
};

export default Hook;
