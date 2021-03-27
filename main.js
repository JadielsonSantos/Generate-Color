const p = document.getElementsByClassName("corp")
var cor1 = [];
var cor2 = [];
var cor3 = [];
var cor4 = [];
const main = document.getElementsByClassName("main");
var nu1, nu2, nu3, nu4
function gera() {
	cor1 = [];
	cor2 = [];
	cor3 = [];
	cor4 = [];
	color1();
	color2();
	color3();
	color4();
}
function color1() {
		for (nu1 = 0; nu1 <= 5; nu1++) {
		var a = Math.floor(Math.random() * 10)
		cor1.push(+a);
		main[0].style.backgroundColor = "#"+cor1.join("");
		p[0].innerHTML = "#"+cor1.join("");
		console.log(cor1);
		}

	};
	function color2() {
		for (nu2 = 0; nu2 <= 5; nu2++) {
		var b = Math.floor(Math.random() * 10)
		cor2.push(+b);
		main[1].style.backgroundColor = "#"+cor2.join("");
		p[1].innerHTML = "#"+cor2.join("");
		}
		nu2 = ''
	};
	function color3() {
		for (nu3 = 0; nu3 <= 5; nu3++) {
		var c = Math.floor(Math.random() * 10)
		cor3.push(+c);
		main[2].style.backgroundColor = "#"+cor3.join("");
		p[2].innerHTML = "#"+cor3.join("");
	}
	nu3 = ''
	};
	function color4() {
		for (nu4 = 0; nu4 <= 5; nu4++) {
		var d = Math.floor(Math.random() * 10)
		cor4.push(+d);
		main[3].style.backgroundColor = "#"+cor4.join("");
		p[3].innerHTML = "#"+cor4.join("");
	}
	nu4 = ''
	};
