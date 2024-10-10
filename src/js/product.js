let cart=[]
const addToBasket=(product)=>{
    // console.log(product)
    const basketBox=document.querySelector("#basket-box")
    
    basketBox.innerHTML=''
cart.push(product)
cart.map((item,index)=>{
    
    const selectBox=document.createElement('div')
    selectBox.classList.add('selectProduct')
    
    selectBox.innerHTML=`
    <img class="w-[50px] h-[50px]" src=${item.image} alt="">
    <p class="text-white text-sm ">${item.title}</p>
    <p class="text-white ">$${item.price}</p>
    <div class="flex justify-center items-center text-white text-xl">
        <button id="increment" data-id='${item.id}'increment class=" cursor-pointer bg-white rounded-full w-[20px] h-[20px] flex justify-center items-center"><i class="fa-solid fa-chevron-left text-gray-700 text-sm "></i></button>
        <span id='selectCount' class="text-sm mx-3">0</span>
        <button class="cursor-pointer bg-white rounded-full w-[20px] h-[20px] flex justify-center items-center"><i class="fa-solid fa-angle-right text-gray-800"></i></button>
   
</div >`
localStorage.setItem('basket',JSON.stringify(cart))
const savedData=JSON.parse(localStorage.getItem('basket'))
console.log(savedData)
basketBox.appendChild(selectBox)
document.querySelector("#productCount").textContent=cart.length;
// const increment=document.querySelector("#increment")
// increment.addEventListener("click",()=>{
//     const selectCount=document.querySelector("#selectCount")
//     selectCount.textContent+=1
// })
}).join(" ")

}








const getProduct=async ()=>{
    const res=(await fetch('https://fakestoreapi.com/products'))
    // console.log(res)
    const data=await res.json()
    console.log(data)
 
    
  const products=  data.map((item,index)=>{
        // console.log(item.image)
        const productCard=document.createElement("div")
        productCard.classList.add('productCard')
    const cardBox=document.querySelector("#cardBox")
        productCard.innerHTML= `
        
    <div class="dark:text-black shadow-md hover:shadow-2xl duration-700  hover:skew-x-1 flex justify-center items-center cursor-pointer py-5 flex-col gap-3 rounded-lg bg-gray-100  h-[350px]">
        <img class="h-[150px] w-[150px]" src="${item.image}" alt="">
        <h4 class="px-2 text-center text-sm font-semibold h-[80px]">${item.title}</h4>
        <p class="font-semibold text-xl tracking-widest">$ ${item.price}</p>
        <button data-id="${item.id}"  class="add-to-card bg-black mt-2 text-white px-4 py-1 cursor-pointer rounded-md">Add To Cart</button>
    </div>

        `
        cardBox.appendChild(productCard)
        // console.log(productCard)
       
    }).join("")
    // const cardBox=document.querySelector("#cardBox").innerHTML=product;

document.addEventListener("click",(e)=>{
    if (e.target.classList.contains('add-to-card')) {
        const productId=e.target.getAttribute('data-id')
        const selectedProduct=data.find(product=>product.id==productId)
        // console.log(selectedProduct)
        addToBasket(selectedProduct)
    }
})
    
    
}
console.log(getProduct())


