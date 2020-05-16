const tabs = document.querySelectorAll('.tabs a') 

for (var i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', function(e) {

    const li = this.parentNode
    const ul = this.parentNode.parentNode
    const div = this.parentNode.parentNode.parentNode.parentNode

    if (li.classList.contains('active')){
      return false
    }

      ul.querySelector('.active').classList.remove('active')
      li.classList.add('active')

      div.querySelector('.tabs_content .active').classList.remove('active')
      div.querySelector(this.getAttribute('href')).classList.add('active')

  })
}
