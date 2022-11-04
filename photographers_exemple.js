let photographers = [{
  name: "toto",               image:'https://st2.depositphotos.com/1000877/5947/i/950/depositphotos_59478951-stock-photo-red-kitten.jpg',
  description: 'toto le plus beau',
  price: 299
},{
  name: "josé",
  image: 'https://st2.depositphotos.com/1000877/5947/i/950/depositphotos_59478951-stock-photo-red-kitten.jpg',
  description: 'José et son chapeau',
  price: 199
},{
  name: "Michel",
  image: 'https://st2.depositphotos.com/1000877/5947/i/950/depositphotos_59478951-stock-photo-red-kitten.jpg',
  description: 'Michel le roi des michels',
  price: 599
},{
  name: "Gerard",
  image: 'https://st2.depositphotos.com/1000877/5947/i/950/depositphotos_59478951-stock-photo-red-kitten.jpg',
  description: 'Gérard dans le plumard',
  price: 300
}]

let mainDiv = document.getElementById('main')


photographers.forEach(photographer => {
console.log(photographer)
  let div = document.createElement('div')
  let nom = document.createElement('h1')
  let image = document.createElement('img')
  let description = document.createElement('p')
  let prix = document.createElement('span')
  
  
  nom.innerText = photographer.name
  description.innerText = photographer.description
  prix.innerText = photographer.price
  
  image.setAttribute("src", photographer.image)
  image.setAttribute("alt", photographer.nom)
  
  div.append(nom)
  div.append(image)
  div.append(description)
  div.append(prix)
  
  mainDiv.append(div)
  
})
