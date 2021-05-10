import React, { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(["One Punch"]);

	// const handleAdd = () => {
	// 	Forma 1
	// 	setCategories([...categories, "HunterXHunter"]);
	// 	Forma 2
	// 	setCategories((cat) => [...cats, "HunterXHunter"]);
	// };

	return (
		<>
			<h2>GifExpertApp</h2>
			<AddCategory setCategories={setCategories} />
			<hr />

			{/* <button onClick={handleAdd}>Agregar</button> */}

			<ol>
				{categories.map((category) => (
					// <li key={category}> {category}</li>
					<GifGrid key={category} category={category} />
				))}
			</ol>
		</>
	);
};
