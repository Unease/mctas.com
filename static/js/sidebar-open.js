let buttonelem = document.getElementsByClassName("buttonclose")[0]
buttonelem.addEventListener("click", toggle)

let wrapper = document.getElementsByClassName("toc--wrapper")[0]
let toc = document.getElementsByClassName("toc")[0]
wrapper.style.left = -(toc.getBoundingClientRect().width+7)+"px"
wrapper.style.transition = "transform 1s ease"

addEventListener('resize', (event) => {
	wrapper.style.left = -(toc.getBoundingClientRect().width+7)+"px"
});

function toggle(){
	let wrapper = document.getElementsByClassName("toc--wrapper")[0]
	if(wrapper.classList.contains("opened")){
		wrapper.classList.remove("opened")
		wrapper.style.transform = "initial"
	}else{
		wrapper.classList.add("opened")
		wrapper.style.transform = "translate("+(toc.getBoundingClientRect().width+7)+"px)"
	}
}