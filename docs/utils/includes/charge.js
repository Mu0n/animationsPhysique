//Développé le 2019-03-01 par Michaël Juneau

//Classe pour générer des symboles de charge, version +, - ou 0.


SVG.Charge = SVG.invent({
  create: 'g',
  inherit: SVG.G,
  extend: {
    constructorMethod: function({radius=50, polarite=1}={radius:50, polarite:1}) {
      this.circle(radius).fill('#000077');

      var textePolarite = 'o';
      var yPolarite = -30;
      switch(polarite){
        case 1:
        textePolarite = '+';
          break;
        case -1:
        textePolarite = '-';
        yPolarite = -40;
          break;
      }
      this.symbolePolarite = this.text(textePolarite).attr({x:25, y:yPolarite});
      this.symbolePolarite.font({anchor: 'middle', size: 60, family: 'Helvetica', fill: '#ffffff'});

           return this;
         },
         setPolarite: function(polarite){
             this.symbolePolarite.text('o');
             switch(polarite){
               case 1:
                 this.symbolePolarite.text('+');
                 break;
               case -1:
                 this.symbolePolarite.text('-');
                 break;
           } // fin de switch
      } // fin de setPolarite
    },//fin du extend
  construct: {
      Charge: function({radius=50, polarite=1}={radius:50, polarite:1}) {
       return this.put(new SVG.Charge).constructorMethod({radius:radius, polarite:polarite});
     }
   }
});
