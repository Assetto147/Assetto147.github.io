// build-sw.js
import {injectManifest} from 'workbox-build';

injectManifest({
  swSrc: './src/sw.js',
  swDest: './dist/sw.js',
  globDirectory: './dist',
  globPatterns: [
    '**/*.js',
    '**/*.css',
    '**/*.svg'
  ]
});