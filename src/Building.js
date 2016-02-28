import React from 'react';

class Building extends React.Component {

	render() {
		return(
			<ul>
				<li><img src="http://ad009cdnb.archdaily.net/wp-content/uploads/2010/07/1280248838-trellick-tower-london-1-500x500.jpg" /></li>
				<li>De Rotterdam</li>
				<li>Location: <strong>Buiksloterweg 2 Rotterdam</strong><button>Add a location</button></li>
				<li>Build Year: <strong>2013</strong></li>
				<li>Architect: <strong>Rem Koolhaas</strong></li>
			</ul>
		);
	}
}

export default Building; 