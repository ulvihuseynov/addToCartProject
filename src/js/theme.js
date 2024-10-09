const darkMoon=document.querySelector("#darkMoon")
const light=document.querySelector("#light")
darkMoon.addEventListener("click",()=>{
   if ( document.body.classList.contains('dark')) {
    document.body.style.backgroundColor='black'
    document.body.style.color='white'
darkMoon.classList.add('hidden')
light.classList.remove('hidden')
console.log(typeof darkMoon)
console.log(localStorage.setItem('theme','dark'))
   }
})

light.addEventListener("click",()=>{
   
     document.body.style.backgroundColor='white'
     document.body.style.color='black'
 darkMoon.classList.remove('hidden')
 light.classList.add('hidden')
console.log(localStorage.setItem('theme','light'))

    }
 )
 let savedTheme=localStorage.getItem("theme")
 if (savedTheme==='dark') {
      document.body.style.backgroundColor='black'
    document.body.style.color='white'
 } else {
    document.body.style.backgroundColor='white'
    document.body.style.color='black'  
 }