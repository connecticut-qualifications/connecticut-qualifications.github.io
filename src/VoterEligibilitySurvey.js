import React from "react";

class VoterEligibilitySurvey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      race: "",
      gender: "",
      age: "",
      citizen: "",
      property: "",
      taxes: "",
      language: "",
      felony: "",
      residency: "",
      eligibleToVote: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    const {
      race,
      gender,
      age,
      citizen,
      property,
      taxes,
      language,
      felony,
      residency,
    } = this.state;

    // validate the answers given
    // if (race === "No") {
    //   alert("You are not eligible to vote.");
    // }
    if (race === "No") {
      console.log("Race is No");
      alert("You are not eligible to vote.");
    }
  };

  handleSubmit = (event) => {
    if (this.event.target.value === "No") {
      alert("You are not eligible to vote.");
    }
    event.preventDefault();
    console.log(this.state);
  };

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   const { age, citizenship, convictedOfFelony } = this.state;
  //   if (age === "Yes" && citizenship === "Yes" && convictedOfFelony === "No") {
  //     this.setState({ eligibleToVote: true });
  //   } else {
  //     this.setState({ eligibleToVote: false });
  //   }
  //   console.log(age, citizenship, convictedOfFelony);
  //   console.log(this.state.eligibleToVote);
  // };

  render() {
    const { eligibleToVote } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <table>
          <thead>
            <tr>
              <th id="title">1765 Connecticut Voting Qualifications</th>
              <th>Yes</th>
              <th>No</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Are you white?</td>
              <td>
                <input
                  type="radio"
                  name="race"
                  value="Yes"
                  onChange={this.handleChange}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name="race"
                  value="No"
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Are you a man?</td>
              <td>
                <input
                  type="radio"
                  name="gender"
                  value="Yes"
                  onChange={this.handleChange}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name="gender"
                  value="No"
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Are you over 21 years of age?</td>
              <td>
                <input
                  type="radio"
                  name="age"
                  value="Yes"
                  onChange={this.handleChange}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name="age"
                  value="No"
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Are you a Citizen?</td>
              <td>
                <input
                  type="radio"
                  name="citizen"
                  value="Yes"
                  onChange={this.handleChange}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name="citizen"
                  value="No"
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Do you own property in this state?</td>
              <td>
                <input
                  type="radio"
                  name="property"
                  value="Yes"
                  onChange={this.handleChange}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name="property"
                  value="No"
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Are your taxes paid?</td>
              <td>
                <input
                  type="radio"
                  name="taxes"
                  value="Yes"
                  onChange={this.handleChange}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name="taxes"
                  value="No"
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Can you read and write English?</td>
              <td>
                <input
                  type="radio"
                  name="language"
                  value="Yes"
                  onChange={this.handleChange}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name="language"
                  value="No"
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Have you been convicted of a crime?</td>
              <td>
                <input
                  type="radio"
                  name="felony"
                  value="Yes"
                  onChange={this.handleChange}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name="felony"
                  value="No"
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Have you lived in this state for 1 year</td>
              <td>
                <input
                  type="radio"
                  name="residency"
                  value="Yes"
                  onChange={this.handleChange}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name="residency"
                  value="No"
                  onChange={this.handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        {/* <input type="submit" value="Submit" />
        {eligibleToVote ? (
          <p>You are eligible to vote!</p>
        ) : (
          <p>You are not eligible to vote.</p>
        )} */}
      </form>
    );
  }
}

export default VoterEligibilitySurvey;
