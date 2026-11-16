// your JavaScript file
const container = document.querySelector("#container");

// METHOD 1
function alertFunction() {
  alert("YAY! YOU DID IT!");
}

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const paragraph = document.createElement('p');
paragraph.style.color = 'red';
paragraph.textContent = "Hey I’m red!"

const h3 = document.createElement('h3');
h3.textContent = "I’m a blue h3!"
h3.style.cssText = " color: blue;"

const parent = document.createElement('div');
parent.setAttribute('style', 'border: 2px solid black; background-color: pink;');

const firstChild = document.createElement('h1')
firstChild.innerText = 'I’m in a div'

const secondChild = document.createElement('p')
secondChild.innerText = 'Me too!'

container.appendChild(content);
container.appendChild(paragraph);
container.appendChild(h3);
parent.appendChild(firstChild);
parent.appendChild(secondChild);
container.appendChild(parent);

