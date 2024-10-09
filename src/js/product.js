

const getProduct=async ()=>{
    const res=(await fetch('https://fakestoreapi.com/products')).json()
    const data=await res
    console.log(data[0].image)
    const product=data.map((item,index)=>{
        console.log(item.image)
        return `
        <div class="sm:basis-full md:basis-4/12 lg:basis-3/12  p-3 ">
    <div class="shadow-md flex justify-center items-center cursor-pointer py-5 flex-col gap-3 rounded-lg bg-gray-100 h-[350px]">
        <img class="h-[150px] w-[150px]" src="${item.image}" alt="">
        <h4 class="px-2 text-center">${item.title}</h4>
        <p class="font-semibold text-xl tracking-widest">$ ${item.price}</p>
        <button class="bg-black mt-2 text-white px-4 py-1 cursor-pointer rounded-md">Add To Cart</button>
    </div>
</div>
        `
    }).join("")
    const cardBox=document.querySelector("#cardBox").innerHTML=product
}
console.log(getProduct())