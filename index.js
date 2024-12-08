const wrapper=document.querySelector('.sliderWrapper');
const menuItem=document.querySelectorAll('.menuItem')
const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "/images/air.png",
        },
        {
          code: "red",
          img: "/images/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "/images/jordan2.png",
        },
        {
          code: "green",
          img: "/images/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "/images/blazer.png",
        },
        {
          code: "green",
          img: "/images/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "/images/hippie.png",
        },
        {
          code: "black",
          img: "/images/hippie2.png",
        },
      ],
    },
  ];
   let choosenProduct=products[0]
    const currentProductImg=document.querySelector('.productImg')
    const currentproductTitle=document.querySelector('.productTitle')
    const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

 menuItem.forEach((item,inx)=>{
    item.addEventListener('click',()=>{
        wrapper.style.transform=`translateX(${-100*inx}vw)`

        choosenProduct=products[inx];
       
        //Change text of currentProduct
        currentproductTitle.textContent=choosenProduct.title;
         currentProductPrice.textContent="$"+choosenProduct.price;
         currentProductImg.src=choosenProduct.colors[0].img;

        //   Assing new colore
         currentProductColors.forEach((color,inx)=>{
             color.style.backgroundColor=choosenProduct.colors[inx].code;
         });

    });
 });
 currentProductColors.forEach((color,inx)=>{
     color.addEventListener('click',()=>{
        currentProductImg.src=choosenProduct.colors[inx].img;
     });
 });
//  product
currentProductSizes.forEach((size,inx)=>{
     size.addEventListener('click',()=>{
         currentProductSizes.forEach((size)=>{
             size.style.backgroundColor='white';
              size.style.color='black';
         });
         size.style.backgroundColor='black';
         size.style.color='white';
     });
});

const productButton=document.querySelector('.productButton')
const payment=document.querySelector('.payment');
const close=document.querySelector('.close');

productButton.addEventListener('click',()=>{
    payment.style.display='flex';
})
close.addEventListener('click',()=>{
    payment.style.display='none';
})

