import Axios from 'axios';

const getAgentId = async token => {
	const header = {
		headers: {
			'x-auth-token': token,
		},
	};
	const resAgent = await Axios.get(
		`${process.env.NEXT_PUBLIC_MONI_API}/api/agent/auth`,
		header
	);
	return resAgent.data.id;
};

export default getAgentId;
