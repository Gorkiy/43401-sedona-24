const form = document.querySelector('.booking-form');
const checkinDate = form.querySelector('input[name="date-checkin"]');
const checkoutDate = form.querySelector('input[name="date-checkout"]');
const adults = form.querySelector('input[id="adults"]');
const children = form.querySelector('input[id="children"]');

let isStorageSupport = true;
let storage = '';
try {
  storage = localStorage.getItem('adults');
  storage = localStorage.getItem('children');
} catch (err) {
  isStorageSupport = false;
}

form.addEventListener('submit', event => {
  if (!checkinDate.value || !checkoutDate.value || !adults.value || !children.value) {
    event.preventDefault();
    console.log('Нужно заполнить все обязательные поля');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('adults', adults.value);
      localStorage.setItem('children', children.value);
    }
  }
})
