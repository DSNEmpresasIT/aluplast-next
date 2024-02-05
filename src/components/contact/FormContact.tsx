'use client'
import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import { SendEmailDto } from '@/utils/types';
import { sendEmail } from '@/services/email-service';
import toast from 'react-hot-toast';

const initialValues: SendEmailDto = {
  fullName: '',
  from: '',
  subject: '',
  message: ''
}

const FormContact = () => {
  const [showCaptcha, setShowCaptcha] = useState<boolean>(false);
  const [data, setData] = useState<SendEmailDto>(initialValues);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (
      data.fullName.length < 1 || 
      data.message.length < 1 || 
      data.from.length < 1 || 
      data.subject.length < 1  
    ) {
      return alert('Todos los campos del formulario son obligatorios')
    }
    setShowCaptcha(true);
  }

  const handleChangeData = (input: any) => {
    setData({
      ...data,
      [input.target.name]: input.target.value
    });
  }

  const handleSendEmail = async() => {
    sendEmail(data)
      .then(() => toast.success('Mail enviado correctamente!'))
      .catch(() => toast.error('Ha ocurrido un error al enviar el mail'))
      .finally(() => {
        setData(initialValues)
        setShowCaptcha(false)
      })
  }

  return (
    <form onSubmit={handleSubmit} className="form-contact" role="form">
      <div className="row">
        <div className="col-md-6 col-12">
          <label>Nombre Completo<span style={{ color: 'red' }}>*</span></label>
          <input type="text" value={data.fullName} name="fullName" onChange={handleChangeData} required placeholder="Nombre*"/>
        </div>
        <div className="col-md-6 col-12">
          <label>Email <span style={{ color: 'red' }}>*</span></label>
          <input type="email" value={data.from} onChange={handleChangeData} name="from" required />
        </div>
        <div className="col-12">
          <label>Asunto <span style={{ color: 'red' }}>*</span></label>
          <input type="text" value={data.subject} onChange={handleChangeData} name="subject" required placeholder="Número de teléfono*" />
        </div>
        <div className="col-md-12">
          <label>Mensaje <span style={{ color: 'red' }}>*</span></label>
          <textarea name="message" value={data.message} onChange={handleChangeData} className="message" placeholder="Mensaje"></textarea>
        </div>
      </div>
      <div>
        { showCaptcha  
          ? (<ReCAPTCHA sitekey={process.env.RECAPTCHA_KEY || ''} onChange={handleSendEmail}/>) 
          : (<button type="submit" className="au-btn au-btn--pill au-btn--yellow au-btn--big">Enviar</button>)
        }
      </div>
    </form>
  )
}

export default FormContact;
