import { Module } from '@nestjs/common';
import { DogsModule } from './dogs/dogs.module';
import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { DatabaseModuleModule } from './common/database/database.module.module';



@Module({
  imports: [DatabaseModuleModule, DogsModule, CatsModule, UsersModule, PostsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
