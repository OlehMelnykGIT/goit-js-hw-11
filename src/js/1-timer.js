import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const datePicker = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');
startButton.disabled = true;

const values = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

let userSelectedDate = null;
let timerId = null;

flatpickr(datePicker, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (!selectedDate || selectedDate.getTime() <= Date.now()) {
      userSelectedDate = null;
      startButton.disabled = true;
      if (selectedDate) {
        iziToast.warning({ message: 'Please choose a date in the future' });
      }
      return;
    }

    userSelectedDate = selectedDate;
    startButton.disabled = false;
  },
});

startButton.addEventListener('click', () => {
  if (!userSelectedDate) return;

  startButton.disabled = true;
  datePicker.disabled = true;

  updateTimer();

  if (!userSelectedDate) return;

  timerId = setInterval(updateTimer, 1000);
});

function updateTimer() {
  const remainingMs = Math.max(userSelectedDate.getTime() - Date.now(), 0);
  const time = convertMs(remainingMs);

  Object.entries(time).forEach(([unit, value]) => {
    values[unit].textContent = addLeadingZero(value);
  });

  if (remainingMs === 0) {
    clearInterval(timerId);
    timerId = null;
    datePicker.disabled = false;
    startButton.disabled = true;
    userSelectedDate = null;
  }
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  return {
    days: Math.floor(ms / day),
    hours: Math.floor((ms % day) / hour),
    minutes: Math.floor(((ms % day) % hour) / minute),
    seconds: Math.floor((((ms % day) % hour) % minute) / second),
  };
}
