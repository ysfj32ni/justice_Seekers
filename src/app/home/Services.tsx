import React, { Component } from 'react';
import Image from 'next/image';
import Button from './Button';

function Services()
{
    return (
        <>
        <div>

            <div className='emergency'>
                <h1>حالة طوارئ</h1>
            </div>
            <div className='question'>
                <p>ما هي حالتك الطارئة؟</p>
            </div>
            <div className='services' >
                <div className='items'>
                    <Image src='/images/hospital.png' width={148} height={141} alt='hospital'/>
                        <Button val='مركز طبي' value='/map'/>
                    </div>
                <div className='items'>
                    <Image src='/images/shop.png' width={132} height={111} alt='shop'/>
                    <Button  val='الغذاء و الماء' value='map'/>
                    </div>
                <div className='items'>
                    <Image src='/images/phone.png' width={141} height={98} alt='phone'/>
                        <Button val="ارقام الطوارئ" value='/info'/>
                    </div>
            </div>
            <>
                <div className='question' style={{ color: 'red' }}>
                    <p >انقر على ما تحتاجه اكثر</p>
                </div>
            </>
        </div>
            <>
                <div className="other">
                    <Image src='/images/freePalestine.png' width={122} height={122} alt='freePalestine'/>
                    <div className="circle redcircle"></div>
                    <div className="circle greencircle" ></div>
                </div>
            </>
    </>
    );
}

export default Services;
