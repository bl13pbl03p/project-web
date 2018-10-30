// Source: https://developers.google.com/recaptcha/docs/display
const onloadCallback = function() {
  alert("grecaptcha is ready!")
}

function showMobile() {
  const button = document.querySelector('#filter-mobile')

  button.addEventListener('click', () => {
    console.log('Filter is open')
    this.classList.toggle('open')
  })
}

showMobile()
