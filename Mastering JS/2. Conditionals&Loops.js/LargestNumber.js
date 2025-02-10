function large( a , b, c ){
    if( a == b && b == a && c ==a){
        console.log("all are equal");
    }
    else if(a> b && a > c){
        console.log(a+ " is large number.");
    }
    else if(b > a && b > c){
        console.log(b+ " is large number.");
    }
    else if (c > a && c > b){
        console.log(c +" ia large number.");
    }
    else if ( a == b){
        console.log(a+ " and "+  b + " are equal.");
    }
    else if ( b == c){
        console.log(a+ " and "+  c + " are equal.");
    }
    else{
        console.log(c + " and "+a +" are equal."); 
    }
}

large(3, 2, 3 );
