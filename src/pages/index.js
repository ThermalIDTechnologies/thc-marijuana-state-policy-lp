import React from "react"
import { VectorMap } from "@south-paw/react-vector-maps"
import styled from "styled-components"

import usa from "../maps/usa.json"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Map = styled.div`
  margin: 1rem auto;
  width: 100%;

  svg {
    stroke: #fff;

    // All layers are just path elements
    path {
      fill: rgb(73, 118, 56);
      cursor: pointer;
      outline: none;

      // When a layer is hovered
      &:hover {
        fill: rgba(73, 118, 56, 0.83);
      }

      // When a layer is focused.
      &:focus {
        fill: rgba(73, 118, 56, 0.6);
      }
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Map>
      <VectorMap {...usa} />
    </Map>
  </Layout>
)

export default IndexPage
