const search = document.getElementById('input-search');
const recipes = document.querySelectorAll('.container');

search.addEventListener('keyup', () => {
	const searchData = search.value.toLowerCase();
	recipes.forEach(container => {
		const title = container.querySelector('h2').textContent.toLowerCase();
		if (title.includes(searchData)) {
			container.style.display = 'block';
		}
		else {
			container.style.display ='none';
		}
	});
});
