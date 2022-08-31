function roundToNext5(n){
        if(n%5===0){
        return n
      }else{
        for(let i=1;i<=4;i++){  
            if((n+i)%5==0){
                return n+i
            }
      }    
    }
}

console.log(roundToNext5(0))
console.log(roundToNext5(-1))
console.log(roundToNext5(2))
console.log(roundToNext5(-10))
console.log(roundToNext5(10))
console.log(roundToNext5(51))
console.log(roundToNext5(0))


