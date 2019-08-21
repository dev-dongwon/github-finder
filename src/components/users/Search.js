import React, { Component } from "react";
import PropTypes from "prop-types";

export class Search extends Component {
  state = {
    text: ""
  };

  static propTypes = {
    SearchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    
    if(this.state.text === '') {
      this.props.setAlert('Please enter username', 'light');
      return;
    }

    this.props.SearchUsers(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    const { showClear, clearUsers } = this.props;

    return (
      <div>
        <form onSubmit={this.onSubmit} action="" className="form">
          <input
            type="text"
            name="text"
            placeholder="Search for Users..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
        {showClear && (
          <button
            className="btn btn-lignt btn-block"
            onClick={clearUsers}
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
