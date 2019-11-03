const hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click', function() {
  const top_span = document.querySelector('.top_span')
  const bottom_span = document.querySelector('.bottom_span')
  const middle_span = document.querySelector('.middle_span')

  middle_span.classList.toggle('delete_span')
  top_span.classList.toggle('is_close_top_span')
  bottom_span.classList.toggle('is_close_bottom_span')
})

hamburger.addEventListener('click', function() {
  var menu = document.querySelector('.menu')

  menu.classList.toggle('open_menu')
})
