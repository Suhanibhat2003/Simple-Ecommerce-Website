let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');
let header=document.querySelector('.header-2')

menu.addEventListener('click',()=>{
	menu.classList.toggle('fa-times');
	navbar.classList.toggle('active');
	
});

window.onscroll=()=>{
	menu.classList.remove('fa-times');
	navbar.classList.remove('active');

	if(window.scrollY > 150){
		header.classList.add('active');
	}else{
		header.classList.remove('active')
	}
}
const countdown = () =>{
	const countDate = new Date('may 28,2024 00:00:00').getTime();
	const now = new Date().getTime();

	const gap = countDate - now;

	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;


	const d = Math.floor(gap / day);
	const h = Math.floor((gap % day)/hour);
	const m = Math.floor((gap % hour)/minute);
	const s = Math.floor((gap % minute)/second);



	document.querySelector(".day").innerText = d > 0 ? d : 0;
	document.querySelector(".hour").innerText = h > 0 ? h : 0;
	document.querySelector(".minute").innerText = m > 0 ? m : 0;
	document.querySelector(".second").innerText = s > 0 ? s : 0;
}
	setInterval(countdown,1000);
