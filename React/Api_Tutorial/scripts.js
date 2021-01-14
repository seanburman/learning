var request = new XMLHttpRequest()

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

var styler = "border-radius: 6px; padding: 20px;"

var expand = (data, value) => {
    console.log("OK")
    console.log(data)
    value = "Collapse"
    let el = document.getElementById(data[0])
    el.querySelector("p").textContent = data[1]
}


request.onload = function () {
    
    var data = JSON.parse(this.response);

    if (request.status >=200 & request.status < 400) {

        data.forEach((movie) => {
        const card = document.createElement('div')
        card.setAttribute('class', 'card')
        card.setAttribute('style',styler)
        card.id = `${movie.id}`
        console.log(card.id)

        const h1 = document.createElement('h1')
        h1.textContent = movie.title

        const h3 = document.createElement('h3')
        h3.textContent = "Release date: " + movie.release_date

        const p = document.createElement('p')
        description = movie.description
        movie.description = movie.description.substring(0, 100)

        p.textContent = `${movie.description}...`

        const button = document.createElement('button')
        button.textContent= "Expand"
        button.data = [`${card.id}`,`${description}`]
        button.setAttribute('onclick', 'expand(this.data, this.value)')

        container.appendChild(card)

        card.appendChild(h1)
        card.appendChild(h3)
        card.appendChild(p)
        card.appendChild(button)
    
        })
    } else {
        console.log('error')
    }
}
request.send()

const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)




