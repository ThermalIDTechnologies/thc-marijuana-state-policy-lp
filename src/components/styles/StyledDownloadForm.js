import styled, { css } from "styled-components"
import { Grommet, TextInput } from "grommet"
import { motion } from "framer-motion"

export const StyledGrommet = styled(Grommet)`
  width: 100%;

  small {
    font-size: 9px;
    line-height: 9px;
  }
`

export const StyledInput = styled(TextInput)`
  border: 1px solid #bcbec0;
  margin: 0.3rem 0;
  width: 100%;
`

export const Btn = styled(motion.button)`
  background-color: #013220;
  border: none;
  color: #fff;
  padding: 0.75rem 3rem;
  text-decoration: none;
  text-align: center;
  border-radius: 7.5px;
  -webkit-box-shadow: 3px 3px 7px 0px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 3px 3px 7px 0px rgba(0, 0, 0, 0.6);
  box-shadow: 3px 3px 7px 0px rgba(0, 0, 0, 0.6);
  font-weight: 500;
  cursor: pointer;
  width: 100%;
  margin: 0.9rem 0 0.7rem;
`
