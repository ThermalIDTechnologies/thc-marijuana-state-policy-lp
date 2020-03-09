import React from "react"
import { Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"

import { statesLegality } from "./../data/state-legal-status"
import { StyledTable } from "./styles/StyledDataTable"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"

const StateDataTable = () => {

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

  return (
    <StyledTable>
      <Thead>
        <Tr>
          <Th>State</Th>
          <Th>Recreational</Th>
          <Th>Medical</Th>
          <Th>CBD/Low THC</Th>
        </Tr>
      </Thead>
      <Tbody>
        {sortedStateData().map(stateData => {
          return (
            <Tr key={stateData.id}>
                <Td>{stateData.state}</Td>
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
