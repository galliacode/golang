import Axios from 'axios';

const StatusChangeMail = async (token, endpoint, email, agentEmail, id) => {
	const header = {
		headers: {
			'x-auth-token': token,
		},
	};

	const body = {
		email,
		agentEmail,
		id,
	};

	// console.log('body', body);

	const res = await Axios.post(
		`${process.env.NEXT_PUBLIC_MONI_API}/api/mail/` + endpoint,
		// "http://localhost:5000/api/mail/" + endpoint,
		body,
		header
	);
	// console.log(res);
	return res;
};

export default StatusChangeMail;
