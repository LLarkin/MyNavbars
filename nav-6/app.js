const Bars = document.querySelector("#bars")
const Times = document.querySelector("#times")
const Navbar = document.querySelector(".nav")
const Navul = document.querySelector("#navul")




Navbar.style.height = '20vh'
Navul.style.flexDirection = 'row'

function BarsRender(){
	
	Times.style.display = 'block'
	Bars.style.display = 'none' 
	Navbar.style.height = '100vh'
	Navbar.style.flexDirection = 'column'
	Navul.style.transform = 'translateX(0%)'
	Navul.style.flexDirection = 'column'
}

function TimesRender(){
	
	Times.style.display = 'none'
	Bars.style.display = 'block' 
	Navbar.style.height = '20vh'
	Navbar.style.flexDirection = 'row'
	Navul.style.transform = 'translateX(-250%)'
	Navul.style.flexDirection = 'row'
}

