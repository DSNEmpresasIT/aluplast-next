'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import IconHead from '@/assets/img/ws-head.png';
import MainIcon from '@/assets/img/wpp-icon.png'

const PhonesData = [
  {
    phone: '543446374867',
    area: 'Ventas Concordia',
  },
  {
    phone: '543446507870',
    area: 'Adm. Concordia',
  },
  {
    phone: '543446604155',
    area: 'Ventas Colon',
  },
  {
    phone: '543446583228',
    area: 'Adm. Colón',
  },
  {
    phone: '543446354009',
    area: 'Ventas/adm. CdelU',
  },
  {
    phone: '543446636419',
    area: 'Ventas Gualeguaychu',
  },
  {
    phone: '543446385621',
    area: 'Adm. Gualeguaychu',
  },
  {
    phone: '543446347821',
    area: 'Ventas Urdinarrain',
  },
  {
    phone: '543446598417',
    area: 'Adm. Urdinarrain',
  },
];

const ButtonLink = ({ data, index }: any) => {
  return (
    <Link 
      className='link-ws-button'
      style={{ 
        backgroundColor: (index % 2) ? '#e91d25' : '#0a75ba', 
      }} 
      target='_blank' 
      href={`https://api.whatsapp.com/send?phone=${data.phone}&text=`}
    >
      <h5 style={{ color: 'white' }}>{data.area}</h5>
      <i style={{fontSize: "20px", color:"white"}} className="zmdi zmdi-arrow-right-top"></i>
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
                <Image src={IconHead} width={70} alt="ws-logo" />
                <span className='title-header'>
                  ¡Comunícate 
                  <br />
                  con nosotros!
                </span>
                <button className='close-button-header' onClick={() => setIsLinksDisplayActive(false)}> 
                  X
                </button>
              </div>
              <div className='container-body'>
                <div className='body-overflow'
                >
                  {
                    PhonesData.map((data, i )=> <ButtonLink data={data} index={i} />)
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
              <Image src={MainIcon} width={35} alt="whatsapp" /> 
            </div>
          )
      }
    </>
  )
}

export default WhatsAppButtonComponent;
