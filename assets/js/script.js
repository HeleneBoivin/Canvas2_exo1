var c = document.getElementById('mon_canvas');
var ctx = c.getContext("2d");

// Cône
ctx.beginPath();      // Début d'un autre chemin
ctx.moveTo(100,330);
ctx.lineTo(70,240);
ctx.lineTo(130,240);
ctx.fillStyle = "#D18638";
ctx.fill();            // Application du remplissage

//Glace
ctx.beginPath();
ctx.moveTo(70,240);                       // point de départ de la courbe
ctx.quadraticCurveTo(100,150,130,240);    //quadraticCurveTo( cp1x, cp1y, destx, desty )
ctx.fillStyle = "#8A0908";
ctx.fill();                               // Application du remplissage
