import React, { Component } from 'react';
import './Leaderboard.css'
import { Link } from 'react-router-dom';

class Leaderboard extends Component {
    render() {
        return (
            <section className="leaderboard">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="content">
                                <h1>Leaderboard</h1>
                                <div className="content-button">
                                    <Link to ='/' className="btn btn-lg btn-warning ">Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Leaderboard
