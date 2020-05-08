import styled, { css } from "styled-components"
import { Table, Tr } from "react-super-responsive-table"

export const StyledTable = styled(Table)(
  props => css`
    thead {
      background-color: ${props.theme.colors.superDarkGreen};
      color: #fff;
    }

    th,
    td {
      padding: 0.3rem;
    }

    ${"" /* tbody tr:hover {
    color: ${props.theme.colors.superDarkGreen};
    background-color: ${props.theme.colors.biege};
    font-weight: 500;
  } */}

    tr:nth-child(even) {
      background-color: ${props.theme.colors.superDarkGreen}26;
    }
  `
)

export const StyledTr = styled(Tr)(
  props => css`
  transition: .3s ease-in-out;

    &:hover {
      color: ${props.backgroundColor === "#4a7729"
        ? "white"
        : props.theme.colors.superDarkGreen};
      background-color: ${props.backgroundColor}!important;
      font-weight: 500;
    }
  `
)
