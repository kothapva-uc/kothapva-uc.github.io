var shown = false;
function showhideEmail(){
	if (shown){
		document.getElementById("email").innerHTMl= "Show my email";
		shown=false;
	}
	else{
		var myemail= "<a href='mailto:kothapva" + "@" + "mail.uc.edu'>kothapva" +
												"@" + "mail.uc.edu</a>";
		document.getElementById("email").innerHTMl= myemail;
		shown = true;
	}
}