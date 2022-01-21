import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../redux/actions/authActions';
import mainImage from "../../assets/main.png";
import Card from "../Card/Card";
import axios from "axios";

class Register extends Component {
  state = {
    submitted: false
  }
  
  render() {
    const cardArr = [];
    while (cardArr.length < 3) {
      var r = Math.floor(Math.random() * 6) + 1;
      if (cardArr.indexOf(r) === -1) cardArr.push(r);
    }

    const registerSubmit = e => {
      e.preventDefault();
      const values = Array.from(document.getElementsByClassName("pokemon-input"));
      const name = Array.from(document.getElementById("name").value);
  
      const results = {
        name: name.join("").toLowerCase(),
        entry1: {
          pokemon: cardArr[0],
          price: values[0].value,
        },
        entry2: {
          pokemon: cardArr[1],
          price: values[1].value,
        },
        entry3: {
          pokemon: cardArr[2],
          price: values[2].value,
        },
      };

      const pokArr = [process.env.REACT_APP_POKEMON1, process.env.REACT_APP_POKEMON2, process.env.REACT_APP_POKEMON3, process.env.REACT_APP_POKEMON4, process.env.REACT_APP_POKEMON5, process.env.REACT_APP_POKEMON6];

      if(results.name === '' ||
      results.entry1.price === "" ||
      results.entry2.price === "" ||
      results.entry3.price === "") {
        alert("Please Enter Your Name And Guess The Price For Each Pokémon!");
      } else {
        const currentPok = [parseFloat(pokArr[results.entry1.pokemon - 1]), parseFloat(pokArr[results.entry2.pokemon - 1]), parseFloat(pokArr[results.entry3.pokemon - 1])];

        const totalSum = currentPok[0] + currentPok[1] + currentPok[2]
        const userScore = parseFloat(results.entry1.price) + parseFloat(results.entry2.price) + parseFloat(results.entry3.price)

        const finalScore = (totalSum - userScore).toFixed(2)

        const newUser = {
          name: results.name,
          score: parseFloat(finalScore),
        }
        axios
        .post('/api/users/register', newUser).then(res => {
          if(res.data.name === 'Name already exists') {
            alert('Name already exists! Please choose another!');
          } else {
            this.setState({
              submitted: true
            })
          }
        })
      }
    };
  
    return (
      <section id="banner" className="banner">
      <div className="container">
        <div className="hero">
          <img src={mainImage} alt="Leonhart's 90's popup shop logo" />
        </div>
        {this.state.submitted ? (
          <div className="hero-text content">
            <h2>Thank you for playing</h2>
          </div>
        ) : (
          <>
          <div className="hero-text content">
          <h1 className="text-shadows">Price That Pokémon</h1>
        </div>
            <div className="name">
              <label>
                Enter Name:
                <input type="text" id="name" maxLength="30" />
              </label>
            </div>
            <div className="pokemon-container">
              {cardArr.map((card) => (
                <Card key={card} pokemonNum={card} />
              ))}
            </div>
            <div className="submit">
              <button className="press-effect" onClick={registerSubmit}>
                Submit Your Guesses
              </button>
            </div>
          </>
        )}
      </div>
    </section>
    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(mapStateToProps, { registerUser })(withRouter(Register));
