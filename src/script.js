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
