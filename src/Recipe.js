import React from 'react';


const Recipe = ({title, calories, diet, person, image, ingredients}) => {
return (
        <div className="recipe">
            <div className="recipe-img">
                <img src={image} alt="" />
            </div>
            <div className="recipe-desc">
                <h1 className="sub-title">{title}</h1>
                <div className="ing-wrap">
                    <div className="calories">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <g id="Time" transform="translate(-2 -2)">
                                <path id="Vector" d="M10,0a10,10,0,1,0,3.827.761A10,10,0,0,0,10,0Zm0,18a8,8,0,1,1,5.657-2.343A8,8,0,0,1,10,18Z" transform="translate(2 2)" fill="#f38d6e"/>
                                 <path id="Vector-2" data-name="Vector" d="M5,6H2V1A1,1,0,0,0,0,1V7A1,1,0,0,0,1,8H5A1,1,0,1,0,5,6Z" transform="translate(11 5)" fill="#f38d6e"/>
                            </g>
                        </svg>
                        <p>{diet} </p>
                    </div>
                    <div className="calories">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17.85" height="21.75" viewBox="0 0 17.85 21.75">
                            <path id="Vector" d="M14.925,6a6,6,0,1,0-6,6A6.008,6.008,0,0,0,14.925,6ZM5.175,6a3.75,3.75,0,1,1,3.75,3.75A3.751,3.751,0,0,1,5.175,6Zm5.55,7.5h-3.6A7.131,7.131,0,0,0,0,20.625,1.123,1.123,0,0,0,1.125,21.75h15.6a1.123,1.123,0,0,0,1.125-1.125A7.131,7.131,0,0,0,10.725,13.5Zm-8.347,6a4.89,4.89,0,0,1,4.747-3.75h3.6a4.89,4.89,0,0,1,4.748,3.75Z" transform="translate(0)" fill="#a3a653"/>
                        </svg>
                        <p>{person} </p>
                    </div>
                </div>
                
                <div className="calories">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17.699" height="23.25" viewBox="0 0 17.699 23.25">
                        <g id="fire" transform="translate(-3.151 -0.375)">
                             <path id="Vector" d="M7.236.165a1.125,1.125,0,0,0-1.622,1.4c1.317,3.086.969,4.554.645,5.154a1.605,1.605,0,0,1-1.125.834c-.6.107-1.066-1.091-1.068-1.1a1.125,1.125,0,0,0-2.049-.173C.03,9.906-.492,13.307.465,16.393A12.2,12.2,0,0,0,6.142,23.13a1.115,1.115,0,0,0,.505.12,1.126,1.126,0,0,0,1.058-1.513c-.342-.937-.952-3.658.312-4.983A11.728,11.728,0,0,0,9.7,14.567c3.015,4.736,1.407,6.226,1.375,6.259l-.018.012a1.125,1.125,0,0,0,1.273,1.856l.017-.012C16,20.126,17.8,17.158,17.694,13.859,17.467,6.5,7.654.421,7.236.165Zm6.476,18.3c-.27-1.976-1.413-4.311-3.414-6.971a1.125,1.125,0,0,0-2.024.661A6.21,6.21,0,0,1,6.389,15.2,5.741,5.741,0,0,0,5.016,19.51,9.054,9.054,0,0,1,2.607,15.7a9.7,9.7,0,0,1,.562-6.63,2.717,2.717,0,0,0,2.362.7A3.841,3.841,0,0,0,8.239,7.791,5.884,5.884,0,0,0,8.7,3.975c2.733,2.174,6.628,5.96,6.749,9.956A6.661,6.661,0,0,1,13.713,18.469Z" transform="translate(3.151 0.375)" fill="#f5df3f"/>
                         </g>
                    </svg>
                    <p>{calories} calories</p>
                </div>
                <ol>
                    {ingredients.map(ingredients =>(
                        <li>{ingredients.text}</li>
                    ))}
                </ol>
            </div>
            
        </div>
    )
}

export default Recipe