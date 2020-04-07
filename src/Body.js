import React from 'react';

const Square = (props) => {
    return (
        <div id={props.id}>
            <img src={props.image} alt='...' />
        </div>
    )
}

const Body = () => {
    return (
        <div id='body'>
            <div id='stinkDiv'>
                <img src='images/Stinkmeaner-Clone.webp' alt='...' id='stink' />
            </div>
            <p id='desc'>Colonel H. Stinkmeaner was an obnoxious, blind old man whom Robert Freeman killed in a street fight. He is a recurring antagonist in the Boondocks, somehow appearing or being mentioned in one episode per all four seasons.</p>
            <Square image='images/Robert_Freeman.webp' id='square1' />
            <Square image='images/Hue.webp' id='square2' />
            <Square image='images/Riley.webp' id='square3' />
        </div>
    )
}

export default Body;