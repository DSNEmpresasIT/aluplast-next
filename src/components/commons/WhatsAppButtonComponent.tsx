'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import IconHead from '@/assets/img/ws-head.png';
import MainIcon from '@/assets/img/wpp-icon.png'
import { PhonesData } from '@/utils/data/contact';

const ButtonLink = ({ data, index }: any) => {
  return (
    <Link 
      title='Contacto whatsapp Aluplast'
      className='link-ws-button'
      style={{ 
      }} 
      target='_blank' 
      href={`https://api.whatsapp.com/send?phone=${data.phone}&text=`}
    >
      <div style={{ color: 'white' }}>
        <h5 style={{ color: 'white' }}>{data.city}</h5>
        <span>{data.type}</span>
      </div>
      <i style={{fontSize: "20px", color:"white"}} className="zmdi zmdi-phone-msg"></i>
    </Link>
  )
}

const WhatsAppButtonComponent = () => {
  const [isLinksDisplayActive, setIsLinksDisplayActive] = useState(false);
  return (
    <>
      {
        isLinksDisplayActive 
          ? (
            <div 
              className='whatsapp-chat-container animate__animated animate__fadeIn' 
              style={{ display: isLinksDisplayActive ? 'flex' : 'none' }}
            >
              <div className='container-header'>
                <Image src={IconHead} width={30} alt="whatsapp-logo" title='Icono de whatsapp'/>
            
                <button className='close-button-header' onClick={() => setIsLinksDisplayActive(false)}>
                  X
                </button>
              </div>
              <div className='container-body'>
                <div className='body-overflow'
                >
                  {
                    PhonesData.map((data, i )=> <ButtonLink key={`${i}-wp-buttonk-key`} data={data} index={i} />)
                  }
                </div>  
              </div>
            </div>
          )
          : (
            <div 
              className='whatsapp-glove-button animate__animated animate__fadeInUp' 
              onClick={() => setIsLinksDisplayActive(!isLinksDisplayActive)}
            >
              <Image src={MainIcon} width={35} alt="whatsapp-image" title='imagen logo de whatsapp'/> 
            </div>
          )
      }
    </>
  )
}

export default WhatsAppButtonComponent;
