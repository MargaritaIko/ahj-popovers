/**
 * @jest-environment jsdom
 */

import Popover from "../app";

test("Popup message should render", () => {
  const popUp = new Popover(
    "Secret message just for you",
    "This message will disappear in 5 sec..."
  );
  const received = document.createElement("div");
  received.classList.add("popup");
  received.style = "margin-top: -146px; margin-left: -6.5px;";
  received.innerHTML = `
    <h3 class="popoverTitle">Secret message just for you</h3>
    <div class="popoverContent">This message will disappear in 5 sec...</div>
    `;
  expect(received.innerHTML).toEqual(popUp.markup());
});

test("Widget is created", () => {
  const widget = new Popover("title", "content");
  const expected = {
    title: "title",
    content: "content",
    _flag: false,
  };
  expect(widget).toEqual(expected);
});
