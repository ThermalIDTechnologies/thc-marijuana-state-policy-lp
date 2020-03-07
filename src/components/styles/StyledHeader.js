import styled from "styled-components"
import { motion } from "framer-motion"

export const HeaderContainer = styled(motion.header)`
  background-image: url("https://res.cloudinary.com/crjars/image/upload/f_auto,q_auto:best/v1581975492/Dope-background-image.jpg");
  margin-bottom: 3rem;
  padding: 3rem 1.0875rem;
  position: relative;

  div {
    margin: 0;
    position: absolute;
    width: 180px;
    height: 180px;
    left: 50%;
    margin-left: -90px;
    top: 15%;
    z-index: 10;
  }
`
