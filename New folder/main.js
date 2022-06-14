function generate_num(){
    console.log("hiiiiiiiiiiiiii");
    let i,j;
    var list=new Array();
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
    // list.push(i+j);
    // document.getElementById('box1').appendChild(ele);
    // document.getElementById('box2').appendChild(ele2);

    let box=document.createElement("p");
    let br=`<br>`;
    let txt=document.createTextNode(`${i}----${j}\n`);
    
   
    box.appendChild(txt);
    
    box.style.marginLeft=`${Math.floor(Math.random()*(90)+0)}%`;
    
    document.getElementById('box_area').appendChild(box);









    k++;    
    }
} 