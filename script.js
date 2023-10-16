// Adicionar um título ao site com o id 'titulo' usando innerHTML
document.getElementById("titulo").innerHTML = "Meu Site de Produtos";

// Criar uma string HTML para representar um produto
const produtoHTML = `
    <h2>Nome do Produto</h2>
    <p>Descrição do Produto</p>
    <p>Preço: R$ 99,99</p>
    <img src="caminho/para/imagem.jpg" alt="Imagem do Produto">
`;

// Adicionar o elemento do produto ao div 'produto' usando innerHTML
document.getElementById("produto").innerHTML = produtoHTML;

// Adicionar um título ao site com o id 'titulo' usando o método complexo
const titulo = document.getElementById("titulo");
titulo.textContent = "Meu Site de Produtos";

// Criar um elemento para representar um produto
const produto = document.getElementById("produto");

const nomeProduto = document.createElement("h2");
nomeProduto.textContent = "Nome do Produto";

const descricaoProduto = document.createElement("p");
descricaoProduto.textContent = "Descrição do Produto";

const precoProduto = document.createElement("p");
precoProduto.textContent = "Preço: R$ 99,99";

const imagemProduto = document.createElement("img");
imagemProduto.src = "caminho/para/imagem.jpg";
imagemProduto.alt = "Imagem do Produto";

produto.appendChild(nomeProduto);
produto.appendChild(descricaoProduto);
produto.appendChild(precoProduto);
produto.appendChild(imagemProduto);