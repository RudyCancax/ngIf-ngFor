// Importamos esta librería para indicar que este es un componente y pueda importarse desde otros
import { Component } from '@angular/core';

/* Decorador donde específicamos el nombre/etiqueta con el que se llamará el componente
   desde cualquier archivo "html", además especificamos la plantilla html que usará,
   si existe también se especifica el archivo de estilos (css)
*/
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

// Nombre del componente que podremos importar 
export class HeaderComponent{

}