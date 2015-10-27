
//http://stackoverflow.com/questions/8648629/how-to-print-array-in-underscore-js-template
//props to Drew M and Jacob O
$(document).ready(function () {
  photoAlbumPage.init();
});


var photoAlbumPage = {
  init: function(){
    photoAlbumPage.styling();
    photoAlbumPage.events();
  },
  styling: function(){
    photoAlbumPage.loadPhotos();
  },
  loadPhotos: function(){
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
    $(".album-view").html(photoHTMLalb);
    $('.gallery-photos').html(photoHTMLgal);
  },
  events: function(){
        $(".album-view div a").on("click",function(event){
        event.preventDefault();
        $(".album-view").removeClass('active-section');
        $(".gallery-view").addClass('active-section');
        var clickT =(event.target);
        var clickTarget = $(clickT).attr('src');
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
      event.preventDefault();
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
    },
};







  // var photoTemplate = _.template($('#albumTmpl').html());
  // var photoTemplate2 = _.template($('#galTmpl').html());
  //
  // var photoHTMLalb = "";
  // _.each(photoData, function (el){
  //   photoHTMLalb += photoTemplate(el);
  // });
  // var photoHTMLgal = "";
  // _.each(photoData, function (el){
  //   photoHTMLgal += photoTemplate2(el);
  // });


// $(document).ready(function () {
//   $(".album-view").html(photoHTMLalb);
//   $('.gallery-photos').html(photoHTMLgal);



  // $(".album-view div a").on("click",function(event){
  //   event.preventDefault();
  //   $(".album-view").removeClass('active-section');
  //   $(".gallery-view").addClass('active-section');
  //   var clickT =(event.target);
  //   var clickTarget = $(clickT).attr('src');
  //   if (clickTarget.search("bear") > -1) {
  //     $(".gallery-photos").find(".Bear").removeClass("hidden-section");
  //   }
  //   if (clickTarget.search("wedding") > -1) {
  //     $(".gallery-photos").find(".Wedding").removeClass("hidden-section");
  //   }
  //   if (clickTarget.search("love") > -1){
  //     $(".gallery-photos").find(".Love").removeClass("hidden-section");
  //   }
  //   if (clickTarget.search("family") > -1){
  //     $(".gallery-photos").find(".Family").removeClass("hidden-section");
  //   }
  //   if (clickTarget.search("friends") > -1){
  //     $(".gallery-photos").find(".Friends").removeClass("hidden-section");
  //   }
  //   if (clickTarget.search("greece") > -1){
  //     $(".gallery-photos").find(".Greece").removeClass("hidden-section");
  //   }
  // });
  // $(".sideNav ul li a").on("click",function(event){
  //   event.preventDefault();
  //   $(".album-view").removeClass('active-section');
  //   $(".gallery-view").addClass('active-section');
  //   var clickT =(event.target);
  //   var clickTarget = $(clickT).attr('rel');
  //   console.log(clickTarget);
  //   $(".gallery-photos div").addClass("hidden-section");
  //   if (clickTarget === "Bear") {
  //     $(".gallery-photos").find(".Bear").removeClass("hidden-section");
  //   }
  //   if (clickTarget === "Wedding") {
  //     $(".gallery-photos").find(".Wedding").removeClass("hidden-section");
  //   }
  //   if (clickTarget === "Love"){
  //     $(".gallery-photos").find(".Love").removeClass("hidden-section");
  //   }
  //   if (clickTarget === "Family"){
  //     $(".gallery-photos").find(".Family").removeClass("hidden-section");
  //   }
  //   if (clickTarget === "Friends"){
  //     $(".gallery-photos").find(".Friends").removeClass("hidden-section");
  //   }
  //   if (clickTarget === "Greece"){
  //     $(".gallery-photos").find(".Greece").removeClass("hidden-section");
  //   }
  //   if (clickTarget === "AlbumView"){
  //     $(".album-view").addClass('active-section');
  //     $(".gallery-view").removeClass('active-section');
  //   }
  // });
  // $(".gallery-photos div a").on("click", function(event){
  //   event.preventDefault();
  //   $(".photo-view").addClass('active-section');
  //   $(".album-view").removeClass('active-section');
  //   $(".gallery-view").removeClass('active-section');
  //   $("header").addClass('hidden-section');
  //   $("footer").addClass('hidden-section');
  //   var clickT =(event.target);
  //   var clickTarget = $(clickT).attr('src');
  //   $(".photo-wrapper img").attr("src", clickTarget);
  // });
  //
  // $(".backtoAlb").on("click", function(event){
  //   $(".photo-view").removeClass('active-section');
  //   $(".album-view").removeClass('active-section');
  //   $(".gallery-view").addClass('active-section');
  //   $("header").removeClass('hidden-section');
  //   $("footer").removeClass('hidden-section');
  // });
