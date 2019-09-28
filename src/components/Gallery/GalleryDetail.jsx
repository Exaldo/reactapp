import React from 'react';

const GalleryDetail = ({match}) => {

    return (

        <div>
            <img src={`https://picsum.photos/id/${match.params.id}/500/500`} />
            <label>
                Author: {match.params.user}   
            </label>
        </div>
    )
}

export default GalleryDetail;