// localization.test.js
describe("Localization Demo", () => {
  test("Switching language updates UI text", () => {
    document.body.innerHTML = `
      <p id="greeting">Hello</p>
      <button id="switch">Switch to Spanish</button>
    `;

    const greeting = document.getElementById("greeting");
    const switchBtn = document.getElementById("switch");

    // Simulate language switch
    switchBtn.addEventListener("click", () => {
      greeting.textContent = "Hola";
    });

    // Trigger click
    switchBtn.click();

    // Verify text updated
    expect(greeting.textContent).toBe("Hola");
  });
});
