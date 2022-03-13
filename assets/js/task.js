//Task Loaded
console.log("Task.js Loaded");

const tasks = document.getElementsByClassName("task");

//Click Event Listener Delegation for Animations
document.addEventListener("click", (e) => {
	//On Delete Button Click
	if (e.target.id === "delete") {
		e.target.parentElement.parentElement.parentElement.classList.toggle(
			"delete-animation"
		);
	}
	//On Clear Completed Button Click
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
