import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { StyleClassModule } from 'primeng/styleclass';
import { DividerModule } from 'primeng/divider';
import { ChartModule } from 'primeng/chart';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { RouterModule } from '@angular/router'; // Necesario para navegación
import { ImageModule } from 'primeng/image'; // Para mejor manejo de imágenes
import { TooltipModule } from 'primeng/tooltip'; // Para tooltips si los usas
import { TagModule } from 'primeng/tag'; // Alternativa a ChipModule
import { SkeletonModule } from 'primeng/skeleton'; // Para loading states

@NgModule({
    imports: [
        CommonModule,
        LandingRoutingModule,
        DividerModule,
        StyleClassModule,
        ChartModule,
        PanelModule,
        ButtonModule,
        CardModule,
        ChipModule,
        RouterModule, // Importar RouterModule
        ImageModule,  // Para mejor manejo de imágenes
        // Los siguientes son opcionales pero recomendados:
        TooltipModule,
        TagModule,
        SkeletonModule
    ],
    declarations: [LandingComponent]
})
export class LandingModule { }
