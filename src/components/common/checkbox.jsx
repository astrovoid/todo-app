import React from 'react';

const Checkbox = (props) => {
    return (
        <button onClick={props.onChange}>
            { props.checked ? '+': '-'}
        </button>
    );
};

export default Checkbox;