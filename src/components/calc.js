import React from 'react';
import '../styles/calc.css'


const calc = (input) => {
 
  const HEspend = (input * .15);
  const LEspend = (input * .12);
  const mfBudget =(LEspend + HEspend)/2;
  const wBudget = (mfBudget / 4);
  const dBudget = (wBudget/7);

    return (
      <React.Fragment className="calc">
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

      </React.Fragment>
    );
  }

export { calc };