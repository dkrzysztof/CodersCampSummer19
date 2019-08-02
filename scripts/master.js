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