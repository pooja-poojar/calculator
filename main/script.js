let input=document.getElementById('res');
// let buttons=document.querySelectorAll('button');

function appendValue(value)
{
    input.value+=value;
}
function clearResult(){
    input.value="";
}

function calculateResult()
{
    try{
        input.value=eval(input.value);
    }catch(error){
        input.value="Error";
    }
}






// let string ="";
// let arr=Array.from(buttons);
// arr.forEach(button => {
//     button.addEventListener('click',(e) =>{
//         if(e.target.innerHTML == '='){
//             string =eval(string);
//             input.value=string;
//         }
//         else if(e.target.innerHTML== 'AC'){
//             string="";
//             input.value=string;
//         }
       
//         else{
//             string +=e.target.innerHTML;
//             input.value=string;
//         }





        
//     })
// })
