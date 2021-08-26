import Axios from 'axios';

const loggedUser = async token => {
	const header = {
		headers: {
			'x-auth-token': token,
		},
	};

	const res = await Axios.get(`${process.env.NEXT_PUBLIC_MONI_API}/api/auth`, header);
	// console.log(res, 'logged in data');
	return res.data.id;
};

export default loggedUser;
