$(document).ready(function() 
  {
      alert("twenty")
    var imagecollection = [
        { src: 'https://ununsplash.imgix.net/reserve/RONyPwknRQOO3ag4xf3R_Kinsey.jpg?fit=crop&fm=jpg&h=700&q=75&w=1600' },
    { src: 'https://unsplash.imgix.net/photo-1414438992182-69e404046f80?fit=crop&fm=jpg&h=625&q=75&w=1600' },
    { src: 'https://unsplash.imgix.net/photo-1414490929659-9a12b7e31907?fit=crop&fm=jpg&h=800&q=75&w=1600' },
    { src: 'https://unsplash.imgix.net/uploads/14129863345840df499fc/0165574c?fit=crop&fm=jpg&h=600&q=75&w=1600' }
        /* Slideshow not working? Check your image links. */
    ];

    $("#pleaseWork").vegas({
        slides: imagecollection,
        transition: 'fade',
        preloadImage: true,
        timer: true,
        shuffle: true,
        delay: 5000,
        animation: 'kenburns',
        cover: true
    });
  });