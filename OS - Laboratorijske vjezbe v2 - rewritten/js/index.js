/* Progress bar and scrolling background */
const pageProgressBar = document.querySelector(".progress-bar");
const progBarShowOnPx = 10; // amount of pixels before bar is shown

const backToTopButton = document.querySelector(".backToTopBtn");
const bttBtnShowOnPx = 100; // amount of pixels before button is shown

const backgroundImage = document.querySelector(".background-image");

const scrollContainer = () => {
  return document.documentElement || document.body;
};

backToTopButton.addEventListener("click", () => {
  document.body.scrollIntoView();
});

document.addEventListener("scroll", () => {
  const scrolledPercentage =
    (scrollContainer().scrollTop /
      (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
    100;

  // console.log(scrolledPercentage);
  pageProgressBar.style.width = scrolledPercentage + "%";

  if (scrollContainer().scrollTop > progBarShowOnPx)
    pageProgressBar.classList.remove("hidden");
  else pageProgressBar.classList.add("hidden");

  if (scrollContainer().scrollTop > bttBtnShowOnPx)
    backToTopButton.classList.remove("hidden");
  else backToTopButton.classList.add("hidden");

  backgroundImage.style.left = -scrolledPercentage / 2 + "%";
});

/* Code modal */
const modal = document.querySelector(".modal");
const randomPrimeCode = document.querySelector(".random-prime-code");
const sigactionCode = document.querySelector(".sigaction-code");

// When the user clicks on the button, open the modal
document
  .querySelector(".modal-random-prime-btn")
  .addEventListener("click", () => {
    modal.style.display = "block";

    randomPrimeCode.style.display = "block";
    sigactionCode.style.display = "none";
  });
document.querySelector(".modal-sigaction-btn").addEventListener("click", () => {
  modal.style.display = "block";

  randomPrimeCode.style.display = "none";
  sigactionCode.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
document.querySelector(".modal-close-btn").addEventListener("click", () => {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close the modal
window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
