var radios = document.querySelectorAll('input[type=radio][name="record-type"]');

function changeHandler(event) {
   if ( this.value === 'red_flag' ) {
     console.log('value', 'red_flag');
   } else if ( this.value === 'inteverntion' ) {
      console.log('value', 'inteverntion');
   }
}

Array.prototype.forEach.call(radios, function(radio) {alert("running")
   radio.addEventListener('change', changeHandler);
});
