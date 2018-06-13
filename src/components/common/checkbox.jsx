import React from 'react';

const Checkbox = (props) => {
    return (
        <button onClick={props.onChange}>
            { props.checked ? 'Completed': 'Uncompleted'}
        </button>
    );
};

export default Checkbox;