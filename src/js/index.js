const resume = document.querySelector('#resume');
const projects = document.querySelector('#projects');
const languages = document.querySelector('#languages');
const eduction = document.querySelector('#eduction');
const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const container = document.querySelector('.container');

const sheets = document.querySelectorAll('.sheet');

sheets.forEach((sheet) => {
  // console.log(sheet);
  sheet.addEventListener('click', ($event) => {
    const selected = event.target;

    if (event.target.classList.contains('bookmark')) {
      sheets.forEach((sheet) => {
        if (selected.parentNode !== sheet) {
          sheet.classList.remove('selected');
        } else {
          selected.parentNode.classList.add('selected');
        }
      });
    }
  });
});
