const btn = document.getElementById('btn')
const genPass = document.getElementById('genPassword')




const generatePassword = () =>{
    let symbol = ['!', '@', '#', '$', '%', '&']
    let finalSym1 = symbol[Math.floor(Math.random()*5)]
    let revSym = symbol.reverse()
    let finalSym2 = revSym[Math.floor(Math.random()*5)]
    let randomNumber1 = Math.floor(Math.random()*10);
    let randomNumber2 = Math.floor(Math.random()*5);
    let randomAlphabet = (Math.random()*10).toString(36).substring(2);
    let finalPass = randomNumber1 + finalSym1 + randomAlphabet + randomNumber2 + finalSym2;
    genPass.innerHTML = "New Password:" + " " + finalPass;
    console.log(finalSym)
}
