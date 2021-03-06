/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import styled, {css} from 'styled-components';
import {SelectableTile} from "../Shared/Tile"
import {fontSize3, fontSizeBig, greenBoxShadow} from "../Shared/Styles";
import {CoinHeaderGridStyled} from "../Settings/CoinHeaderGrid";
import {AppContext} from "../App/AppProvider";

const JustifyRight = styled.div`
  justify-self: right;
  ${props => props.red && css`
    color: red;
  `}
`

const JustifyLeft = styled.div`
  justify-self: left;
`

const TickerPrice = styled.div`
  ${fontSizeBig}
`

const ChangePct = styled.div`
  color: green;
`

const numberFormat = number => {
  return +(number + '').slice(0, 7);
}

const PriceTileStyled = styled(SelectableTile)`
  ${props => props.compact && css`
  display: grid;
  // ${fontSize3}
  font-size: .75em;
  grid-gap: 15px;
  grid-template-columns: repeat(3, 1fr);
  justify-items: right;
`}

  ${props => props.currentFavorite && css`
    // ${greenBoxShadow}
    box-shadow: 0px 0px 4px 2px #5fff17;
    pointer-events: none;
  `}
`

function ChangePercent({data}){
  return (
    <JustifyRight> 
      <ChangePct>
        {numberFormat(data.CHANGEPCT24HOUR)}%
      </ChangePct>
    </JustifyRight>
  );
}

function PriceTile({sym, data, currentFavorite, setCurrentFavorite}) {
  return (
    <PriceTileStyled onClick={setCurrentFavorite} currentFavorite={currentFavorite}>
      <CoinHeaderGridStyled>
        <div> {sym} </div>
        <ChangePercent data={data}/>
      </CoinHeaderGridStyled>
      <TickerPrice>
        ${numberFormat(data.PRICE)}
      </TickerPrice>
    </PriceTileStyled>
  )
}

function PriceTitleCompact ({sym, data, currentFavorite, setCurrentFavorite}){
  return (
  <PriceTileStyled onClick={setCurrentFavorite} compact currentFavorite={currentFavorite}>
        <JustifyLeft> {sym} </JustifyLeft>
        <ChangePercent data={data}/>
      <div>
        ${numberFormat(data.PRICE) }
      </div>
    </PriceTileStyled>
  );
}

export default function({price, index}){
  let sym = Object.keys(price)[0];
  let data = price[sym]['USD'];
  let TileClass = index < 5 ? PriceTile : PriceTitleCompact;
  return (
    <AppContext.Consumer> 
      {({currentFavorite, setCurrentFavorite}) => 
      <TileClass 
        sym={sym} 
        data={data} 
        currentFavorite={currentFavorite === sym}
        setCurrentFavorite={() => setCurrentFavorite(sym)}
        > 
      </TileClass>
      }
    </AppContext.Consumer>
  )
}