const mode = document.getElementById('mode_icon')
const form = document.getElementById('login_form')

mode.addEventListener('click', () => {
	if(mode.classList.contains('fa-moon')){ //pega o mode e vendo se tem a classe fa-moon {
		mode.classList.remove('fa-moon');
		mode.classList.add('fa-sun');
		
		form.classList.add('dark')
		return;
	}
		mode.classList.add('fa-moon');
		mode.classList.remove('fa-sun');
		form.classList.remove('dark')
});