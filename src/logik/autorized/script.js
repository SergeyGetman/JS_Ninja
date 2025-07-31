function signIn() {
	alert('the implementation is not ready yet');
}

const updateFormData = {
	nickName: '',
	password: ''
};

function getFormData() {
	const form = document.querySelector('form');
	if (form) {
		updateFormData.nickName = form.elements.emailID.value;
		updateFormData.password = form.elements.passwordID.value;

		console.log('this is data', updateFormData);
		form.reset();
		hideForm();
	}
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
