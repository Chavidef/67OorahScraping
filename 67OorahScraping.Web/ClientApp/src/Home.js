import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {

    const [prize, setPrize] = useState({ imageUrl:'', title:'', winner:''});

    const onButtonClick = async () => {
        const { data } = await axios.get("/api/oorahprize/getmyprize.br=lajSk!u,irm=jadfbmnadsakllll..7")//this whole gibberish string is just for coolness. means nothing.
        setPrize(data);
    }
    const { imageUrl, title, winner } = prize;

    return (
    <>
        <div className='container mt-5'>
            <div className='row mt-5'>
                <h1>See an Oorah Prize chosen with you in mind!</h1>
                <br />
                <h4>This website carefully picks out an oorah prize specific to your needs!</h4>
                <p> Amazed? MyOorahPrize.org uses cookies and chocolate milk to choose a prize most suited to your location, status, and previous searches.</p>
                    <br />
                    <br />
                    <br/>
            </div>
                <div className='row'>
                <div className='mx-auto col-md-6'>
                    <button className='btn btn-block btn-success' onClick={onButtonClick}>
                        Get My Wish!
                    </button>
                </div>
                </div>
                {title != '' &&
                    <div className='card card-body bg-light mt-3'>
                        <h3 className='text-center'>My good-luck prize is...</h3>
                    <br />
                    <img src={imageUrl} className='rounded mx-auto d-block' />
                    <br/>
                    <h2 className='text-center'>{title}</h2>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br/>
                    <p className='text-center'> Fooled? It was already won by {winner}! </p>
                </div>
            }
        </div>
    </>
    )
}

export default Home;