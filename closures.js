function powerOf(num){
    function numberPower(x){
        return x**num;
    }
    return numberPower;
}


let power2=powerOf(2);
console.log(power2(5));


// powerOf function returns a function numberPower
// numberPower function returns a number

function fullName(firstName,lastName){
    console.log("Full Name function called");
    console.log(`Full Name: ${firstName} ${lastName}`);
    function firstName1(first){
        console.log("FirstName1 is called");
        console.log(`First Name: ${first}`);
        return firstName;
    }
    return firstName1;
}

const fullName2=fullName("Aditya","Ojha");
console.log(fullName2)
console.log(fullName2("king"));


function oneTimeFunction(){
    let count=0;
    return function(){
        if(count==0){
            console.log("I am called only once");
        }
        else{
            console.log("You have already used me");
        }
        count++;
    }
}


let once=oneTimeFunction();
once();
once();
once();