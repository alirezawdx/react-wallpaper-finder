import { useState } from "react";

function SearchBox({ onSubmit }) {
    const [queryText, setQueryText] = useState("");

    function handleChange(event) {
        setQueryText(event.target.value);
    }

    function handleFormSubmit(event) {
        // Stop refreshing the page after submitting the search queryText
        event.preventDefault();

        // Then send the search queryText to the parent component
        onSubmit(queryText);
    }

    return (
        <div className="search-box">
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    autoFocus
                    value={queryText}
                    onChange={handleChange}
                    placeholder="Search..."
                />
                {/* I got this warning in browser console */}

                {/* warning: You provided a value prop to a form field without an
                onChange handler. This will render a read-only field. If the
                field should be mutable use defaultValue. Otherwise, set either
                onChange or readOnly. */}

                {/* so I changed submit input to button submit */}
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default SearchBox;
