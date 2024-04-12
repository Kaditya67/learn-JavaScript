// while loop

let i=0;
while(i<10){
    console.log(i);
    i++;
}


// sum of n numbers from 1 to n

let n=10;
let sum=0;
let j=1;

formula=n*(n+1)/2;
console.log("formula",formula);

// while loop
while(j<=n){
    sum+=j;
    j++;
}
console.log("while loop",sum);


// for loop

for(let k=1;k<=n;k++){
    sum+=k;
}
console.log("for loop",sum);

for(let k=1;k<=n;k++){
    if(k===5){
        console.log("Break at 5");
        break;
    }
    if(k===3){
        console.log("Skip 3");
        continue;
    }
    console.log(k);
}


// do while

let num=0;
do{
    console.log(num);
    num++;
}while(num<10)