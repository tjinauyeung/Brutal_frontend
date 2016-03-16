import React from 'react';
import { IndexRoute } from 'react-router';
import Brutal from './components/Brutal';

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