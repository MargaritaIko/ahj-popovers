import Popover from "../popover";

document.body.innerHTML = '<div class="container"></div>';

const container = document.querySelector(".container");
const popover = new Popover(container);
popover.init();

const { button } = popover;

test("Opening the popover", () => {
  button.click();
  expect(document.querySelector(".popover")).not.toBeNull();
});

test("Hiding the popover", () => {
  button.click();
  expect(document.querySelector(".popover")).toBeNull();
});
