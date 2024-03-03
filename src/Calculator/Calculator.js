import './Calculator.css';
import React from 'react';
function Calculator(){
    const [calc, setcalc] =React.useState({
      s:"0",
      init:true,
      current:"0",
      total:"0",
      isInitial:true,
      opera:""
      });
  
    function handleNumbers(Value){
      let newValue=Value;
      if(!calc.isInitial){
        newValue=calc.current+Value;
      }
      if(calc.init || calc.s==="0"){
        calc.s=""
      }
        let a=calc.s+Value
        setcalc({current:newValue,total:calc.total,isInitial:false,opera:calc.opera,init:false,s:a});
    }
    function handleOperator(Value){
      if(calc.init || calc.s==="0" ||calc.s==="√"){
        calc.s=""
      }
      let a
      let total=doCalculations();
      // eslint-disable-next-line
      if(total==total.toFixed(3)){
        total=total.toFixed()

      }else{
        total=total.toFixed(3)
      }
      if(Value !=="="){
        a=calc.s+Value
      }else{
        a=total
      }
      setcalc({current:total.toString(),total:total.toString(),isInitial:true,opera:Value,s:a});
    }
    function doCalculations(){
      let total=parseInt(calc.total);
        switch(calc.opera){
          case "+":
            total += parseInt(calc.current);
          break;
          case "-":
            total -= parseInt(calc.current);
          break;
          case "*":
            total *= parseInt(calc.current);
          break;
          case "/":
            total /= parseInt(calc.current);
          break;
          case "^":
            total = Math.pow(total,parseInt(calc.current));
          break;
          case "√":
            total = Math.sqrt(parseInt(calc.current));
          break;
          case "%":
            total =total*parseInt(calc.current)/100
          break;
          case "!":
            let y=parseInt(calc.current)
            total=1
            while(y!==0){
              total*=y;
              y--;
            }
          break;
          default:
            total=parseInt(calc.current)
        }
        return total;
    }
    function renderDisplay(){
      return calc.s;
    }
    function handleClear(){
      setcalc({
        current:"0",
        total:"0",
        isInitial:true,
        opera:"",
        s:"0"
      })
    }
  
    
           return (
              <div id="cod">
                <div id="text"><h1>CALCULATOR</h1></div>
                <div id="container">
                <div className="display">{renderDisplay()}</div>
                <Calcbutton onClick={handleNumbers} className="number" Value="7"></Calcbutton>
                <Calcbutton onClick={handleNumbers} className="number" Value="8"></Calcbutton>
                <Calcbutton onClick={handleNumbers} className="number" Value="9"></Calcbutton>
                <Calcbutton onClick={handleOperator} className="operator" Value="/"></Calcbutton>
                <Calcbutton onClick={handleOperator} className="operator" Value="^"></Calcbutton>

  
                <Calcbutton onClick={handleNumbers} className="number" Value="4"></Calcbutton>
                <Calcbutton onClick={handleNumbers} className="number" Value="5"></Calcbutton>
                <Calcbutton onClick={handleNumbers} className="number" Value="6"></Calcbutton>
                <Calcbutton onClick={handleOperator} className="operator" Value="*"></Calcbutton>
                <Calcbutton onClick={handleOperator} className="operator" Value="√"></Calcbutton>

  
                <Calcbutton onClick={handleNumbers} className="number" Value="1"></Calcbutton>
                <Calcbutton onClick={handleNumbers} className="number" Value="2"></Calcbutton>
                <Calcbutton onClick={handleNumbers} className="number" Value="3"></Calcbutton>
                <Calcbutton onClick={handleOperator} className="operator" Value="-"></Calcbutton>
                <Calcbutton onClick={handleOperator} className="operator" Value="%"></Calcbutton>

  
                <Calcbutton onClick={handleClear} className="clear" Value="C"></Calcbutton>
                <Calcbutton onClick={handleNumbers} className="number" Value="0"></Calcbutton>
                <Calcbutton onClick={handleOperator} className="equal" Value="="></Calcbutton>
                <Calcbutton onClick={handleOperator} className="operator" Value="+"></Calcbutton>
                <Calcbutton onClick={handleOperator} className="operator" Value="!"></Calcbutton>
                </div>
              </div>
            )
              function Calcbutton(props){
                return (<button onClick={()=> props.onClick(props.Value)} className={props.className}>{props.Value}</button>)
              }
        
  }
  export default Calculator;