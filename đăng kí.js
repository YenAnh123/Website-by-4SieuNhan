document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll("input[required]");
  const button = document.querySelector(".nut");

  function checkInputs() {
    let allFilled = true;
    inputs.forEach(input => {
      if (input.value.trim() === "") {
        allFilled = false;
      }
    });

    if (allFilled) {
      button.classList.add("enabled");
      button.disabled = false;
    } else {
      button.classList.remove("enabled");
      button.disabled = true;
    }
  }

  inputs.forEach(input => {
    input.addEventListener("input", checkInputs);
  });
});
