import { useState } from 'react';

function SearchBox({ onSubmit }) {
	const [queryText, setQueryText] = useState('');

	function handleChange(event) {
		setQueryText(event.target.value);
	}

	function onFormSubmit(event) {
		// Stop refreshing the page after submitting the search queryText
		event.preventDefault();

		// Then send the search queryText to the parent component
		onSubmit(queryText);
	}

	return (
		<div className='search-box'>
			<form onSubmit={onFormSubmit}>
				<input
					type='text'
					autoFocus
					value={queryText}
					onChange={handleChange}
					placeholder='Search...'
				/>
			</form>
		</div>
	);
}

export default SearchBox;
