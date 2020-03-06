import styled from "styled-components"

export const LegendContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`

export const MapLegend = styled.div`
    h5 {
      text-align: left;
      margin-bottom: 5px;
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
            border: 1px solid #999;
          }
        }
        
      }
    }
  `
