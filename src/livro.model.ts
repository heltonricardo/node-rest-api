import { Table, Model, Column, DataType } from 'sequelize-typescript';

/* A anotação @Table serve para que o Sequelize crie uma tabela no banco de
 * dados correspondente à essa classe. Quando extendemos a classe Model, nós
 * ganhamos algumas colunas, entre elas a coluna id.
 */

@Table
export class Livro extends Model<Livro> {
  @Column({ type: DataType.STRING(60), allowNull: false })
  codigo: string;

  @Column({ type: DataType.STRING, allowNull: false })
  nome: string;

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
  preco: number;
}
