
const slackNameElement = document.querySelector('[data-testid="slackUserName"]');
const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');


const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDate = new Date();
const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];


currentDayElement.textContent = `Current Day: ${currentDayOfWeek}`;


const currentUTCTime = currentDate.getTime();


currentUTCTimeElement.textContent = `Current UTC Time: ${currentUTCTime} milliseconds`;
