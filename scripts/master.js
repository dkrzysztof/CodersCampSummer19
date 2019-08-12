const selected_color = "#2196f3";
const unselected_color = "black";

function highligh_text(e){
    var target = e.target;
    var labels = document.getElementsByTagName('label');

    for(var i = 0; i<labels.length;i++){
        let label = labels[i];
        if(label.htmlFor === target.id){
            label.style.color = selected_color;
        }
    }
}
function unhighlight_text(e){
    var target = e.target;
    var labels = document.getElementsByTagName('label');

    for(var i = 0; i<labels.length;i++){
        let label = labels[i];
        
        if(label.htmlFor === target.id){
            label.style.color = unselected_color;
        }
    }
}

function send_mail(){
    req_obj = {
        name: document.getElementsByName('name')[0].value,
        surname: document.getElementsByName('surname')[0].value,
        email: document.getElementsByName('email')[0].value,
        message: document.getElementsByName('message')[0].value
    }
    
    fetch('http://localhost:8080/contact_mail',{
        method:'post',
        mode: 'cors',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req_obj),
        credentials: 'include'
    })
    .then(res => {
        console.log(res)
        if(res.ok){
            alert('Wiadomość przesłana pomyślnie!')
        }
        else{
            res.json().then(res => {
                alert(res.response)
            })
        }
    })
    
}