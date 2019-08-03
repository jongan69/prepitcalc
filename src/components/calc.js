import React from 'react';
import Text from '@material-ui/core/Button';
import '../styles/Calculator.css'

// const [input, setInput] = useState('');
// function isNumberKey(evt) {
    //   var charCode = (evt.which) ? evt.which : monthly.keyCode
    //   if (charCode > 31 && (charCode < 48 || charCode > 57))
    //     return false;
    //   return true;
    // }
    // let input = 0;

function Calc (input) {
  
  const heSpend = (input * .15);
  const leSpend = (input * .12);
  const mfBudget = (leSpend + heSpend) / 2;
  const wBudget = (mfBudget / 4);
  const dBudget = (wBudget / 7);
   
    return (
      <React.Fragment>
        <div className="Calc">

        <Text className="Caption"
        
        >
          Below is a breakdown of how much you should spend per month on food.
        </Text>

        <Text className="Text">
          Monthly Food Budget: ${mfBudget}
        </Text>

        <Text className="Text">
          Weekly Food Budget: ${wBudget}
        </Text>

        <Text className="Text">
          Daily Food Budget: ${dBudget}
        </Text>
        </div>
      </React.Fragment>
  );
}


export { Calc };