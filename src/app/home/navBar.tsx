import React, { Component } from 'react';
import Image from 'next/image';
// import Link from 'next/link';
// import Contact from '../contact/page';

function NavBar(){
  return (
      <div >
          <nav>
              <Image src="/images/logo.png" alt="logo" width={90} height={70} />
              <p>يد_العون</p>
              <button>
                  <Image src="/images/Selector.png" alt="selector" width={33.3} height={22.55} />
              </button>
              <select onChange={(e) => window.location.href = e.target.value}>
                  <option value="/">الرئيسية</option>
                  <option value="/contact">تواصل معنا</option>
              </select >
          </nav>
      </div>
  );
}

export default NavBar;




// function NavBar(){
//     const handleSelectChange = (event: { target: { value: any; }; }) => {
//         const selectedOption = event.target.value;
//         if (selectedOption === 'contact') {
//          return <Contact />;
//         }else if (selectedOption === 'home') {
//             return < />
//         }
//       };

//     return (
//         <div >
//             <nav>
//                 <Image src="/images/logo.png" alt="logo" width={90} height={70} />
//                 <p>يد_العون</p>
//                 <button>
//                     <Image src="/images/Selector.png" alt="selector" width={33.3} height={22.55} />
//                 </button>
//                 <select onChange={handleSelectChange}> 
//                     <option value={'home'}>الرئيسية</option>
//                     <option value={'contact'}>تواصل معنا</option>
//                 </select>
//             </nav>
//         </div>
//     );
// }
// export default NavBar;

// {selectedOption === 'contact' ? (
//     <Link href="/contact">
//       <a>Go to Contact Page</a>
//     </Link>
//   ) : (
//     <Link href="/">
//       <a>Go back to Home Page</a>
//     </Link>
//   )}