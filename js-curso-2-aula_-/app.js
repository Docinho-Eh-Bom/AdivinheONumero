//Gerando o número e criando a lista
let NumList = [];
let SecretNum = Math.floor(Math.random()*30)+ 1;
NumList.push(SecretNum);

//Contador de tentativas
let cont = 0;

//Botões
const bChute = document.getElementById('chutar');
const bReiniciar = document.getElementById('reiniciar');

//Elementos
//const titulo = document.querySelector('h1');
//titulo.innerHTML = 'Adivinhação do número!';
//let alerts = document.querySelector('p');
//alerts.innerHTML = 'Escolha um número entre 0 e 30: ';

//Títulos iniciais 
alterText('h1', 'Adivinhação do número!');
alterText('p', 'Escolha um número entre 0 e 30: ');


//Função para auterar texto
function alterText(tag,text){
    let tagText = document.querySelector(tag);
    tagText.innerHTML = text;
    //ResponsiveVoice não funcionou para mim
    //responsiveVoice.speak(tagText, 'Brazillian Portuguese Female', (rate: 1.2));
}

//Receber o input e verificar o chute 
function verificarChute(){
    let chute = parseInt(document.querySelector('input').value);

    //Validar número
    if(chute < 1 || chute > 30){
        alterText('p','Por favor, inserir um número válido. A tentativa não sera contada');
        return;
    }

    //Acerto
    if(chute == SecretNum){
        cont++;
        alterText('p','Parabéns! Você adivinhou o número secreto na ' + cont + 'º tentativa!');
        //Desabilitar/habilitar botões para novo jogo
        bChute.disabled = true;
        bReiniciar.disabled = false;
        //Desabilita a possibilidade de escolher um número
        document.querySelector('input').disabled = true;
    }

        //Erro
        cont++;
        if(chute > SecretNum){
            alterText('p','O número secreto é menor que o número chutado! Tentativa: ' + cont); 
        }else if(chute < SecretNum){
            alterText('p','O número secreto é maior que o número chutado! Tentativa: ' + cont); 
        }
}

//Reinicia o jogo com um novo número não repetido e restaura as configurações iniciais
function novoJogo(){
    //Limpa lista caso cheia
    if(NumList.length >= 30){
        NumList = []; 
    };

    //Verifica os números repetidos
    do{
        SecretNum = Math.floor(Math.random() * 30) + 1;
    }while(NumList.includes(SecretNum));
    //Adiciona na lista o novo número
    NumList.push(SecretNum);

    //Reinicia
    cont = 0;
    alterText('p', 'Escolha um número entre 0 e 30: ');
    document.querySelector('input').disabled = false;
    document.querySelector('input').value = '';
    bChute.disabled = false;
    bReiniciar.disabled = true;
}


