/* Jakub Polacek
     D00260171
     GD1b 2022   */


/*Remnant from testing of the code functionality
  Technically could be removed as it doesn't have any impact on the website itself,
  but would be needed again if anyone wanted to change/tweak/adjust the site later*/
console.log("Error cases showcase");



/*Gets called after every user input into Discord ID in the form
  Until the Discord ID is valid: has at least 3 characters, then hashtag, then exactly 4 numbers - Displays the 'invalid' in red
  When it is valid, changes the text to 'valid' in green
  
  First the function loads discord ID from the form field
  Then it tries to split this by hashtag to Username part and numbers part + determine their length
  If there is no hashtag, all other steps are expected to automatically fail and result in invalid
  
  First if checks that number of characters before hashtag is more than two AND at the same time, there is exactly four characters on the other side
  
  If that is correct, it checks every character on right side if it is number or not:
  match(/[0-9]/) is a JScript string fuction that searches by regular expression
  I was previously trying to use regex /^((.+?)#\d{4})/ (source: https://stackoverflow.com/questions/51507182/discord-username-format-check accessed on 10.12.2022)
  and shorten the if statements, but couldn't get it working, so I build my own using the tutorial from https://www.w3schools.com/jsref/jsref_obj_regexp.asp (accessed on 10.12.2022)
*/
function runCheck() {
  
  var discordID = document.forms["mapQuestion"]["Discord ID"].value;
  var hashPosition = discordID.indexOf("#");
  var name = discordID.substring(0,hashPosition);
  var countOfName = name.length;
  var numbers = discordID.substring(1+hashPosition);
  var countOfNumbers = numbers.length;
  
  if(countOfNumbers==4 && countOfName>2){
    for(let i = 0; i<4; i++){
	  var number = numbers.substring(i,1+i);
	    if(number.match(/[0-9]/)){
		  if(i==3){
			  document.getElementById("invalid").innerHTML = "valid!";
			  document.getElementById("invalid").style.color = "green";
			  document.getElementById("submit").style.backgroundColor = "green";
		  }
	    }
	    else{
	        document.getElementById("invalid").innerHTML = "invalid!";
			document.getElementById("submit").style.backgroundColor = "#E74C3C";
	    	break;
	    }

    }
  }
  else{
	document.getElementById("invalid").innerHTML = "invalid!";
	document.getElementById("invalid").style.color = "#E74C3C";
	document.getElementById("submit").style.backgroundColor = "#E74C3C";
  }
  
}


/*Called after user clicks submit
  If the ID is valid, report that question has been received
  If ID is not vaid, says so
  Code has same base as runCheck()
  
  In actual site, there would be a way to set the user question into some kind of datebase
  But I currently don't have skills to set up anything like that, so the form just resets
  Because of the nature of current browsers and synchronization, it may remember your previous input in this field
  That is not intentional, but I have no clue how I would prevent the browser from doing so
*/
function validCheck() {
  var discordID = document.forms["mapQuestion"]["Discord ID"].value;
  var hashPosition = discordID.indexOf("#");
  var name = discordID.substring(0,hashPosition);
  var countOfName = name.length;
  var numbers = discordID.substring(1+hashPosition);
  var countOfNumbers = numbers.length;
  
  if(countOfNumbers==4 && countOfName>2){
    for(let i = 0; i<4; i++){
	  var number = numbers.substring(i,1+i);
	    if(number.match(/[0-9]/)){
		  if(i==3){
			  alert("Your question has been submitted.");
		  }
	    }
	    else{
	    	alert("Invalid discord ID");
	    	break;
	    }
    }
  }
  else{
	alert("Invalid discord ID");
  }
}