export const changeItemFilter = (e) => {
	console.log('diste clic')
	document.querySelector('.filter-item.active').classList.remove('active')
	e.target.classList.add('active')
}
