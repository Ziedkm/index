let cursor = document.querySelector('.cursor');

window.onmousemove = (e) =>{
   cursor.style.top = e.pageY + 'px';
   cursor.style.left = e.pageX + 'px';
};



document.querySelectorAll('.navbar a').forEach(link =>{
   link.onmouseenter = () =>{
      document.querySelector('.navbar-img img').src = link.getAttribute('data-src');
   };
   link.onmouseleave= () =>{
      document.querySelector('.navbar-img img').src = 'images/nav-img-1.jpg';
   };
});

let navbar = document.querySelector('.navbar');
let navbarImg = document.querySelector('.navbar-img');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   navbarImg.classList.toggle('active');
};

window.onscroll = () =>{
   navbar.classList.remove('active');
   navbarImg.classList.remove('active');
};
const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");
form.onsubmit = (e)=>{
  e.preventDefault();
  statusTxt.style.color = "#0D6EFD";
  statusTxt.style.display = "block";
  statusTxt.innerText = "Sending your message...";
  form.classList.add("disabled");
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "message.php", true);
  xhr.onload = ()=>{
    if(xhr.readyState == 4 && xhr.status == 200){
      let response = xhr.response;
      if(response.indexOf("required") != -1 || response.indexOf("valid") != -1 || response.indexOf("failed") != -1){
        statusTxt.style.color = "red";
      }else{
        form.reset();
        setTimeout(()=>{
          statusTxt.style.display = "none";
        }, 3000);
      }
      statusTxt.innerText = response;
      form.classList.remove("disabled");
    }
  }
  let formData = new FormData(form);
  xhr.send(formData);
}