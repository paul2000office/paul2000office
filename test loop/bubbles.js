var scores = [78, 56, 19, 48, 89, 24, 10, 45, 98, 46];

var max = 0;
var position;

for (var i = 0; i < scores.length; i++)  {
    if(scores[1] > max) {
        max = scores[i];
        position = i;
    }
}

document.write(max + " bule pe pozitia " + position);