// password length must be equal to 10

// there should be 3 numbers

// and there should 2 symbols from below:

// !@#$%^&*()\_+~|}{[]:;?><,./-=

// excluding single and double quotes

// there should be minimum 1 lower and 1 upper case letters,

// valid samples:

// Aa123&!xyz
// Aa@/456stu
// 123aA(p?rs

// invalid samples:

// AB123&!XYZ   // no lower case letters
// ab123&!xyz   // no upper case letters
// Aa@c456stu   // only one symbol
// 12aA(p?rsz   // only two numbers

const generatePass = ()=>{
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J","K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];   
    const numbers = []
    const symbols = ["!","@","#","$","%","^","&","*","(",")","\","+",~","|","}","{","[","]",":",";","?",">","<",",",".","/","-","="]
    const symbol = []
    const letter = []
   
    let pass = []
    let letterx = alphabet
  .map((a) => a + "," + a.toLowerCase())
  .join()
  .split(",");

    for(let i = 0; i < 3 ; i++){
        const num = Math.floor(Math.random() * 9)
        pass.push(num)
    }
    for(let i = 0; i < 2 ; i++){
 
        pass.push(symbols[i])
    }
    for(let i = 0; i < 5 ; i++){
        
        if(i % 2 == 0){
            pass.push(alphabet[i])

        }else{
            pass.push(letterx[i])

        }
 
    }
    
    const sortingPass = (v)=>{
        result = v.sort(() => Math.random() - 0.5) 
        text = result.join("")
        console.log(text)
    }
     sortingPass(pass);
    
    
}

generatePass()


