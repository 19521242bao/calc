 function equation2() {
    var d=document.getElementById("4");
    
     var div2=document.getElementById("equation2")
     div2.innerHTML="";
     equation();
    
    console.log(d.value);
 }
 function cucTri(){
    var a=document.getElementById("1").value;
    
    var b=document.getElementById("2").value;
    var c=document.getElementById("3").value;
    a=parseFloat(a);
    b=parseFloat(b);
    c=parseFloat(c);
   
     let x0=-b/(2*a);
     x0=x0.toFixed(3);
     let y0=c-b*b/(4*a);
     y0=y0.toFixed(3);
     var s;
     var s1;
     if(a>0)
     {
        s=`Hàm số có điểm cực tiểu là (${x0},${y0})`
        s1=`Hàm số đồng biến trên [${x0},+∞) và nghịch biến trên (-∞,${x0}]`
     }
    else
    {
        s=`Hàm số có điểm cực đại là (${x0},${y0})`
        s1=`Hàm số đồng biến trên (${x0},+∞) và nghịch biến trên (-∞,${x0})`
    }
    var div2=document.getElementById("equation2")
    div2.innerHTML+=`<h2 style="color:#FFFF00;">${s} </h2><br> `;
    div2.innerHTML+=`<h2 style="color:#FFFF00;">${s1} </h2><br> `;
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
            x1=x1.toFixed(2);
            x2=(-b-Math.sqrt(denta))/(2*a);
            x2=x2.toFixed(2);
            s=`phương trình trên có 2 nghiệm phân biệt ${x1} và ${x2} `;
        }
    else
    {
        if(denta===0)
        {
            x1=-b/(2*a);
            x1=x1.toFixed(2);
            s=` phương trình trên có nghiệm kép  ${x1} `;
        }
        else
            s=` phương trình trên vô nghiệm`;
    }
    var div2=document.getElementById("equation2")
    div2.innerHTML+=`<h2 style="color:#FFFF00;">${s} </h2><br>`;
   const result=await setTimeout(cucTri,3000);
}
function equation4(){
    var div2=document.getElementById("equation2")
    div2.innerHTML="";
    var a=document.getElementById("1").value;
    var b=document.getElementById("2").value;
    var c=document.getElementById("3").value;
    var d=document.getElementById("4").value;
    a=parseFloat(a);
    b=parseFloat(b);
    c=parseFloat(c);
    d=parseFloat(d);
     var daoham=a*d-b*c;
     var tcd=-d/c;
     var tcn=a/c;
     var s;
     if(daoham>0)
        {
            s=` hàm số đồng biến trên (-∞,${tcd}) và (${tcd},+∞)`
        }
    else
        {
            s=` hàm số nghịch biến trên (-∞,${tcd}) và (${tcd},+∞)`
        }
        
        div2.innerHTML+=`<h2 style="color:#FFFF00;">${s} </h2><br>`;
        setTimeout(function(tcd,tcn)
        {
            var s1=` hàm số có tiệm cận ngang là y=${a/c} và có tiệm cận đứng là x=${-d/c}`
            var div2=document.getElementById("equation2")
            div2.innerHTML+=`<h2 style="color:#FFFF00;">${s1} </h2><br>`;
            setTimeout(function()
            {
                var div2=document.getElementById("equation2")
                div2.innerHTML+=`<h2 style="color:#FFFF00;">Chào mừng đến với thế giới toán học </h2><br>`;
            },3000)
        },3000)
}
 function equation3(){
    var a=document.getElementById("1").value;
    var b=document.getElementById("2").value;
    var c=document.getElementById("3").value;
    var d=document.getElementById("4").value;
    
     a=parseFloat(a);
     b=parseFloat(b);
     c=parseFloat(c);
     d=parseFloat(d);
     var div2=document.getElementById("equation2")
     div2.innerHTML="";
     denta=b*b-3*a*c;
     var d1,d2,d3;
     var y1,y2;
     var s1=` hàm số không có điểm cực trị `,s;
     if(denta>0)
        {
            d1=(-b+Math.sqrt(denta))/(3*a);
            d2=(-b-Math.sqrt(denta))/(3*a)
            y1=a*Math.pow(d1,3)+b*Math.pow(d1,2)+c*d1+d;
            y2=a*Math.pow(d2,3)+b*Math.pow(d2,2)+c*d2+d;
            s1=` hàm số có 2 điểm cực trị là (${d1},${y1}),(${d2},${y2})`;
            if(a>0)
                s=` hàm số đồng biến trên (-∞,${d2}],[${d1},+∞) và nghịch biến trên [${d2},${d1}] `
                
            else
                s=` hàm số nghịch biến trên (-∞,${d2}],[${d1},+∞) và đồng biến trên [${d2},${d1}] `
        }
    else
    {
        s1=` hàm số có 1 điểm cực trị là (${d1},${y1}),(${d2},${y2})`;
        if(denta==0)
        {
            
            d1=-b/(2*a);
            if(a>0)
             s=` hàm số đồng biến trên [${d1},+∞) và nghịch biến trên (-∞,${d1}] `
            
            else
                s=` hàm số nghịch biến trên [${d1},+∞) và đồng biến trên (-∞,${d1}] `

        }
        else
            {
                if( a>0){
                        s=` hàm số đồng biến trên R`;
                        s1=" ";
                }
                else{
                        s=` hàm số nghịch biến trên R`;
                        s1=" ";
            }
        }
    }
    div2.innerHTML+=`<h2 style="color:#FFFF00;">${s} </h2><br>`;
    div2.innerHTML+=`<h2 style="color:#FFFF00;">${s1} </h2><br>`;
     setTimeout(function()
    {
        var div2=document.getElementById("equation2")
     var s2=" đây là dạng hàm số quan trọng cần quan tâm";
      div2.innerHTML+=`<h2 style="color:#672;">${s2} </h2><br>`;
    },3000)

}
function equation5()
{
    var a=document.getElementById("1").value;
    var b=document.getElementById("2").value;
    var c=document.getElementById("3").value;
    var d=document.getElementById("4").value;
     a=parseFloat(a);
     b=parseFloat(b);
     c=parseFloat(c);
     d=parseFloat(d);
     var div2=document.getElementById("equation2")
     div2.innerHTML="";
     var x2,x3,y2,y3,y1,s,s1;
     if(b*a<0)
     {
         x2=Math.sqrt(-b/(2*a));
         x3=-Math.sqrt(-b/(2*a));
        
        y1=c;
        y2=a*Math.pow(x2,4)+b*Math.pow(x2,2)+c;
        y3=a*Math.pow(x3,4)+b*Math.pow(x3,2)+c;
        s=` hàm số có 3 cực trị (${0},${c}),(${x2},${y2}),(${x3},${y3}) `;
        if(a>0)
            s1=` hàm số đồng biến trên [${x3},+∞),[${x3},0] và nghịch biến trên (-∞,${x3}],[0,${x2}] `
        else
            s1=` hàm số nghịch biến trên [${x3},+∞),[${x3},0] và đồng biến trên (-∞,${x3}],[0,${x2}] `
     }
     else
        {
            s=`hàm số có 1 cực trị là (${0},${c})`
            if(a>0)
                s1=` hàm số đồng biến trên [0,+∞) và nghịch biến trên (-∞,0]`
            else
                s1=` hàm số nghịch biến trên [0,+∞)và đồng biến trên (-∞,0]`
        }
        div2.innerHTML+=`<h2 style="color:#FFFF00;">${s} </h2><br>`;
        div2.innerHTML+=`<h2 style="color:#FFFF00;">${s1} </h2><br>`;
        setTimeout(function()
        {
            var div2=document.getElementById("equation2")
         var s2=" đây là dạng hàm số quan trọng cần quan tâm";
          div2.innerHTML+=`<h2 style="color:#672;">${s2} </h2><br>`;
        },3000)

}