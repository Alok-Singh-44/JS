        //    *
        //   ***
        //  *****
        // *******

        //for 3 line we need to iterate loop five times
        // for 4 its 7
        // 1    3   5   7   9   11

function pyramind(a){
    // innerLoop = +(a+(a-1));
    // console.log(innerLoop);
    for(let i = 1; i <= 3; i++){
        let row = "";
        for(let j = 1; j <= 3; j++){
            {
                row += "*";
            }
                // row += " ";
             console.log(row);
        }
    }
}

pyramind(3)