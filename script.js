const image = document.querySelector(".imageflag");
const cname = document.querySelector("#countryname");
const alt = document.querySelector(".price");
const details = document.querySelector("#detail");
const btn = document.querySelector(".button1");


const generatedetails = async()=>{
    const res = await fetch('https://restcountries.com/v3.1/all');
    const data = await res.json();
    const num = Math.floor(Math.random() * 200);
    const name= data[num].name.common;
    const cap =data[num].capital[0];
    const imgflg=data[num].flags.svg;
    const cdet = data[num].flags.alt
  console.log(name);
  console.log(cap);
  console.log(cdet);


    image.setAttribute("src",imgflg);

    setTimeout(() => {
    console.log(cname);
    cname.innerHTML=name;
    alt.innerHTML="CAPITal IS"+cap;
    details.innerHTML=cdet;
    }, 400);
}
btn.addEventListener('click',generatedetails);
generatedetails();
