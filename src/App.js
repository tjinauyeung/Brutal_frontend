import React from 'react';
import { IndexRoute } from 'react-router';
import Main from './components/Main';
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