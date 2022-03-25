export const setMinMaxAmount = (value) => {
  // Max amount - Set max amount to item stock if any
  if (value >= 10) {
    return 10;
  }
  // Min amount
  if (value < 0) {
    return 0;
  }
  return value;
};

export const changeButtonStyle = (element) => {
  element.innerText = "Added!";
  element.classList.add("green");
  setTimeout(() => {
    element.innerText = "Add to cart";
    element.classList.remove("green");
  }, 2500);
};
