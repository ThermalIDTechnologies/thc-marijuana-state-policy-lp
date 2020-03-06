import React from 'react'
// import styled, { css } from "styled-components"

import { LegendContainer, MapLegend } from './styles/StyledLegend';

const Legend = () => (
  <LegendContainer>
  <MapLegend>
    <h5>United States Cannabis Program Legend</h5>
    <div>
      <ul>
        <li>
          <span
            css={`
              background: ${props => props.theme.colors.darkGreen};
            `}
          ></span>
          Recreational & Medical Cannabis Program
        </li>
        <li>
          <span
            css={`
              background: ${props => props.theme.colors.limeGreen};
            `}
          ></span>
          Medical Cannabis Program
        </li>
        <li>
          <span
            css={`
              background: ${props => props.theme.colors.biege};
            `}
          ></span>
          CBD/Low THC Program
        </li>
        <li>
          <span
            css={`
              background: ${props => props.theme.colors.lGrey};
            `}
          ></span>
          No Public Cannabis Program
        </li>
      </ul>
    </div>
    {/* <div className="legend-source">
    Source: <a href="#">Name of source</a>
  </div> */}
  </MapLegend>
</LegendContainer>
  )
 export default Legend