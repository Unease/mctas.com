
main()

function main() {
	let h2 = document.getElementsByTagName("h2");
	for (let index = 0; index < h2.length; index++) {
		let element = h2[index];
		addLinkElement(element)
	}

	let h3 = document.getElementsByTagName("h3");
	for (let index = 0; index < h3.length; index++) {
		let element = h3[index];
		addLinkElement(element)
	}
}

/**
 * Adds things!
 * @param {HTMLHeadingElement} element 
 */
function addLinkElement(element) {
	let linkElement = document.createElement("a")
	let imgElement = document.createElement("img")
	imgElement.src = "/images/linkicon.svg"
	linkElement.appendChild(imgElement)
	linkElement.classList.add("permalink")
	linkElement.href = trimUrl(document.URL) + "#" + element.id
	element.append(linkElement)
}

/**
 * Trims url of the # in the end
 * @param {string} stringthing 
 */
function trimUrl(stringthing){
	let wee = stringthing.match("#.*")
	if(wee!=null){
		return stringthing.replace(wee[0], "")
	}
	return stringthing
}