import React, { useRef } from "react"
import { Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"

import { statesLegality } from "./../data/state-legal-status"
import { StyledTable } from "./styles/StyledDataTable"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"

const StateDataTable = ({ isVisible, setVisible, setTable, setUsStateName }) => {

  const sortedStateData = () => {
    function compare(a, b) {
      // Use toUpperCase() to ignore character casing
      const bandA = a.state.toUpperCase()
      const bandB = b.state.toUpperCase()

      let comparison = 0
      if (bandA > bandB) {
        comparison = 1
      } else if (bandA < bandB) {
        comparison = -1
      }
      return comparison
    }

    return [...statesLegality].sort(compare)
  }

  const stateRef = useRef(null)
  console.log(stateRef)

  const handleClick = (stateName) => {
    console.log(stateName)
    setUsStateName(stateName)
    setVisible(!isVisible)
    setTable(true)
  }

  return (
    <StyledTable>
      <Thead>
        <Tr>
          <Th>State (click for info)</Th>
          <Th>Recreational</Th>
          <Th>Medical</Th>
          <Th>CBD/Low THC</Th>
        </Tr>
      </Thead>
      <Tbody>
        {sortedStateData().map(stateData => {
          return (
            <Tr key={stateData.id}>
                <Td onClick={() => handleClick(stateData.id) } style={{ cursor: `pointer` }}>{stateData.state}</Td>
                <Td>{stateData.legal}</Td>
                <Td>{stateData.medical}</Td>
                <Td>{stateData.cbd}</Td>
            </Tr>
          )
        })}
      </Tbody>
    </StyledTable>
  )
}

export default StateDataTable
