const photos = [{"name":"Autumn floor.","thumb":"images\/photos\/thumbs\/Autumn floor.jpg","src":"images\/photos\/pics\/Autumn floor.jpg"},{"name":"Bjorbek. First evening.","thumb":"images\/photos\/thumbs\/Bjorbek. First evening.jpg","src":"images\/photos\/pics\/Bjorbek. First evening.jpg"},{"name":"Field. Macro.","thumb":"images\/photos\/thumbs\/Field. Macro.jpg","src":"images\/photos\/pics\/Field. Macro.jpg"},{"name":"Forest micro world 2.","thumb":"images\/photos\/thumbs\/Forest micro world 2.jpg","src":"images\/photos\/pics\/Forest micro world 2.jpg"},{"name":"Forest micro world.","thumb":"images\/photos\/thumbs\/Forest micro world.jpg","src":"images\/photos\/pics\/Forest micro world.jpg"},{"name":"Italy. Vineyard by the sea.","thumb":"images\/photos\/thumbs\/Italy. Vineyard by the sea.jpg","src":"images\/photos\/pics\/Italy. Vineyard by the sea.jpg"},{"name":"Mixed forest.","thumb":"images\/photos\/thumbs\/Mixed forest.jpg","src":"images\/photos\/pics\/Mixed forest.jpg"},{"name":"Moss detail.","thumb":"images\/photos\/thumbs\/Moss detail.jpg","src":"images\/photos\/pics\/Moss detail.jpg"},{"name":"Norway. Between forest and lake.","thumb":"images\/photos\/thumbs\/Norway. Between forest and lake.jpg","src":"images\/photos\/pics\/Norway. Between forest and lake.jpg"},{"name":"Norway. Fairytale fiord place.","thumb":"images\/photos\/thumbs\/Norway. Fairytale fiord place.jpg","src":"images\/photos\/pics\/Norway. Fairytale fiord place.jpg"},{"name":"Norway. Loneliness.","thumb":"images\/photos\/thumbs\/Norway. Loneliness.jpg","src":"images\/photos\/pics\/Norway. Loneliness.jpg"},{"name":"Norway. Red house between forest and lake.","thumb":"images\/photos\/thumbs\/Norway. Red house between forest and lake.jpg","src":"images\/photos\/pics\/Norway. Red house between forest and lake.jpg"},{"name":"Norway. Red house in the field.","thumb":"images\/photos\/thumbs\/Norway. Red house in the field.jpg","src":"images\/photos\/pics\/Norway. Red house in the field.jpg"},{"name":"Oslo. Island life.","thumb":"images\/photos\/thumbs\/Oslo. Island life.jpg","src":"images\/photos\/pics\/Oslo. Island life.jpg"},{"name":"Pine tree ornament.","thumb":"images\/photos\/thumbs\/Pine tree ornament.jpg","src":"images\/photos\/pics\/Pine tree ornament.jpg"},{"name":"Pumpkin' garden.","thumb":"images\/photos\/thumbs\/Pumpkin' garden.jpg","src":"images\/photos\/pics\/Pumpkin' garden.jpg"},{"name":"San Marino. Picnic site.","thumb":"images\/photos\/thumbs\/San Marino. Picnic site.jpg","src":"images\/photos\/pics\/San Marino. Picnic site.jpg"},{"name":"San Marino. Rooftops pattern.","thumb":"images\/photos\/thumbs\/San Marino. Rooftops pattern.jpg","src":"images\/photos\/pics\/San Marino. Rooftops pattern.jpg"},{"name":"San Marino. We are all equal.","thumb":"images\/photos\/thumbs\/San Marino. We are all equal.jpg","src":"images\/photos\/pics\/San Marino. We are all equal.jpg"},{"name":"Spain. All shades of green.","thumb":"images\/photos\/thumbs\/Spain. All shades of green.jpg","src":"images\/photos\/pics\/Spain. All shades of green.jpg"},{"name":"Spain. Under balconies beauty.","thumb":"images\/photos\/thumbs\/Spain. Under balconies beauty.jpg","src":"images\/photos\/pics\/Spain. Under balconies beauty.jpg"},{"name":"Spring. Macro.","thumb":"images\/photos\/thumbs\/Spring. Macro.jpg","src":"images\/photos\/pics\/Spring. Macro.jpg"},{"name":"Stack of wood in the forest.","thumb":"images\/photos\/thumbs\/Stack of wood in the forest.jpg","src":"images\/photos\/pics\/Stack of wood in the forest.jpg"},{"name":"Tundra snowshoes.","thumb":"images\/photos\/thumbs\/Tundra snowshoes.jpg","src":"images\/photos\/pics\/Tundra snowshoes.jpg"},{"name":"Tver. Near city life.","thumb":"images\/photos\/thumbs\/Tver. Near city life.jpg","src":"images\/photos\/pics\/Tver. Near city life.jpg"},{"name":"Tver. Vinter series 1.","thumb":"images\/photos\/thumbs\/Tver. Vinter series 1.jpg","src":"images\/photos\/pics\/Tver. Vinter series 1.jpg"},{"name":"Tver. Vinter series 2.","thumb":"images\/photos\/thumbs\/Tver. Vinter series 2.jpg","src":"images\/photos\/pics\/Tver. Vinter series 2.jpg"},{"name":"Tver. Vinter series 3.","thumb":"images\/photos\/thumbs\/Tver. Vinter series 3.jpg","src":"images\/photos\/pics\/Tver. Vinter series 3.jpg"},{"name":"Valday lake. Sunset.","thumb":"images\/photos\/thumbs\/Valday lake. Sunset.jpg","src":"images\/photos\/pics\/Valday lake. Sunset.jpg"},{"name":"Valencia. Girls in traditional costumes.","thumb":"images\/photos\/thumbs\/Valencia. Girls in traditional costumes.jpg","src":"images\/photos\/pics\/Valencia. Girls in traditional costumes.jpg"},{"name":"Vasilevo. Open air museum.","thumb":"images\/photos\/thumbs\/Vasilevo. Open air museum.jpg","src":"images\/photos\/pics\/Vasilevo. Open air museum.jpg"},{"name":"Winter is coming.","thumb":"images\/photos\/thumbs\/Winter is coming.jpg","src":"images\/photos\/pics\/Winter is coming.jpg"}].sort(function (a, b) {return 0.5 - Math.random()});

for (let i = 0; i < photos.length; ++i) {
  document.write(
    '<div onclick="goBig(this)" class="nature"><img src="' + photos[i].thumb + '" data-src="' + photos[i].src + '" alt="' + photos[i].name + '"></div>'
  );
}
