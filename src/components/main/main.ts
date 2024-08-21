export function scrollBlur() {
  window.addEventListener("scroll", function () {
    const header = document.getElementById("projects_section");

    if (!header) return;

    if (window.scrollY > 411) {
      header?.classList.add("blur");
    } else {
      header.classList.remove("blur");
    }
  });
}
