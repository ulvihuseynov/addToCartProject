const basket=document.querySelector("#basket")

const getShoppingCart=()=>{
    const shoppingCard=document.querySelector("#shoppingCard")
    shoppingCard.classList.toggle('translate-x-[400px]')
   
}

basket.addEventListener("click",getShoppingCart)