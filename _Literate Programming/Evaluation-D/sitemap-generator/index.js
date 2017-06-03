var SitemapGenerator = require('sitemap-generator');

// create generator
var generator = new SitemapGenerator('http://v4-alpha.getbootstrap.com/getting-started/introduction/#starter-template');

// register event listeners
generator.on('done', function(sitemap) {
    console.log(sitemap); // => prints xml sitemap
});

// start the crawler
generator.start();