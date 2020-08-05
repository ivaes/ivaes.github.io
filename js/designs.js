const photos = [{"name":"BlockBuster. Arcanoid logo and game design.","thumb":"images\/designs\/thumbs\/BlockBuster. Arcanoid logo and game design.jpg","src":"images\/designs\/pics\/BlockBuster. Arcanoid logo and game design.jpg"},{"name":"Spass. Secure passwords creater and keeper. Logo and app design.","thumb":"images\/designs\/thumbs\/Spass. Secure passwords creater and keeper. Logo and app design.jpg","src":"images\/designs\/pics\/Spass. Secure passwords creater and keeper. Logo and app design.jpg"}].sort(function (a, b) {return 0.5 - Math.random()});

for (let i = 0; i < photos.length; ++i) {
  document.write(
    '<div onclick="goBig(this)" class="nature"><img src="' + photos[i].thumb + '" data-src="' + photos[i].src + '" alt="' + photos[i].name + '"></div>'
  );
}
