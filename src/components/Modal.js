import React from "react"
import { motion, AnimatePresence } from "framer-motion"

import { ModalWrapper, ModalCard, H2 } from "./styles/StyledModal"
import { statesLegality } from "./../data/state-legal-status"

const Modal = ({ isVisible, setVisible, usStateName }) => {
  const getStateData = statesLegality.filter(
    stateData => stateData.id === usStateName
  )

  console.log(getStateData)

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
                  <div key={stateData.id}>
                    <H2
                      bgColor={stateData.color}
                      color={stateData.legal === "Yes" ? "#FFFFFF" : "#000000"}
                    >
                      {stateData.state}
                    </H2>
                    <p>
                      Recreational Cannabis Program:{" "}
                      {stateData.legal === "Yes" ? <GreenCheck /> : <RedX />}
                    </p>
                    <p>
                      Medical Cannabis Program:{" "}
                      {stateData.medical === "Yes" ? <GreenCheck /> : <RedX />}
                    </p>
                    <p>
                      CBD/Low THC Program:{" "}
                      {stateData.cbd === "Yes" ? <GreenCheck /> : <RedX />}
                    </p>
                    {stateData.pdfLinks &&
                      stateData.pdfLinks.map(pdfLink => {
                        return (
                          <p>
                            {pdfLink.title}: <a href={pdfLink.link}>PDF</a>
                          </p>
                        )
                      })}
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
