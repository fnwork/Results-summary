fetch('data.json').then(function(response){
  return response.json();
}).then(function(data){
  for(let i of data){
    
    let cardBx = document.createElement('div');
    cardBx.classList.add('card');
    let topPt = document.createElement('div');
    topPt.classList.add('top');
    let image = document.createElement('img');
    image.setAttribute('src', i.icon);
    let h3 = document.createElement('h3')
    h3.innerText = i.category;
    topPt.appendChild(image);
    topPt.appendChild(h3)
    cardBx.appendChild(topPt)

    let brace = document.createElement('i');
    cardBx.appendChild(brace);

    let paragraph = document.createElement('p')
    let span = document.createElement('span')
    span.innerText = i.score;
    paragraph.appendChild(span)
    paragraph.innerHTML += " / 100" 
    cardBx.appendChild(paragraph);

    document.getElementById('box').appendChild(cardBx);
  }
})

