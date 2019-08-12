/* eslint-disable no-lone-blocks */
import React from 'react';
import { TextField } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Calc } from '../components/Calc';
import '../styles/Calculator.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'center',
    flexDirection: 'column',
    paddingBottom: '40px',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));


const theme = createMuiTheme({
  palette: {
    primary: { main: '#fafafa' },
    secondary: { main: '#fafafa' },
    text: '#fff',
    button: '#fff'
  }
});

const Gender = [
  {
    value: 'Male',
    label: 'M',
  },
  {
    value: 'Female',
    label: 'F',
  }
];


function Calculatorv2() {



  const classes = useStyles();

  const [values, setValues] = React.useState({
    Email: 'example@gmail.com',
    Budget: 'Enter Budget',
    Height: 'Enter Height',
    Weight: 'Enter Weight',
    Age: 'Enter Age',
    Gender: 'Male',
    Currency: 'USD',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (

    <header className="Calculator-header">
      {/* <img src={logo} className="App-logo" alt="prepit logo" /> */}
      <h1 className="Title">
        Welcome to the Calculator!
        </h1>

      <p className="Instructions" >
        Enter the following
          {/* monthly budget, Weight, Age, and   */}
      </p>

      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
        <div className="Box">
          <ThemeProvider theme={theme}>
            <form className={classes.container} noValidate autoComplete="off">

              <TextField
                id="outlined-email-input"
                label="Email"
                className={classes.textField}
                type="email"
                name="email"
                onChange={handleChange('Email')}
                margin="normal"
                variant="outlined"
                helperText="Please select your Email"
              />

              <TextField
                id="outlined-input"
                label="Budget ($)"
                className={classes.textField}
                type="number"
                name="Monthly Budget"
                onChange={handleChange('Budget')}
                margin="normal"
                variant="outlined"
                helperText="Please select your Monthly Income"
              />
              {/* <TextField
                id="outlined-input"
                label="Height (ft)"
                className={classes.textField}
                type="number"
                name="Height"
                onChange={handleChange('Height')}
                margin="normal"
                variant="outlined"
                helperText="Please select your Height"
              /> */}
              <TextField
                id="outlined-input"
                label="Height (inches)"
                className={classes.textField}
                type="number"
                name="Height"
                onChange={handleChange('Height')}
                margin="normal"
                variant="outlined"
                helperText="Please select your Height (ie. 6 ft = 72 inches)"
              />
            </form>
          </ThemeProvider>
        </div>
        <div style={{ paddingTop: '3px' }}>
          <div className="Box">
            <ThemeProvider theme={theme}>
              <form className={classes.container} noValidate autoComplete="off">

                <TextField
                  id="outlined-input"
                  label="Weight (lbs)"
                  className={classes.textField}
                  type="number"
                  name="Weight"
                  onChange={handleChange('Weight')}
                  margin="normal"
                  variant="outlined"
                  helperText="Please select your Weight"
                />

                <TextField
                  id="outlined-input"
                  label="Age"
                  className={classes.textField}
                  type="number"
                  name="Age"
                  onChange={handleChange('Age')}
                  margin="normal"
                  variant="outlined"
                  helperText="Please select your Age"
                />

                <TextField
                  id="outlined-select"
                  select
                  label="Gender"
                  className={classes.textField}
                  value={values.Gender}
                  onChange={handleChange('Gender')}
                  SelectProps={{
                    native: true,
                    MenuProps: {
                      className: classes.menu,
                    },
                  }}
                  helperText="Please select your Gender"
                  margin="normal"
                  variant="outlined"
                >
                  {Gender.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>

              </form>
            </ThemeProvider>

          </div>
        </div>
      </div>

      <div style={{ marginBottom: '10px', paddingBottom: '60px' }}>
        {Calc(values.Budget, values.Height, values.Weight, values.Age, values.Gender)}
      </div>

      <p style={{ paddingBottom: '20px' }}>
        *THIS WEBSITE IS IN DEVELOPMENT, FOR MORE INFORMATION VISIT THE
          <a href='/LearnMore'> LEARN MORE </a>
        PAGE*
          </p>
    </header>
  );
}

export default Calculatorv2;

{/* <div style={{ 
        color: '#fafafa', 
        backgroundColor: '#fafafa', 
        borderRadius: '5px', 
        width: '65px', 
       
        textAlign: 'center',
        }}>
          <Button
            // className="Button"
            href="https://Prepit.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Enter
          </Button>
        </div>  */}
{/* <TextField
            id="outlined-select-currency"
            select
            label="Select"
            className={classes.textField}
            value={values.currency}
            onChange={handleChange('currency')}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            helperText="Please select your currency"
            margin="normal"
            variant="outlined"
          >
            {currencies.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
  
{/* <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          /> */}
// import MenuItem from '@material-ui/core/MenuItem';
// import clsx from 'clsx';