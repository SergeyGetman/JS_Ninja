function signIn() {
	alert('the implementation is not ready yet');
}

const updateFormData = {
	nickName: '',
	password: ''
};

let checkValidState = false;

function getFormData() {
	const form = document.querySelector('form');

	if (form) {
		const btnSet = document.getElementById('submitBtn');

		btnSet.addEventListener('click', function(event) {
			const labelS = document.querySelectorAll('form label');
			if (labelS) {
				for (let i = 0; i < labelS.length; i++) {
					labelS[i].classList.add('error-handler');
				}
			}

			// form.requestSubmit();
		});
		updateFormData.nickName = form.elements.emailID.value;
		updateFormData.password = form.elements.passwordID.value;
		console.log('updateFormData', updateFormData);

		if (!updateFormData.nickName && !updateFormData.password) {
			form.checkValidity();
			form.classList.add('was-validated');
		}

		if (!!updateFormData.nickName && !!updateFormData.password) {
			form.checkValidity();
			form.classList.add('was-validated');
			checkValidState = true;
			form.reset();
			if (checkValidState) {
				hideForm();
			}
		}
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
