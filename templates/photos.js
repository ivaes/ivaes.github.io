const photos = {photos}.sort(function (a, b) {return 0.5 - Math.random()});

for (let i = 0; i < photos.length; ++i) {
  document.write(
    '<div onclick="goBig(this)" class="nature"><img src="' + photos[i].thumb + '" data-src="' + photos[i].src + '" alt="' + photos[i].name + '"></div>'
  );
}
