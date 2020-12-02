/* eslint-disable import/no-anonymous-default-export */

// import { findAllByDisplayValue } from '@testing-library/react';
import styled, {css} from 'styled-components';
import { AppContext } from './AppProvider';

const Logo = styled.div`
  font-size: 1.5rem;
`
const Bar = styled.div`
  display: grid;
  grid-template-columns: 180px auto 100px 100px;
  margin-bottom: 40px;
`
const ControlButtonElem = styled.div`
  cursor: pointer;
  ${props => props.active && css`
    // text-shadow: 0px 0px 20px #00ff00;
    color: red;
`}
`

function toProperCase(lower) {
  return lower.charAt(0).toUpperCase() + lower.substr(1);
}

function ControlButton({name}){
  return (
    <AppContext.Consumer>
      {({page, setPage}) => (
      <ControlButtonElem 
        active={page === name}
        onClick={() => setPage(name)}
      >
        {toProperCase(name)}
      </ControlButtonElem> 
      )}
    </AppContext.Consumer>
  )
  }

export default function() {
  return ( 
    <Bar> 
      <Logo>CryptoDash</Logo>
      <div/>
      <ControlButton  name="dashboard"/>
      <ControlButton  name="settings"/>
    </Bar>
  )
}