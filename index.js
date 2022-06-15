// Add your code here
function submitData(event) {
     event.preventDefault();
    const myName = document.getElementById("nameField")
    const myEmail =document.getElementById("emailField")
    fetch("http://localhost:3000/users", {
        method: "POST",
        headers :{
            "Content-Type": "application/json",
            Accept : "application/json"
        },
        body: JSON.stringify({
           name: myName.value,
           email: myEmail.value     
        })
    }).then((response)=>{
        response.json();
        return response.json;
    }).then((responseData)=>{
      const h2 = document.querySelector(".title#name h3");
      h2.textContent= responseData.name;

      const h4 = document.querySelector(".response#email h4");
      h4.textContent = responseData.email;

      const myId = document.querySelector(".id#myIdNo h4")
      //myId = data.id
    })
    
}
//document.querySelector("form").addEventListener("submit", submitData)