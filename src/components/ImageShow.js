function ImageShow({ image }) {
	const {
		urls,
		links,
		alt_description,
		color,
	} = image;
	// console.log(image.links);

    return (
		<div className='image-card'>
			<img className='image' src={urls.small} alt={alt_description} />
			<p>
				{alt_description.length > 30
					? alt_description.slice(0, 30) + '...'
					: alt_description}
			</p>
			<a
				href={urls.raw}
				target='_blank'
				rel='noreferrer'
				className='download'
				style={{
					backgroundColor: color,
				}}
			>
				Download
			</a>
			<a
				href={links.html}
				target='_blank'
				rel='noreferrer'
				className='info-page'
			>
				Info page
			</a>
		</div>
	);
}

export default ImageShow;