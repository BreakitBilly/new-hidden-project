function main(){
	
}
function credits(){
	var response = confirm("Are you sure you want to proceed? (epilepsy warning)")
	if (response === false) {
		alert("sorry you couldn't witness the awesomeness")
	}
	if (response === true) {
		window.location = "credits.html";
	}
}
window.onload = main()