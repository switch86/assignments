function sum(x, y){
    try { 
        if (typeof(x) != "number" || typeof(y) != "number") {
            throw new Error("This function requires numbers as input. Please enter a number.")
        }
        return x + y;
    }
    catch(err) {
        console.log(err)
    }
  }



  console.log(sum(32, 32))



//   write a function called login that takes a username and password as parameters. Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"

var user = {username: "sam", password: "123abc"};
function login1(username, password){
    try {
        if (username != user.username || password != user.password) {
            throw new Error("Incorrect username or password. Please try again.")
        }   
        console.log("log-in successful!")
    } 
    catch(err) {
            console.log(err)
    }
    
}

// login1("sam", "123abc")
// login1("noah", "123abc")


var user = {username: "sam", password: "123abc"};
try {
    function login2(username, password){
        if (username != user.username || password != user.password) {
            throw new Error("Incorrect username or password. Please try again.")
        }   
        console.log("log-in successful!")
    }     
}
catch(err) {
            console.log(err)
    } 

// login2("sam", "123abc")
// login2("noah", "123abc")