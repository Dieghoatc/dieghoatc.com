interface hamburguerMenuProps {
  hamburgerIcon: HTMLElement | null;
  hamburguerMenuList: HTMLElement | null;
  toogleBarOne: HTMLElement | null;
  toogleBarTwo: HTMLElement | null;
  listMenu: HTMLElement | null;
}

export function hamburguerMenu({
  hamburgerIcon,
  hamburguerMenuList,
  toogleBarOne,
  toogleBarTwo,
  listMenu,
}:hamburguerMenuProps) {
  let toogle = false;

  function hamburgerToggle() {
    if (hamburgerIcon) {
      hamburgerIcon.addEventListener("click", () => {
        toogle = !toogle;

        if (toogle) {
          toggleOn();
        } else {
          toggleOff();
        }
      });
    }
  }

  if (listMenu) {
    listMenu.addEventListener("click", () => {
      toggleOff();
    });
  }

  function toggleOn() {
    toogleBarOne?.classList.add("toggle_bar_up_transform");
    toogleBarTwo?.classList.add("toggle_bar_down_transform");
    hamburguerMenuList?.classList.remove("hamburguer_menu_hidden");
    hamburguerMenuList?.classList.add("hamburguer_menu_show");
    document.body.style.overflow = "hidden";
  }
  function toggleOff() {
    toogleBarOne?.classList.remove("toggle_bar_up_transform");
    toogleBarTwo?.classList.remove("toggle_bar_down_transform");
    hamburguerMenuList?.classList.add("hamburguer_menu_hidden");
    hamburguerMenuList?.classList.remove("hamburguer_menu_show");
    document.body.style.overflow = "";
  }

  hamburgerToggle();
}
