const passArea = document.querySelector(".passArea")
const generatePass = ()=>{
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J","K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];   
    const numbers = []
    const symbols = ["!","@","#","$","%","^","&","*","(",")","\","+",~","|","}","{","[","]",":",";","?",">","<",",",".","/","-","="]
    const symbol = []
    const letter = []
   
    let pass = []
    let letterx = alphabet
  .map((a) => a.toLowerCase())


    for(let i = 0; i < 3 ; i++){
        const num = Math.floor(Math.random() * 9)
        pass.push(num)
    }
    for(let i = 0; i < 2 ; i++){
        const x = Math.floor(Math.random() * symbols.length)
        pass.push(symbols[x])
    }
    for(let i = 0; i < 5 ; i++){
        
        if(i % 2 == 0){
            const x = Math.floor(Math.random() * alphabet.length)
            pass.push(alphabet[i])

        }else{
            const x = Math.floor(Math.random() * letterx.length)
            pass.push(letterx[i])

        }
 
    }
    
    const sortingPass = (v)=>{
        result = v.sort(() => Math.random() - 0.5) 
        text = result.join("")
        passArea.textContent = text
    }
     sortingPass(pass);
    
    
}




