import React, { Component } from 'react';

class TodoDetail extends Component {
    render() {
        let title = this.props.activeTodo.title;
        let description = this.props.activeTodo.description;

        return (
            <div>
                <div className='title'>{title}</div>
                <div className='description'>{description}</div>
            </div>
        );
    }
}

export default TodoDetail;