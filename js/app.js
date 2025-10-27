document.addEventListener("DOMContentLoaded", () => {
  const screens = document.querySelectorAll(".screen");
  const loginBtn = document.getElementById("loginBtn");
  const nameInput = document.getElementById("nameInput");
  const pinInput = document.getElementById("pinInput");
  const menuButtons = document.querySelectorAll(".menu-btn");
  const backButtons = document.querySelectorAll(".back-btn");

  function showScreen(id) {
    screens.forEach(screen => screen.classList.remove("active"));
    document.getElementById(id).classList.add("active");
  }

  // Вход по PIN
  loginBtn.addEventListener("click", () => {
    const pin = pinInput.value.trim();
    const name = nameInput.value.trim();

    if (pin === "7856" && name !== "") {
      const audio = new Audio("assets/sound/ding.mp3");
      audio.play();
      showScreen("menu-screen");
    } else {
      alert("Access denied. Try again.");
    }
  });

  // Переходы по разделам
  menuButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-target");
      showScreen(target);
    });
  });

  // Кнопки «Назад»
  backButtons.forEach(btn => {
    btn.addEventListener("click", () => showScreen("menu-screen"));
  });
});
