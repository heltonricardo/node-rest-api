import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { Produto } from './produto.model';

@Controller('produtos')
export class ProdutosController {
  produtos: Produto[] = [
    new Produto('LIV0001', 'Dom Casmurro', 19.9),
    new Produto('LIV0002', 'Memórias póstumas de Brás Cubas', 24.39),
    new Produto('LIV0003', 'O cortiço', 17.99),
    new Produto('LIV0004', 'Triste Fim de Policarpo Quaresma', 24.64),
    new Produto('LIV0005', 'Grande Sertão: Veredas', 50.0),
  ];

  @Get()
  obterTodos(): Produto[] {
    return this.produtos;
  }

  @Get('/:id')
  obterUm(@Param() params): Produto {
    return this.produtos[params.id];
  }

  @Post()
  criar(@Body() produto: Produto): Produto {
    produto.id = 100;
    this.produtos.push(produto);
    return produto;
  }

  @Put('/:id')
  alterar(@Body() produto: Produto): Produto {
    
    return produto;
  }

  @Delete('/:id')
  apagar(@Param() params): Produto {
    return this.produtos.pop();
  }
}
