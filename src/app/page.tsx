'use client'

import React, { Component } from 'react';
import Image from 'next/image';
import Services from './home/Services';
import Link from 'next/link';
import NavBar from './home/navBar';




export default function Home() {
  return (
    <div>
      
      <NavBar  />
      <Services />
      {/* <Body /> */}
      {/* <Foot /> */}
    </div>
    );
}
