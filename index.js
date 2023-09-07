let count = 0;
const newCount = document.getElementById("counter-element");

function increment() {
	count = count += 1;
	newCount.textContent = count;
}

const saveEle = document.getElementById("save-element");

function save() {
	const countStr = " " + count + " , ";
	saveEle.textContent += countStr;
	newCount.textContent = 0;
	count = 0;
}
