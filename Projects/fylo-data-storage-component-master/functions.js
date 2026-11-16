const slider = document.querySelector(".slider");

function updateSliderFill() {
  const percent =
    ((slider.value - slider.min) / (slider.max - slider.min)) * 100;

  slider.style.setProperty("--slider-fill", `${percent}%`);
}

slider.addEventListener("input", updateSliderFill);
updateSliderFill();
