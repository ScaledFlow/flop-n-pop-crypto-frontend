
import React from 'react';

// const cc = require('cryptocompare');

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'dashboard',
      ...this.savedSettings(),
      setPage: this.setPage,
      confirmFavorites: this.confirmFavorites
    }
  }

  confirmFavorites = () => {
    this.setState({
      firstVisit: false,
      page: 'dashboard'
    });
    localStorage.setItem('cryptoDash', JSON.stringify({
      test: 'hello'
    }))
  }

  savedSettings() {
    let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
    if(!cryptoDashData) {
      return {page: 'settings', firstVisit: true }
    }
  }

  setPage = page => this.setState({page});
 
  render() {
    // console.log(this.state.page);
    // console.log(this.props.children);
    return (
      <AppContext.Provider value={this.state}>
       {this.props.children}
      </AppContext.Provider>
    )
  }
}

// export default AppProvider;