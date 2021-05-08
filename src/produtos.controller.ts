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
import { ProdutoService } from './produtos.service';

@Controller('produtos')
export class ProdutosController {
  // O Nest automaticamente instancia um ProdutoService e passa por parâmetro:
  constructor(private produtosService: ProdutoService) {}

  @Get()
  obterTodos(): Produto[] {
    return this.produtosService.obterTodos();
  }

  @Get('/:id')
  obterUm(@Param() params): Produto {
    return this.produtosService.obterUm(params.id);
  }

  @Post()
  criar(@Body() produto: Produto): Produto {
    return this.produtosService.criar(produto);
  }

  @Put('/:id')
  alterar(@Body() produto: Produto): Produto {
    return this.produtosService.alterar(produto);
  }

  @Delete('/:id')
  apagar(@Param() params): Produto {
    return this.produtosService.apagar(params.id);
  }
}
