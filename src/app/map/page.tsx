'use client'
import Image from "next/image";
import styles from '@/app/map/map.module.css'
import NavBar from "../home/navBar";

function map(){
    return (
<>
        <NavBar />
        <div className={styles.Img}> 
            <Image src="/images/map.png" width={1000} height={500} alt='map'/>
        </div>
        <div className={styles.text}>
            <h1>المركز الطبي الاقرب</h1>
        </div>
        <div className={styles.infos}>
            <p>اضغط على علامات الموقع لمعلومات اكثر</p>
        </div>
</>
        
    );
}

export default map;

