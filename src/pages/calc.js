import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../styles/calc.css'

class calc extends Component{
  render() {
    // const [input, setInput] = useState(''); useState,
    // function isNumberKey(evt) {
    //   var charCode = (evt.which) ? evt.which : input.keyCode
    //   if (charCode > 31 && (charCode < 48 || charCode > 57))
    //     return false;
    //   return true;
    // }

    // const HEspend = (input * .15);
    // const LEspend = (input * .12);
    // const mfBudget =(LEspend + HEspend)/2;
    // const wBudget = (mfBudget / 4);
    // const dBudget = (wBudget/7);

    return (
      <React.Fragment>
        <div className="calc">
        <p style={{ marginTop: '20px' }} >
          To get started, please enter your monthly income.
        </p>

        <div className="money">
          <p className="dollar">
            $
          </p>
          <input
            className="box"
            placeholder="Enter monthly income"
            type="number"
            // value={input} onInput={e => setInput(e.target.value)}
            // onkeypress={isNumberKey(input)}
          />
        </div>

        <text className="caption">
          Below is a breakdown of how much you should spend per month on food.
        </text>

        {/* <text className="text">
          Monthly Food Budget: ${mfBudget}
        </text>

        <text className="text">
          Weekly Food Budget: ${wBudget}
        </text>

        <text className="text">
          Daily Food Budget: ${dBudget}
        </text> */}

        <Button
          style={{ marginTop: '100px', color: 'white' }}
          href="https://Prepit.org"
          target="_blank"
          rel="noopener noreferrer"
        >

          Visit Prepit
        </Button>
        </div>
      </React.Fragment>
  );
  }
}

export default calc;