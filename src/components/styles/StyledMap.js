import styled, { css } from "styled-components"

export const Map = styled.div(props => css`
  margin: 5rem auto 0;
  width: 100%;

  svg {
    stroke: #ffffff;

    /* All layers are just path elements */
    path {
      /* fill: #4a7729; */
      cursor: pointer;
      outline: none;
      /* -webkit-transition: 0.5s -webkit-filter ease-in-out;
      -moz-transition: 0.5s -moz-filter ease-in-out;
      -moz-transition: 0.5s filter ease-in-out;
      -ms-transition: 0.5s -ms-filter ease-in-out;
      -o-transition: 0.5s -o-filter ease-in-out;
      transition: 0.5s filter ease-in-out, 0.5s -webkit-filter ease-in-out; */
      -webkit-transition: 0.5s fill ease-in-out;
      -moz-transition: 0.5s fill ease-in-out;
      -moz-transition: 0.5s fill ease-in-out;
      -ms-transition: 0.5s fill ease-in-out;
      -o-transition: 0.5s fill ease-in-out;
      transition: 0.5s fill ease-in-out, 0.5s fill ease-in-out;

      &[class="rec-and-med"] {
        fill: ${props.theme.colors.darkGreen};
      }

      &[class="med"] {
        fill: ${props.theme.colors.limeGreen};
      }

      &[class="cbd"] {
        fill: ${props.theme.colors.biege};
      }

      &[class="nope"] {
        fill: ${props.theme.colors.lGrey};
      }

      // When a layer is hovered
      &:hover {
        fill: ${props.theme.colors.superDarkGreen};
        /* -webkit-filter: drop-shadow(10px 0px 6px rgba(0, 0, 0, 0.3));
        -moz-filter: drop-shadow(10px 0px 6px rgba(0, 0, 0, 0.3));
        -ms-filter: drop-shadow(10px 0px 6px rgba(0, 0, 0, 0.3));
        -o-filter: drop-shadow(10px 0px 6px rgba(0, 0, 0, 0.3));
        filter: drop-shadow(10px 0px 6px rgba(0, 0, 0, 0.3)); */
      }

      // When a layer is focused.
      &:focus {
        fill: ${props.theme.colors.superDarkGreen};
        /* -webkit-filter: drop-shadow(10px 0px 6px rgba(0, 0, 0, 0.3));
        -moz-filter: drop-shadow(10px 0px 6px rgba(0, 0, 0, 0.3));
        -ms-filter: drop-shadow(10px 0px 6px rgba(0, 0, 0, 0.3));
        -o-filter: drop-shadow(10px 0px 6px rgba(0, 0, 0, 0.3));
        filter: drop-shadow(10px 0px 6px rgba(0, 0, 0, 0.3)); */
      }
    }
  }
`)