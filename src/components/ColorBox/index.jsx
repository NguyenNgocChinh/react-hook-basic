import React, { useState } from 'react';
import './colorBox.scss';
ColorBox.propTypes = {

};
const COLOR_LIST = ['green', 'black', 'yellow', 'red', 'deeppink'];
function getRandomColor() {
    const index = Math.trunc(Math.random() * 5);
    return COLOR_LIST[index];
}
function ColorBox() {
    const [color, setColor] = useState(() => {
        return localStorage.getItem('box-color') || 'deeppink';
    });

    function handleBoxClick() {
        const newColor = getRandomColor();
        setColor(newColor);
        localStorage.setItem('box-color', newColor);
    }

    return (
        <div className='color-box' style={{ backgroundColor: color }} onClick={handleBoxClick}>
            <p>COLOR BOX</p>
        </div>
    );
}

export default ColorBox;