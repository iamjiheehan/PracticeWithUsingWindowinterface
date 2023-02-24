// Find the <h2> element and set its font color to white
const text = document.querySelector("h2");
text.style.setProperty("color", "white");

// Change the background color based on the window width
window.onresize = function () {
  const width = window.innerWidth;

  if (width < 768) {
    document.body.style.backgroundColor = "blue";
  } else if (width < 992) {
    document.body.style.backgroundColor = "purple";
  } else if (width < 1200) {
    document.body.style.backgroundColor = "yellow";
  } else {
    document.body.style.backgroundColor = "tomato";
  }
};
