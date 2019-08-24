// Back to top Button
function backToTop() {
  document.documentElement.scrollTop = 0;
  document.getElementById('back-to-top-btn').style.display = '';
}

function toggleBtnDisplay() {
  if (document.body.scrollTop > 560 || document.documentElement.scrollTop > 560) {
    document.getElementById("back-to-top-btn").style.display = "block";
  } else {
    document.getElementById("back-to-top-btn").style.display = "none";
  }
}

// when user scrolls, trigger the following functions
window.onscroll = function () {
  toggleBtnDisplay();
};