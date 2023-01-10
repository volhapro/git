const h2List = document.querySelectorAll('h2')
console.log(h2List)
const headingAnother = h2List[1]
console.log(headingAnother)
const heading3 = h2List[h2List.length - 1]
console.log(heading3)

setTimeout(() => {
    addStylesTo(heading, 'JavaScript')
}, 2000)

setTimeout(() => {
    addStylesTo(heading2, 'All good!', 'blue', '2rem')
}, 4000)

const link = heading3.querySelector('a')
link.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('clc', event.target.getAttribute('href'))
    const url = event.target.getAttribute('href')
    window.location = url
})

setTimeout(() => {
    addStylesTo(link, 'Practice more', 'yellow')//or heading3.children[0]
}, 3000)

function addStylesTo(node, text, color = 'red', fontSize) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2rem'
    node.style.display = 'block'
    node.style.display = '100%'
    if (fontSize) {
        node.style.fontSize = fontSize
    }
}

heading.onclick = () => {
   if (heading.style.color === 'red') {
    heading.style.color = '#000'
    heading.style.backgroundColor = '#fff'
   } else {
    heading.style.color = 'red'
    heading.style.backgroundColor = '#000'
   }
}

heading2.addEventListener('dblclick', () => {
    if (heading2.style.color === 'blue') {
        heading2.style.color = '#000'
        heading2.style.backgroundColor = '#fff'
       } else {
        heading2.style.color = 'blue'
        heading2.style.backgroundColor = '#000'
       }
})
