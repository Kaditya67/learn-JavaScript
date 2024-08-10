const reqUrl=new XMLHttpRequest();  // creating request
reqUrl.open("GET","https://api.github.com/users");  // open request

reqUrl.onload=function(){
    console.log(typeof this.responseText);     // this means 'reqUrl' here
    const responseText=JSON.parse(this.responseText);     // this means 'reqUrl' here
    console.log(typeof responseText);
    console.log(responseText);
}

reqUrl.onreadystatechange=function(){
    console.log(this.readyState);       // prints the state codes
}
reqUrl.send();  // send request
