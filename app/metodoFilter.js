const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    const livrosFiltrados=categoria == 'disponivel' ? extrairPorDisponibilidade() : extrairPorCategoria(categoria)
    exibirOsLivrosNaTela(livrosFiltrados)

    if(categoria == 'disponivel'){
        const precoTotal=valorTotal(livrosFiltrados)
        exibirValorTotalDosLivrosDisponiveisNaTela(precoTotal)

    
    }
   function exibirValorTotalDosLivrosDisponiveisNaTela(valor){
    valor_total_livros_disponiveis.innerHTML=`
    <div class="livros__disponiveis">
       <p>Todos os livros disponíveis por R$ <span id="valor">${valor.toFixed(2)}</span></p>
    </div>
     `
   }
}

function extrairPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function extrairPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}
function valorTotal(livros){
   return livros.reduce((total, livro) => total + livro.preco,0)
}
