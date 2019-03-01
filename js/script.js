var form = document.querySelector('.booking-form');
var checkinDate = form.querySelector('input[name="date-checkin"]');
var checkoutDate = form.querySelector('input[name="date-checkout"]');
var adults = form.querySelector('input[id="adults"]');
var children = form.querySelector('input[id="children"]');

var buttonShowForm = document.querySelector('.booking__button-map');

var isStorageSupport = true;
var storage = '';
try {
  storage = localStorage.getItem('adults');
  storage = localStorage.getItem('children');
} catch (err) {
  isStorageSupport = false;
}

form.addEventListener('submit', function(evt) {
  if (!checkinDate.value || !checkoutDate.value || !adults.value || !children.value) {
    evt.preventDefault();
    form.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('adults', adults.value);
      localStorage.setItem('children', children.value);
    }
  }
})

buttonShowForm.addEventListener('click', function(evt) {
  evt.preventDefault();
  form.classList.toggle('modal-show');
  form.classList.remove('modal-error');
});
