// JavaScript to toggle the dropdown menu and update the colors

const settingsBtn = document.querySelector('.settings button');
const dropdownMenu = document.querySelector('.settings .dropdown');

settingsBtn.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
});

const colorPickers = document.querySelectorAll('.settings .dropdown input[type="color"]');

colorPickers.forEach((colorPicker) => {
  colorPicker.addEventListener('change', (event) => {
    const selectedColor = event.target.value;
    const targetId = event.target.id.replace('-picker', '');
    const targetElement = document.getElementById(targetId);

    targetElement.style.backgroundColor = selectedColor;
    document.body.style.setProperty(`--${targetId}`, selectedColor);
  });
});