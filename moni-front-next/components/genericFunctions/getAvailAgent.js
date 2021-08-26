import Axios from 'axios';

const getAvailAgent = async token => {
	const header = {
		headers: {
			'x-auth-token': token,
		},
	};

	const res = await Axios.get(
		`${process.env.NEXT_PUBLIC_MONI_API}/api/agent`,
		header
	).catch(err => { console.log('agent err', err); return {}; });
	return res.data;
};

export default getAvailAgent;
