let timerInterval;
let hours = 0;
let minutes = 0;
let seconds = 0;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  switch (message.action) {
    case 'start':
      if (!timerInterval) {
        timerInterval = setInterval(() => {
          seconds++;
          if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
              minutes = 0;
              hours++;
            }
          }
          chrome.storage.local.set({ hours, minutes, seconds });
        }, 1000);
      }
      break;
    case 'stop':
      clearInterval(timerInterval);
      timerInterval = null;
      break;
    case 'reset':
      clearInterval(timerInterval);
      timerInterval = null;
      hours = 0;
      minutes = 0;
      seconds = 0;
      chrome.storage.local.set({ hours, minutes, seconds });
      break;
    case 'get':
      sendResponse({ hours, minutes, seconds });
      break;
  }
});
