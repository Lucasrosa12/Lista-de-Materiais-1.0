class Produto {

    constructor() {
        
        this.id = 1;                                            //this, dentro dessa classe id
       // this.nomeProduto = '';
       // this.valor = 0;         //ATRIBUTOS
       this.arrayProdutos = [];
    }

    salvar() {
      
      let produto = this.lerDados(); 

      if(this.validaCampos(produto)) { 
        this.adicionar(produto);
      }

     this.listaTabela();
     this.cancelar();

    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for(let i = 0; i < this.arrayProdutos.length; i++ ){
            let tr = tbody.insertRow();  //Add uma nova linha

            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_acoes = tr.insertCell();
            //metodo ListaTabela percorre todos os elementos da arrayProdutos, e dpois cria as linha e colunas

            td_id.innerText = this.arrayProdutos[i].id;               //innerText add 'valor' no td_id
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_valor.innerText = this.arrayProdutos[i].preco;
            
            td_id.classList.add('center'); // deixar a coluna do id no centro, não funciona no css,pq a lista é dinamica só no JS.

            let imgEdit = document.createElement('img');
            imgEdit.src = 'img/edit.png';
            

            let imgDelete = document.createElement('img'); 
            imgDelete.src = 'img/delete.png';
            imgDelete.setAttribute("onclick", "produto.deletar("+ this.arrayProdutos[i].id +")");

            td_acoes.appendChild(imgEdit);       // Coloca  imgEdit dentro da td
            td_acoes.appendChild(imgDelete);

        }
    }

    adicionar(produto) {
        this.arrayProdutos.push(produto);
        this.id++;
    }

    lerDados() {
        let produto = {}


        produto.id = this.id;
        produto.nomeProduto = document.getElementById('produto').value;
        produto.preco = document.getElementById('preco').value;

        return produto;
    }

    validaCampos(produto) {
        let msg = '';

        if(produto.nomeProduto == '') {
            msg += '- informe o nome do produto \n';
        }

        if(produto.preco == '') {
            msg += '- informe o preço do produto \n';
        }

        if(msg != ''){
            alert(msg);
            return false
        }

        return true;
    }

    cancelar() {
        document.getElementById('produto').value = '';
        document.getElementById('preco').value = '';
    }

    deletar(id){
        let tbody = document.getElementById('tbody');

        for(let i = 0; i < this.arrayProdutos.length; i++){
            if(this.arrayProdutos[i].id == id) {
                this.arrayProdutos.splice(i, 1);
                tbody.deleteRow(i);

            }
        }
    }
}

var produto = new Produto()