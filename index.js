 function Additionner(){  
     let number1 = document.form.number1.value;
     let number2 = document.form.number2.value;
      result = parseFloat(number1) + parseFloat(number2)
      document.form.result.value = result;
   }
     function Soustraction(){  
       let number3 = document.form2.number3.value;
       let number4 = document.form2.number4.value;
        result = parseFloat(number3) - parseFloat(number4)
        document.form2.result.value = result;
     }
   function Multiplication(){  
     let number5 = document.form3.number5.value;
     let number6 = document.form3.number6.value;
      result = parseFloat(number5) * parseFloat(number6)
      document.form3.result.value = result;
   }
   function Division(){  
     let number7 = document.form4.number7.value;
     let number8 = document.form4.number8.value;
      result = parseFloat(number7) / parseFloat(number8)
      document.form4.result.value = result;
   }



    //  function operation(op){
        //  nombre1=document.form.number1.value;
        //  nombre2=document.form.number2.value;
        //  switch(op){
            // case "add": result=parseFloat(nombre1)+parseFloat(nombre2); break;
          
        //  }
        //  document.form.result.value=result;
    //   }
    // do{  
    //     let number1 = document.form.number1.value;
    //     let number2 = document.form.number2.value;
    //      result = parseFloat(number1)+ parseFloat(number2)
    //      document.form.result.value = result;
    //   }while(document.form.button.onclick = "additionner")
