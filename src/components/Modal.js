import React from "react"
import { motion, AnimatePresence } from "framer-motion"

import { ModalWrapper, ModalCard, H2 } from "./styles/StyledModal"
import { useStateData } from "./../hooks/useStateData"

const Modal = ({ isVisible, setVisible, isTable, usStateName }) => {
  const getStateData = useStateData().filter(
    stateData => stateData.sanityId === usStateName
  )

  const GreenCheck = () => {
    return (
      <span
        style={{
          fontSize: `1.2rem`,
          color: `transparent`,
          textShadow: `0 0 0 green`,
        }}
        role="img"
        aria-label="green-checkmark-equals-yes"
      >
        &#10004;
      </span>
    )
  }

  const RedX = () => {
    return (
      <span
        style={{
          fontSize: `1.2rem`,
          color: `transparent`,
          textShadow: `0 0 0 red`,
        }}
        role="img"
        aria-label="red-x-equals-no"
      >
        &#10006;
      </span>
    )
  }

  return (
    <motion.div>
      <AnimatePresence>
        {isVisible && (
          <ModalWrapper
            key="modalWrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              type: "spring",
              damping: 300,
              // mass: 0.5,
              // stiffness: 50,
            }}
          >
            <ModalCard
              key="modalCard"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                type: "spring",
                damping: 300,
                // mass: 0.8,
                // stiffness: 50,
                delay: 0.3,
              }}
            >
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                transition={{
                  type: "spring",
                  damping: 300,
                  // mass: 0.4,
                  // stiffness: 50,
                }}
                onClick={() => setVisible(!isVisible)}
              >
                &#10006;
              </motion.button>
              {getStateData.map(stateData => {
                return (
                  <div key={stateData.sanityId}>
                    {isTable === false && (
                      <>
                        <H2
                          bgColor={stateData.color}
                          color={
                            stateData.recreationalStatus === "Yes" ? "#FFFFFF" : "#000000"
                          }
                        >
                          {stateData.state}
                        </H2>
                        <p>
                          Recreational Cannabis Program:{" "}
                          {stateData.recreationalStatus === "Yes" ? (
                            <GreenCheck />
                          ) : (
                            <RedX />
                          )}
                        </p>
                        <p>
                          Medical Cannabis Program:{" "}
                          {stateData.medicalStatus === "Yes" ? (
                            <GreenCheck />
                          ) : (
                            <RedX />
                          )}
                        </p>
                        <p>
                          CBD/Low THC Program:{" "}
                          {stateData.cbdStatus === "Yes" ? <GreenCheck /> : <RedX />}
                        </p>
                      </>
                    )}
                    <h3>{stateData.state} Downloadable Resources:</h3>
                    <section>
                      {stateData.statePdfs ? (
                        stateData.statePdfs.map(statePdf => {
                          return (
                            <div>
                              <a href={statePdf.pdf.asset.url} download={statePdf.title}>
                                <img
                                  src="https://res.cloudinary.com/crjars/image/upload/c_scale,f_auto,q_auto:best,w_56/v1588797628/pdf.svg"
                                  alt="PDF Icon"
                                />
                              </a>
                              <p>{statePdf.title}</p>
                            </div>
                          )
                        })
                      ) : (
                        <p>Coming Soon!</p>
                      )}
                    </section>
                  </div>
                )
              })}
            </ModalCard>
          </ModalWrapper>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Modal
