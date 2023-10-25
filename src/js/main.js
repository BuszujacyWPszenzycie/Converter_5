const allBtnSpans = document.querySelectorAll('.btn__span')
const allModals = document.querySelectorAll('.modal')

let allBtnSpansConverted = Array.prototype.slice.call(allBtnSpans)

let textContentSpans = []

allBtnSpansConverted.forEach(item => textContentSpans.push(item.textContent))

const showModalFunction = e => {
	console.log('test_funciton')
	let textContentOfSelectedButton = e.target.textContent
	let indexOfSelectedButton = textContentSpans.indexOf(textContentOfSelectedButton)
	allModals.forEach(modal => modal.classList.remove('show-modal'))
	allModals[indexOfSelectedButton].classList.add('show-modal')
}

allBtnSpans.forEach(span => span.addEventListener('click', showModalFunction))
