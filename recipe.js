document.getElementById("input-search").addEventListener("keyup", function() {
	let input = this.value.toLowerCase();
	let food = document.querySelectorAll("#food");

	items.forEach(item => {
		let text = item.textContent.toLowerCase();
		if (text.includes(input)) {
			items.style.display = ";"
		} else {
			items.style.display = "none";
		}
	});
});