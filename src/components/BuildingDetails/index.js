import React from 'react';

class Building extends React.Component {
  render() {
    const title = {
      display: 'flex',
      alignItems: 'center',
      fontSize: '80px',
      fontWeight: '700',
      lineHeight: '75px',
      letterSpacing: '-3px',
      margin: '0px',
      color: 'black',
      textTransform: 'uppercase',
    }

    const item = {
      lineHeight: '30px',
      fontWeight: 'normal'
    }

    const image = {
      maxWidth: '600px',
      marginBottom: '10px'
    }

    const list = {
      listStyleType: 'none',
      padding: 0
    }

    const backbtn = {
      position: 'fixed',
      height: '80px',
      width: '80px',
      margin: '20px',
      zIndex: 1,
      top: '0',
      right: '0'
    }

    return(
      <div className="building--wrapper">
        <h1 style={title}>{this.props.name}</h1>
        <ul style={list}>
          <li><img style={image} src={this.props.image}/></li>
          <li style={item}>Architect: <strong>{this.props.architect}</strong></li>
          <li style={item}>Location: <strong>{this.props.location}</strong></li>
          <li style={item}>Build Year: <strong>{this.props.build_year}</strong></li>
          <li style={item}>Appreciation: <strong>{this.props.rating}</strong></li>
        </ul>
      </div>
    );
  }
}

export default Building; 