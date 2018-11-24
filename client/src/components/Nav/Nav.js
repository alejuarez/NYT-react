import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

class Nav extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  logout(event) {
    event.preventDefault();
    console.log('logging out');

    axios
      .post('/user/logout')
      .then(response => {
        console.log(response.data);
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: false,
            username: null
          });
        }
      })
      .catch(error => {
        console.log('Logout error');
      });
  }

  render() {
    const loggedIn = this.props.loggedIn;
    console.log('navbar render, props: ');
    console.log(this.props);

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="col-md-12">
          {loggedIn ? (
            <section className="navbar-section">
              <Link to="/" className="btn btn-link text-secondary">
                <span className="badge badge-info">Home</span>
              </Link>
              <Link to="/about" className="btn btn-link text-secondary">
                <span className="badge badge-info">About</span>
              </Link>
              <Link to="/resources" className="btn btn-link text-secondary">
                <span className="badge badge-info">Resources</span>
              </Link>
              <Link to="/articles" className="btn btn-link text-secondary">
                <span className="badge badge-info">Articles</span>
              </Link>
              <Link to="/jobposting" className="btn btn-link text-secondary">
                <span className="badge badge-info">Job Postings</span>
              </Link>
              <Link to="/meetups" className="btn btn-link text-secondary">
                <span className="badge badge-info">Meetups</span>
              </Link>
              <Link to="/favourite" className="btn btn-link text-secondary">
                <span className="badge badge-info">Favourite</span>
              </Link>
              <Link
                to="/"
                className="btn btn-link text-secondary"
                onClick={this.logout}
              >
                <span className="badge badge-info">Logout</span>
              </Link>
            </section>
          ) : (
            <section className="navbar-section">
              <Link to="/" className="btn btn-link text-secondary">
                <span className="badge badge-info">Home</span>
              </Link>
              <Link to="/about" className="btn btn-link text-secondary">
                <span className="badge badge-info">About</span>
              </Link>
              <Link to="/resources" className="btn btn-link text-secondary">
                <span className="badge badge-info">Resources</span>
              </Link>
              <Link to="/articles" className="btn btn-link text-secondary">
                <span className="badge badge-info">Articles</span>
              </Link>
              <Link to="/jobposting" className="btn btn-link text-secondary">
                <span className="badge badge-info">Job Postings</span>
              </Link>
              <Link to="/meetups" className="btn btn-link text-secondary">
                <span className="badge badge-info">Meetups</span>
              </Link>
              <Link to="/login" className="btn btn-link text-secondary">
                <span className="badge badge-info">Login</span>
              </Link>
              <Link to="/signup" className="btn btn-link">
                <span className="badge badge-info">Sign up</span>
              </Link>
            </section>
          )}
        </div>
        <div className="col-4 col-mr-auto">
          <h1 className="App-title">Dev Buddies</h1>
        </div>
      </nav>
    );
  }
}

export default Nav;
