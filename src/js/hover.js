
var navItems = document.getElementsByClassName('hoverable');

function applyHoverEffect() {
  this.style.backgroundColor = '#a3a3a3';
  this.style.color = '#fff';
}

function removeHoverEffect() {
  this.style.backgroundColor = '';
  this.style.color = '';
}

for (var i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener('mouseover', applyHoverEffect);
  navItems[i].addEventListener('mouseout', removeHoverEffect);
}