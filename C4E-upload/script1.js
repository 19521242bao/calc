 function equation2() {
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
    var div2=document.getElementById("equation2");
    div2.innerHTML=`<h2 style="color:#FFFF00;">${s} </h2> `;
    setInterval(function(div2){
        var div2=document.getElementById("equation2");
        div2.innerHTML=`<h2 style="color:#FFFF00;">${s} </h2> `;
        div2.innerHTML+=`<h2 style="color:#FFFF00;">chào mừng bạn dến với thế giới toán học</h2> `;
    }, 3000);
    
 
 }