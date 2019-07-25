function changeImage_first() {
	var image = document.getElementById("img-click_first");
	var source = image.getAttribute('src');
	
	switch (source) {
		case "Cells/first-cells/empty-breadboard.png": {
			image.src = "Cells/first-cells/first-cell_1.png";
			break; }
		case "Cells/first-cells/first-cell_1.png": {
			image.src = "Cells/first-cells/first-cell_2.png";
			break; }
		case "Cells/first-cells/first-cell_2.png": {
			image.src = "Cells/first-cells/first-cell_3.png";
			break; }
		case "Cells/first-cells/first-cell_3.png": {
			image.src = "Cells/first-cells/first-cell_complete.png";
			break; }
		case "Cells/first-cells/first-cell_complete.png": {
			image.src = "Cells/first-cells/empty-breadboard.png";
			break; }
		default:
			document.getElementById("first-section").innerHTML = "switch ERROR: first";
	}
}

function changeImage_mid() {
	var image = document.getElementById("img-click_mid");
	var source = image.getAttribute('src');
	
	switch(source) {
		case "Cells/mid-cells/cell_1.png": {
			image.src = "Cells/mid-cells/cell_2_a.png";
			break; }
		case "Cells/mid-cells/cell_2_a.png": {
			image.src = "Cells/mid-cells/cell_2_b.png";
			break; }
		case "Cells/mid-cells/cell_2_b.png": {
			image.src = "Cells/mid-cells/cell_2_c.png";
			break; }
		case "Cells/mid-cells/cell_2_c.png": {
			image.src = "Cells/mid-cells/cell_2_d.png";
			break; }
		case "Cells/mid-cells/cell_2_d.png": {
			image.src = "Cells/mid-cells/cell_3.png";
			break; }
		case "Cells/mid-cells/cell_3.png": {
			image.src = "Cells/mid-cells/cell_4.png";
			break; }
		case "Cells/mid-cells/cell_4.png": {
			image.src = "Cells/mid-cells/cell_5.png";
			break; }
		case "Cells/mid-cells/cell_5.png": {
			image.src = "Cells/mid-cells/cell_6.png";
			break; }
		case "Cells/mid-cells/cell_6.png": {
			image.src = "Cells/mid-cells/cell_7.png";
			break; }
		case "Cells/mid-cells/cell_7.png": {
			image.src = "Cells/mid-cells/cell_1.png";
			break; }
		default:
			document.getElementById("second-section").innerHTML = "switch ERROR: mid";
	}
}

function changeImage_final() {
	var image = document.getElementById("img-click_final");
	var source = image.getAttribute('src');
	
	switch(source) {
		case "Cells/final-cells/final-cell_1.png": {
			image.src = "Cells/final-cells/final-cell_2.png";
			break; }
		case "Cells/final-cells/final-cell_2.png": {
			image.src = "Cells/final-cells/final-cell_3.png";
			break; }
		case "Cells/final-cells/final-cell_3.png": {
			image.src = "Cells/final-cells/final-cell_complete.png";
			break; }
		case "Cells/final-cells/final-cell_complete.png": {
			image.src = "Cells/final-cells/final-cell_1.png";
			break; }
		default:
			document.getElementById("third-section").innerHTML = "switch ERROR: final";
	}
}
function zoomIn_first(event) {
  var element = document.getElementById("first-overlay");
  var diagram = document.getElementById("img-click_first").getAttribute('src');
  element.style.display = "inline-block";
  element.style['background-image'] = "url(\"" + diagram + "\")";
  var img = document.getElementById("imgZoom");
  var posX = event.offsetX ? (event.offsetX) : event.pageX - img.offsetLeft;
  var posY = event.offsetY ? (event.offsetY) : event.pageY - img.offsetTop;
  element.style.backgroundPosition=(-posX*4.3)+"px "+(-posY*4.1)+"px";

}

function zoomOut_first() {
  var element = document.getElementById("first-overlay");
  element.style.display = "none";
}

function zoomIn_mid(event) {
  var element = document.getElementById("mid-overlay");
  var diagram = document.getElementById("img-click_mid").getAttribute('src');
  element.style.display = "inline-block";
  element.style['background-image'] = "url(\"" + diagram + "\")";
  var img = document.getElementById("imgZoom");
  var posX = event.offsetX ? (event.offsetX) : event.pageX - img.offsetLeft;
  var posY = event.offsetY ? (event.offsetY) : event.pageY - img.offsetTop;
  element.style.backgroundPosition=(-posX*4.3)+"px "+(-posY*4.1)+"px";

}

function zoomOut_mid() {
  var element = document.getElementById("mid-overlay");
  element.style.display = "none";
}

function zoomIn_final(event) {
  var element = document.getElementById("final-overlay");
  var diagram = document.getElementById("img-click_final").getAttribute('src');
  element.style.display = "inline-block";
  element.style['background-image'] = "url(\"" + diagram + "\")";
  var img = document.getElementById("imgZoom");
  var posX = event.offsetX ? (event.offsetX) : event.pageX - img.offsetLeft;
  var posY = event.offsetY ? (event.offsetY) : event.pageY - img.offsetTop;
  element.style.backgroundPosition=(-posX*4.3)+"px "+(-posY*4.1)+"px";

}

function zoomOut_final() {
  var element = document.getElementById("final-overlay");
  element.style.display = "none";
}
