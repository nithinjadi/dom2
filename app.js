const card=document.querySelector("div");
card.id="laptopCard"
card.innerHTML=
`<img src="https://cdn.thewirecutter.com/wp-content/media/2024/07/businesslaptops-2048px-233284-3x2-1.jpg?auto=webp&quality=75&crop=4:3,smart&width=1024" width="300"/>
 <p>Laptops</p>
 <button>know more</button>`

 card.style.border="2px solid black";
 card.style.backgroundColor="lightgrey";
 card.style.display="inline-block";
 card.style.padding="10px";
 card.style.textAlign="center";
 card.style.fontSize="18px"



 const newcard=document.createElement("div");
 newcard.id="mobileCard";
newcard.innerHTML=
`<img src="https://images.samsung.com/is/image/samsung/assets/in/explore/brand/5-best-android-mobile-phones-2022-in-india/banner-mobile-720x761-080422.jpg?$720_N_JPG$" width="300"/>
 <p>Mobiles</p>
 <button>know more</button>`

 newcard.style.border="2px solid black";
 newcard.style.backgroundColor="lightgrey";
 newcard.style.display="inline-block";
 newcard.style.padding="10px";
 newcard.style.textAlign="center";
 newcard.style.fontSize="18px";

 document.body.appendChild(newcard)



 const newcard1=document.createElement("div");
 newcard1.id="tabletCard";
newcard1.innerHTML=
`<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXArKr5ly-4vswXl1zbkwLq8mcCM--EHzIsw&s" width="300"/>
 <p>Tablets</p>
 <button>know more</button>`

 newcard1.style.border="2px solid black";
 newcard1.style.backgroundColor="lightgrey";
 newcard1.style.display="inline-block";
 newcard1.style.padding="10px";
 newcard1.style.textAlign="center";
 newcard1.style.fontSize="18px";

 document.body.appendChild(newcard1)



 const newcard2=document.createElement("div");
 newcard2.id="earbudCard";
newcard2.innerHTML=
`<img src="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2022/03/8188_15091.jpg" width="300"/>
 <p>Earbuds</p>
 <button>know more</button>`

 newcard2.style.border="2px solid black";
 newcard2.style.backgroundColor="lightgrey";
 newcard2.style.display="inline-block";
 newcard2.style.padding="10px";
 newcard2.style.textAlign="center";
 newcard2.style.fontSize="18px";

 document.body.appendChild(newcard2)