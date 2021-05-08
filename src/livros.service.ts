import { Injectable } from '@nestjs/common';
import { Livro } from './livro.model';

/* A anotação @Injectable permite que o nest injete essa classe em outra, no
 * caso na classe livrosController.
*/
@Injectable()
export class LivroService {
  livros: Livro[] = [
    new Livro('LIV0001', 'Dom Casmurro', 19.9),
    new Livro('LIV0002', 'Memórias póstumas de Brás Cubas', 24.39),
    new Livro('LIV0003', 'O cortiço', 17.99),
    new Livro('LIV0004', 'Triste Fim de Policarpo Quaresma', 24.64),
    new Livro('LIV0005', 'Grande Sertão: Veredas', 50.0),
  ];

  obterTodos(): Livro[] {
    return this.livros;
  }

  obterUm(id: number): Livro {
    return this.livros[0];
  }

  criar(livro: Livro): Livro {
    this.livros.push(livro);
    return livro;
  }

  alterar(livro: Livro): Livro {
    return livro;
  }

  apagar(id: number): Livro {
    return this.livros.pop();
  }
}
