// import { Component } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { LayoutService } from 'src/app/layout/service/app.layout.service';

// interface Persona {
//   id: number;
//   nombre: string;
//   ci: string;
//   cargo: string;
//   foto: string;
// }

// @Component({
//   selector: 'app-landing',
//   templateUrl: './landing.component.html'
// })
// export class LandingComponent {
//   personas: Persona[] = [
//     { id: 1, nombre: 'Jesus Alberto Ledezma Villalta', ci: '21312312312', cargo: 'Ingeniero de Soporte', foto: '../../../../assets/soporte/01.png' },
//     { id: 2, nombre: 'Rivaldo Aldair Ledezma Villalta', ci: '21312312312', cargo: 'Analista de Sistemas', foto: 'assets/fotos/02.jpg' },
//     { id: 3, nombre: 'Marcelo Santiago Zubieta Huanca', ci: '21312312312', cargo: 'Coordinador', foto: 'assets/fotos/03.jpg' },
//     { id: 4, nombre: 'Jacqueline Judith Cruz Torrico', ci: '21312312312', cargo: 'Supervisora', foto: 'assets/fotos/04.jpg' },
//     { id: 5, nombre: 'Jhenny Gutierrez Ramos', ci: '21312312312', cargo: 'Operadora', foto: 'assets/fotos/05.jpg' },
//     { id: 6, nombre: 'Jhoana Andrea Escalera Paqui', ci: '21312312312', cargo: 'Técnico de Campo', foto: 'assets/fotos/06.jpg' },
//     { id: 7, nombre: 'Enrique Emanuel Alanez Garcia', ci: '21312312312', cargo: 'Administrador', foto: 'assets/fotos/07.jpg' },
//     { id: 8, nombre: 'Jheymi Gladis Hinojosa Ocsa', ci: '21312312312', cargo: 'Soporte Nivel 1', foto: 'assets/fotos/08.jpg' },
//     { id: 9, nombre: 'Jesus Alberto Ledezma Villalta', ci: '21312312312', cargo: 'Ingeniero de Redes', foto: 'assets/fotos/09.jpg' },
//     { id: 10, nombre: 'Rivaldo Aldair Ledezma Villalta', ci: '21312312312', cargo: 'QA Tester', foto: 'assets/fotos/10.jpg' },
//     { id: 11, nombre: 'Marcelo Santiago Zubieta Huanca', ci: '21312312312', cargo: 'Arquitecto TI', foto: 'assets/fotos/11.jpg' },
//     { id: 12, nombre: 'Jacqueline Judith Cruz Torrico', ci: '21312312312', cargo: 'Líder de Proyecto', foto: 'assets/fotos/12.jpg' },
//     { id: 13, nombre: 'Jhenny Gutierrez Ramos', ci: '21312312312', cargo: 'Consultora', foto: 'assets/fotos/13.jpg' },
//     { id: 14, nombre: 'Jhoana Andrea Escalera Paqui', ci: '21312312312', cargo: 'Operadora', foto: 'assets/fotos/14.jpg' },
//     { id: 15, nombre: 'Enrique Emanuel Alanez Garcia', ci: '21312312312', cargo: 'Analista', foto: 'assets/fotos/15.jpg' },
//     { id: 16, nombre: 'Jheymi Gladis Hinojosa Ocsa', ci: '21312312312', cargo: 'Técnico', foto: 'assets/fotos/16.jpg' },
//   ];

//   personaSeleccionada: Persona | null = null;
//   mostrarLista: boolean = true;

//   constructor(
//     public layoutService: LayoutService,
//     private route: ActivatedRoute,
//     public router: Router
//   ) { }

//   ngOnInit() {
//     this.route.params.subscribe(params => {
//       const id = +params['id'];
//       if (id) {
//         this.personaSeleccionada = this.personas.find(p => p.id === id) || null;
//         this.mostrarLista = false;
//       } else {
//         this.personaSeleccionada = null;
//         this.mostrarLista = true;
//       }
//     });
//   }

//   volverALista() {
//     this.router.navigate(['/landing']);
//   }
// }
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

interface Persona {
  id: number;
  nombre: string;
  ci: string;
  cargo: string;
  foto: string;
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html'
})
export class LandingComponent {
  // Imágenes centralizadas
  imagenes = {
    logo_sereci: '../../../../assets/logos/1.png',
    logo_tse: '../../../../assets/logos/2.png',
    firma_digital: '../../../../assets/logos/3.png',
    marca_agua: '../../../../assets/logos/sereci.png'
  };

  personas: Persona[] = [
    { id: 1, nombre: 'Jesus Alberto Ledezma Villalta', ci: '21312312312', cargo: 'Ingeniero de Soporte', foto: '../../../../assets/soporte/01.png' },
    { id: 2, nombre: 'Rivaldo Aldair Ledezma Villalta', ci: '21312312312', cargo: 'Analista de Sistemas', foto: '../../../../assets/soporte/01.png' },
    // Resto de personas...
  ];

  personaSeleccionada: Persona | null = null;
  mostrarLista: boolean = true;

  constructor(
    public layoutService: LayoutService,
    private route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      if (id) {
        this.personaSeleccionada = this.personas.find(p => p.id === id) || null;
        this.mostrarLista = false;
      } else {
        this.personaSeleccionada = null;
        this.mostrarLista = true;
      }
    });
  }

  volverALista() {
    this.router.navigate(['/landing']);
  }

  // Prevenir clic derecho y copia
  preventDefaultActions(event: MouseEvent) {
    event.preventDefault();
  }


}
