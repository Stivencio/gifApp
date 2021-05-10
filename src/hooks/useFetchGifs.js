import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
	const [state, setState] = useState({
		data: [],
		loading: true,
	});

	//enviar categoria acá para realizar este efecto unicamente cuando la categoria cambia
	useEffect(() => {
		getGifts(category).then((imgs) => {
			// console.log(imgs);

			//To do
			setTimeout(() => {
				setState({
					data: imgs,
					loading: false,
				});
			}, 1000);
		});
	}, [category]);

	return state; // {data:[], loading:true}
};
