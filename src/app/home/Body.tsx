import React, { Component } from 'react';
import Services from './Services';

function Body() {
return(
    <>
        <div className='emergency'>
            <h1>حالة طوارئ</h1>
        </div>
        <div className='question'>
            <p>ما هي حالتك الطارئة؟</p>
        </div>
        {/* <Services /> */}
    </>
    );
}

export default Body;