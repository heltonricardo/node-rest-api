import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { Livro } from './livro.model';
import { LivroService } from './livros.service';

@Controller('produtos')
export class LivrosController {
  // O Nest automaticamente instancia um ProdutoService e passa por parâmetro:
  constructor(private produtosService: LivroService) {}

  @Get()
  obterTodos(): Livro[] {
    return this.produtosService.obterTodos();
  }

  @Get('/:id')
  obterUm(@Param() params): Livro {
    return this.produtosService.obterUm(params.id);
  }

  @Post()
  criar(@Body() produto: Livro): Livro {
    return this.produtosService.criar(produto);
  }

  @Put('/:id')
  alterar(@Body() produto: Livro): Livro {
    return this.produtosService.alterar(produto);
  }

  @Delete('/:id')
  apagar(@Param() params): Livro {
    return this.produtosService.apagar(params.id);
  }
}
