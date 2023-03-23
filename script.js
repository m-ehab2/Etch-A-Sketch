var loopv=document.createElement("div");
var grid=document.getElementById('g');
function change_color(){
    console.log("Hovering");
}

function create(number){
    let h=480/number;
    let m=number
    number=number*number;
    console.log(h);
    for (let index = 0; index < number; index++) {
        loopv=document.createElement("div");
        loopv.innerHTML=``;
        loopv.className="unit"
        loopv.id=`unit ${index}`;
        loopv.style.width=h;
        loopv.style.heigh=h;
        loopv.addEventListener("mouseover",(mouseOver)=>{
            mouseOver.target.style.backgroundColor="#222831";
            
        });
        document.getElementById('g').appendChild(loopv);        
    }
    
    grid.style.gridTemplateColumns=`repeat(${m},${h}px)`;
    grid.style.gridTemplateRows=`repeat(${m},${h}px)`;
}
function getNumber(){
    while(document.getElementById('g').firstChild){
        document.getElementById('g').removeChild(document.getElementById('g').lastChild);
    }
    let x=document.getElementById("no").value;
    if(x>150){
        window.alert("Grid size will be too small, for preformance issues try another number")
    }
    else{
    create(x);
    }
}
