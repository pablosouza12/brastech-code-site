
const NUM = "81989137726";
const wa = (m) => "https://wa.me/" + NUM + "?text=" + encodeURIComponent(m);
document.querySelectorAll("[data-msg]").forEach((a) => {
  a.href = wa(a.dataset.msg);
  a.target = "_blank";
  a.rel = "noopener";
});
const sc = document.getElementById("scene"),
  cs = ["rgba(124,58,237,.6)", "rgba(255,107,74,.65)"];
[
  [6, 8, 56, 0, 9, 6],
  [80, 4, 36, 1, 7, 5],
  [2, 66, 40, 1, 11, 7],
  [76, 62, 64, 0, 13, 8],
  [46, 86, 28, 0, 8, 4],
  [38, 2, 26, 1, 10, 5],
].forEach(([x, y, s, k, t, d], n) => {
  const w = document.createElement("div");
  w.className = "cw";
  w.style.cssText =
    "--x:" +
    x +
    "%;--y:" +
    y +
    "%;--s:" +
    s +
    "px;--c:" +
    cs[k] +
    ";--t:" +
    t +
    "s;--d:" +
    d +
    "s;animation-delay:-" +
    n +
    "s";
  w.innerHTML = "<div class=cube>" + "<i></i>".repeat(6) + "</div>";
  if (n % 2) w.firstChild.style.animationDirection = "reverse";
  sc.appendChild(w);
});
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("on");
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.15 },
  );
  document
    .querySelectorAll("section h2,.sub,.svc,.steps li,.why>div,.card,.cta-box")
    .forEach((el) => {
      el.classList.add("rv");
      io.observe(el);
    });
}
