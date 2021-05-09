import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class AppService {
  /* Verificar necessidade:
  constructor(private sequelize: Sequelize) {
    this.sincronizaBancoDeDados();
  }

  async sincronizaBancoDeDados() {
    await this.sequelize.sync();
  }
  */
  getHello(): string {
    return 'Hello World!';
  }
}
