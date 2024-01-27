const buttonClick = document.getElementById("btnGravar");

buttonClick.addEventListener("click", function(){
    console.log("Clicou em gravar");
    const objIDDep = document.getElementById("idDepartamento");
    const objNomeDep = document.getElementById("idDepartamento");
    const objData = document.getElementById("idDepartamento");

  const campos = document.querySelectorAll('[data-obigatorio="true"]')
   let TemCampoVazio = false;

  campos.forEach(function(itemElemento){
    console.log(itemElemento.value);
    if (itemElemento.value==""){
        itemElemento.computedStyleMap.backgroundColor="red";
    } else{
        itemElemento.computedStyleMap.backgroundColor="#ffffff";
    }
  })
if (TemCampoVazio){
    return;
}

  console.log("final do gravar");
})
 
function adicionarCorFundoAofocar(){
    const inputs = document.querySelectorAll('input,select');

    inputs.forEach(function(itemElemento){
        itemElemento.addEventListener('focus', function(){
            itemElemento.style.backgroundColor= "green";
            itemElemento.style.color="white"
        });
        itemElemento.addEventListener('blur', function(){
            itemElemento.style.backgroundColor= "ffffff";
            itemElemento.style.color="000000"
        });
    })
   
}
function adicionarCamposAceitarSomenteInteiro(){
   const campos = document.querySelectorAll('[data-soInteiroPositivo="true"]')
   campos.forEach(function (item){
    const teclasAceitas = [48,49,50,51,52,53,54,55,56,57,99,97,98,99,100,101,102,103,104,105]
    item.addEventListener('keyup', function(e){
        console.log(e.keycode);
        if(!teclasAceitas.includes(e.keyCode)){
          item.value="";
        }
    })
   })
}
functioncarregarCategoria(){
    const elementCategoria = document.getElementById("categoriaMotivo");
    categorias.forEach(function (objCat){
        let opt = document.createElement('option');
        opt.text = objCat.Descricao;
        opt.value = objCat.idCategoria;
        elementCategoria.appendChild(opt);
    })

}

function carregarMotivoAoAlterarcategoria() {
    const elementCategoria = document.getElementById("categoriaMotivo");

    elementCategoria.addEventListener("change", function() {
        let valorEscolhido = elementCategoria.value;
        const motivosFiltrados =
        motivos.filter((obj)=> obj.idCategoria==valorEscolhido)

        const elementoMotivo = document.getElementById("Motivo");
        elementoMotivo.innerHTML="";
        motivosFiltrados.forEach(function(item){
            let opt = document.createElement('option');
            opt.text = item.Descricao;
            opt.value = item.idMotivo;
            elementoMotivo.appendChild(opt);
        })
    })
}

adicionarCorFundoAofocar();
adicionarCamposAceitarSomenteInteiro();