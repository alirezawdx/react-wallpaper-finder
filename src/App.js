import './assets/css/style.css';
import React, { useState } from 'react';
import SearchBox from './components/SearchBox';
import ImageList from './components/ImageList';
import Loader from './components/Loader';
import Alert from './components/Alert';
import getImagesByQueryText from './api';

function App() {
	const [images, setImages] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

	async function getImagesOnSubmit(queryText) {
		setLoading(true);
		setImages([]);
		setErrorMessage('');
		try {
			if (!queryText) throw new Error('Please enter something to search');
			const { results } = await getImagesByQueryText(
				queryText
			);
			setImages(results);
		} catch (error) {
			setErrorMessage(error.message);
		} finally {
			setLoading(false);
		}
	}

    return (
		<div className='container'>
			<h1>React Wallpaper Finder</h1>
			<SearchBox onSubmit={getImagesOnSubmit} />
			{loading && <Loader />}
			{errorMessage && <Alert type='danger' message={errorMessage} />}
			{images && !errorMessage && !loading && (
				<ImageList images={images} />
			)}
		</div>
	);
}

export default App;