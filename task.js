function first(){
    let content = document.getElementById("text");
    if ( content.style.display = "block") {
        content.style.display = "none";
  }     
}

function second(){
       let content = document.getElementById('task2').hidden = true;
}

menu.onclick = function () {
	let elements = document.querySelectorAll("li");
	let visibility = elements[0].style.visibility;

	for (let i = 0; i < elements.length; i++) {
		if (visibility == "hidden") {
			elements[i].style.visibility = "";			
		} else {
			elements[i].style.visibility = "hidden";			
		}
	}
}





