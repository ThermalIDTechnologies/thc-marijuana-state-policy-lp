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

  tr:nth-child(even) {
    background-color: ${props.theme.colors.superDarkGreen}26;
  }
`)