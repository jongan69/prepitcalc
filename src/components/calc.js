import React from 'react';
import '../styles/Calculator.css'


// function isNumberKey(evt) {
    //   var charCode = (evt.which) ? evt.which : monthly.keyCode
    //   if (charCode > 31 && (charCode < 48 || charCode > 57))
    //     return false;
    //   return true;
    // }
    // let input = 0;

function calc (input) {
  
  const heSpend = (input * .15);
  const leSpend = (input * .12);
  const mfBudget = (leSpend + heSpend) / 2;
  const wBudget = (mfBudget / 4);
  const dBudget = (wBudget / 7);
   
    return (
      <React.Fragment>
        <div className="calc">

        <text className="caption">
          Below is a breakdown of how much you should spend per month on food.
        </text>

        <text className="text">
          Monthly Food Budget: ${mfBudget}
        </text>

        <text className="text">
          Weekly Food Budget: ${wBudget}
        </text>

        <text className="text">
          Daily Food Budget: ${dBudget}
        </text>
        </div>
      </React.Fragment>
  );
}


export { calc };