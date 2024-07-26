let formInput= document.getElementById('formInput');
let titleinput= document.getElementById('titleInput');
let paragraphInput= document.getElementById('paragraphInput');
let button= document.getElementById('button');
let divParent= document.getElementById('divParent');

button.addEventListener('click', function(event) {
    event.preventDefault();
    let divSmall= document.createElement('div');
    let article= document.createElement('article');
    let title= document.createElement('h2');
    let paragraph= document.createElement('p');
    divParent.classList= 'articleClass';
    divSmall.classList= 'articleClass1';
    article.style.padding= '15px';
    title.textContent=titleinput.value; 
    paragraph.textContent= paragraphInput.value;
    divParent.appendChild(divSmall);
    divSmall.appendChild(article);
    article.appendChild(title);
    article.appendChild(paragraph);
    titleinput.value= '';
    paragraphInput.value= '';
} )