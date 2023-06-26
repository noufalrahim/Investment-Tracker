import userEvent from "@testing-library/user-event";
import { useState } from "react";

function InputForm(props) {

    const [currentSavings, setCurrentSavings] = useState(10000);
    const [yearlySavings, setYearlySavings] = useState(1200);
    const [expectedInterest, setExpectedInterest] = useState(0);
    const [investmentDuration, setInvestmentDuration] = useState(10);

    function currentSavingsHandler(event){
        setCurrentSavings(parseInt(event.target.value))
    }

    function yearlySavingsHandler(event){
        setYearlySavings(parseInt(event.target.value))
    }

    function expectedInterestHandler(event){
        setExpectedInterest(parseInt(event.target.value))
    }

    function investmentDurationHandler(event){
        setInvestmentDuration(parseInt(event.target.value))
    }

    function handleSubmit(event){
        event.preventDefault();
            const investmentData = {
                currentSavings: {currentSavings},
                yearlySavings: {yearlySavings},
                expectedInterest: {expectedInterest},
                timePeriod: {investmentDuration}
            }

            props.onCalculate(investmentData);
 
        
    }
    function resetHandler(){
        setCurrentSavings("");
        setExpectedInterest("");
        setInvestmentDuration("");
        setYearlySavings("");
    }


    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number" id="current-savings" value={currentSavings} onChange={currentSavingsHandler}/>
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number" id="yearly-contribution" value={yearlySavings} onChange={yearlySavingsHandler}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input type="number" id="expected-return" value={expectedInterest} onChange={expectedInterestHandler}/>
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number" id="duration" value={investmentDuration} onChange={investmentDurationHandler}/>
                </p>
            </div>
            <p className="actions">
                <button type="reset" className="buttonAlt" onClick={resetHandler}>
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
            </p>
        </form>
    )
}

export default InputForm;