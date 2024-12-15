// // Header
// fetch("./common/header.html")
//   .then((response) => response.text())
//   .then((data) => {
//     document.getElementById("header").innerHTML = data;
//   })
//   .catch((error) => {
//     console.error("Error loading header:", error);
//   });

// Footer
fetch("./common/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  })
  .catch((error) => {
    console.error("Error loading footer:", error);
  });
