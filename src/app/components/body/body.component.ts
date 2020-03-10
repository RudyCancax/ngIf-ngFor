import { Component } from '@angular/core';


@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent {

    // Variable mostrar de tipo booleano
    mostrar = false;

    // Objeto al cual accedemos desde el body
    frase: any = {
        mensaje: 'Una gran responsabilidad',
        autor: 'Parker'
    };

    // ngFor:
    personajes = ['Batman', 'SuperMan', 'Acuaman'];
}
