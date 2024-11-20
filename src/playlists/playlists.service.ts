import { InjectModel } from '@nestjs/mongoose';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';
import { Playlist } from './playlists.schema';
import { Model, Types } from 'mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PlaylistsService {
  constructor(@InjectModel (Playlist.name)  private playListModel : Model<Playlist>){}
 async createPlayList(data: CreatePlaylistDto) : Promise<Playlist> {
    return new this.playListModel(data).save()
  }

 async findAll() : Promise<Playlist[]> {

  return this.playListModel.find()

  }

  async findOnePLayList(id: string) : Promise<Playlist> {
    return this.playListModel.findById(id)
  }

 async updatePlayList(id: string, data: UpdatePlaylistDto) : Promise<Playlist> {
    return this.playListModel.findOneAndUpdate(id , data, {new : true})
  }

 async removePlayList(id: any) : Promise<Playlist> {
    return this.playListModel.findOneAndDelete(id);
  }
}
