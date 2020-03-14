function calculateValidationNumber(input) {
    if(Number.isInteger(input)){
        var flag;
        do{
  	        var sum = ("" + input).split("").map(Number).reduce((a, b) => {
   	            return a + b
            })

            console.log(sum)

            if(("" + sum).split("").length == 1){
                console.log("Output",sum)
                flag = false

            }else{
                input = sum
                flag = true
            }

  }while(flag)
     }else{
      console.log(input + " is not an integer")
    }
}

calculateValidationNumber(112233445566)