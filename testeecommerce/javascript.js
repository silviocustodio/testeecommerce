var carousel = new ch.Carousel(ch('.demo-carousel')[0], {
    pagination: true
});

var zoom1 = new ch.Zoom(ch('#zoom-default')[0]);

var zoom2 = new ch.Zoom(ch('#zoom-preload')[0]);
// Preload image
zoom2.loadImage();