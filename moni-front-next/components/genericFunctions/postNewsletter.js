import Axios from 'axios';

const PostNewsletter = async email => {
	const resProfile = await Axios.post(`${process.env.NEXT_PUBLIC_MONI_API}/api/newsletter`, {
		email,
	});

	return resProfile;
};

export default PostNewsletter;
