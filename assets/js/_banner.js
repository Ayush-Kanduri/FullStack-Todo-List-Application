// Sets the Current Banner Date

let language = "en-us";
language = "default";
const long_weekday = { weekday: "long" };
const short_month = { month: "short" };
const day = new Date().toLocaleString(language, long_weekday);
const month = new Date().toLocaleString(language, short_month);
let date = new Date().getDate();
if (date < 10) {
	date = "0" + date;
}

document.getElementById("today").textContent = `${day}, ${month} ${date}`;
