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
            const { results } = await getImagesByQueryText(queryText);
            setImages(results);
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setLoading(false);
        }
    }

    // I think this way would be better and more readable way for App.js component
    let content = '';
    if (loading) {
        content = <Loader />;
    } else if (errorMessage) {
        content = <Alert type='danger' message={errorMessage} />;
    } else if (images && images.length > 0) {
        content = <ImageList images={images} />;
    } else {
        content = <Alert type='danger' message='Nothing to display. Please enter another qurey to fetch images.' />
    }

    return (
        <div className='container'>
            <h1>React Wallpaper Finder</h1>
            <SearchBox onSubmit={getImagesOnSubmit} />
            {content}
        </div>
    );
}

export default App;
