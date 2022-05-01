// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];
// let i=1;
// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   if(i=1){
//       modal.style.display = "block";
//   }
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
const open = document.getElementById("myBtn");
const container = document.getElementById("modal");
const close = document.getElementById("closed");
const overlay = document.getElementById("overlay");

      open.addEventListener("click", () => {
        container.classList.add("active");
        overlay.classList.add("active");
      });
      close.addEventListener("click", () => {
        container.classList.remove("active");
        overlay.classList.remove("active");
      });