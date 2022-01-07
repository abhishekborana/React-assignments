import React from 'react';
import {Link} from 'react-router-dom';
import omen from '../images/omen.jpg';
import './Mainpage.css';
function Mainpage() {
return (
<>

<h2>Mainpage</h2>

<div className='landPage-container'>
<img className='image' src={omen} alt="omen_image"/>

<Link className='button' to="/postViewPage">Enter </Link>
</div>

</>
);

}

export default Mainpage; 