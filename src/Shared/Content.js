/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import {AppContext} from "../App/AppProvider";

export default function (props) {
  // console.log(props);
  return <AppContext.Consumer>
  {({coinList}) => {
    //console.log(coinList);
    if(!coinList){
      return <div> Loading Coins </div>
    }
    return <div> {props.children}</div>
}}
  </AppContext.Consumer>
}