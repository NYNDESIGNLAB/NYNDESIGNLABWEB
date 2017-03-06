$(document).ready(function() {

$('#gallery-icon-1,#gallery-link-1').on('click', function() {
 
    $(this).lightGallery({
        dynamic: true,
        download: false,
        counter: false,
        showAfterLoad: true,
        dynamicEl: [{
            'src': './img/proj1/1.jpg',
            
            }, {
            'src': './img/proj1/2.jpg',
            
            }, {
            'src': './img/proj1/3.jpg',
            
            }, {
            'src': './img/proj1/4.jpg',
            
            }, {
            'src': './img/proj1/5.jpg',
            
            }, {
            'src': './img/proj1/6.jpg',
            
            }, {
            'src': './img/proj1/7.jpg',
            
            }, {
            'src': './img/proj1/8.jpg',
            
            }, {
            'src': './img/proj1/9.jpg',
            
            }]
    })
 
});

$('#gallery-icon-2,#gallery-link-2').on('click', function() {
 
    $(this).lightGallery({
        dynamic: true,
        download: false,
        counter: false,
        dynamicEl: [{
            'src': './img/proj2/1.jpg',
            
            }, {
            'src': './img/proj2/2.jpg',
            
            }, {
            'src': './img/proj2/3.jpg',
            
            }, {
            'src': './img/proj2/4.jpg',
            
            }, {
            'src': './img/proj2/5.jpg',
            
            }, {
            'src': './img/proj2/6.jpg',
            
            }, {
            'src': './img/proj2/7.jpg',
            
            }, {
            'src': './img/proj2/8.jpg',
            
            }, {
            'src': './img/proj2/9.jpg',
            
            }]
    })
 
});

$('#gallery-icon-3,#gallery-link-3').on('click', function() {
 
    $(this).lightGallery({
        dynamic: true,
        download: false,
        counter: false,
        dynamicEl: [{
            'src': './img/proj3/1.jpg',
            
            }, {
            'src': './img/proj3/2.jpg',
            
            }, {
            'src': './img/proj3/3.jpg',
            
            }, {
            'src': './img/proj3/4.jpg',
            
            }, {
            'src': './img/proj3/5.jpg',
            
            }, {
            'src': './img/proj3/6.jpg',
            
            }, {
            'src': './img/proj3/7.jpg',
            
            }, {
            'src': './img/proj3/8.jpg',
            
            }]
    })
 
});


});


$(document).ready(function() {
  $('#clickMe').on('click', function() {
    $('#pinThese img').click();
  });
    $('#clickMe2').on('click', function() {
    $('#pinThese img').click();
  });
      $('#clickMe3').on('click', function() {
    $('#pinThese img').click();
  });
});
