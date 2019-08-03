import React from 'react'


const Categories = props => {

    return (
        <option value={props.id}>{props.categoryTitle}</option>
    );
}

export default Categories