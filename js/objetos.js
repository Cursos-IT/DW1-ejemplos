var alumno1 = {
    nombre: 'Juan',
    edad: 28,
    genero: 'masculino',
    intereses: ['lectura', 'fútbol'],
    biografia: function () {
      console.log(this.nombre + ' tiene ' + this.edad + ' años. Le gusta la ' +    this.intereses[0] + ' y jugar al ' + this.intereses[1] + '.');
    },
    saludo: function() {
      console.log('Hola, soy '+ this.nombre + '. ');
    }
  };

console.log(alumno1.nombre)
console.log(alumno1.edad)
console.log(alumno1.intereses[1])
alumno1.biografia()
alumno1.saludo()