const menu_btn = document.querySelector(".menu_btn");
const ham_bx_inn = document.querySelector(".ham_bx_inn");
const menu_section = document.querySelector(".menu_section");
const menu_inn = document.querySelector(".menu_inn");
const header = document.querySelector(".header");

menu_btn.addEventListener("click", menu_Click);

function menu_Click() {
  ham_bx_inn.classList.toggle("on");
  switch (ham_bx_inn.classList[1]) {
    case "on":
      ham_bx_inn.style.setProperty("--transform_first", "rotate(225deg)");
      ham_bx_inn.style.setProperty(
        "--transform",
        "rotate(90deg)"
      ); /* initial 270 */
      ham_bx_inn.style.setProperty("--opacity_menu", "0");
      ham_bx_inn.style.setProperty("--after_width", "30px");
      ham_bx_inn.style.setProperty("--after_top", "0");
      menu_section.classList.add("menu_active");
      menu_inn.style.display = "block";
      break;
    case undefined:
      ham_bx_inn.style.setProperty("--transform_first", "rotate(0deg)");
      ham_bx_inn.style.setProperty("--transform", "rotate(0deg)");
      ham_bx_inn.style.setProperty("--opacity_menu", "1");
      ham_bx_inn.style.setProperty("--after_width", "20px");
      ham_bx_inn.style.setProperty("--after_top", "-10px");
      menu_section.classList.remove("menu_active");
      menu_inn.style.display = "none";
      break;
  }
}

let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  let st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > 0) {
    header.style.boxShadow =
      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px";
    header.style.height = "70px";
  } else {
    header.style.boxShadow = "none";
    header.style.height = "100px";
  }
  if (st > lastScrollTop) {
    header.classList.add("down");
    if (menu_section.classList.contains("menu_active")) {
      ham_bx_inn.style.setProperty("--transform_first", "rotate(0deg)");
      ham_bx_inn.style.setProperty("--transform", "rotate(0deg)");
      ham_bx_inn.style.setProperty("--after_width", "20px");
      ham_bx_inn.style.setProperty("--after_top", "-10px");
      menu_section.classList.remove("menu_active");
      menu_inn.style.display = "none";
    }
  }
  if (st < lastScrollTop) {
    header.classList.remove("down");
    ham_bx_inn.classList.remove("on");
    ham_bx_inn.style.setProperty("--opacity_menu", "1");
  }
  lastScrollTop = st <= 0 ? 0 : st;
});
