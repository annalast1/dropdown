(function() {
    const dropdownBtn  = document.getElementById('dropdownBtn');
    dropdownBtn.addEventListener("click", show)
 })();

function show() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.style.display = "block";
 };

window.onclick = function(event) {
   if (!event.target.matches('#dropdownBtn')) {
       const dropdownMenu = document.getElementById("dropdownMenu");
      dropdownMenu.style.display = "none";
   }
;}
  
