let divs = document.getElementsByTagName('div')
let sections = document.getElementsByTagName('section')
let colors = ["#1abc9c", "#2ecc71", "#f1c40f", "#ecf0f1"]

for (var i = 0; i < sections.length; i++) {
  sections[i].style.backgroundColor = colors[i]
}

window.addEventListener('scroll', function(){
for (var i in divs) {
  let position = i*800
  if (document.documentElement.scrollTop >= position || document.documentElement.scrollTop < position + 800) {
    divs[i].classList.remove('hidden')
    divs[i].classList.add('show')
  }
  if (document.documentElement.scrollTop < position || document.documentElement.scrollTop > position + 800) {
    divs[i].classList.remove('show')
    divs[i].classList.add('hidden')
  }
}
});
