
// let selectElem = document.getElementById('webdevlist');
// selectElem.addEventListener('change', function(){
//     let codeValue = selectElem.value;
//     console.log(codeValue);
// })
        
// try hidding or highlighting

let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    
    const Headers= document.querySelectorAll('h2')

    document.querySelector('.highlight')?.classList.remove('highlight');

    if (codeValue == 'html'){
        Headers[0].classList.add('highlight')

        // console.log(Headers[0])
    }

    else if (codeValue == 'css'){
        Headers[1].classList.add('highlight')

    }

    else{
        Headers[2].classList.add('highlight')
    }


})

// function doSomething(){
// can maybe try display none to earse what was there previously
// console.log('do whatever you want here)
// } -> this is a function

// this is for looking for events, ('the event that has happened', the function){}
// document.addEventListener('DOMcontentLoaded', doSomething())


// _________________________________________________________________________________________
// const doSomething = (data) => {
    // this.data = {name: 'example'};
// };
// document.addEventListener('DOMContentLoaded', function() {
    // const data = {}
    // doSomething(data);
// })

// ____________________________________________________________________
// this.style.display = "none"
                
// change one as display block to display none, and keep rotating
//or swap the urls