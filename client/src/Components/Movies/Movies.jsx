import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser, addMovies } from '../../redux/actions/authActions';

const Movies = ({ auth: { user }}) => {
    function useInput({ type, placeholder }) {
        const [value, setValue] = useState("");
        const input = <input placeholder={placeholder} value={value} onChange={e => setValue(e.target.value)} type={type} />;
        return [value, input];
    }

    const [movie1, movie1Input] = useInput({ type: "text", placeholder: "movie #1 worth 12 points" });
    const [movie2, movie2Input] = useInput({ type: "text", placeholder: "movie #2 worth 7 points"  });
    const [movie3, movie3Input] = useInput({ type: "text", placeholder: "movie #3 worth 6 points"  });
    const [movie4, movie4Input] = useInput({ type: "text", placeholder: "movie #3 worth 5 points"  });
    const [movie5, movie5Input] = useInput({ type: "text", placeholder: "movie #3 worth 4 points"  });
    const [movie6, movie6Input] = useInput({ type: "text", placeholder: "movie #3 worth 3 points"  });
    const [movie7, movie7Input] = useInput({ type: "text", placeholder: "movie #3 worth 2 points"  });
    const [movie8, movie8Input] = useInput({ type: "text", placeholder: "movie #3 worth 1 point"  });

    return (
        <section className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h1>
                  Rank Top 8 Movies
                </h1>
                {movie1Input}
                {movie2Input}
                {movie3Input}
                {movie4Input}               
                {movie5Input}               
                {movie6Input}               
                {movie7Input}               
                {movie8Input}               
                <button onClick={addMovies({id: user.id, movies: {
                    1: movie1,
                    2: movie2,
                    3: movie3,
                    4: movie4,
                    5: movie5,
                    6: movie6,
                    7: movie7,
                    8: movie8
                }})}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

Movies.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  addMovies: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser, addMovies })(Movies);
