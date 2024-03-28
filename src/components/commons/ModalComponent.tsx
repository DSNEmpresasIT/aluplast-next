'use client'
import React, { useEffect, useRef, useState } from 'react'

export const ModalComponent = () => {
  const currentDate = new Date();
  const startDate = new Date("2024-03-29");
  const endDate = new Date("2024-04-02");
  const isClosed = currentDate >= startDate && currentDate <= endDate;
  const [ modalState, setModalState ] = useState<boolean>(false)

  useEffect(() => {
     if (isClosed) {
      openModal()
     }
  }, []);

  function switchModalTest() {
    if (modalState) {
      //@ts-ignore
      closeModal()
    } else {
      //@ts-ignore
      openModal()
    }
  }

  function openModal() {
    setModalState(true)
  }

  function closeModal() {
    setModalState(false)
  }

  return (
    <div
      id="modal"
      //@ts-ignore
      style={{ display: modalState ? 'flex' : 'none' }}
    >
     <div className="modal-container">
      <div 
        className="w-100  d-flex justify-content-end pe-2 "
      >
        <div>
          <button
            className="au-btn au-btn--big au-btn--pill au-btn--yellow au-btn--white"
            onClick={switchModalTest}
          >
            Cerrar
          </button>
        </div>
      </div>
        <h3 className="text-danger text-center p-2">
          Cerrado del 29 de marzo al 2 de abril
        </h3>
        <p className="text-center h6 mb-3">Desde el equipo de Aluplast aberturas, les deseamos unas muy felices Pascuas!!!</p>
        <div>
        <img
          className="w-100 flex  h-100 object-fit-cover"
          src="/img/modal-image.jpg"
          alt="pascuas alert"
        />
        </div>
     </div>
    </div>
  )
};
