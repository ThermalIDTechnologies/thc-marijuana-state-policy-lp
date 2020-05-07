import styled, { css } from "styled-components"
import { Table } from "react-super-responsive-table"


export const StyledTable = styled(Table)(props => css`
  thead {
    background-color: ${props.theme.colors.superDarkGreen};
    color: #FFF;
  }

  th, td {
    padding: .3rem;
  }

  td:first-of-type:hover {
    color: ${props.theme.colors.superDarkGreen};
    background-color: ${props.theme.colors.biege};
    font-weight: 500;
  }

  tr:nth-child(even) {
    background-color: ${props.theme.colors.superDarkGreen}26;
  }
`)