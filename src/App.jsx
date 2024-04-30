import  Header  from "./component/Header.jsx";
import  Results  from "./component/Results.jsx";
import  UserInput  from "./component/UserInput.jsx";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 100000,
    annualInvesment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isValidData=userInput.duration>=1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput}  />
      {isValidData &&<Results input={userInput}/>}
      {!isValidData &&<p className="center">Please give a valid input duration</p>}
    </>
  );
}

export default App;
