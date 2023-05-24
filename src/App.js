import './style.css';
import React, { useState } from 'react';
import SearchBox from './components/SearchBox';
import ImageList from './components/ImageList';
import getImagesByQueryText from './api';

function App() {
	const [images, setImages] = useState([]);

	async function getImagesOnSubmit(queryText) {
		const { results } = await getImagesByQueryText(queryText);
		setImages(results);
	}

    return (
		<div className='container'>
			<h1>React Wallpaper Finder</h1>
			<SearchBox onSubmit={getImagesOnSubmit} />
			<ImageList images={images} />
		</div>
	);
}

export default App;