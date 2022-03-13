console.log("Task.js Loaded");
const tasks = document.getElementsByClassName("task");

document.addEventListener("click", (e) => {
	if (e.target.id === "delete") {
		e.target.parentElement.parentElement.parentElement.classList.toggle(
			"delete-animation"
		);
	}
	if (e.target.id === "clear-completed") {
		console.log("Clear Completed");
		for (let task of tasks) {
			if (
				task
					.querySelector(".task .text > :first-child")
					.classList.contains("line-through")
			) {
				task.classList.toggle("delete-animation");
			}
		}
	}
});
