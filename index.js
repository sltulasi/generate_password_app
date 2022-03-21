let generated_password = document.getElementById("display-password")
let all_char = ["f","g","h","i","j","k","l","m","A","B","C","D","E","F","G","4","5","6","7","8","9","@","#","$","H","I","J","K","L","M","N","O","P","Q","R","w","x","y","z","0","1","2","3","S","T","U","V","W","X","Y","Z","a","b","c","d","e","n","o","p","q","r","s","t","u","v"]
let small_alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let capital_alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
let spl_char = [ "/", '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+' ]



function newPassword(){
    generated_password.textContent = "Your New Password: "
    for(let i=0; i<2 ; i++){
        let random_char = Math.floor(Math.random() * all_char.length)
        let small_char = Math.floor(Math.random() * small_alpha.length)
        let upper_char = Math.floor(Math.random() * capital_alpha.length)
        let spl_character = Math.floor(Math.random() * spl_char.length)
        generated_password.textContent +=  small_alpha[small_char] + all_char[random_char] + capital_alpha[upper_char] + spl_char[spl_character]  
    }
}