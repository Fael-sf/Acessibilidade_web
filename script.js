document.addEventListener('DOMContentLoader', function(){
const aumetaFONTEBotao = document.getElementById('aumentar-fonte');
const diminuiFONTEBotao = document.getElementById('diminuir-fonte');
let tamanhoAtualFonte = 1;

aumetaFONTEBotao.addEventListener('click', function(){
 tamanhoAtualFonte += 0.1;
document.body.style.fontSize = '${tamanhoAtualFonte}rem'


})

    diminuiFONTEBotao.addEventListener('click', function(){
    tamanhoAtualFonte -= 0.1;
   document.body.style.fontSize = '${tamanhoAtualFonte}rem'
   
     })
})