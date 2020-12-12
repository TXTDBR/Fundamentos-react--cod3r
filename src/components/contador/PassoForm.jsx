import React from 'react';

export default props => {
    return (
        <div>
            <label htmlFor="passoIncial">
                Passo:
                    </label>
            <input type="number" onChange={ e => props.setPasso(e)}
             id="passoIncial" value={props.passo} />
        </div>
    )
}