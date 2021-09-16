import React, { useContext, useEffect, useRef } from "react";
import { UsersContext } from "context/UsersContext";

export const Observer = () => {
  const { changePage } = useContext(UsersContext)
  const targetRef = useRef()
  
  useEffect(() => {
    const observer = new IntersectionObserver(entry => {
      if (entry[0].isIntersecting) {
        observer.disconnect()
        changePage()
      }
    })
    observer.observe(targetRef.current)
    
    return () => observer.disconnect()
  }, [changePage])
  
  return <span ref={targetRef}></span>
}