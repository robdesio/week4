// document.children[0].children[1].children[0].children[1].innerHTML = `Movies to Watch`

let pageTitleElement = document.querySelector(`.page-title`)
// console.log(pageTitleElement)

// modify title to "Movies to Watch"
pageTitleElement.innerHTML = `Movies to Watch`

// find the movies

let movieElements = document.querySelectorAll(`.movies-to-watch li`)
// console.log(movieElements)

// for (i = 0 ; i < movieElements.length; i++) {
//     // store reference for each movie <li>
//     let movieElement = movieElements[i]
//     // console.log each element
//     // console.log(movieElement)

//     movieElement.innerHTML = `The Martian`

// }

let movieList = document.querySelector(`.movies-to-watch`)
console.log(movieList)
// Insert a new movie at the end of the list
movieList.insertAdjacentHTML(`beforeend`, `
<li>The Martian</li>`
)