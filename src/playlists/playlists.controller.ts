import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { PlaylistsService } from './playlists.service';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';
import { Types } from 'mongoose';

@Controller('playlists')
export class PlaylistsController {
  constructor(private readonly playlistsService: PlaylistsService) {}

  @Post()
  create(@Body() createPlaylistDto: CreatePlaylistDto) {
    return this.playlistsService.createPlayList(createPlaylistDto);
  }

  @Get()
  findAll() {
    return this.playlistsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: Types.ObjectId) {
    return this.playlistsService.findOnePLayList(id);
  }

  @Put(':id')
  update(@Param('id') id: Types.ObjectId, @Body() updatePlaylistDto: UpdatePlaylistDto) {
    return this.playlistsService.updatePlayList(id, updatePlaylistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: Types.ObjectId) {
    return this.playlistsService.removePlayList(id);
  }
}
