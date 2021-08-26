import Axios from 'axios';

const getAgentAccounts = async (token, id) => {
	const header = {
		headers: {
			'x-auth-token': token,
		},
	};
	const res = await Axios.get(
		`${process.env.NEXT_PUBLIC_MONI_API}/api/agentaccounts/` + id,
		header
	);
	return res.data;
};

export default getAgentAccounts;
