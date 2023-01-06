const input = document.querySelector("input");

input.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    window.electronAPI.ping(input.value);
  }
});
