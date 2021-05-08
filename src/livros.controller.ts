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

@Controller('livros')
export class LivrosController {
  // O Nest automaticamente instancia um livroService e passa por parâmetro:
  constructor(private livrosService: LivroService) {}

  @Get()
  obterTodos(): Livro[] {
    return this.livrosService.obterTodos();
  }

  @Get('/:id')
  obterUm(@Param() params): Livro {
    return this.livrosService.obterUm(params.id);
  }

  @Post()
  criar(@Body() livro: Livro): Livro {
    return this.livrosService.criar(livro);
  }

  @Put('/:id')
  alterar(@Body() livro: Livro): Livro {
    return this.livrosService.alterar(livro);
  }

  @Delete('/:id')
  apagar(@Param() params): Livro {
    return this.livrosService.apagar(params.id);
  }
}
