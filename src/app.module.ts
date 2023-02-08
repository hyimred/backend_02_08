import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Alkalmazott from './alkalmazott.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: '',
      database: '02_08',
      entities: [
        Alkalmazott
      ],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
