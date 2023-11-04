'use client'

import Image from "next/image"
import Styles from '@/app/permission/permission.module.css'

function permission (){
    return (
    
    <>
        <div className={Styles.ask}>
            <p>قم بتفعيل موقعك الآن</p>
            <p>و أقرب سوق للمواد الغذائية سيظهر لك تلقائيا</p>
        </div>
        <p className={Styles.M}>مناطق</p>
        <div className={Styles.icons}>
            <div className={Styles.Safe}><Image src="/images/Safe.png" alt="" width={150} height={90} /></div>
            <div className={Styles.Line}><Image src="/images/Line 1.png" alt="" width={150} height={90} /></div>
            <div className={Styles.danger}><Image src="/images/Danger.png" alt="" width={150} height={90} /></div>
        </div>
        <div className={Styles.confirm}>
            <div className={Styles.msgConfirm}>
                <p>هل انت متأكد أنك تريد مشاركة موقعك؟</p>
            </div>
            <div className={Styles.BtnYesNo}>
                <button className={Styles.Yes}>نعم</button>
                <button className={Styles.No}>لا</button>
            </div>
        </div>
    </>
    
    );
}

export default permission;