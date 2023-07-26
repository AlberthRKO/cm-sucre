import AOS from "aos";
import "aos/dist/aos.css";

export default () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  }); // Inicializa AOS
  window.addEventListener("load", () => {
    aos_init();
  });
};
