var list=new Array();
var current=0;
var score=0;
var level=0;
//-------------Functionn to generate numbers-----------
function generate_num(){
    let i,j;
    
    let k=0;
    while(k<1){
        i=Math.floor(Math.random()*10);
        j=Math.floor(Math.random()*10);

    if(level==0){
    list.push(i+j);
    }
    if(level==1){
    list.push(i-j);
    }
    if(level==2){
    list.push(i*j);
    }
    let box=document.createElement("p");
    let br=`<br>`;
    box.setAttribute('id',k);
    let txt=document.createTextNode(`${i}----${j}\n`);
    
   
    box.appendChild(txt);
    
    box.style.marginLeft=`${Math.floor(Math.random()*(90)+0)}%`;
    
    document.getElementById('box_area').prepend(box);
k++;    
    }
    level=(level+1)%3;
    check_pos(check_pos);
} 

//----------function to open lost card-------------------------------
function open_card(score){
    document.getElementById('score').innerText=score;
    document.getElementById('popup').style.display='block';
}

//-----------function to check entered number-------------------------
function entered_num(){
    var n=Number(document.getElementById('inp').value);
    console.log(n);
    var low=document.getElementById(current);
    console.log("dwflerkgiewrngoein");
    
    if(list[current]==n){
        low.parentNode.removeChild(low);
        score++;
        current++;
        if(current==1){
	console.log("level completed");
			nxtl();
		}
        
    }
    else{
        open_card(score);
        var msg="wrong answer";
        lost(msg);
    }
    document.getElementById('inp').value=null;
    
}

function nxtl(){
	document.getElementById('next_l').style.display="block";
}

//-----------------------lost function------------------------
function lost(msg){
   
    open_card(score);
}


//----------------------functon to check position of dropping elements-----------------------
function check_pos(m){
	if(parseInt(current)<1){
    
    var p = document.getElementById(current);//last box
    var n=document.getElementById('inp');//input box
    var style = p.currentStyle || window.getComputedStyle(p);//last box style
    
    elemRect = p.getBoundingClientRect();//last box's axis from top
    n_pos=n.getBoundingClientRect();//input box's axis from top
    offset   = n_pos.top-elemRect.top ;//differnce between boxes
    
    
    console.log('Element is ' + offset );
	console.log("this is the current value:"+current);
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
}


//---------------------function for next level--------------------
function nextL(){
	console.log('clicked on next level');
	document.getElementById('next_l').style.display="none";
	generate_num();
}

