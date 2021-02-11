const btn1 = document.getElementById("btn");
const nav1 = document.getElementById('nav');

btn1.addEventListener("click",() => {
	nav1.classList.toggle("active");
	btn1.classList.toggle("active");
});