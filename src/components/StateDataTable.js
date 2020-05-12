import React from "react"
import { Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"

import { useStateData } from "../hooks/useStateData"
import { StyledTable, StyledTr } from "./styles/StyledDataTable"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"

const StateDataTable = ({
  isVisible,
  setVisible,
  setTable,
  setUsStateName,
}) => {

  const handleClick = stateName => {
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
        {useStateData().map(stateData => {
          return (
            <StyledTr
              onClick={() => handleClick(stateData.sanityId)}
              style={{ cursor: `pointer` }}
              key={stateData.sanityId}
              backgroundColor={stateData.color}
            >
              <Td>{stateData.state}</Td>
              <Td>{stateData.recreationalStatus}</Td>
              <Td>{stateData.medicalStatus}</Td>
              <Td>{stateData.cbdStatus}</Td>
            </StyledTr>
          )
        })}
      </Tbody>
    </StyledTable>
  )
}

export default StateDataTable
