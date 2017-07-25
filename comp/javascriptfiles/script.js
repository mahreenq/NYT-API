

$("#selectDropdown") .on("change", function(){
  $('#newsblock').empty();
  var val = $("#selectDropdown option:selected").val();
  var url ="https://api.nytimes.com/svc/topstories/v2/"+ val +".json";

url += '?' + $.param({
  'api-key': "7b8cb11a83d74b7685ae93c60ce5f0f8"
});

$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {

              var count = 1;

for (var i=0; i<result.results.length; i++) {


            if (count <=12){


  if (result.results[i].multimedia.length>0){

      var abstract = '<p class = "abstract">'+result.results[i].abstract +' </p> ' ;
      var link = result.results[i].url;
      var image = result.results[i].multimedia[4].url;
      var htmlElements =  '<a href="' +link +'">' +abstract + ' </a> ';

      var createDiv = $("<div></div>");
      createDiv.addClass('singlenews');
      $('#newsblock').append(createDiv);
      createDiv.css('background-image', "url(" + image + ")");
      createDiv.append(htmlElements);
      $('.logoAndDropdown').addClass('minified');



    console.log (count++);
}
} else{
  break;
}
 }

}).fail(function(err) {
  throw err;
});

});



//
//
// $("#selectDropdown") .on("change", function(){
//   $('#newsblock').empty();
//   var val = $("#selectDropdown option:selected").val();
//   var url ="https://api.nytimes.com/svc/topstories/v2/"+ val +".json";
//
// url += '?' + $.param({
//   'api-key': "7b8cb11a83d74b7685ae93c60ce5f0f8"
// });
//
// $.ajax({
//   url: url,
//   method: 'GET',
// }).done(function(result) {
//
//               var count = 1;
//
// for (var i=0; i<result.results.length; i++) {
//
//
//             if (count <=12){
//
//
//   if (result.results[i].multimedia.length>0){
//
//       var abstract = '<p class = "abstract">'+result.results[i].abstract +' </p> ' ;
//       var link = result.results[i].url;
//       var image = '<img src=" '+ result.results[i].multimedia[4].url +' "/> ';
//       var htmlElements =  '<div class="singlenews">' + image + ' <a href="' +link +'">' +abstract + ' </a> </div>';
//
//       var newsblock = document.getElementById('newsblock');
//         newsblock.innerHTML += htmlElements;
//
//     console.log (count++);
// }
// } else{
//   break;
// }
//  }
// //  console.log(newsblock);
// }).fail(function(err) {
//   throw err;
// });
//
// });
