import React from 'react';

class Suggestion extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleClick(event) {
    event.target.value = '';
  }

  render() {
    return (
      <div className="suggestion-wrapper">
        <form className="suggestion" onSubmit={this.handleSubmit}>
          <div>
            <label>Suggest a building</label>
            <input
              onClick={this.handleClick}
              defaultValue="Concrete watertower in Gdansk, PL"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Suggestion;
