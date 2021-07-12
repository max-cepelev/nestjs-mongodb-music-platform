import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { TrackModul } from './track/track.modul'

@Module({
    imports: [
        MongooseModule.forRoot(
            'mongodb+srv://admin:admin@mycluster.1dypu.mongodb.net/music-platform?retryWrites=true&w=majority',
        ),
        TrackModul,
    ],
})
export class AppModule {}
