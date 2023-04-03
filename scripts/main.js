let image=document.querySelector('img');
image.addEventListener('click',function(){
    let mySrc=image.getAttribute('src');
    if (mySrc=='../images/game1.png') {
        image.setAttribute('src','../images/game2.png');
    }
    else
    {
        image.setAttribute('src','../images/game1.png');
    }
});

let myButton=document.querySelector('button');
let myHeading=document.querySelector('h1');

    function setUserName(){
        let myName=prompt('entrer votre nom');
        localStorage.setItem('nom',myName);
        myHeading.textContent='Les JEUX sont cool '+'  '+myName;
    }
        if (!localStorage.getItem('nom')) {
                setUserName();
        } else {
            let storedName=localStorage.getItem('nom')
            myHeading.textContent='les JEUX sont cool'+'  '+storedName;
        }
myButton.addEventListener('click',function(){
    setUserName();
})