'use client'

import React from 'react';
import Image from 'next/image';
import { Style } from 'util';
import NavBar from '../home/navBar';


function Contact(){


    const handleSubmit = (e:any) => {
        e.preventDefault();
        // Handle form submission here
    };

    return (
        <>
        <>

     
                <div>
                    <NavBar />
                    <div className='mail'>
                        <Image src="/images/mail.png" alt="mail" width={200} height={100} />
                    </div>
                    <div className='content'>
                        <p><b>ساعد في تطوير الموقع </b>بتبليغ عن أي مشاكل واجهتك عند إستعماله او بتقديم اقتراحات لتحسينه .شكرا</p>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="Name">الإسم </label>
                            <input type="text" id='Name' name="Name" />
                            <label htmlFor="email"> البريد الإلكتروني  </label>
                            <input type="email" id='email' name="Mail" />
                            <label htmlFor='text'>الرسالة </label>
                            <input type="text" id='text' name="Message" />
                        </form>
                    </div>
                    <div className="send">
                        <button className="Btnsend">أرسل من هنا</button>
                    </div>
                </div>
            </>
            </>
    );
}

export default Contact;
