import react from 'react';

import web from '../Assets/draw1.webp'
import { Link } from "react-router-dom";
import CardMap from './CardMap'
const Cards = (props) => {
    const mystyle = {
        width: '350px',
        height: '300px'
    }
    return (
        <div className='col-md-4  mx-auto'>
            <div className="card" >
                <img className="img-fluid" src={props.imgsrc} alt="Card image cap" style={mystyle} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="https://rzp.io/i/futBlhiCpk" className="btn btn-primary ">Apply Insurence {props.money}</a>
                </div>
            </div>

        </div>
    );
}
export default Cards;