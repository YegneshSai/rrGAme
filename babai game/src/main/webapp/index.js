var list=new Array();
var current=0;
sessionStorage.setItem("cur_score", 0);
var score=0;
var level=0;



//-------------Functionn to generate numbers-----------
function generate_num(){
	console.log("heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeyyyyyyyyyyyyyyyyyyyyyyy");
    let i,j;
    
    let k=0;
    while(k<10){
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
    if(level == 3) {
		level3();
		break;
	}
    let box=document.createElement("p");
    let br=`<br>`;
    box.setAttribute('id',k);
    let txt=document.createTextNode(`${i}----${j}\n`);
    
   
    box.appendChild(txt);
    box.setAttribute('class','elem');
    box.style.marginLeft=`${Math.floor(Math.random()*(90)+0)}%`;
    
    document.getElementById('box_area').prepend(box);
k++;    
    }
    level=(level+1)%4;
    check_pos(check_pos);
} 


function level3() {
	let k=0,i;

	while(k<10){
		 i=Math.floor(Math.random()*10);
		 list.push(i);
	let box=document.createElement("p");
    let br=`<br>`;
    box.setAttribute('id',k);
    let txt=document.createTextNode(`${i}\n`);
    
   
    box.appendChild(txt);
    
    box.style.marginLeft=`${Math.floor(Math.random()*(90)+0)}%`;
    box.style.animationName = 'none';
    
    document.getElementById('box_area').prepend(box);
k++;    
		 
	}
	console.log(list);
	wait();
	
	
	
}


function wait(){
	setTimeout(()=>{
	/*let state = document.getElementById('box_area').innerHTML;
	document.getElementById('box_area').innerHTML="heloooo";*/
	let i;
	for(i=0;i<list.length;i++){
		let ele=document.getElementById(i);
		document.getElementById('box_area').removeChild(ele);
	
	
	}
	
	let j=0;
	console.log(list);
	for(j=0;j<list.length;j++){
		console.log('hiii');
	let box=document.createElement("p");
    let br=`<br>`;
    box.setAttribute('id',j);
    let txt=document.createTextNode(`????\n`);
    box.appendChild(txt);
    box.style.marginLeft=`${Math.floor(Math.random()*(90)+0)}%`;
    box.style.zIndex=9;
    document.getElementById('box_area').prepend(box);
	}
	
	},3000);
}
//----------function to open lost card-------------------------------
function open_card(score){
    document.getElementById('score').innerText=score;
    document.getElementById('popup').style.display='block';
}

//-----------function to check entered number-------------------------
function entered_num(){
    var n=parseInt(document.getElementById('inp').value);
    console.log(n);
    var low=document.getElementById(current);
    console.log("dwflerkgiewrngoein");
    
    if(list[current]==n){
        low.parentNode.removeChild(low);
        score++;
        current++;
        if(current==10){
	console.log("level completed");
			nxtl();
		}
        
    }
    else{
		document.getElementById('score').value=score;
		sessionStorage.setItem("cur_score", score);
        open_card(score);
        document.getElementById("fom").submit();
        var msg="wrong answer";
        //lost(msg);
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
	if(parseInt(current)<10){
    
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
	current=0;
	list = new Array();
	console.log('clicked on next level');
	let heading = document.getElementById('heading');
	if(level == 0) heading.innerText = "LEVEL: ADDITION";
	if(level == 1) heading.innerText = "LEVEL: SUBTRACTION";
	else if(level==2) heading.innerText = "LEVEL: MULTIPLICATION";
	// else heading.innerText = "MULTIPLICATION";
	document.getElementById('next_l').style.display="none";
	generate_num();
}

