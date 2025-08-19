import { MOCK_DATA } from "../mock/mockData";
import "./styleAutorize.css";

function signIn() {
  alert("the implementation is not ready yet");
}

const updateFormData = {
  nickName: MOCK_DATA.entered.nickName,
  password: MOCK_DATA.entered.password,
};

let checkValidState = false;

document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("submitBtn");
  const loginBtn = document.getElementById("loginBtn");
  const form = document.getElementById("formID");
  const emailInput = document.getElementById("emailID");
  const passwordInput = document.getElementById("passwordID");
  const emailHelp = document.getElementById("emailHelp");
  const passwordHelp = document.getElementById("passwordHelp");

  form.addEventListener("submit", function (event) {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add("was-validated");
  });

  const liveValidate = (el, helpText) => {
    if (el.checkValidity()) {
      el.classList.add("is-valid");
      el.classList.remove("is-invalid");
      helpText.style.color = "green";
    } else {
      el.classList.add("is-invalid");
      el.classList.remove("is-valid");
      helpText.style.color = "red";
    }
  };

  emailInput.addEventListener("input", () =>
    liveValidate(emailInput, emailHelp)
  );
  passwordInput.addEventListener("input", () =>
    liveValidate(passwordInput, passwordHelp)
  );

  submitBtn.addEventListener("click", function (ev) {
    const checkLabelStatus = document.getElementById("invalidCheck");
    form.classList.add("error-handler");
    if (checkLabelStatus) {
      checkLabelStatus.style.color = "red";
    }
    getFormData();
  });

  loginBtn.addEventListener("click", signIn);
});

function getFormData() {
  const form = document.getElementById("formID");
  const checkBox = document.getElementById("chekboxId");
  const checkLabel = document.querySelector(".form-check-label");

  checkBox.addEventListener("change", function (event) {
    checkValidState = event.target.checked;
    if (!checkValidState) {
      checkLabel.style.color = "red";
    } else {
      checkLabel.style.color = "green";
    }
  });

  if (form) {
    const btnSet = document.getElementById("submitBtn");

    btnSet.addEventListener("click", function () {
      const labelS = document.querySelectorAll("form label");
      if (labelS) {
        for (let i = 0; i < labelS.length; i++) {
          labelS[i].classList.add("error-handler");
        }
      }
    });
    const { entered } = MOCK_DATA;
    updateFormData.nickName = form.elements.emailID.value;
    updateFormData.password = form.elements.passwordID.value;
    console.log("updateFormData", updateFormData);

    if (
      updateFormData.nickName === entered.nickName ||
      updateFormData.password === entered.password
    ) {
      form.checkValidity();
      form.classList.add("error-handler");
      form.classList.add("was-validated");
      checkValidState = true;
      form.reset();
      if (checkValidState) {
        hideForm();
      }
    } else {
      alert("DATA INCORRECT");
    }
  }
}

const hideForm = () => {
  const getForID = document.querySelector(".form-content");
  const spinnerBlock = document.getElementById("spinnerId");
  getForID.style.display = "none";
  spinnerBlock.style.display = "flex";

  setTimeout(() => {
    window.location.href = "/";
  }, 3000);
};

const { header } = MOCK_DATA;

window.getFormData = getFormData;
window.signIn = signIn;
