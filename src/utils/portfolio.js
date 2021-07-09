export const changeItemFilter = (e) => {
	document.querySelector('.filter-item.active').classList.remove('active')
	e.target.classList.add('active')
}
