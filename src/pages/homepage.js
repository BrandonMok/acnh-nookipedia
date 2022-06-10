import React from 'react';

export default function Homepage() {
    return (
        <div className='container home'>
            <div className='row'>
                <div className='col-12'>
                    <div className='home__heading'>
                        <h1>ACNH Nookipedia</h1>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='home__opening'>
                        Welcome to the <i>custom</i> Animal Crossing New Horizons (ACNH) Nookipedia!
                        <br />
                        The application provides useful information relating to fish, bugs, and sea creatures that you may find living on or around your island.
                        <br />
                        <br />
                        
                        <h2>Built with:</h2>
                        <ul>
                            <li><a href="http://acnhapi.com/doc">ACNH API</a></li>
                            <li>React w/react-router</li>
                            <li>SASS</li>
                            <li>Bootstrap</li>
                        </ul>

                        <br />
                        <br />
                        Disclaimer: In conjunction with the <a href="http://acnhapi.com/">API owner's disclaimer</a>, all assets and data used in the application is of sole property and ownership by Nintendo. 
                        Data used from the API and thereby the game is only used for educational purposes.
                    </div>
                </div>
            </div>
        </div>
    );
}