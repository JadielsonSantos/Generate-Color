const body = document.getElementsByTagName('body')[0]
const p = document.getElementsByTagName('p')[0]
var cor = []

function gera() {
	for (var i = 0; i <= 5; i++) {
		var a = Math.floor(Math.random() * 10)
		cor.push(+a)
		body.bgColor = "#"+cor
	}
	p.innerHTML = "#"+cor.join("")
	cor = []
	
}
