import Axios from 'axios';

const getAllTransactions = async (token) => {
	const body = {};
	const header = {
		headers: {
			'x-auth-token': token,
		},
	};

	const res = await Axios.get(
		`${process.env.NEXT_PUBLIC_MONI_API}/api/operations/user`,
		header
	);
	return res.data;
};

export default getAllTransactions;
