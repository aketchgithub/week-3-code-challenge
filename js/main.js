const url = "http://localhost:3000/films"
const firstFilmApi = url

document.addEventListener('DOMContentLoaded', () => {
   const fetchFirstFilm = () => {
      fetch(url)
      .then(resp => resp.json())
      .then(film =>renderFirstFilm(film[0])
      )

       //console.log(data)
   }
    fetchFirstFilm();
})

function renderFirstFilm(film) {

 let button = document.getElementById('button')
 button.innerHTML=''

 const poster = document.getElementById('poster')
 poster.src = film.poster

 const title = document.getElementById('title')
 title.innerText = film.title

 const runtime = document.getElementById('runtime')
 runtime.innerText = `${film.runtime} MINUTES`

 const showtime = document.getElementById('showtime')
 showtime.innerText = film.showtime

 const description = document.getElementById('film-info')
 description.innerText = film.description

 const tickets= document.getElementById('ticket-num')
 tickets.innerText = film.capacity-film.tickets_sold

 let btn = document.createElement('button')
 let ticketsAvailable= film.capacity-film.tickets_sold
 btn.addEventListener('click',() => {
   if(ticketsAvailable > 0){
      ticketsAvailable -=1
      document.getElementById('ticket-num').innerText=ticketsAvailable
      
     }
     else if( ticketsAvailable<1){
      document.getElementById('ticket-num').innerText='Sold Out!'
     }
 } )
 btn.innerText= "Buy Tickets"
 button.appendChild(btn)

 

}
function menu() {
   // document.getElementById(menu)
   // let filmMenu = document.createElement('ul') 
   // filmMenu.classList.add('menu')
   //       filmMenu.innerText= 'menu'
   //      menu.innerText = film.menu
      fetch(url)
         .then(resp => resp.json())
         .then(data =>{
            data.forEach(item => {

      let titles = document.createElement("li")
      titles.addEventListener('click', ()=> {
         console.log("clicked")
         const i = item.id
         renderPoster(data[i-1])

      })
      titles.innerText= item.title
      let menuList = document.getElementById('titleList')
      menuList.appendChild(titles)
            })
         })
} 
 menu()
//  const ticketSpan = document.getElementById('ticket-num')

//  const capacity = parseInt(film.capacity)
//  ticketSpan.innerText = capacity - film.tickets_sold


//  const button = document.querySelector('ui.green.button')
//  button.addEventListener("click", (e) => {
//    if (ticketSpan.innerText <= 0) {
//       let buttonDiv=
//       document.querySelector('.extra.content');
//       buttonDiv.innerHTML = "<button>Sold Out!</button>" 
//       document.append
//    }
//    else {
//       const tickets_sold = film.tickets_sold + 1
//       let obj = {tickets_sold}

//       updateTicketNum(obj)
//    }
//  })
 

function renderPoster(film){

 let button = document.getElementById('button')
 button.innerHTML=''

 const poster = document.getElementById('poster')
 poster.src = film.poster

 const title = document.getElementById('title')
 title.innerText = film.title

 const runtime = document.getElementById('runtime')
 runtime.innerText = `${film.runtime} MINUTES`

 const showtime = document.getElementById('showtime')
 showtime.innerText = film.showtime

 const description = document.getElementById('film-info')
 description.innerText = film.description

 const tickets= document.getElementById('ticket-num')
 tickets.innerText = film.capacity-film.tickets_sold

 let btn = document.createElement('button')
 btn.addEventListener('click',(e) => {
   e.preventDefault
     //console.log('I was clicked')
     film.tickets_sold +=1
   
     let ticketsAvailable= film.capacity-film.tickets_sold
     if(film.capacity > film.tickets_sold){

      document.getElementById('ticket-num').innerText=ticketsAvailable
      updateTicketNum(film)
     }
     else if( film.capacity = film.tickets_sold){
      document.getElementById('ticket-num').innerText='Sold Out!'
     }
 })
 btn.innerText= "Buy Tickets"
 button.appendChild(btn)


 }

 function buyTickets(){
   //console.log('clicked')

 }

 function updateTicketNum(obj) {
   fetch (`http://localhost:3000/films/${obj.id}`, {
      method: 'PATCH',
      headers: {
         "content-type": "application/json",
         "accept": "application/json"
      },
      body: JSON.stringify(obj)
   })
   
      .then(response => response.json())
      .then(data => { console.log(data)
         // renderFirstFilm(data)
      }) 
}
