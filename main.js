// Shrink "navigation" when user scrolls down # pixels from the top of the document
function shrinkNavbar() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById('navigation').style.top = '4%';
    document.getElementById('navigation').style.fontSize = '1em';
    document.getElementById('logo').style.top = '1%';
  } else {
    document.getElementById('navigation').style.top = '';
    document.getElementById('navigation').style.fontSize = '';
    document.getElementById('logo').style.top = '';
  }
}

window.onscroll = function () {
  shrinkNavbar()
};

// open main when arrow down btns or nav links are clicked
function openMain() {
  document.getElementById('main').style.display = 'block';
}

// close main when arrow up or logo is clicked
function closeMain() {
  setTimeout(
    function () {
      document.getElementById('main').style.display = 'none';
    }, 800);
}