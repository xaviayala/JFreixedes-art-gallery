//Babel allows us to convert modern js code into backwards compatible versions
//This includes converting jsx into browser-readable code
const es = require('babel-preset-env');
const presetReact = require('babel-preset-react');
require("babel-register")({
  presets: [es, presetReact]
})

//Import our routes
const router = require("./sitemap-routes").default;
const Sitemap = require("react-router-sitemap").default;
var butter = require('buttercms')("1ea3eda91370fe20ca60632fc5b264cc6e671e3d");


function generateSitemap() {
  try {
    
    butter.post.list({page: 1, page_size: 10}).then(function(resp) {
        var body = resp.data;

        var data = {
          posts: resp.data.data,
          next_page: resp.data.meta.next_page,
          previous_page: resp.data.meta.previous_page
        };

        let idMap = [];

        for(var i = 0; i < data.posts.length; i++) {
          idMap.push({ slug: data.posts[i].slug });
        }

        const paramsConfig = {
          "/blog/:slug": idMap
        };

        return (
          new Sitemap(router)
              .applyParams(paramsConfig)
              .build("https://jfreixedes-artstudio.me")
              //Save it in our  public folder
              .save("./public/sitemap.xml")
        );
   });
  } catch(e) {
    console.log(e);
  } 
}

generateSitemap();