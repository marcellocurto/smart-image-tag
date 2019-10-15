/*

+-----------------------------------------------------------------+
|     Created by Chirag Mehta - http://chir.ag/projects/ntc       |
|-----------------------------------------------------------------|
|               ntc js (Name that Color JavaScript)               |
+-----------------------------------------------------------------+

All the functions, code, lists etc. have been written specifically
for the Name that Color JavaScript by Chirag Mehta unless otherwise
specified.

This script is released under the: Creative Commons License:
Attribution 2.5 http://creativecommons.org/licenses/by/2.5/

Sample Usage:

  <script type="text/javascript" src="ntc.js"></script>

  <script type="text/javascript">

    var n_match  = ntc.name("#6195ED");
    n_rgb        = n_match[0]; // This is the RGB value of the closest matching color
    n_name       = n_match[1]; // This is the text string for the name of the match
    n_exactmatch = n_match[2]; // True if exact color match, False if close-match

    alert(n_match);

  </script>

*/

var ntc = {
  init: function() {
    var color, rgb, hsl;
    for (var i = 0; i < ntc.names.length; i++) {
      color = "#" + ntc.names[i][0];
      rgb = ntc.rgb(color);
      hsl = ntc.hsl(color);
      ntc.names[i].push(rgb[0], rgb[1], rgb[2], hsl[0], hsl[1], hsl[2]);
    }
  },

  name: function(color) {
    color = color.toUpperCase();
    if (color.length < 3 || color.length > 7)
      return ["#000000", "Invalid Color: " + color, false];
    if (color.length % 3 == 0) color = "#" + color;
    if (color.length == 4)
      color =
        "#" +
        color.substr(1, 1) +
        color.substr(1, 1) +
        color.substr(2, 1) +
        color.substr(2, 1) +
        color.substr(3, 1) +
        color.substr(3, 1);

    var rgb = ntc.rgb(color);
    var r = rgb[0],
      g = rgb[1],
      b = rgb[2];
    var hsl = ntc.hsl(color);
    var h = hsl[0],
      s = hsl[1],
      l = hsl[2];
    var ndf1 = 0;
    ndf2 = 0;
    ndf = 0;
    var cl = -1,
      df = -1;

    for (var i = 0; i < ntc.names.length; i++) {
      if (color == "#" + ntc.names[i][0])
        return ["#" + ntc.names[i][0], ntc.names[i][1], true];

      ndf1 =
        Math.pow(r - ntc.names[i][2], 2) +
        Math.pow(g - ntc.names[i][3], 2) +
        Math.pow(b - ntc.names[i][4], 2);
      ndf2 =
        Math.pow(h - ntc.names[i][5], 2) +
        Math.pow(s - ntc.names[i][6], 2) +
        Math.pow(l - ntc.names[i][7], 2);
      ndf = ndf1 + ndf2 * 2;
      if (df < 0 || df > ndf) {
        df = ndf;
        cl = i;
      }
    }

    return cl < 0
      ? ["#000000", "Invalid Color: " + color, false]
      : ["#" + ntc.names[cl][0], ntc.names[cl][1], false];
  },

  // adopted from: Farbtastic 1.2
  // http://acko.net/dev/farbtastic
  hsl: function(color) {
    var rgb = [
      parseInt("0x" + color.substring(1, 3)) / 255,
      parseInt("0x" + color.substring(3, 5)) / 255,
      parseInt("0x" + color.substring(5, 7)) / 255
    ];
    var min, max, delta, h, s, l;
    var r = rgb[0],
      g = rgb[1],
      b = rgb[2];

    min = Math.min(r, Math.min(g, b));
    max = Math.max(r, Math.max(g, b));
    delta = max - min;
    l = (min + max) / 2;

    s = 0;
    if (l > 0 && l < 1) s = delta / (l < 0.5 ? 2 * l : 2 - 2 * l);

    h = 0;
    if (delta > 0) {
      if (max == r && max != g) h += (g - b) / delta;
      if (max == g && max != b) h += 2 + (b - r) / delta;
      if (max == b && max != r) h += 4 + (r - g) / delta;
      h /= 6;
    }
    return [parseInt(h * 255), parseInt(s * 255), parseInt(l * 255)];
  },

  // adopted from: Farbtastic 1.2
  // http://acko.net/dev/farbtastic
  rgb: function(color) {
    return [
      parseInt("0x" + color.substring(1, 3)),
      parseInt("0x" + color.substring(3, 5)),
      parseInt("0x" + color.substring(5, 7))
    ];
  },

  names: [
    ["F0F8FF", "Alice Blue"],
    ["FAEBD7", "Antique White"],
    ["00FFFF", "Aqua"],
    ["7FFFD4", "Aquamarine"],
    ["F0FFFF", "Azure"],
    ["F5F5DC", "Beige"],
    ["FFE4C4", "Bisque"],
    ["000000", "Black"],
    ["FFEBCD", "Blanched Almond"],
    ["0000FF", "Blue"],
    ["8A2BE2", "Blue Violet"],
    ["A52A2A", "Brown"],
    ["DEB887", "Burly Wood"],
    ["5F9EA0", "Cadet Blue"],
    ["7FFF00", "Chartreuse"],
    ["D2691E", "Chocolate"],
    ["FF7F50", "Coral"],
    ["6495ED", "Cornflower Blue"],
    ["FFF8DC", "Cornsilk"],
    ["DC143C", "Crimson"],
    ["00FFFF", "Cyan"],
    ["00008B", "Dark Blue"],
    ["008B8B", "Dark Cyan"],
    ["B8860B", "Dark Goldenrod"],
    ["A9A9A9", "Dark Gray"],
    ["006400", "Dark Green"],
    ["BDB76B", "Dark Khaki"],
    ["8B008B", "Dark Magenta"],
    ["556B2F", "Dark Olive Green"],
    ["FF8C00", "Dark Orange"],
    ["9932CC", "Dark Orchid"],
    ["8B0000", "Dark Red"],
    ["E9967A", "Dark Salmon"],
    ["8FBC8F", "Dark Sea Green"],
    ["483D8B", "Dark Slate Blue"],
    ["2F4F4F", "Dark Slate Gray"],
    ["00CED1", "Dark Turquoise"],
    ["9400D3", "Dark Violet"],
    ["FF1493", "Deep Pink"],
    ["00BFFF", "Deep Sky Blue"],
    ["696969", "Dim Gray"],
    ["1E90FF", "Dodger Blue"],
    ["B22222", "Fire Brick"],
    ["FFFAF0", "Floral White"],
    ["228B22", "Forest Green"],
    ["FF00FF", "Fuchsia"],
    ["DCDCDC", "Gainsboro"],
    ["F8F8FF", "Ghost White"],
    ["FFD700", "Gold"],
    ["DAA520", "Goldenrod"],
    ["808080", "Gray"],
    ["008000", "Green"],
    ["ADFF2F", "Green Yellow"],
    ["F0FFF0", "Honey Dew"],
    ["FF69B4", "Hot Pink"],
    ["CD5C5C", "Indian Red"],
    ["4B0082", "Indigo"],
    ["FFFFF0", "Ivory"],
    ["F0E68C", "Khaki"],
    ["E6E6FA", "Lavender"],
    ["FFF0F5", "Lavender Blush"],
    ["7CFC00", "Lawn Green"],
    ["FFFACD", "Lemon Chiffon"],
    ["ADD8E6", "Light Blue"],
    ["F08080", "Light Coral"],
    ["E0FFFF", "Light Cyan"],
    ["FAFAD2", "Light Goldenrod Yellow"],
    ["D3D3D3", "Light Gray"],
    ["90EE90", "Light Green"],
    ["FFB6C1", "Light Pink"],
    ["FFA07A", "Light Salmon"],
    ["20B2AA", "Light Sea Green"],
    ["87CEFA", "Light Sky Blue"],
    ["778899", "Light Slate Gray"],
    ["B0C4DE", "Light Steel Blue"],
    ["FFFFE0", "Light Yellow"],
    ["00FF00", "Lime"],
    ["32CD32", "Lime Green"],
    ["FAF0E6", "Linen"],
    ["FF00FF", "Magenta"],
    ["800000", "Maroon"],
    ["66CDAA", "Medium Aqua Marine"],
    ["0000CD", "Medium Blue"],
    ["BA55D3", "Medium Orchid"],
    ["9370DB", "Medium Purple"],
    ["3CB371", "Medium Sea Green"],
    ["7B68EE", "Medium Slate Blue"],
    ["00FA9A", "Medium Spring Green"],
    ["48D1CC", "Medium Turquoise"],
    ["C71585", "Medium Violet Red"],
    ["191970", "Midnight Blue"],
    ["F5FFFA", "Mint Cream"],
    ["FFE4E1", "Misty Rose"],
    ["FFE4B5", "Moccasin"],
    ["FFDEAD", "Navajo White"],
    ["000080", "Navy"],
    ["FDF5E6", "Old Lace"],
    ["808000", "Olive"],
    ["6B8E23", "Olive Drab"],
    ["FFA500", "Orange"],
    ["FF4500", "Orange Red"],
    ["DA70D6", "Orchid"],
    ["EEE8AA", "Pale Goldenrod"],
    ["98FB98", "Pale Green"],
    ["AFEEEE", "Pale Turquoise"],
    ["DB7093", "Pale Violet Red"],
    ["FFEFD5", "Papaya Whip"],
    ["FFDAB9", "Peach Puff"],
    ["CD853F", "Peru"],
    ["FFC0CB", "Pink"],
    ["DDA0DD", "Plum"],
    ["B0E0E6", "Powder Blue"],
    ["800080", "Purple"],
    ["663399", "Rebecca Purple"],
    ["FF0000", "Red"],
    ["BC8F8F", "Rosy Brown"],
    ["4169E1", "Royal Blue"],
    ["8B4513", "Saddle Brown"],
    ["FA8072", "Salmon"],
    ["F4A460", "Sandy Brown"],
    ["2E8B57", "Sea Green"],
    ["FFF5EE", "Sea Shell"],
    ["A0522D", "Sienna"],
    ["C0C0C0", "Silver"],
    ["87CEEB", "Sky Blue"],
    ["6A5ACD", "Slate Blue"],
    ["708090", "Slate Gray"],
    ["FFFAFA", "Snow"],
    ["00FF7F", "Spring Green"],
    ["4682B4", "Steel Blue"],
    ["D2B48C", "Tan"],
    ["008080", "Teal"],
    ["D8BFD8", "Thistle"],
    ["FF6347", "Tomato"],
    ["40E0D0", "Turquoise"],
    ["EE82EE", "Violet"],
    ["F5DEB3", "Wheat"],
    ["FFFFFF", "White"],
    ["F5F5F5", "White Smoke"],
    ["FFFF00", "Yellow"],
    ["9ACD32", "Yellow Green"]
  ]
};

ntc.init();
