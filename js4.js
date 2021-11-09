/*const comment=()=> {

    let youname = ["Ваше имя", ":"];
    document.getElementById('youname').innerHTML = youname;
    let coment = ["Ваш комментарий", ":"];
    document.getElementById('coment').innerHTML = coment;

    let name1 = forma.yourname.value;
    forma.yourname.value = name1;
    let comment1 = forma.text.value;
    forma.text.value = comment1;

    youname.push(name1);
    document.getElementById("youname").innerHTML = youname;


    coment.push(comment1);
    document.getElementById("coment").innerHTML = coment;

    let nameCom = youname.concat(coment);
    document.getElementById("nameCom").innerHTML = nameCom;

    document.getElementById("info").innerHTML = nameCom;
*/

const comment =()=> {
	let txt = document.querySelector('.yourname').value;
	/*document.querySelector('#info').innerHTML=txt;*/
	
	let txt2 = document.querySelector('.text').value;
	
	let com = `${txt} <br> ${txt2}`;
	
	document.querySelector('#info').innerHTML=com;
	
}

