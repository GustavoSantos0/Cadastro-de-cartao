document.getElementById('confirm').addEventListener('click', function(e) {
    e.preventDefault(); 
    alterarcard();
});

/*Função  para limitar a quantidade do valor de entrada*/

function limitarInputNumerico(inputElement, maxLength) {
    inputElement.addEventListener("input", (event) => {
        let numero  = event.target.value.replace(/\D/g, '').slice(0, maxLength);
        
        numero = numero.replace(/(\d{4})(?=\d)/g, '$1 ');
        event.target.value = numero;
    });
   
}
limitarInputNumerico(validcardMM, 2);
limitarInputNumerico(validcardYY, 2);
limitarInputNumerico(cvccartao, 3);
limitarInputNumerico(cardnumber, 16);

/* Função para alterar na imagem do cartão */
function alterarcard() {

    const nomecartao = document.getElementById("cardname").value;
    const numerocartao = document.getElementById("cardnumber").value.replace(/(\d{4})(?=\d)/g, '$1 ');
    const cvccartao = document.getElementById("cvccartao").value;
    const mm = document.getElementById("validcardMM").value;
    const yy = document.getElementById("validcardYY").value;
    
    let validar = true

    /*Validar numero do cartao para a quantidade certa e sem letras*/
    if (numerocartao.length !== 19 || /[a-zA-Z]/.test(numerocartao)) {
        document.getElementById('error2').textContent = 'Wrong format';
        document.getElementById("cardnumber").style.borderColor = 'red';
        
        if(numerocartao===""){
            document.getElementById('error2').textContent = "Can't be blank";
            validar = false;
        }
    }
    /*validar nome do cartao para conter apenas letras*/
    if(!/^[a-zA-Z\s]+$/.test(nomecartao)){
        document.getElementById('error').textContent = 'Only letters';
        document.getElementById("cardname").style.borderColor = 'red';
       
        if(nomecartao===""){
            document.getElementById('error').textContent = "Can't be blank";
        }
        validar = false;

    }

    /* VERIFICAR CAMPO EM BRANCO*/
    if(mm === "" || yy=== "" ){
        document.getElementById('error3').textContent = "Can't be blank";
        document.getElementById("validcardYY").style.borderColor = 'red';
        document.getElementById("validcardMM").style.borderColor = 'red';
        
        
        if(cvccartao===""){
            document.getElementById('error4').textContent = "Can't be blank";
            document.getElementById("cvccartao").style.borderColor = 'red';
        }
        validar = false;
    
    }
    
    /* TODAS AS CONDICOES ESTANDO VERDADEIRAS EXECUTA ABAIXO*/
    if(validar ){
        document.getElementById("nomecartao").textContent = nomecartao;
        document.getElementById("cartaonumero").textContent = numerocartao;
        document.getElementById("cvccard").textContent = cvccartao;
        document.getElementById("expcartao").textContent = `${mm}/${yy}`;
        
        ['error', 'error2', 'error3', 'error4'].forEach(id => {
            document.getElementById(id).textContent = "";
        });

        ['cardnumber', 'cardname', 'validcardYY', 'validcardMM' ,'cvccartao'].forEach(id => {
            document.getElementById(id).style.borderColor ="";
        });
        
       
        
    }
    };
    
