const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/microphone-store' : '',
  assetPrefix: isProd ? 'https://bmvantunes.github.io/microphone-store' : '',
};
