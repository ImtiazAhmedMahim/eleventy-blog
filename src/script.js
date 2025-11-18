<<<<<<< HEAD
/* "use strict";
let acc = document.querySelector(".accounting-sec");
const fetchData = function () {
  fetch("/contact/index.html")
    .then((res) => {
      if (!res.ok) throw new Error();
      return res.text();
    })
    .then((data) => {
      acc.innerHTML = data;
    });
};
fetchData();
 */
// Reading Progress Bar
window.addEventListener("scroll", () => {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
});
=======
/* "use strict";
let acc = document.querySelector(".accounting-sec");
const fetchData = function () {
  fetch("/contact/index.html")
    .then((res) => {
      if (!res.ok) throw new Error();
      return res.text();
    })
    .then((data) => {
      acc.innerHTML = data;
    });
};
fetchData();
 */
>>>>>>> 024a96926a16339a4f5bcfb5b2a19ba10b94a817
