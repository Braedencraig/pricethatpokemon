import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser, addActors } from '../../redux/actions/authActions';

const Actors = ({ auth: { user } }) => {
    console.log(user)
    // const userData = {
    //     email: this.state.email,
    //     password: this.state.password
    //   };
    function useInput({ type, placeholder }) {
        const [value, setValue] = useState("");
        const input = <input placeholder={placeholder} value={value} onChange={e => setValue(e.target.value)} type={type} />;
        return [value, input];
    }

    const [actor1, actor1Input] = useInput({ type: "text", placeholder: "actor #1 worth 5 points" });
    const [actor2, actor2Input] = useInput({ type: "text", placeholder: "actor #2 worth 2 points"  });
    const [actor3, actor3Input] = useInput({ type: "text", placeholder: "actor #3 worth 1 point"  });
    const [submit, submitted] = useState(false)


    return (
        <section className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h1>
                  Select Top 3 Actors
                </h1>
                {actor1Input}
                {actor2Input}
                {actor3Input}               
                <button onClick={addActors({id: user.id, actors: [actor1, actor2, actor3]})}>Submit</button>
                {/* <button onClick={() => submitActors(actor1, actor2, actor3)}>Submit</button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

Actors.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  addActors: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser, addActors })(Actors);
