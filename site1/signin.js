
const emailTarget = document.querySelector('#email');
const passwordTarget = document.querySelector('#password');
const repasswordTarget = document.querySelector('#repassword');

const getFieldValius = () => {
    return{
        email: emailTarget.value,
        password: passwordTarget.value,
        repassword: repasswordTarget.value,
    };
};
const submitBtn = document.querySelector('button');

// submitBtn.addEventListener('click',async () =>{
//     const newUser = {
//         email: emailTarget.value,
//         passwword: passwordTarget.value,
//         repassword: repasswordTarget.value,
//     };
//     const req = await fetch('http://localhost:3333/api/cars',{
//         method: 'POST',
//         headers: {
//             'Content-Type':'application/json',
//         },
//         body: JSON.stringify(newUser),
//     });
//     const res = await req.json();
//     console.log(res);
//     getCarsHtml();
// });
// const values = getFieldValius();
const signupSubmit = () => {
    const values = getFieldValius();

fetch('http://localhost:3333/api/signup',{
    method:'POST',
    headers:{
        'Content-Type':'application/json',
    },
    body: JSON.stringify(values),
})
.then((res) => res.json())
.then((data) => {
    console.log(data);
})
.catch((res) => {
    console.warn(res);
});
};
submitBtn.addEventListener('click', signupSubmit);

const UPPER_LETTER = 'ABCDEFGHIKLMNOPQRSTVXYZJUW';
const SPECIALS = '@$%!*#?&.';
const LOWER_LETTER = UPPER_LETTER.toLowerCase();
const NUMBERS = '0123456789';


const passwordCheck = (password,repassword)=>{
    let match = false;
    let containsUpper = false;
    let containsLower = false;
    let containsDigit = false;
    let containsChar = false;
    let lenghtPassed = false;
    let isAllCheked = false
    match = password === repassword;
    lenghtPassed = password.length >=8;

    for(const char of password.split('')){
        if(!containsUpper)containsUpper = UPPER_LETTER.includes(char);
        if(!containsLower)containsLower = LOWER_LETTER.includes(char);
        if(!containsDigit)containsDigit = NUMBERS.includes(char);
        if(!containsChar)containsChar = SPECIALS.includes(char);
    }

    if(match && containsUpper &&containsLower &&  containsDigit && containsChar  && lenghtPassed) isAllCheked = true
    return{ match, containsUpper, containsLower, containsDigit, containsChar,lenghtPassed, isAllCheked};
};
const upperTarget = document.querySelector('#upper');
const lowerTarget = document.querySelector('#lower');
const digitTarget = document.querySelector('#digit');
const charTarget = document.querySelector('#char');
const lenghtTarget = document.querySelector('#lenght');
const matchTarget = document.querySelector('#match');

//tom useg orson esehiig shalgana
passwordTarget.addEventListener('input', ()=>{
    const {password,repassword} = getFieldValius();
    const passwordInfo = passwordCheck(password, repassword);
    if(passwordInfo.containsUpper){
        upperTarget.checked = true;
    }else{
        upperTarget.checked = false;
    }
});

//jijig useg orson esehiig shalgana
passwordTarget.addEventListener('input', ()=>{
    const {password,repassword} = getFieldValius();
    const passwordInfo = passwordCheck(password, repassword);
    if(passwordInfo.containsLower){
        lowerTarget.checked = true;
    }else{
        lowerTarget.checked = false;
}
});
//too orson esehiig shalgana
passwordTarget.addEventListener('input', ()=>{
    const {password,repassword} = getFieldValius();
    const passwordInfo = passwordCheck(password, repassword);
    if(passwordInfo.containsDigit){
        digitTarget.checked = true;
    }else{
        digitTarget.checked = false;
    }
});
//tusgai temdegt orson esehiig shalgana
    passwordTarget.addEventListener('input', ()=>{
    const {password,repassword} = getFieldValius();
    const passwordInfo = passwordCheck(password, repassword);
    if(passwordInfo.containsChar){
        charTarget.checked = true;
    }else{
        charTarget.checked = false;
    }
});
//passwordnii urt 8 bolon tuunees deesh esehiig shalgana
passwordTarget.addEventListener('input', ()=>{
    const {password,repassword} = getFieldValius();
    const passwordInfo = passwordCheck(password, repassword);

    if(passwordInfo.lenghtPassed){
        lenghtTarget.checked = true;
    }else{
        lenghtTarget.checked = false;
    }
    toggleBtn(passwordInfo.isAllCheked)
    
});
repasswordTarget.addEventListener('input', ()=>{
    const {password,repassword} = getFieldValius();
    const passwordInfo = passwordCheck(password, repassword);

    if(passwordInfo.match){
        matchTarget.checked = true;
    }else{
        matchTarget.checked = false;
    }

    toggleBtn(passwordInfo.isAllCheked)
});


const toggleBtn = (isCheckedAll) => {
    const btn = document.querySelector('#BTN');
    if(isCheckedAll){

        btn.removeAttribute('disabled')
    }else{
btn.setAttribute('disabled' , 'disabled')
    }
}
