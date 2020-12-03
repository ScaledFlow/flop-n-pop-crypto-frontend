/* eslint-disable import/no-anonymous-default-export */
import styled from 'styled-components';
import {AppContext} from "../App/AppProvider";

const ConfirmButtonStyled = styled.div`
  margin: 20px;
`

export const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`

export default function () {
  return <AppContext.Consumer>
      {({confirmFavorites}) => 
      <CenterDiv>
        <ConfirmButtonStyled onClick={confirmFavorites}>
          Confirm Favorites
        </ConfirmButtonStyled>
      </CenterDiv>
      }
    </AppContext.Consumer>
}