import "./style.scss";

const greet = (s: any) => {
  const el = document.querySelector("#app");
  el && (el.innerHTML = `<h1>${s}</h1>`);
};

greet("hello world!");

