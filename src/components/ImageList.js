import ImageShow from './ImageShow';

function ImageList({ images }) {
    const renderedImages = images.map((image) => {
		return <ImageShow image={image} key={image.id} />;
	});

    return <div className='image-container'>{renderedImages}</div>;
}

export default ImageList;