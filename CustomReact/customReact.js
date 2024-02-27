function customRender(elem, container) {
  // const domElem = document.createElement(elem.type)
  // domElem.innerHTML = elem.children
  // domElem.setAttribute('href', elem.props.href)
  // domElem.setAttribute('target', elem.props.target)

  // container.appendChild(domElem)

  const domElem = document.createElement(elem.type);
  domElem.innerHTML = elem.children;

  for (const prop in elem.props) {
    console.log(prop);
    if (prop == "children") {
      return;
    }
    domElem.setAttribute(prop, elem.props[prop]);
  }
  function style() {
    let s = "";
    for (const style in elem.styles) {
      s += `${style.replace("_", "-")}: ${elem.styles[style]};`;
    }
    return s;
  }

  domElem.setAttribute("style", style());
  container.appendChild(domElem);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click to visite google site ",
  styles: {
    color: "red",
    background: "white",
    margin: "auto",
    padding: "100px",
    font_size: "40px",
    text_transform: "uppercase",
  },
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
