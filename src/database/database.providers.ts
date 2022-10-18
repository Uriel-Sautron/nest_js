import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'uriel',
        password: 'S@@moins@974',
        database: 'todolist',
        entities: [],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
