import React, { useState } from 'react'
import './Calculator.css'

const Calculator = () => {

    const [calculate, setCalculate] = useState('');

    const ClickButton = (value) => {
        if (value === 'AC') {
            setCalculate('')
        }
        else if (value === 'DC') {
            setCalculate(calculate.slice(0, -1));
        }
        else if (value === '=') {
            try {
                // eslint-disable-next-line no-eval
                setCalculate(eval(calculate).toString());

            } 
            catch (error) {
                setCalculate('Error');
            }
        }

        else{
            setCalculate(calculate + value);
        }
    };

  return (
    <div className='container'>
        <div className='calcu'>
            <div>
             <input type='text' placeholder='0' className='display' value={calculate}></input>
            </div>

            <div className='buttons'>
             <div className='btn'>
                 <button onClick={() => ClickButton('AC')}>AC</button>
                 <button onClick={() => ClickButton('DC')}>DC</button>
                 <button onClick={() => ClickButton('.')}>.</button>
                 <button onClick={() => ClickButton('/')}>/</button>
             </div>
             <div className='btn'>
                 <button onClick={() => ClickButton('7')}>7</button>
                 <button onClick={() => ClickButton('8')}>8</button>
                 <button onClick={() => ClickButton('9')}>9</button>
                 <button onClick={() => ClickButton('*')}>X</button>
             </div>
             <div className='btn'>
                 <button onClick={() => ClickButton('4')}>4</button>
                 <button onClick={() => ClickButton('5')}>5</button>
                 <button onClick={() => ClickButton('6')}>6</button>
                 <button onClick={() => ClickButton('+')}>+</button>
             </div>
             <div className='btn'>
                 <button onClick={() => ClickButton('1')}>1</button>
                 <button onClick={() => ClickButton('2')}>2</button>
                 <button onClick={() => ClickButton('3')}>3</button>
                 <button onClick={() => ClickButton('-')}>-</button>
             </div >
             <div className='btn btnn'> 
                 <button onClick={() => ClickButton('0')}>0</button>
                 <button id='btnn' onClick={() => ClickButton('=')}>=</button>
             </div>
            </div>
        </div>

    </div>
  )
}

export default Calculator