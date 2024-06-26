document.getElementById("checkTimeBtn").addEventListener("click", function () {
  const messageElement = document.getElementById("message");
  const currentHour = new Date().getHours();

  if (currentHour >= 18 || currentHour < 6) {
    messageElement.textContent = "It's nighttime!";
    messageElement.style.color = "blue";
  } else {
    messageElement.textContent = "It's daytime!";
    messageElement.style.color = "orange";
  }
});
