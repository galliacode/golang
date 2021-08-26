import Axios from 'axios';

const GetProfile = async token => {
	const header = {
		headers: {
			'x-auth-token': token,
		},
	};

	const resProfile = await Axios.get(
		`${process.env.NEXT_PUBLIC_MONI_API}/api/profiles`,
		header
	);

	return resProfile.data[0];
};

export default GetProfile;
