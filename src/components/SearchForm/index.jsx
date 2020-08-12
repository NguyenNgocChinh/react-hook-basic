import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

SearchForm.propTypes = {
    onFilterChange: PropTypes.func,
};
SearchForm.defaultProps = {
    onFilterChange: null
}
function SearchForm(props) {
    const { onFilterChange } = props;
    const [value, setValue] = useState('');
    const typingTimeoutRef = useRef(null);

    function handleValueChange(e) {
        const input = e.target.value;
        setValue(input);
        if (!onFilterChange) return;

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            const valueTemp = input;

            onFilterChange(valueTemp);
        }, 300);

    }
    return (
        <div>
            <form>
                <input type="text" value={value} onChange={handleValueChange} />
            </form>
        </div>
    );
}

export default SearchForm;