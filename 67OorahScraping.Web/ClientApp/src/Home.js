import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {

    const [prize, setPrize] = useState({ imageUrl:'', title:''});

    const onButtonClick = async () => {
        const { data } = await axios.get("/api/oorahprize/getmyprize.br=lajSk!u,irm=jadfbmnadsakllll..7")//this whole gibberish string is just for coolness. means nothing.
        setPrize(data);
    }
    const { imageUrl, title } = prize;

    return (
    <>
        <div className='container mt-5'>
            <div className='row mt-5'>
                <h1>See an Oorah Prize chosen with you in mind!</h1>
                <br />
                <h4>This website carefully picks out an oorah prize specific to your needs!</h4>
                <p> Amazed? MyOorahPrize.org uses cookies and chocolate milk to choose a prize most suited to your location, status, and previous searches.</p>
                <br />
            </div>
            <div className='row mt-5'>
                <div className='col-md-5'>
                    <button className='btn btn-block btn-success' onClick={onButtonClick}>
                        Get My Wish!
                    </button>
                </div>
                </div>
                {prize != null &&
                <div className='card card-body bg-light mt-3'>
                    <h3>My good-luck prize is...</h3>
                    <br />
                    <img src={imageUrl} className='rounded mx-auto d-block' />
                    <h2>{title}</h2>
                </div>
            }
        </div>
    </>
    )
}

export default Home;