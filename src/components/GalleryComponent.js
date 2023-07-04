import React from 'react';
import ImageGallery from 'react-image-gallery';

import DINOBERG from '../assets/dinoberg.jpg';
import GUITARMAN from '../assets/guitarman.jpg';

const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
        original: DINOBERG,
        thumbnail: DINOBERG,
    },
    {
        original: GUITARMAN,
        thumbnail: GUITARMAN
    },


];

export default function GalleryComponent() {
    return (
        <div>
            <ImageGallery
                items={images}



                showPlayButton={false}
                showFullscreenButton={false}
                showNav={false}
                showThumbnails={false}
                showBullets={true}
            />
        </div>
    );
}
