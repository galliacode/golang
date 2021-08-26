import Axios from 'axios';

const verifyMail = async body => {
	const res = await Axios.post(`${process.env.NEXT_PUBLIC_MONI_API}/api/verify/resend`, body);
};

export default verifyMail;
