/**
 * Function to scroll to a specific element.
 * @param {*} path - The id of the element to scroll to.
 */
export const goTo = (path) => {
  document
    .getElementById(path)
    .scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
};

/**
 * Function to sleep for a given amount of time.
 * @param {*} ms - The amount of time to sleep in milliseconds.
 * @returns A promise that resolves after the given amount of time.
 */
const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * Function to reveal elements when they are visible on the screen.
 */
const reveal = () => {
  const elements = document.querySelectorAll(".project-box");
  const visibleThreshold = 150;
  const windowHeight = window.innerHeight;

  const reveal = [{ opacity: 1, transform: "translateX(0)" }];
  const revealed = [];

  elements.forEach(async (element) => {
    const top = element.getBoundingClientRect().top;

    if (visibleThreshold < windowHeight - top && !revealed.includes(element)) {
      element.animate(reveal, 1000);

      await sleep(1000);
      element.style.opacity = 1;
      element.style.transform = "translateX(0)";
      revealed.push(element);
    }
  });
};

// Add event listener to reveal elements when they are visible on the screen.
window.addEventListener("scroll", reveal);
