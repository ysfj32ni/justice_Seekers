'use client'
import Image from "next/image";
import NavBar from "../home/navBar";

function info(){
    return (
    <>
        <div>
        <NavBar />
        <div className="circle1 circle"></div>
        <div className="circle2 circle"></div>
        <div className="container">
            <div className="ImgDis">
                <Image src="/images/Safe.png" alt="Safe" width={150} height={90}/>
            </div>
            <div className="Title">
                <h1>مركز الطبي </h1>
            </div>
            <div className="content">
                <h2>معلومات أساسية</h2>
                <h4>الخدمات الطبية المقدمة </h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores est dolor aperiam minima ipsum, temporibus quaerat id eius magnam possimus deserunt doloremque fugiat aspernatur earum porro autem amet sint nulla, ullam aut. Minus, voluptatem velit. Nostrum voluptatem officia fuga, labore repudiandae provident dolorum, inventore quos cumque aliquam, magni error praesentium.</p>
                <h4>مدى توفره </h4>
            </div>
            <div className="Btn">
                <button className="call">اتصل</button>
                <button className="cancel">الغاء</button>
            </div>
        </div>
        <div className="circle4 circle"></div>
        <div className="circle3 circle"></div>
        </div>
    </>
    );
}

export default info;