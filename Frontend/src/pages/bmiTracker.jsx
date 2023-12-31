import  {useState } from "react";
import {motion} from 'framer-motion';
import "./bmicalculator.css";
const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [bmistate, setBmiState] = useState("");
  const [color, setColor] = useState("");

  function getBmi(e) {
    e.preventDefault();
    const bmi = (weight / ((height * height) / 10000)).toFixed(1);

    if (height === "0" || weight === "0") {
      setBmiState("");
      return;
    }

    setBmi(bmi);

    if (bmi <= 18.5) {
      setBmiState("Underweight");
      setColor("rgb(255,223,0)");
      return;
    }

    if (bmi >= 18.5 && bmi <= 25) {
      setBmiState("Normal");
      setColor("rgb(20,238,129)");
      return;
    }

    if (bmi >= 25 && bmi <= 30) {
      setBmiState("Overweight");
      setColor("rgb(238, 131, 10)");
      return;
    }

    if (bmi > 31) {
      setBmiState("Obesity");
      setColor("red");
      return;
    }
  }

  return (
    <div className='mainBMIsection'>
      <div className="BMIdetails">
        Let's check your Body Mass Index(BMI).<br/>
        Enter height and weight and click on Calculate.            
      </div>
      <form onSubmit={getBmi} className='BMIinputs'>
        <div>
              <input
                type="number"
                value={weight}
                placeholder="Weight in Kg"
                className="weightinput"
                onChange={(e) => setWeight(e.currentTarget.value)}
              />
        </div>
          <div>
              <input
                type="number"
                value={height}
                placeholder="Height in cm"
                className="heightinput"
                onChange={(e) => setHeight(e.currentTarget.value)}
                required
              />
          </div>

        <div>
          <button  className="calculatebutton">Calculate</button>
        </div>
      </form>

      <div className='BmiData'>
        {bmi && 
        <>
            <motion.h1 

            initial={{x:-1000}}
            animate={{x:0}}
            transition={{delay:0.2,duration:0.5,type:'spring',stiffness:110}}
            className="bmistate" style={{ color }}> Your Body Mass Index is {bmi}</motion.h1>
            <motion.h1 
            initial={{x:1000}}
            animate={{x:0}}
            transition={{delay:0.2,duration:0.5,type:'spring',stiffness:110}}
            className="bmistate" style={{ color }}>Condition : {bmistate} </motion.h1>
            
    
          </>
        }
      </div>
    </div>
  );
};
export default BMICalculator;
