const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const loginBtn = $('.js-btn-login')
const registerBtn = $('.js-btn-register')
const registerBtnSwitch = $('#btn-switch-register')
const loginBtnSwitch = $('#btn-switch-login')
const modal = $('#modal')
const modalOverlay = $('#modal .modal__overlay')
const loginModal = $('#login-modal')
const registerModal = $('#register-modal')

function removeModalActive() {
    const modalActive = $('.auth-form.active')
    if (modalActive) {
        modalActive.classList.remove('active')
    }
}

loginBtn.onclick = function () {
    modal.classList.add('open')
    loginModal.classList.add('active')
}

registerBtn.onclick = function () {
    modal.classList.add('open')
    registerModal.classList.add('active')
}

modalOverlay.onclick = function () {
    modal.classList.remove('open')
    removeModalActive()
}

registerBtnSwitch.onclick = function () {
    removeModalActive();
    registerModal.classList.add('active')
}

loginBtnSwitch.onclick = function () {
    removeModalActive();
    loginModal.classList.add('active')
}