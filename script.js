function handleSubmit(e){
  e.preventDefault();
  const status = document.getElementById('formStatus');
  status.textContent = 'Coding INstructor';
  return false;
}
document.getElementById('year').textContent = new Date().getFullYear();
