import Axios from 'axios';

const getAgent = async (token, id) => {
	const header = {
		headers: {
			'x-auth-token': token,
		},
	};
	const resAgent = await Axios.get(
		`${process.env.NEXT_PUBLIC_MONI_API}/api/agentprofile/` + id,
		header
	);
	return resAgent.data;
};

export default getAgent;
