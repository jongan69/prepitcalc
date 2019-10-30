/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import '../styles/Details.css';
import logo from '../misc/logo.svg';


function Details (){
  const bmi = require('../../src/misc/bmichart.png')
    return(
      <header className="Homepage-header">
        <h1>
          Details
            </h1>
        <img src={logo} className="App-logo" alt="prepit logo" />
        <p>
          Hi there and welcome to the App!
        </p>
        <p>
          Here at Prepit we have one goal in mind: 
        </p>
        <p>
          Helping you to eat healthier while on a budget!
        </p>

        <div style={{marginTop: '60px', marginBottom: '60px'}}>
          <h1>BMR: </h1>
          <p style={{ marginLeft: '10%', marginRight: '10%' }}>
              BMR is an abbreviation for Basal Metabolic Rate. 
              BMR is the minimum of calories required for the body at rest to sustain normal body functioning and life. 
              The energy in this condition is consumed only for the support of the most important organs such as nervous system, heart, lungs, liver, and kidneys.
              Your BMR or Basal Metabolic Rate is a measurement of how many calories your body would consume if you were to stay in bed all day.
              BMR is particularly useful when you apply the Harris Benedict Equation/your activity factor (e.g. sedentary...) to find out how many calories you burn each day. 
              Depending on your weight goals you can then adjust your calorie intake, so create a deficit to lose weight or create a calorie surplus in your diet to gain weight.
              For optimal health we advise a calorie intake or surplus to be no greater than 500 calories per day. 
            </p>
          <h1>BMI: </h1>
          <p style={{ marginLeft: '10%', marginRight: '10%' }}>
              A weight-to-height ratio, calculated by dividing one's weight in kilograms by the square of one's height in meters and used as an indicator of obesity 
              and underweight.Your BMI or Body Mass Index is a measurement of body fat based on your height and weight. This health calculation applies to both men and women between the ages of 18 and 65 years.
              BMI can be used to indicate if you are overweight, obese, underweight or normal. A healthy BMI score is between 20 and 25. A score below 20 indicates that you may be underweight; a value above 25 indicates that you may be overweight.
              You can calculate your BMI by using the BMI Calculator and comparing your results with the BMI Chart.
              Use the BMI Chart to determine your Body Mass Index
              </p>
          <img style={{ height: '100%', width: '100%' }} src={bmi} alt="BMI Chart" />
          <p style={{ marginLeft: '10%', marginRight: '10%' }}>
              What does the Body Mass Index Chart say about you?
              Your BMI is a useful tool to estimate a healthy body weight based on your height. However, due to the wide variety of body types, the distribution of muscle and bone mass, etc., it is not appropriate to use this as the only or final indication for diagnosis. This also implies that your BMI does not actually “measure” your percentage of body fat.
              Due to its ease of measurement and calculation, the BMI index is the most widely used diagnostic indicator to identify a person’s optimal weight depending on their height. Your BMI “number” will inform you if you are underweight, of normal weight, overweight, or obese.
              MealPro would like you to note that there are many ways to address your body weight. This is one of the many possibilities - if you have any concerns about your weight, please get a detailed assessment from your physician who unlike this BMI calculator can address you very specific situation.
            </p>
        </div>

      </header>
    )
};

export default Details;