document.addEventListener("DOMContentLoaded", () => {
  function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString().split(" ")[4];
    const dayOfWeek = now.toLocaleDateString("en-US", { weekday: "long" });

    document.getElementById(
      "currentTimeUTC"
    ).textContent = `Current Time (UTC): ${utcTime}`;
    document.getElementById(
      "currentDay"
    ).textContent = `Current Day: ${dayOfWeek}`;
  }

  updateTime();
  setInterval(updateTime, 1000);
});
