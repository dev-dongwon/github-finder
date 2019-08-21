import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';
import Spinner from "../layout/Spinner";
import { Link } from 'react-router-dom';

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
  }

  render() {
    const {
      name,
      location,
      avatar_url,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = this.props.user;

    const { loading } = this.props;

    if (loading) return <Spinner />

    return <Fragment>
      <Link to='/' className='btn btn-light'>Back to search</Link>
    </Fragment>;
  }
}

export default User;
