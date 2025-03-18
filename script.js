const container = document.querySelector("#container")

const clear = document.querySelector("#clear-grid")
const gridSize = document.querySelector("#grid-size")

clear.addEventListener("click", clearGrid)
gridSize.addEventListener("click", newSize)


function makeGrid(size = 16) {
	const squareSize = 600 / size

	for (let i = 0; i < size * size; i++) {
		const square = document.createElement("div")

		container.appendChild(square)
		square.className = "grid-item"
		square.style.width = `${squareSize}px`
		square.style.height = `${squareSize}px`

		square.addEventListener("mouseover", () => {
			square.style.backgroundColor= `#${Math.floor(Math.random() * 16777215).toString(16)}`
		})
	}
}

function clearGrid() {
	const squares = document.querySelectorAll(".grid-item")

	Array.from(squares).forEach(square => {
		square.style.backgroundColor = ""
	})
}

function newSize() {
	let size = prompt("Enter a numbeber between 1 and 100", 16)
	const squares = document.querySelectorAll(".grid-item")
	

	if (size > 0 && size <= 100) {
		Array.from(squares).forEach(square => {
		container.removeChild(square)
		})
		makeGrid(size)
	} else {
		alert("Please enter a valid number")
	}
}

makeGrid()