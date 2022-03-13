console.log("Task.js Loaded");
document.addEventListener("click", (e) => {
	if (e.target.id === "delete") {
		e.target.parentElement.parentElement.parentElement.classList.toggle(
			"delete-animation"
		);
	}
});
