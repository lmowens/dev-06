function startUp() {
    console.log("Waiting for name");
    console.log("User entered name");
    console.log("Waiting for click");
    var userName = document.getElementById("userName");
    var output = document.getElementById("output");
    var userName = userName.value;
    console.log("display hello message");
    output.value = "Hello, " + userName;
  }
  
  function countUp() {
    console.log("counting letters");
    var userName = document.getElementById("userName");
    var numLetters = document.getElementById("numLetters");
    var userName = userName.value;
    console.log("The User's name is " + userName);
    var letters = userName.length;
    console.log("name length" + letters);
    numLetters.value =
      "You have " + letters + " letters in your name.";
    console.log("you can now see the number of letters in your name");
  }
  