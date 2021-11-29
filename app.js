// var select = document.getElementById('main').style.margin = '0 10px 0 50px';

// main.style.color = 'red';

// console.log(select);

// var select = document.getElementsByTagName('p');

// var paragraph = select[1].innerHTML;
// select[1].innerHTML = "Hello World";


// for(var i = 0; i < select.length;i++){
//     select[i].style.fontFamily = 'Verdana, Geneva, sans-serif';
// }


// var image = document.getElementsByTagName('img');

// var documents = document;
// console.log(documents.childNodes[1].childNodes[0]);



// var par = document.getElementById('paraOne')
// console.log(par.innerHTML)


// var para = document.getElementsByTagName('p');

// console.log(para);


// for(var i = 0;i<para.length;i++){
//     para[i].innerHTML = "BMJ"
// }


// var divVar  = document.getElementById('divMain');
// var divPara = divVar.getElementsByTagName('p');

// console.log(divPara);

// var arr = [1,[5,6,7,8],3,4];
// console.log(arr[1][3])


// var mainDoc = document;

// var p =mainDoc.childNodes[1].childNodes[2].childNodes[1]
// console.log(p.childNodes);



// var res = document;

// console.log(res.childNodes[1].childNodes[2]
//     .childNodes);


// var d = document.getElementById('humpty');

// console.log(d.childNodes)

// var d = document.getElementById('humpty');

// console.log(d.firstChild);


// var d = document.getElementById('humpty');

// console.log(d.parentNode);


// var d = document.getElementById('humpty');

// console.log(d.previousSibling);


// var d = document.getElementById('humpty');

// console.log(d.nextSibling);



// var d = document.getElementById('humpty');

// console.log(d.firstChild.innerHTML);
// console.log(d.firstChild.childNodes[0].nodeValue);


// var d = document.getElementById('humpty');

// console.log(d.firstChild.nodeName);

// var d = document.getElementById('humpty');

// var dList = d.childNodes;

// var len = dList.length;


// console.log(dList);

// var howManyPara = 0;

// for(var i =0;i<len;i++){
//     if(dList[i].nodeName.toLowerCase() == '#text' ){
     
//         howManyPara++
//     }
// }
// console.log(howManyPara)


// var divVar = document.getElementById('div2');

// var res = divVar.hasAttribute('style');

// console.log(res)

// var res2 = divVar.getAttribute('style');

// console.log(res2);


// var res3 = divVar.setAttribute('style',"background-color: red;");

// console.log(res3);


// var res3 = document.getElementById('div2').attributes

// console.log(res3[1].nodeName);


// var res3 = document.getElementById('div2').attributes

// console.log(res3[1].nodeValue);



// var para = document.createElement('p');

// para.setAttribute('class','regular');

// var txtNode = document.createTextNode('Hello World');

// para.appendChild(txtNode);

// console.log(para);



// var divVar = document.getElementById('mainDIv');


// var para = document.createElement('p');
// para.setAttribute('class','regular');
// var txtNode = document.createTextNode('Hello World');

// para.appendChild(txtNode);

// divVar.appendChild(para);


// var divVar = document.getElementById('mainDIv');
// var para = document.createElement('p');
// para.setAttribute('class','regular');
// var txtNode = document.createTextNode('Hello World');

// para.appendChild(txtNode);

// var firsVar = divVar.firstChild
// divVar.insertBefore(para,firsVar)


// var divVar = document.getElementById('mainDIv');
// var para = document.createElement('p');
// para.setAttribute('class','regular');
// var txtNode = document.createTextNode('Hello World');
// para.innerHTML = "Hello World"
// para.appendChild(txtNode);

// var firsVar = divVar.firstChild.nextSibling
// divVar.insertBefore(para,firsVar)


