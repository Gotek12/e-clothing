<<<<<<< HEAD
import React from 'react';
import './menu-item.style.scss';
import {withRouter} from 'react-router-dom';

const MenuIem = ({title, imageUrl, size, history, linkUrl, match}) => (
    <div className = {` ${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
        <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
        }} />
        <div className = "content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
);

=======
import React from 'react';
import './menu-item.style.scss';
import {withRouter} from 'react-router-dom';

const MenuIem = ({title, imageUrl, size, history, linkUrl, match}) => (
    <div className = {` ${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
        <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
        }} />
        <div className = "content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
);

>>>>>>> 7eb0963052b0246c804068fd8b6af63c494fd796
export default withRouter(MenuIem);