import React from 'react';




const Notfound = ({location}) => {
    const removeslash=() => {
        return location.pathname.substr(1);
    }
    return (
        <h1>{removeslash} no encontrada</h1>
    )


};

export default Notfound;