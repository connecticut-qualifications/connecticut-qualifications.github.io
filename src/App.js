import logo from './logo.svg';
import './App.css';
import VoterEligibilitySurvey from './VoterEligibilitySurvey';


const App = () => {
  // return (
  //   <div className="App">
  //     <table>
  //       <tr>
  //         <th>1765 Connecticut Voting Qualifications</th>
  //         <th>Yes</th>
  //         <th>No</th>
  //       </tr>
  //       <tr>
  //         <td>Are you white?</td>
  //         <td></td>
  //         <td></td>
  //       </tr>
  //       <tr>
  //         <td>Are you a man?</td>
  //         <td></td>
  //         <td></td>
  //       </tr>
  //       <tr>
  //         <td>Are you over 21 years of age?</td>
  //         <td></td>
  //         <td></td>
  //       </tr>
  //       <tr>
  //         <td>Are you a Citizen?</td>
  //         <td></td>
  //         <td></td>
  //       </tr>
  //       <tr>
  //         <td>Do you own property in this state?</td>
  //         <td></td>
  //         <td></td>
  //       </tr>
  //       <tr>
  //         <td>Are your taxes paid?</td>
  //         <td></td>
  //         <td></td>
  //       </tr>
  //       <tr>
  //         <td>Can you read and write English?</td>
  //         <td></td>
  //         <td></td>
  //       </tr>
  //       <tr>
  //         <td>Have you been convicted of a crime?</td>
  //         <td></td>
  //         <td></td>
  //       </tr>
  //       <tr>
  //         <td>Have you lived in this state for 1 year</td>
  //         <td></td>
  //         <td></td>
  //       </tr>
  //     </table>
  //   </div>
  // );

  return (
    <div className="App">
      <VoterEligibilitySurvey />
    </div>
  );
}

export default App;
