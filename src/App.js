import React from 'react';
import { IndexRoute } from 'react-router';

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