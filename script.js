let c = document.getElementById("fish");
let ctx = c.getContext("2d");

const colors = ["FCF1DC","F50D03","A40000"]

for(let i=0;i<100;i++){
    let color = Math.floor(Math.random()*colors.length)
    ctx.strokeStyle ="#" +  colors[color];
    ctx.beginPath();      
    ctx.arc(Math.floor(Math.random()*(800)+1) , Math.floor(Math.random()*(800)+1), Math.floor(Math.random()*(20)+1), 0 ,2*Math.PI); 
    ctx.fillStyle = "#" + colors[color];
    ctx.fill()
    ctx.stroke();
    
}
