import React from 'react';

const ToDo = ({ tasks }) => {
    return (
        <div>
            <p>{tasks.name}</p>
            <p>{tasks.des}</p>
        </div>
    );
};

export default ToDo;