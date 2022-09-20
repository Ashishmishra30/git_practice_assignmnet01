function prime(num){
if(num<= 1 || num== undefined){
return false;
}

    for(let i=2; i<=Math.sqrt(num); i++){
        if(num%i===0){
           return false;
        }
    }
return true;
}


console.log(prime(12));