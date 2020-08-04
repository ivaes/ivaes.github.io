const photos = [{"name":"BlockBuster. Arcanoid game design","thumb":"images\/designs\/thumbs\/BlockBuster. Arcanoid game design.jpg","src":"images\/designs\/pics\/BlockBuster. Arcanoid game design.jpg"}].sort(function (a, b) {return 0.5 - Math.random()});

for (let i = 0; i < photos.length; ++i) {
  document.write(
    '<div onclick="goBig(this)" class="nature"><img src="' + photos[i].thumb + '" data-src="' + photos[i].src + '" alt="' + photos[i].name + '"></div>'
  );
}
