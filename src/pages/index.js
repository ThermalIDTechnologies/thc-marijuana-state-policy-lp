import React, { useState } from "react"
import { VectorMap } from "@south-paw/react-vector-maps"
import styled from "styled-components"

import usa from "../maps/usa.json"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/layout.css"

const Map = styled.div`
  margin: 1rem auto;
  width: 100%;

  svg {
    stroke: #ffffff;

    // All layers are just path elements
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

      &[id="rec-and-med"] {
        fill: #4a7729;
      }

      &[id="med"] {
        fill: #97d700;
      }

      &[id="cbd"] {
        fill: #fcd299;
      }

      &[id="nope"] {
        fill: lightgray;
      }

      // When a layer is hovered
      &:hover {
        fill: #013220;
        /* -webkit-filter: drop-shadow(10px 0px 6px rgba(0, 0, 0, 0.3));
        -moz-filter: drop-shadow(10px 0px 6px rgba(0, 0, 0, 0.3));
        -ms-filter: drop-shadow(10px 0px 6px rgba(0, 0, 0, 0.3));
        -o-filter: drop-shadow(10px 0px 6px rgba(0, 0, 0, 0.3));
        filter: drop-shadow(10px 0px 6px rgba(0, 0, 0, 0.3)); */
      }

      // When a layer is focused.
      &:focus {
        fill: #013220;
        /* -webkit-filter: drop-shadow(10px 0px 6px rgba(0, 0, 0, 0.3));
        -moz-filter: drop-shadow(10px 0px 6px rgba(0, 0, 0, 0.3));
        -ms-filter: drop-shadow(10px 0px 6px rgba(0, 0, 0, 0.3));
        -o-filter: drop-shadow(10px 0px 6px rgba(0, 0, 0, 0.3));
        filter: drop-shadow(10px 0px 6px rgba(0, 0, 0, 0.3)); */
      }
    }
  }
`

const IndexPage = () => {
  const [clicked, setClicked] = useState("None")

  const layerProps = {
    onClick: ({ target }) => setClicked(target.attributes.name.value),
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Map>
        <VectorMap {...usa} layerProps={layerProps} />
      </Map>
      <p>
        Clicked: <code>{clicked}</code>
      </p>
      <div style={{ display: `flex`, justifyContent: `center`, marginTop: `3rem` }}>
      <div className="my-legend">
        <div className="legend-title">United States Cannabis Program Legend</div>
        <div className="legend-scale">
          <ul className="legend-labels">
            <li>
              <span style={{background:`#4a7729`}}></span>Recreational & Medical Cannabis Program
            </li>
            <li>
              <span style={{background:`#97d700`}}></span>Medical Cannabis Program
            </li>
            <li>
              <span style={{background:`#fcd299`}}></span>CBD/Low THC Program
            </li>
            <li>
              <span style={{background:`lightgray`}}></span>No Public Cannabis Program
            </li>
          </ul>
        </div>
        <div className="legend-source">
          Source: <a href="#">Name of source</a>
        </div>
      </div>
      </div>
    </Layout>
  )
}

export default IndexPage
