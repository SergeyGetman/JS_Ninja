import { MOCK_DATA } from '../mock/mockData';
import './styleAutorize.css';

function signIn() {
	alert('the implementation is not ready yet');
}

const form = document.querySelector('form');

const updateFormData = {
	nickName: MOCK_DATA.entered.nickName,
	password: MOCK_DATA.entered.password
};

let checkValidState = false;

document.addEventListener('DOMContentLoaded', () => {
	const submitBtn = document.getElementById('submitBtn');
	const loginBtn = document.getElementById('loginBtn');

	submitBtn.addEventListener('click', function(ev) {
		if (ev) {
			const checkLabelStatus = document.getElementById('invalidCheck');
			form.classList.add('error-handler');
			if (checkLabelStatus && checkLabelStatus) {
				checkLabelStatus.style.color = 'red';
				getFormData();
			}
		}
	});
	loginBtn.addEventListener('click', signIn);
});

function getFormData() {
	const checkBox = document.getElementById('chekboxId');
	const checkLabel = document.querySelector('.form-check-label');

	checkBox.addEventListener('change', function(event) {
		checkValidState = event.target.checked;
		if (!checkValidState) {
			checkLabel.style.color = 'red';
		} else {
			checkLabel.style.color = 'green';
		}
	});

	if (form) {
		const btnSet = document.getElementById('submitBtn');

		btnSet.addEventListener('click', function() {
			const labelS = document.querySelectorAll('form label');
			if (labelS) {
				for (let i = 0; i < labelS.length; i++) {
					labelS[i].classList.add('error-handler');
				}
			}
		});
		const { entered } = MOCK_DATA;
		updateFormData.nickName = form.elements.emailID.value;
		updateFormData.password = form.elements.passwordID.value;
		console.log('updateFormData', updateFormData);

		if (updateFormData.nickName === entered.nickName || updateFormData.password === entered.password) {
			form.checkValidity();
			form.classList.add('error-handler');
			form.classList.add('was-validated');
			checkValidState = true;
			form.reset();
			if (checkValidState) {
				hideForm();
			}
		} else {
			alert('DATA ICORECT');
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

const { header } = MOCK_DATA;

window.getFormData = getFormData;
window.signIn = signIn;
