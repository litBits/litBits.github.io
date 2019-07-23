function changeImage_first() {
	var source = String(document.getElementById("img-click_first").src);
	if (source == "https://litBits.github.io/Cells/first-cells/empty-breadboard.png")
		document.getElementById("img-click_first").src = "Cells/first-cells/first-cell_1.png";
	else if (source == "https://litBits.github.io/Cells/first-cells/first-cell_1.png")
		document.getElementById("img-click_first").src = "Cells/first-cells/first-cell_2.png";
	else if (source == "https://litBits.github.io/Cells/first-cells/first-cell_2.png")
		document.getElementById("img-click_first").src = "Cells/first-cells/first-cell_3.png";
	else if (source == "https://litBits.github.io/Cells/first-cells/first-cell_3.png")
		document.getElementById("img-click_first").src = "Cells/first-cells/first-cell_complete.png";
	else if (source == "https://litBits.github.io/Cells/first-cells/first-cell_complete.png")
		document.getElementById("img-click_first").src = "Cells/first-cells/empty-breadboard.png";
}

function changeImage_final() {
	var source = document.getElementById("img-click_final").src;
	switch(source) {
		case "https://litBits.github.io/Cells/final-cells/final-cell_1.png": {
			document.getElementById("img-click_final").src = "Cells/final-cells/final-cell_2.png";
			break;
		}
		case "https://litBits.github.io/Cells/final-cells/final-cell_2.png": {
			document.getElementById("img-click_final").src = "Cells/final-cells/final-cell_3.png";
			break;
		}
		case "https://litBits.github.io/Cells/final-cells/final-cell_3.png": {
			document.getElementById("img-click_final").src = "Cells/final-cells/final-cell_complete.png";
			break;
		}
		case "https://litBits.github.io/Cells/final-cells/final-cell_complete.png": {
			document.getElementById("img-click_final").src = "Cells/final-cells/final-cell_1.png";
			break;
		}
	}
}


function changeImage_mid() {
	var source = document.getElementById("img-click_mid").src;
	switch(source) {
		case 'https://litBits.github.io/Cells/mid-cells/cell_1.png': {
			document.getElementById("img-click_mid").src = "Cells/mid-cells/cell_2_a.png";
			break;
		}
		case 'https://litBits.github.io/Cells/mid-cells/cell_2_a.png': {
			document.getElementById("img-click_mid").src = "Cells/mid-cells/cell_2_b.png";
			break;
		}
		case 'https://litBits.github.io/Cells/mid-cells/cell_2_b.png': {
			document.getElementById("img-click_mid").src = "Cells/mid-cells/cell_2_c.png";
		break;
		}
		case 'https://litBits.github.io/Cells/mid-cells/cell_2_c.png': {
			document.getElementById("img-click_mid").src = "Cells/mid-cells/cell_2_d.png";
			break;
		}
		case 'https://litBits.github.io/Cells/mid-cells/cell_2_d.png': {
			document.getElementById("img-click_mid").src = "Cells/mid-cells/cell_3.png";
			break;
		}
		case 'https://litBits.github.io/Cells/mid-cells/cell_3.png': {
			document.getElementById("img-click_mid").src = "Cells/mid-cells/cell_4.png";
			break;
		}
		case 'https://litBits.github.io/Cells/mid-cells/cell_4.png': {
			document.getElementById("img-click_mid").src = "Cells/mid-cells/cell_5.png";
			break;
		}
		case 'https://litBits.github.io/Cells/mid-cells/cell_5.png': {
			document.getElementById("img-click_mid").src = "Cells/mid-cells/cell_6.png";
			break;
		}
		case 'https://litBits.github.io/Cells/mid-cells/cell_6.png': {
			document.getElementById("img-click_mid").src = "Cells/mid-cells/cell_7.png";
			break;
		}
		case 'https://litBits.github.io/Cells/mid-cells/cell_7.png': {
			document.getElementById("img-click_mid").src = "Cells/mid-cells/cell_1.png";
			break;
		}
	}
}
