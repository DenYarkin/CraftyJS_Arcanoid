// TODO: Check if div#menu-js is not found
// TODO: Add SelectField to MenuBuilder
// TODO: Add VerticalSpace to MenuBuilder

const div = document.getElementById("menu-js");
// const canvas = document.getElementById("canvas");

const MenuBuilder = {
  html: content => content,

  h1: content => {
    Menu.langs.forEach(lang =>
      content[lang] = `<h1 class="menu-js__h1">
          ${(content.all? content.all : content[lang])}
        </h1>`
    );
    return content;
  },

  button: (id, content, onClick) => {
    content.id = id;
    content.click = onClick;
    Menu.langs.forEach(lang =>
      content[lang] = `<div id=${content.id} class="menu-js__button">
          ${(content.all? content.all : content[lang])}
        </div>`
    );
    return content;
  }
}

Menu = {
  add: function(title, content) {
    this.scenes[title] = content;
  },

  load: function(title) {
    div.innerHTML = this.scenes[title].map(e => e[this.lang]).join('\n');
    this.scenes[title].forEach(e => {
      if (e.click) {
        document.getElementById(e.id).addEventListener("click", e.click);
      }
    });
  },

  hide:   () => {div.hidden = true/*; canvas.hidden = true*/},
  show:   () => div.hidden = false,
  toggle: () => div.hidden = !div.hidden,

  lang: "EN",
  langs: ["EN"],
  scenes: {}
}

