import Axios from 'axios';

const getBankDetails = async token => {
	const header = {
		headers: {
			'x-auth-token': token,
		},
	};

	const res = await Axios.get(`${process.env.NEXT_PUBLIC_MONI_API}/api/accounts`, header);

	return res.data;
};

export default getBankDetails;
