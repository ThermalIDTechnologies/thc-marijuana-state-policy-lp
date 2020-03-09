import styled from "styled-components"

export const LegendContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0;
`

export const MapLegend = styled.div`
  h5 {
    text-align: center;
    margin-bottom: 1rem;
    font-weight: bold;
    font-size: 90%;
  }

  div {
    ul {
      margin: 0;
      margin-bottom: 5px;
      padding: 0;
      float: left;
      list-style: none;

      li {
        font-size: 80%;
        list-style: none;
        margin-left: 0;
        line-height: 18px;
        margin-bottom: 2px;

        span {
          display: block;
          float: left;
          height: 16px;
          width: 30px;
          margin-right: 5px;
          margin-left: 0;
          border-radius: 3px;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    div {
      ul {
        display: flex;
        li {
          margin-left: 0.5rem;
        }
      }
    }
  }
`
