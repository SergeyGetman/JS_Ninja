function signIn() {
	alert('the implementation is not ready yet');
}

const hideForm = () => {
	const getForID = document.querySelector('.form-content');
	const spinnerBlock = document.getElementById('spinnerId');
	getForID.style.display = 'none';
	spinnerBlock.style.display = 'flex';

	setTimeout(() => {
		window.location.href = '/';
	}, 3000);
};
