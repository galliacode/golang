import Axios from 'axios';

const getOperation = async (token, id) => {
	const body = {};
	const header = {
		headers: {
			'x-auth-token': token,
		},
	};

	// console.log(body);
	const res = await Axios.get(
		`${process.env.NEXT_PUBLIC_MONI_API}/api/operations/` + id,
		header
	);
	return res.data;
};

export default getOperation;
