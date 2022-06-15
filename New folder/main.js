var list=new Array();
var current=0;
var score=0;
function generate_num(){
    
    let i,j;
    
    let k=0;
    while(k<10){
        i=Math.floor(Math.random()*10);
        j=Math.floor(Math.random()*10);


        // let ele = `<div>${i}---${j}</div>`;
        // // console.log(ele);
        // ele.style.marginLeft=`${Math.floor(Math.random()*(40)+10)}%`;
        // document.getElementById("box_area").innerHTML += ele;


    //     let ele=document.createElement("p");
    //     let txt=document.createTextNode(i);
    //     ele.appendChild(txt);
    //     ele.style.marginLeft=`${Math.floor(Math.random()*(40)+10)}%`
    //     let ele2=document.createElement("p");
    //     let txt2=document.createTextNode(j);
    //     ele2.appendChild(txt2);
    //     ele2.style.marginLeft=`${Math.floor(Math.random()*(40)+10)}%`
    // 
    // document.getElementById('box1').appendChild(ele);
    // document.getElementById('box2').appendChild(ele2);
    list.push(i+j);
    let box=document.createElement("p");
    let br=`<br>`;
    box.setAttribute('id',k);
    let txt=document.createTextNode(`${i}----${j}\n`);
    
   
    box.appendChild(txt);
    
    box.style.marginLeft=`${Math.floor(Math.random()*(90)+0)}%`;
    
    document.getElementById('box_area').prepend(box);
k++;    
    }
    check_pos(check_pos);
} 

function open_card(score){
    document.getElementById('score').innerText=score;
    document.getElementById('popup').style.display='block';

}
function entered_num(){
    var n=Number(document.getElementById('inp').value);
    console.log(n);
    var low=document.getElementById(current);
    console.log("dwflerkgiewrngoein");
    // alert(list[current]+"-----heeloooooooooooooooooooooo-----"+10);
    if(list[current]==n){
        low.parentNode.removeChild(low);
        score++;
        current++;
        
    }
    else{
        open_card(score);
        var msg="wrong answer";
        lost(msg);
    }
    document.getElementById('inp').value=null;
    
}
function lost(msg){
    // alert("u lost"+msg);
    open_card(score);
}
function check_pos(m){
    // var x=getOffset( document.getElementById('box_area') ).left;
    // console.log(x);
    var p = document.getElementById(current);
    var n=document.getElementById('inp');
    var style = p.currentStyle || window.getComputedStyle(p);
    
    // if(pos==0 || pos<20){
    //     console.log("end ki agaya");
    //     var msg="came to end";
    //     lost(msg);
    //     return;
    // }
    
    var bodyRect = document.body.getBoundingClientRect(),
    elemRect = p.getBoundingClientRect(),
    n_pos=n.getBoundingClientRect();
    offset   = n_pos.top-elemRect.top ;
    console.log('Element is ' + offset + ' vertical pixels from <body>');

    console.log(parseInt(style.marginBottom));
    if(parseInt(offset)<40){
        console.log("end ki agaya");
        var msg="came to end";
        lost(msg);
        return;
    }
    console.log("Current marginTop: " + style.marginBottom);
    setTimeout(function() { m(check_pos); }, 500);
    
}

function print(){
    console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
}


