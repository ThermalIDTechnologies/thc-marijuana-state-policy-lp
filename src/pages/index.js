import React, { useState } from "react"
import { VectorMap } from "@south-paw/react-vector-maps"
import Legend from './../components/Legend'
import Modal from './../components/Modal';
import StateDataTable from './../components/StateDataTable';

import usa from "../maps/usa.json"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Map } from "./../components/styles/StyledMap"

const IndexPage = () => {
  const [usStateName, setUsStateName] = useState("None")
  const [isVisible, setVisible] = useState(false)

  const getTargetValue = ( target ) => {
    setUsStateName(target.attributes.name.value)
    setVisible(!isVisible)
  }

  const layerProps = {
    onClick: ({target}) => {getTargetValue(target)},
  }

  console.log({isVisible})

  return (
    <Layout>
      <SEO title="Home" />
      <Map>
        <VectorMap {...usa} layerProps={layerProps} />
      </Map>
      <Modal isVisible={isVisible} setVisible={setVisible} usStateName={usStateName} />
      <Legend />
      <StateDataTable />
    </Layout>
  )
}

export default IndexPage
