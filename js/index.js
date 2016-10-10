$(document).ready(start);

function start(){
  $('.side-menu-button').click(slideMenuToggle);
}

function slideMenuToggle(){
  $('.slidey-menu').toggleClass('open');
}
