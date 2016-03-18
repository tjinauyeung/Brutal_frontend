import React from 'react';
import { IndexRoute } from 'react-router';
import Brutal from './components/Brutal';
import './stylesheets/app.scss';

class App extends React.Component {
  render() {
    return (    
    	<div>    	
      	{this.props.children}
      </div>
    );
  }
}

export default App;