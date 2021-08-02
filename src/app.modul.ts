import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ServeStaticModule } from '@nestjs/serve-static'
import { FileModule } from './file/file.module'
import { TrackModul } from './track/track.modul'
import * as path from 'path'

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static', 'client'),
        }),
        MongooseModule.forRoot(
            'mongodb+srv://admin:admin@mycluster.1dypu.mongodb.net/music-platform?retryWrites=true&w=majority',
        ),
        TrackModul,
        FileModule,
    ],
})
export class AppModule {}
