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
    ]
  },
  {
    albumName : "Friends",
    imgs: [
      "img/friends/friends_01.jpg",
      "img/friends/friends_02.jpg",
      "img/friends/friends_03.jpg",
      "img/friends/friends_04.gif",
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

  $(".album-view div a").on("click",function(event){
    event.preventDefault();
    $(".album-view").removeClass('active-section');
    $(".gallery-view").addClass('active-section');
    var clickT =(event.target);
    var clickTarget = $(clickT).attr('src');
    // console.log(clickTarget.search("red"));
    if (clickTarget.search("bear") > -1) {
      $(".gallery-photos").find(".Bear").removeClass("hidden-section");
    }
    if (clickTarget.search("wedding") > -1) {
      $(".gallery-photos").find(".Wedding").removeClass("hidden-section");
    }
    if (clickTarget.search("love") > -1){
      $(".gallery-photos").find(".Love").removeClass("hidden-section");
    }
    if (clickTarget.search("family") > -1){
      $(".gallery-photos").find(".Family").removeClass("hidden-section");
    }
    if (clickTarget.search("friends") > -1){
      $(".gallery-photos").find(".Friends").removeClass("hidden-section");
    }
    if (clickTarget.search("greece") > -1){
      $(".gallery-photos").find(".Greece").removeClass("hidden-section");
    }
  });
  $(".sideNav ul li a").on("click",function(event){
    // event.preventDefault();
    $(".album-view").removeClass('active-section');
    $(".gallery-view").addClass('active-section');
    var clickT =(event.target);
    var clickTarget = $(clickT).attr('rel');
    console.log(clickTarget);
    $(".gallery-photos div").addClass("hidden-section");
    if (clickTarget === "Bear") {
      $(".gallery-photos").find(".Bear").removeClass("hidden-section");
    }
    if (clickTarget === "Wedding") {
      $(".gallery-photos").find(".Wedding").removeClass("hidden-section");
    }
    if (clickTarget === "Love"){
      $(".gallery-photos").find(".Love").removeClass("hidden-section");
    }
    if (clickTarget === "Family"){
      $(".gallery-photos").find(".Family").removeClass("hidden-section");
    }
    if (clickTarget === "Friends"){
      $(".gallery-photos").find(".Friends").removeClass("hidden-section");
    }
    if (clickTarget === "Greece"){
      $(".gallery-photos").find(".Greece").removeClass("hidden-section");
    }
    if (clickTarget === "AlbumView"){
      $(".album-view").addClass('active-section');
      $(".gallery-view").removeClass('active-section');
    }
  });
  $(".gallery-photos div a").on("click", function(event){
    event.preventDefault();
    $(".photo-view").addClass('active-section');
    $(".album-view").removeClass('active-section');
    $(".gallery-view").removeClass('active-section');
    $("header").addClass('hidden-section');
    $("footer").addClass('hidden-section');
    var clickT =(event.target);
    var clickTarget = $(clickT).attr('src');
    $(".photo-wrapper img").attr("src", clickTarget);
  });

  $(".backtoAlb").on("click", function(event){
    $(".photo-view").removeClass('active-section');
    $(".album-view").removeClass('active-section');
    $(".gallery-view").addClass('active-section');
    $("header").removeClass('hidden-section');
    $("footer").removeClass('hidden-section');
  });


});

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


// var selectedAlbum = $(."album-photos").children().each(function(){



  // $(".gallery-photos div").each(photoData,function(el){
  //   if el.albumName === ""

  //   .on("click", function(){
  //   event.preventDefault();
  //   if (albumNames = "Bear") {}
    // $(".album-view").removeClass('active-section');
    // $(".gallery-view").addClass('active-section');
    // $(".").addClass('active-section');
  //
  // })
