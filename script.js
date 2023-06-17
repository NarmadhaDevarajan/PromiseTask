async function fetchData(){
    let promise=await fetch("https://jsonplaceholder.typicode.com/users");
    let response=await promise.json();
    console.log(response);
    let para=document.createElement('p');
    para.innerHTML=`Name :${response[0].name} `;
    let para1=document.createElement('p');
    para1.innerHTML=`Email :${response[0].email} `;
    let para2=document.createElement('p');
    para2.innerHTML=`Address :${response[0].address.street} `;
    document.body.appendChild(para);
   document.body.appendChild(para1);
   document.body.appendChild(para2);
    
}

        // `<div>
        // <p>Fetched Data : ${response}</p>
        // </div>`}
        // const para = document.createElement("p");
        // para.innerText = "This is a paragraph";
        // document.body.appendChild(para);