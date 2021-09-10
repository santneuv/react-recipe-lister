import React from 'react';


const Header = () => {
    return(
        <header>
            <div className="header-wrap">
                <div className="logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="213" height="40" viewBox="0 0 213 40">
                    <text id="Finest_Green" data-name="Finest Green" transform="translate(0 29)" fill="#f38d6e" fontSize="36" fontFamily="AbrilFatface-Regular, Abril Fatface"><tspan x="0" y="0">Finest</tspan><tspan y="0" fill="#333"> </tspan><tspan y="0" fill="#a3a653">Green</tspan></text>
                </svg>
                </div>
                <div className="contact">
                    <a href="mailto:onurgler1@gmail.com">Contact Me</a>
                </div>
            </div>
        </header>

    )
}

export default Header