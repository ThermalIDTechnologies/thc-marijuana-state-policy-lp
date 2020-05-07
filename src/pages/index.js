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
  const [isTable, setTable] = useState(false)

  const getTargetValue = ( target ) => {
    setUsStateName(target.attributes.name.value)
    setVisible(!isVisible)
    setTable(false)
  }

  const layerProps = {
    onClick: ({target}) => {getTargetValue(target)},
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Map>
        <VectorMap {...usa} layerProps={layerProps} />
      </Map>
      <Modal isVisible={isVisible} setVisible={setVisible} isTable={isTable} usStateName={usStateName} />
      <Legend />
      <StateDataTable isVisible={isVisible} setVisible={setVisible} setTable={setTable} setUsStateName={setUsStateName}/>
    </Layout>
  )
}

export default IndexPage
