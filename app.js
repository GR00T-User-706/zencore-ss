const profileUrl = "https://github.com/GR00T-User-706";

document.getElementById("year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  navigation.classList.toggle("is-open", !isOpen);
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
  });
});

const copyButton = document.getElementById("copy-profile");
const copyFeedback = document.getElementById("copy-feedback");

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(profileUrl);
    copyFeedback.textContent = "GitHub profile copied.";
  } catch {
    copyFeedback.textContent = profileUrl;
  }
});