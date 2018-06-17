import React from 'react';

import styles from './TodoDetail.css';

const TodoDetail = (props) => {
    const { data } = props;
    return (
        <div>
            <div className={styles.title}>
                <span className={styles.infoTitle}>
                    Title:&nbsp;
                </span>
                {data.title}
            </div>

            <div className='description'>
                <span className={styles.infoTitle}>
                    Description:&nbsp;
                </span>
                {data.description}
            </div>
        </div>
    );
}

export default TodoDetail;