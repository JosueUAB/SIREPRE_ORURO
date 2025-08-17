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
    // logo_sereci: '../../../../assets/logos/1.png',
    // logo_tse: '../../../../assets/logos/2.png',
    // firma_digital: '../../../../assets/logos/3.png',
    // marca_agua: '../../../../assets/logos/sereci.png'
     logo_sereci: 'assets/logos/1.png',
  logo_tse: 'assets/logos/2.png',
  firma_digital: 'assets/logos/3.png',
  marca_agua: 'assets/logos/sereci.png'
  };

 personas: Persona[] = [
  { id: 1, nombre: 'Anghelo Gurief Ledo Vargas', ci: '7286374', cargo: 'Coordinador Departamental SIREPRE - ORURO', foto: 'assets/soporte/01.jpeg' },
  { id: 2, nombre: 'Claudia Isabel Limachi Guzmán', ci: '4078284', cargo: 'Coordinador Departamental SIREPRE - ORURO', foto: 'assets/soporte/02.jpg' },
  { id: 3, nombre: 'Cristian Miguel Reynolds Muriel', ci: '7351513', cargo: 'Coordinador Departamental SIREPRE - ORURO', foto: 'assets/soporte/03.jpg' },
  { id: 4, nombre: 'Juan Pablo Zaconeta Delgado', ci: '7303434', cargo: 'Coordinador Departamental SIREPRE - ORURO', foto: 'assets/soporte/04.jpg' },
  { id: 5, nombre: 'Nahir Andrea Paco Blanco', ci: '4059873', cargo: 'Coordinador Departamental SIREPRE - ORURO', foto: 'assets/soporte/05.jpeg' },
  { id: 6, nombre: 'Paola Cleyder Alvarez Zambrana', ci: '3505146', cargo: 'Coordinador Departamental SIREPRE - ORURO', foto: 'assets/soporte/isradev.png' }, // No existe 06.jpg
  { id: 7, nombre: 'Valeria Maria Valverde Lamas', ci: '7339793', cargo: 'Coordinador Departamental SIREPRE - ORURO', foto: 'assets/soporte/07.jpg' },
  { id: 8, nombre: 'Willma Tola Rios', ci: '7027435', cargo: 'Coordinador Departamental SIREPRE', foto: 'assets/soporte/08.jpg' },
  { id: 9, nombre: 'Alejandra Silvia Flores Colque', ci: '7451958', cargo: 'Monitor Departamental SIREPRE - ORURO', foto: 'assets/soporte/9.png' }, // Cambiado de 09.png a 9.png
  { id: 10, nombre: 'Fabiola Paola Jamillo Garcia', ci: '7351067', cargo: 'Monitor Departamental SIREPRE - ORURO', foto: 'assets/soporte/10.png' },
  { id: 11, nombre: 'Herlinda Vilacita Mollo', ci: '7324712', cargo: 'Monitor Departamental SIREPRE - ORURO', foto: 'assets/soporte/isradev.png' }, // No existe 11.png
  { id: 12, nombre: 'Jhenny Katerin Anzoleaga Huarayo', ci: '13225758', cargo: 'Monitor Departamental SIREPRE - ORURO', foto: 'assets/soporte/12.jpg' }, // Cambiado de .png a .jpg
  { id: 13, nombre: 'Jhonny Cabezas Mamani', ci: '7424904', cargo: 'Monitor Departamental SIREPRE - ORURO', foto: 'assets/soporte/isradev.png' }, // No existe 13.png
  { id: 14, nombre: 'Jhoselin Nayda Fernandez Copa', ci: '7365967', cargo: 'Monitor Departamental SIREPRE - ORURO', foto: 'assets/soporte/14.jpg' }, // Cambiado de .png a .jpg
  { id: 15, nombre: 'Joel Chambi Rufino', ci: '7322904', cargo: 'Monitor Departamental SIREPRE - ORURO', foto: 'assets/soporte/15.jpg' }, // Cambiado de .png a .jpg
  { id: 16, nombre: 'Jose Antonio Moler Mollo', ci: '7262273', cargo: 'Monitor Departamental SIREPRE - ORURO', foto: 'assets/soporte/16.JPG' }, // Cambiado de .png a .JPG
  { id: 17, nombre: 'Jose Manuel Valencia Canaviri', ci: '3526968', cargo: 'Monitor Departamental SIREPRE - ORURO', foto: 'assets/soporte/isradev.png' }, // No existe 17.png
  { id: 18, nombre: 'Judith Illanes Callejas', ci: '7366981', cargo: 'Monitor Departamental SIREPRE - ORURO', foto: 'assets/soporte/18.jpg' }, // Cambiado de .png a .jpg
  { id: 19, nombre: 'Lexer Lazcano Ballesteros', ci: '5061851', cargo: 'Monitor Departamental SIREPRE - ORURO', foto: 'assets/soporte/isradev.png' }, // No existe 19.png
  { id: 20, nombre: 'Luis Rodrigo Cuaquira Mendoza', ci: '5767655', cargo: 'Monitor Departamental SIREPRE - ORURO', foto: 'assets/soporte/20.jpg' }, // Cambiado de .png a .jpg
  { id: 21, nombre: 'Micaela Betina Mamani Dávila', ci: '7327415', cargo: 'Monitor Departamental SIREPRE - ORURO', foto: 'assets/soporte/21.jpg' }, // Cambiado de .png a .jpg
  { id: 22, nombre: 'Myrna Emma Moya Coca', ci: '5630969', cargo: 'Monitor Departamental SIREPRE - ORURO', foto: 'assets/soporte/22.jpg' }, // Cambiado de .png a .jpg
  { id: 23, nombre: 'Vanesa Belen Bustamante Benito', ci: '4021069', cargo: 'Monitor Departamental SIREPRE - ORURO', foto: 'assets/soporte/23.jpg' }, // Cambiado de .png a .jpg
  { id: 24, nombre: 'Fabio Paniagua Villegas', ci: '5773168', cargo: 'Monitor Departamental SIREPRE - ORURO', foto: 'assets/soporte/24.jpg' }, // Cambiado de .png a .jpg
  { id: 25, nombre: 'Carla Gianina Muñoz Ecos', ci: '5747478', cargo: 'Soporte Técnico SIREPRE - ORURO', foto: 'assets/soporte/25.jpg' }, // Cambiado de .png a .jpg
  { id: 26, nombre: 'Carlos Ruben Taquichiri Catari', ci: '5729243', cargo: 'Soporte Técnico SIREPRE - ORURO', foto: 'assets/soporte/26.jpg' }, // No existe 26.png
  { id: 27, nombre: 'Cristhian Acha Colque', ci: '7293403', cargo: 'Soporte Técnico SIREPRE - ORURO', foto: 'assets/soporte/27.jpg' }, // Cambiado de .png a .jpg
  { id: 28, nombre: 'David Ocaña Vera', ci: '6587455', cargo: 'Soporte Técnico SIREPRE - ORURO', foto: 'assets/soporte/28.jpg' }, // Cambiado de .png a .jpg
  { id: 29, nombre: 'David Ernesto Rios Ocaña', ci: '7263642', cargo: 'Soporte Técnico SIREPRE - ORURO', foto: 'assets/soporte/29.jpg' }, // Cambiado de .png a .jpg
  { id: 30, nombre: 'Deivid Victor Canaza Vasquez', ci: '5756119', cargo: 'Soporte Técnico SIREPRE - ORURO', foto: 'assets/soporte/30.jpg' }, // Cambiado de .png a .jpg
  { id: 31, nombre: 'Edwin Leonardo Castellón Martínez', ci: '4053478', cargo: 'Soporte Técnico SIREPRE - ORURO', foto: 'assets/soporte/isradev.png' }, // No existe 31.png
  { id: 32, nombre: 'Elizabet Chusicoma Ordoñez', ci: '12613097', cargo: 'Soporte Técnico SIREPRE - ORURO', foto: 'assets/soporte/32.jpeg' }, // Cambiado de .png a .jpeg
  { id: 33, nombre: 'Gustavo Deymar Apaza Crispin', ci: '7371471', cargo: 'Soporte Técnico SIREPRE - ORURO', foto: 'assets/soporte/33.jpg' }, // Cambiado de .png a .jpg
  { id: 34, nombre: 'Ivan Marcos Choque', ci: '7331044', cargo: 'Soporte Técnico SIREPRE - ORURO', foto: 'assets/soporte/34.jpg' }, // Cambiado de .png a .jpg
  { id: 35, nombre: 'Josue Israel Arista Huanca', ci: '7372771', cargo: 'Soporte Técnico SIREPRE - ORURO', foto: 'assets/soporte/35.png' }, // No existe 35.png
  { id: 36, nombre: 'Lady Bertha Magne Vargas', ci: '12773220', cargo: 'Soporte Técnico SIREPRE - ORURO', foto: 'assets/soporte/36.jpg' }, // Cambiado de .png a .jpg
  { id: 37, nombre: 'Luis Adolfo Garnica Pérez', ci: '12676691', cargo: 'Soporte Técnico SIREPRE - ORURO', foto: 'assets/soporte/37.jpg' }, // Cambiado de .png a .jpg
  { id: 38, nombre: 'Neysa Jill Colque Colque', ci: '13134626', cargo: 'Soporte Técnico SIREPRE - ORURO', foto: 'assets/soporte/38.jpg' }, // Cambiado de .png a .jpg
  { id: 39, nombre: 'Paola Gandiva Santos Romero', ci: '7367244', cargo: 'Soporte Técnico SIREPRE - ORURO', foto: 'assets/soporte/39.jpg' }, // Cambiado de .png a .jpg
  { id: 40, nombre: 'Fernando Miguel Flores Cassia', ci: '7370955', cargo: 'Soporte Técnico SIREPRE - ORURO', foto: 'assets/soporte/40.jpg' } // Cambiado de .png a .jpg
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
