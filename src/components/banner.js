import React from 'react';
import '../styles.css';

const banner = ({bannerName}) => { 
    return(<div className="banner">
        {bannerName}
    </div>) 
}

export default banner;