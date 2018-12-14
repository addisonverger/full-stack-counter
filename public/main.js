fetch('/value')
.then(function (response) {
  return response.text()
})
.then(function (response) {
  document.getElementById('counter').innerHTML = response
})

const btnIncrement = document.getElementById('increment')
btnIncrement.addEventListener('click', function () {
  fetch('/increment')
  .then(function (response) {
    return response.text()
  })
  .then(function (response) {
    document.getElementById('counter').innerHTML = response
  })
})

const btnDecrement = document.getElementById('decrement')
btnDecrement.addEventListener('click', function () {
  fetch('/decrement')
  .then(function (response) {
    return response.text()
  })
  .then(function (response) {
    document.getElementById('counter').innerHTML = response
  })
})
