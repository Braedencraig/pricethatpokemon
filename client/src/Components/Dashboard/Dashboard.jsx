import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/authActions';
import './Dashboard.css';

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <section className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h1>
                  H! <b>{user.name.split(' ')[0]} </b>
                </h1>
                <h3>
                  Welcome to whatever this is!
                </h3>
                <Link class="navbar-brand border-none" to="/actors">
                  Select Top 3 Actors
                </Link>
                <Link class="navbar-brand border-none" to="/movies">
                  Rank Top 8 Movies
                </Link>
                {/* <button
                  onClick={this.onLogoutClick}
                  className="btn btn-lg btn-warning mt-5"
                >
                  Logout
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
