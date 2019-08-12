import React from 'react';
import '../styles/Calculator.css'

// const [input, setInput] = useState('');
// function isNumberKey(evt) {
    //   var charCode = (evt.which) ? evt.which : monthly.keyCode
    //   if (charCode > 31 && (charCode < 48 || charCode > 57))
    //     return false;
    //   return true;
    // }
    // let input = 0;

function Calc(Budget, Height, Weight,  Age, Gender) {
  const heSpend = (Budget * .15);
  const leSpend = (Budget * .12);
  const mfBudget = ((leSpend + heSpend) / 2).toFixed(2);
  const wBudget = (mfBudget / 4).toFixed(2);
  const dBudget = (wBudget / 7).toFixed(2);
  // lbs to kg
  const metricWeight = Weight * 0.45359237;
  // inches to m
  const metricHeight = Height * 0.0254;
  // Women: BMR = 655 + (4.35 x weight in pounds) + (4.7 x height in inches) - (4.7 x age in years)
  // Men: BMR = 66 + (6.23 x weight in pounds) + (12.7 x height in inches) - (6.8 x age in years)
  function BMR(Gender, Weight, Height){
    if(Gender === 'Male'){
      let BMRmale = 66 + (6.23 * Weight) + (12.7 * Height) - (6.8 * Age);
      return <p> {BMRmale} Calories </p>;
    } 
    else 
    {
    let BMRfemale = 655 + (4.35 * Weight) + (4.7 * Height) - (4.7 * Age);
      return <p> {BMRfemale} Calories </p>;
    } 
  }
  function BMI(Weight, Height){
    let Heightsquared = (Height * Height);
    let BMIvalue = (Weight/Heightsquared)*703;
    return BMIvalue
  }
    return (
      <React.Fragment>
      
        <h1> About You:</h1>
        <p className="Text"> Weight in kilogram (kg): {metricWeight}</p>
        <p className="Text"> Height in meters (m): {metricHeight}</p>
        <h1 style={{ color: 'white' }}> BMR </h1>
        <p className="Text">{BMR(Gender, Weight, Height)}</p>
        <h1 style={{ color: 'white' }}> BMI </h1>
        <p className="Text">{BMI(Weight, Height)}</p>

        <h1 style={{ color: 'white' }}> Recomeneded Budget </h1>
        <p className="Text">
          Monthly Food Expense: ${mfBudget}
        </p>
        <p className="Text">
          Weekly Food Expense: ${wBudget}
        </p>
        <p className="Text">
          Daily Food Expense: ${dBudget}
        </p>  
      </React.Fragment>
  );
}


export { Calc };