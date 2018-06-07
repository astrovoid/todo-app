import React, { Component } from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import styles from './app.css'

class App extends Component {

  render() {
    return (
      <div className={styles.wrapper}>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
