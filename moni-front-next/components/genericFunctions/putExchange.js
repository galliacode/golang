import Axios from 'axios';

const PutExchange = async (id, compra, venta) => {
	const resProfile = await Axios.put(`${process.env.NEXT_PUBLIC_MONI_API}/api/exchange/` + id, {
		compra,
		venta,
	});

	return resProfile;
};

export default PutExchange;
