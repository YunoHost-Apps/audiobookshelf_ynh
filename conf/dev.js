const Path = require('path')
module.exports.config = {
  Port: __PORT__,
  ConfigPath: Path.resolve('__DATADIR__/config'),
  AudiobookPath: Path.resolve('__DATADIR__/audiobooks'),
  MetadataPath: Path.resolve('__DATADIR__/metadata'),
  FFmpegPath: '/usr/bin/ffmpeg',
  FFProbePath: '/usr/bin/ffprobe'
}