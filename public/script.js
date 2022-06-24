if (typeof screen.orientation !== 'undefined') {
  docSlider.init();
}
else {
  console.log("mobile")
}

document.getElementById("0").addEventListener("click", function() {
  docSlider.jumpPage(0);
})