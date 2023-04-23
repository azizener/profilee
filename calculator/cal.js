function reStart(nm) {
    let nu = document.getElementById(nm);
    nu.innerHTML = "";
}
let result =0;
    let result1 =0;
    let result2 = 0;
    let operator=0;
function Numbers(nm){
    let num = document.getElementById(nm);
    
    switch(num){
        case btn1:
            num1.innerHTML= num1.innerHTML +1;
            break;
            case btn2:
            num1.innerHTML= num1.innerHTML +2;
            break;
            case btn3:
            num1.innerHTML= num1.innerHTML +3;
            break;
            case btn4:
            num1.innerHTML= num1.innerHTML +4;
            break;
            case btn5:
            num1.innerHTML= num1.innerHTML +5;
            break;
            case btn6:
            num1.innerHTML= num1.innerHTML +6;
            break;
            case btn7:
            num1.innerHTML= num1.innerHTML +7;
            break;
            case btn8:
            num1.innerHTML= num1.innerHTML +8;
            break;
            case btn9:
            num1.innerHTML= num1.innerHTML +9;
            break;
            case btn0:
            num1.innerHTML= num1.innerHTML +0;
            break;
            case Plus:
            result1 = num1.innerHTML;
            operator = 1;
            num1.innerHTML = "";
           // num1.innerHTML= num1.innerHTML + "+";
            break;
            case Minus:
            result1 = num1.innerHTML;
            operator = 2;
            num1.innerHTML = "";
            //num1.innerHTML= num1.innerHTML + "-";
            break;
            case Division:
            result1 = num1.innerHTML;
            operator = 3;
            num1.innerHTML = "";
            //num1.innerHTML= num1.innerHTML +"/";
            break;
            case Multiply:
            result1 = num1.innerHTML;
            operator = 4;
            num1.innerHTML = "";
            //num1.innerHTML= num1.innerHTML +"*";
            break;
            case Reminder:
            result1 = num1.innerHTML;
            operator = 5;
            num1.innerHTML = "";
            //num1.innerHTML= num1.innerHTML +"%";
            break;
            case Equals:
            result2 = num1.innerHTML;
            switch(operator){
                case 1:
               result = parseInt(result1)+parseInt(result2);
                num1.innerHTML = result;
                
                break;
                case 2:
                result = parseInt(result1)-parseInt(result2);
                num1.innerHTML = result;
                break;
                case 4:
                result = parseInt(result1)*parseInt(result2);
                num1.innerHTML = result;
                break;
                case 3:
                result = parseInt(result1)/parseInt(result2);
                num1.innerHTML = result;
                break;
                case 5:
                result = parseInt(result1)%parseInt(result2);
                num1.innerHTML = result;
                break;
                default:
                    num1.innerHTML = "Something went wrong!"
                    break;
            }
            break;
    }
}