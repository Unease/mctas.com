let buttonelem = document.getElementsByClassName("buttonclose")[0]
buttonelem.addEventListener("click", ()=>{
	addTransition(true)
	toggle()
})

let wrapper = document.getElementsByClassName("toc--wrapper")[0]
let toc = document.getElementsByClassName("toc")[0]
wrapper.style.left = -(toc.getBoundingClientRect().width+7)+"px"

let isOpen = localStorage.getItem("sidebar") !== null ? true : false
open(isOpen)

addEventListener('resize', (event) => {
	if(wrapper.classList.contains("opened")){
		wrapper.style.transform = "translate("+(toc.getBoundingClientRect().width+7)+"px)"
	}
	wrapper.style.left = -(toc.getBoundingClientRect().width+7)+"px"
});

function toggle(){
	let wrapper = document.getElementsByClassName("toc--wrapper")[0]
	open(!wrapper.classList.contains("opened"))
}

function open(open){
	let wrapper = document.getElementsByClassName("toc--wrapper")[0]
	if(!open){
		wrapper.classList.remove("opened")
		wrapper.style.transform = "initial"
		localStorage.removeItem("sidebar")
	}else{
		wrapper.classList.add("opened")
		wrapper.style.transform = "translate("+(toc.getBoundingClientRect().width+7)+"px)"
		localStorage.setItem("sidebar", "open")
	}
}

function addTransition(add){
	let wrapper = document.getElementsByClassName("toc--wrapper")[0]
	let button =  document.getElementsByClassName("buttonclose")[0]
	if(add){
		wrapper.classList.add("transitioner")
		button.classList.add("transitioner")
	}else{
		wrapper.classList.remove("transitioner")
		button.classList.remove("transitioner")
	}
}