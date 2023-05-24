function ImageShow({ image }) {
    return (
		<div className='image-card'>
			<div
				className='image'
				style={{
					backgroundImage: `url(${image.urls.small})`,
				}}
			></div>
			<p>{image.alt_description}</p>
			<a
				href={image.urls.small}
                download={true}
                target="_blank"
				className='download'
				style={{
					backgroundColor: image.color,
				}}
			>
				Get full size
			</a>
		</div>
	);
}

export default ImageShow;