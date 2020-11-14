import React from 'react';
import './HexagonContainer.css';

const Answer = ({text,action,additionalClass}) => {
    const classes = ['button','gray'];

    if (additionalClass) {
        classes.push(additionalClass);
    }

    return (
            <div className={classes.join(' ')} onClick={action}>
                    {text}
            </div>
    )
}

export default Answer;