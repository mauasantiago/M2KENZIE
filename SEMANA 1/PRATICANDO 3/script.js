const article = document.createElement("article");
const articleTitle = document.createElement("h2");
const articleResume = document.createElement("p");
const articleButton = document.createElement("button");

articleTitle.innerText = 
  "Como criar elementos HTRML de forma Dinâmica, utilizando Javascript";
articleResume.innerText = 
  "Nesse post vamos aprender como criar elementeos utilizando o DOM";
articleButton.innerText = 
  "Acessar Conteúdo";

// console.log(article);
// console.log(articleTitle);
// console.log(articleResume);
// console.log(articleButton);

article.appendChild(articleTitle);
article.appendChild(articleResume);
article.appendChild(articleButton);
console.log(article);

const body = document.querySelector("body");

body.appendChild(article);