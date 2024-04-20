// obj destructuring

const band={
    bandName:"Kishore Kumar",
    famousSong:"Dilwale",
    famousMovie:"3 Idiots",
    famousActor:"Ajay Devgan",
};

let {bandName,famousSong, ...restAll}=band; // only key name is sent to each variable
console.log(bandName);
console.log(restAll);

let {famousMovie:movie}=band; // variable named is changed of key
console.log(movie);


// objects inside arrays

let arr1=[
    {
        name:"Aditya",
        age:22,
    },
    {
        name:"Sanu",
        age:16,
    },
    "king",
]

for(let user of arr1){

    // console.log(user.name); // undefined for "king"
    // console.log(user.age);
    if(typeof user==="object"){
        console.log(user.name);
        console.log(user.age);
    }
    else{
        console.log(user);
    }

}


// destructuring objects inside objects

const [user1, user2, user3]=arr1;
console.log(user1);
console.log(user2);
console.log(user3);

const [{name:name1}, ,name2]=arr1;
console.log(name1);
console.log(name2);