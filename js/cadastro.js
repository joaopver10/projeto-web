function validacad(){
    var nome = document.getElementById('nome')
    var email = document.getElementById('email')
    var texto = document.getElementById('texto')

    if(nome.value.length == 0 || email.value.length == 0 || texto.value.length == 0){
        alert('Por favor, preencha os dados corretamente!')
    }else{
        alert('Sua mensagem foi enviada com sucesso ')
   
    }

}

