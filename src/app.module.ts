import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { PlaylistsModule } from './playlists/playlists.module';
import { RoomsModule } from './rooms/rooms.module';



@Module({
  imports: [
    ConfigModule.forRoot({'isGlobal' : true}),
    MongooseModule.forRoot('mongodb://localhost:27017/StreamingRoom'),
    UsersModule,
    PlaylistsModule,
    RoomsModule],
  controllers: [AppController],
  providers: [AppService],
})





export class AppModule {}
