const categories = document.querySelectorAll('.item')
console.log(`Number of categories:${categories.length}`)
const titles = document.querySelectorAll("h2")
titles.forEach( title => {
    console.log(`Category: ${title.innerText}`)
    console.log(`Elements: ${title.nextElementSibling.children.length}`)
});
