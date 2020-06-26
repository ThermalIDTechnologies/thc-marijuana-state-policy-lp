import React, { createContext, useState, useEffect } from "react"

const defaultValues = {
  success: false,
  setFormAuth: () => {},
}

export const FormAuthContext = createContext(defaultValues)

// Check if there is a browser
const isBrowser = typeof window != "undefined"

export const FormAuthProvider = ({ children }) => {
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    const initializeFormAuth = () => {
        // Check if formAuth exists
        const currentFormAuth= isBrowser ? localStorage.getItem("formAuth") : null
  
        if (currentFormAuth) {
          // If formAuth exists, set success state to formAuth's value
          setSuccess(currentFormAuth)
        } 
    }

    initializeFormAuth()
  }, [])

  const setFormAuth = (success) => {
    isBrowser && localStorage.setItem("formAuth", success)
  }

  

  return (
    <FormAuthContext.Provider
      value={{
        ...defaultValues,
        success,
        setSuccess,
        setFormAuth,
      }}
    >
      {children}
    </FormAuthContext.Provider>
  )
}
