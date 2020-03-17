 function equation2() {
   
    var div2=document.getElementById("equation2")
    div2.innerHTML="";
    equation();

    
    
 }
 function cucTri(){
    var a=document.getElementById("1").value;
    
    var b=document.getElementById("2").value;
    var c=document.getElementById("3").value;
     a=parseInt(a);
     b=parseInt(b);
     c=parseInt(c);
     let x0=-b/(2*a);
     let y0=c-b*b/(4*a);
     var s;
     if(a>0)
        s=`Hàm số có điểm cực tiểu là (${x0},${y0})`
    else
        s=`Hàm số có điểm cực đại là (${x0},${y0})`
    var div2=document.getElementById("equation2")
    div2.innerHTML+=`<h2 style="color:#FFFF00;">${s} </h2><br> `;
    setTimeout(function()
    {
        var div2=document.getElementById("equation2")
        div2.innerHTML+=`<h2 style="color:royalblue;">chào mừng đến với thế giói toán học </h2><br> `
         
    }, 3000);
}
async function equation() {
    var a=document.getElementById("1").value;
    
    var b=document.getElementById("2").value;
    var c=document.getElementById("3").value;
     a=parseInt(a);
     b=parseInt(b);
     c=parseInt(c);
     var s;
    let denta=b*b-4*a*c;
    if(denta>0)
        {
            x1=(-b+Math.sqrt(denta))/(2*a);
            x2=(-b-Math.sqrt(denta))/(2*a);
            s=`phương trình trên có 2 nghiệm phân biệt ${x1} và ${x2} `;
        }
    else
    {
        if(denta===0)
        {
            x1=-b/(2*a);
            s=` phương trình trên có nghiệm kép  ${x1} `;
        }
        else
            s=` phương trình trên vô nghiệm`;
    }
    var div2=document.getElementById("equation2")
    div2.innerHTML+=`<h2 style="color:#FFFF00;">${s} </h2><br>`;
   const result=await setTimeout(cucTri,3000);
}
