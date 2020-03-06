import styled, { css } from "styled-components"
import { motion } from "framer-motion"

export const ModalWrapper = styled(motion.div)(props => css`
  position: fixed;
  width: 100%;
  display: flex;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props.theme.colors.superDarkGreen}4D;
  padding: 0 1rem;
  z-index: 100;
`)

export const ModalCard = styled(motion.div)(props => css`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  padding: 20px 20px 40px;
  max-width: 400px;
  width: 100%;
  position: relative;

  button {
    align-self: flex-end;
    background: ${props.theme.colors.superDarkGreen};
    position: absolute;
    top: -5px;
    right: -5px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: none;
    color: ${props.theme.colors.lGrey};
    font-weight: bolder;
    cursor: pointer;
  }

  div {
    display: flex;
    flex-direction: column;
    
    h2 {
      align-self: center;
    }
  }
`)

export const InnerModalCardContainer = styled(motion.div)``
