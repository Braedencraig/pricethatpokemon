import React, { Component } from "react";
import { connect } from "react-redux";
import "./Leaderboard.css";
import { getUsers } from "../../redux/actions/authActions";
import { withRouter } from "react-router-dom";
import axios from "axios";

class Leaderboard extends Component {
  state = {
    leaderboard: [],
  };

  componentDidMount() {
    axios.get("/api/users/leaderboard").then((res) => {
      this.setState({
        leaderboard: res.data,
      });
    });
  }

  render() {
    const { leaderboard } = this.state;
 
    return (
      <section className="leaderboard">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content leaderboard">
                <div className="hero-text content">
                  <h1 className="text-shadows">Price That Pokémon: LEADERBOARD</h1>
                </div>
                <div className="leaderboard-container">
                <div className="leaderboard-item">
                            <div className="leaderboard-item-name">NAME:</div>
                            <div className="leaderboard-item-score">SCORE:</div>
                </div>
                  {leaderboard.map((user) => {
                      return (
                        <div key={user.name} className="leaderboard-item">
                            <div className="leaderboard-item-name">{user.name}</div>
                            <div className="leaderboard-item-score">{user.score}</div>
                        </div>
                      )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
  users: state.users,
});
export default connect(mapStateToProps, { getUsers })(withRouter(Leaderboard));
