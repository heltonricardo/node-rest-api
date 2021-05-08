import { Injectable } from '@nestjs/common';
import { Produto } from './produto.model';

/* A anotação @Injectable permite que o nest injete essa classe em outra, no
 * caso na classe ProdutosController.
*/
@Injectable()
export class ProdutoService {
  produtos: Produto[] = [
    new Produto('LIV0001', 'Dom Casmurro', 19.9),
    new Produto('LIV0002', 'Memórias póstumas de Brás Cubas', 24.39),
    new Produto('LIV0003', 'O cortiço', 17.99),
    new Produto('LIV0004', 'Triste Fim de Policarpo Quaresma', 24.64),
    new Produto('LIV0005', 'Grande Sertão: Veredas', 50.0),
  ];

  obterTodos(): Produto[] {
    return this.produtos;
  }

  obterUm(id: number): Produto {
    return this.produtos[0];
  }

  criar(produto: Produto): Produto {
    this.produtos.push(produto);
    return produto;
  }

  alterar(produto: Produto): Produto {
    return produto;
  }

  apagar(id: number): Produto {
    return this.produtos.pop();
  }
}
