var make = {
        device: '' // ['pc','sp'] / ''
    },
    basePaths = {
        srcDir: 'assets'
      , dstDir: 'dist'
      , sgDir : 'dist/styleguide'
      , prdDir: '../www/html/assets/themes/themes-name/assets'
    },
    ports = {
        static: 8000
      , styleguide: 8005
    },
    use = {
        templateEngine: 'ejs' // ejs/pug
      , es6: true // boolean
      , styleguide: false // boolean
    };

module.exports = {
  base: basePaths, 
  ports: ports,
  make: make,
  use: use
};