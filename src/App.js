
import { useState } from 'react';
import InputForm from './components/InputForm';
import Table from './components/Table';
import Header from './UI/Header';

function App() {
  const [results, setResults] = useState(null);
  
  const [userInput, setUserInput] = useState(null);
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    setUserInput(userInput)
     // per-year results
    const yearlyDataArray = [];
    let  currentSavings = +userInput['currentSavings'].currentSavings; // feel free to change the shape of this input object!
    let yearlyContribution = +userInput['yearlySavings'].yearlySavings; // as mentioned: feel free to change the shape...
    let expectedReturn = +userInput['expectedInterest'].expectedInterest / 100;
    let duration = +userInput['timePeriod'].investmentDuration;
    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyDataArray.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    setResults(yearlyDataArray)
    // do something with yearlyData ...
  };

  return (
    <div>
      <Header />
      <InputForm onCalculate={calculateHandler}/>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {results == null ? <p style={{textAlign: "center"}}>NO DATA FOUND!</p> : 
      <Table 
        data = {results}
        initialInvestment = {userInput.currentSavings.currentSavings}
      />}
      
    </div>
  );
}

export default App;
