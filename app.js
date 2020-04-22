
window.onload = function ()
 {
   let calculator = document.querySelector('.calculator')
   let calculatorDislay = document.querySelector('.calculator__display')
   let keys = calculator.querySelector('.calculator__keys')

   keys.addEventListener('click', function(e){
       if(e.target.matches('button')) {
            
   let key = e.target
   let action = key.dataset.action
 if (!action) 
{
          let number = key.innerHTML
             if(calculatorDislay.innerHTML === '0') {
                calculatorDislay.innerHTML = number;
       } else {
      calculatorDislay.append(number)
       }
                
 var num1 = calculatorDislay.innerHTML;
         }
  else if (action === 'add' ||
         action === 'subtract' ||
         action === 'multiply' ||
         action === 'divide') {         
         }
     else if(action === 'clear') {
       calculatorDislay.innerHTML = 0;
         }
      else if (action === 'calculate') {     
            switch (realAction) {
            case 'add':
      calculatorDislay.innerHTML = num2 + num1
          break;
          case 'subtract':
      calculatorDislay.innerHTML = num2 - num1
          break;
          case 'multiply':
      calculatorDislay.innerHTML = num2 * num1
          break;
          case 'divide':
      calculatorDislay.innerHTML = num2 / num1
          default:
          break;  }
         }
       }
    }
}
