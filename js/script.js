function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.add('active');
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.remove('active');
}
gsap.to("#right-side", {
  "--bgY": "20%",
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});
gsap.to("#left-side", {
  "--bgY": "20%",
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});
const split = new SplitText(".title", { type: "words,chars" });

gsap.from(split.chars, {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "back.out(1.7)",
  stagger: 0.05
});
window.addEventListener("load", () => {
      document.getElementById("preloader").style.display = "none";
      document.getElementById("content").style.display = "block";
    });