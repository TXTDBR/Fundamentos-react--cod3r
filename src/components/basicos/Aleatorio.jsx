import React from 'react';

export default props => {
    const radom = parseInt(Math.random() * (props.max - props.min)) + props.min;
    return (
        <div>
            <h2><strong>Número Aleatório: </strong>{ radom }</h2>
        </div>
    )
}
