import React from 'react';
import './HomeImages.css';
import image1 from './images/16613513_101.jpg';
import image2 from './images/GettyImages-515772901-1.jpg';
import image3 from './images/skin-cancer_G_1219130913-860x573.jpg';

const HomeImages = () => {

    return (
        <div className="images-grid mb-5">
            <div style={{backgroundImage:`url(${image1})`}} className="skin-image rounded"></div>
            <div style={{backgroundImage:`url(${image2})`}} className="skin-image rounded img-2"></div>
            <div style={{backgroundImage:`url(${image3})`}} className="skin-image rounded"></div>
        </div>
    )
}

export default HomeImages; 