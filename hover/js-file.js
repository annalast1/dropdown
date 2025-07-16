(function() {
   const dropdownBtn  = document.getElementById('dropdownBtn');
    dropdownBtn.addEventListener("mouseover", show);
})();

function show() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.style.display = "block";
};

window.onclick = function (event) {
   if (!event.target.matches('#dropdownMenu')) {
      const dropdownMenu = document.getElementById("dropdownMenu");
      dropdownMenu.style.display = "none";
   }
};

 