import React, { createContext, useState } from 'react'

export const ModalContext = createContext()

export const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState(null)

  const openModal = () => {
    setOpen(state => !state)
  }

  const passData = value => {
    setData(value)
  }

  return (
    <ModalContext.Provider value={{ open, openModal, passData, data }}>
      {children}
    </ModalContext.Provider>
  )
}
