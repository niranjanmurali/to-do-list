import React, { Component } from "react";

export default class Input extends Component {



  render() {
    return (
      <div id="input">
        <input
          type="text"
          placeholder="Type something here"
          value={this.props.inputValue}
          onChange={(e) => {
            this.props.handleChange(e.target.value)
          }}
          onKeyPress={(e) => { if (e.key === 'Enter') { this.props.handleSubmit() } }}
        />
      <button onClick={this.props.handleSubmit}>Enter</button>

      </div>
    );
  }
}