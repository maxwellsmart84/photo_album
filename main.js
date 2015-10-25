var photoData = [
  {
    albumName: "Bear",
    imgs: [
      "img/bear/bear_01.jpg",
      "img/bear/bear_02.jpg",
      "img/bear/bear_03.jpg",
      "img/bear/bear_04.jpg",
      "img/bear/bear_05.jpg",
      "img/bear/bear_06.jpg",
    ]
  },

  {
    albumName: "Greece",
    imgs: [
      "img/greece/greece_01.jpg",
      "img/greece/greece_02.jpg",
      "img/greece/greece_03.jpg",
      "img/greece/greece_04.jpg",
      "img/greece/greece_05.jpg",
      "img/greece/greece_06.jpg",
      "img/greece/greece_07.jpg",
    ]
  },

  {
    albumName: "Love",
    imgs: [
      "img/love/love_01.jpg",
      "img/love/love_02.jpg",
      "img/love/love_03.jpg",
      "img/love/love_04.jpg",
      "img/love/love_05.jpg",
      "img/love/love_06.jpg",
      "img/love/love_07.jpg",
    ]
  },
  {
    albumName : "Wedding",
    imgs: [
      "img/wedding/wedding_01.jpg",
      "img/wedding/wedding_02.jpg",
      "img/wedding/wedding_03.jpg",
      "img/wedding/wedding_04.jpg",
    ]
  },
  {
    albumName : "Family",
    imgs: [
      "img/family/family_01.jpg",
      "img/family/family_02.jpg",
      "img/family/family_03.jpg",
      "img/family/family_04.jpg",
      "img/family/family_05.jpg",
      "img/family/family_06.jpg",
    ]
  },
  {
    albumName : "Friends",
    imgs: [
      "img/friends/friends_01.jpg",
      "img/friends/friends_02.jpg",
      "img/friends/friends_03.jpg",
      "img/friends/friends_04.jpg",
      "img/friends/friends_05.jpg",
      "img/friends/friends_06.jpg",
    ]
  }
];



//http://stackoverflow.com/questions/8648629/how-to-print-array-in-underscore-js-template
//props to Drew M and Jacob O

  var photoTemplate = _.template($('#albumTmpl').html());
  var photoTemplate2 = _.template($('#galTmpl').html());

  var photoHTMLalb = "";
  _.each(photoData, function (el){
    photoHTMLalb += photoTemplate(el);
  });
  var photoHTMLgal = "";
  _.each(photoData, function (el){
    photoHTMLgal += photoTemplate2(el);
  });
//YOU ARE TRYING TO FIGURE OUT HOW TO WRITE ONE FUNCTION TO ASSEMBLE ALL THE ALBUM


$(document).ready(function () {
  $(".album-view").html(photoHTMLalb);
  $('.gallery-photos').html(photoHTMLgal);

//   var albSelector =  .each(photos, function(name){
//     if (albSelector === el.photos.albumName) {
//       $(albSelector).addClass ("active-selection");
//     }
//   });
//
//           selectedAlbum += el.albumName;
//           $(".album-view").removeClass('active-section');
//           $(".gallery-view").addClass('active-section');
//           $(selectedAlbum).removeClass('hidden-section');
// });
  // View Switches
  $(".album-photos" > a).on(click, function(){
    event.preventDefault();
    $(".album-view").removeClass('active-section');
    (".album-view").addClass('hidden-section');
    $(".gallery-view").addClass('active-section');
    $(".").addClass('active-section');

  });


});
