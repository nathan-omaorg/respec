import utils from "core/utils";

export async function run(conf, doc, cb){ 
  // do some DOM work the "doc" with "conf" 
  $("body > *", doc).wrapAll("<div class='container'></div>");
  //finally call cb()   
  cb(); 
}