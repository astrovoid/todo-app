import React, { Component } from 'react';

const TodoDetail = (props) => {
    return (
        <div>
            <div className='title'>{props.data.title}</div>
            <div className='description'>{props.data.description}</div>
        </div>
    );
}

export default TodoDetail;