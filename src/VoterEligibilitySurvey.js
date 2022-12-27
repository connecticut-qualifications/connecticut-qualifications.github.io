// import React from 'react';

// class VoterEligibilitySurvey extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       age: '',
//       citizenship: '',
//       convictedOfFelony: '',
//       eligibleToVote: false,
//     };
//   }

//   handleChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   }

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const { age, citizenship, convictedOfFelony } = this.state;
//     if (age >= 18 && citizenship === 'Yes' && convictedOfFelony === 'No') {
//       this.setState({ eligibleToVote: true });
//     } else {
//       this.setState({ eligibleToVote: false });
//     }
//   }

//   render() {
//     const { eligibleToVote } = this.state;
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Are you at least 18 years old?
//           <input
//             type="text"
//             name="age"
//             onChange={this.handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Are you a citizen of the United States?
//           <input
//             type="text"
//             name="citizenship"
//             onChange={this.handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Have you ever been convicted of a felony?
//           <input
//             type="text"
//             name="convictedOfFelony"
//             onChange={this.handleChange}
//           />
//         </label>
//         <br />
//         <input type="submit" value="Submit" />
//         {eligibleToVote ? (
//           <p>You are eligible to vote!</p>
//         ) : (
//           <p>You are not eligible to vote.</p>
//         )}
//       </form>
//     );
//   }
// }

// export default VoterEligibilitySurvey;


import React from 'react';

class VoterEligibilitySurvey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: '',
      citizenship: '',
      convictedOfFelony: '',
      eligibleToVote: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { age, citizenship, convictedOfFelony } = this.state;
    if (age === 'Yes' && citizenship === 'Yes' && convictedOfFelony === 'No') {
      this.setState({ eligibleToVote: true });
    } else {
      this.setState({ eligibleToVote: false });
    }
    console.log(age, citizenship, convictedOfFelony)
    console.log(this.state.eligibleToVote)

  }

  render() {
    const { eligibleToVote } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Are you at least 18 years old?
          <br />
          <input
            type="radio"
            name="age"
            value="Yes"
            onChange={this.handleChange}
          />
          Yes
          <br />
          <input
            type="radio"
            name="age"
            value="No"
            onChange={this.handleChange}
          />
          No
        </label>
        <br />
        <label>
          Are you a citizen of the United States?
          <br />
          <input
            type="radio"
            name="citizenship"
            value="Yes"
            onChange={this.handleChange}
          />
          Yes
          <br />
          <input
            type="radio"
            name="citizenship"
            value="No"
            onChange={this.handleChange}
          />
          No
        </label>
        <br />
        <label>
          Have you ever been convicted of a felony?
          <br />
          <input
            type="radio"
            name="convictedOfFelony"
            value="Yes"
            onChange={this.handleChange}
          />
          Yes
          <br />
          <input
            type="radio"
            name="convictedOfFelony"
            value="No"
            onChange={this.handleChange}
          />
          No
        </label>
        <br />
        <input type="submit" value="Submit" />
        {eligibleToVote ? (
          <p>You are eligible to vote!</p>
        ) : (
          <p>You are not eligible to vote.</p>
        )}
      </form>
    );
  }
}

export default VoterEligibilitySurvey;
