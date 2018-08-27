/**
 * Configuration
 */
export const Config: any = {
  src: {
    main: 'src/',
    extensions: {
      document: 'src/Document',
      objects: 'src/Objects',
    },
    ts: [
      'src/**/*.ts',
      'src/*.ts'
    ],
    scss: [
      'src/**/*.scss',
      'src/*.scss'
    ],
    assets: [
      'src/*.gif',
      'src/**/*.gif',
      'src/*.png',
      'src/**/*.png',
      'src/*.jpg',
      'src/**/*.jpg',
      'src/**/*.svg',
      'src/**/*.wbl',
      'src/*.wbl',
      'src/**/*.xml',
      'src/*.xml',
      'src/**/*.qext',
      'src/*.qext',
      'src/**/*.txt',
      'src/*.txt',
      'src/**/*.json',
      'src/*.json',
      'src/lib/*.js',
      'src/**/lib/*.js',
      'src/**/lib/**/*.js',
      'src/**/libs/*.js',
      'src/**/libs/**/*.js',
      'src/**/*.css',
      'src/*.css'
    ]
  },
  dist: {
    dev: 'dist/dev/',
    prod: 'dist/prod/',
    installers: 'dist/prod/installers'
  }
};
