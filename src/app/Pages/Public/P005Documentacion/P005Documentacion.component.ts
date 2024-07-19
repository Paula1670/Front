import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../Components/Header/Header.component';
import { FooterComponent } from '../../../Components/Footer/Footer.component';
import { Nav_Bar_publicComponent } from '../../../Components/Nav_Bars/Nav_Bar_public/Nav_Bar_public.component';
import { P005GetDocumentacion } from '../../../Models/Public/DtosP005/P005Get_Documentacion';
import { P005Service } from '../../../Services/Public/P005.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-P005Documentacion',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    Nav_Bar_publicComponent,
  ],
  templateUrl: './P005Documentacion.component.html',
  styleUrls: ['./P005Documentacion.component.scss'],
})
export class P005DocumentacionComponent implements OnInit {
  /*Documentos = [
    {
      url: 'https://drive.google.com/file/d/1oRFAj-ORRSWQCFEgx-t2F4h-i4NuBAbF/view?usp=drive_link',
      texto: 'Estatutos del club ',
      id: 1,
    },
    {
      url: 'https://docs.google.com/document/d/1wcLtuLU8vGvRwcGnnk43yyAO8f8aeREw/edit?usp=sharing&ouid=102295238273529035580&rtpof=true&sd=true',
      texto: 'Autorización para viajar solo ',
      id: 2,
    },
    {
      url: 'https://drive.google.com/file/d/1afK-cb9wDPt43Cg4FVDgZ-ppRKFsa6T4/view?usp=sharing',
      texto: 'Aspectos Generales Normativa Federación Andaluza ',
      id: 3,
    },
    {
      url: 'https://drive.google.com/file/d/1E-xLXCpBYGu5JctjjhCSFuj8QxCWQoLY/view?usp=sharing',
      texto: 'Calendario Federación Andaluza (2019-2020) ',
      id: 4,
    },
    {
      url: 'https://drive.google.com/file/d/1LfmI3xJGFzVRpgRdhMkTgotblO8kE8tA/view?usp=sharing',
      texto: 'Cuadro edades Federación Andaluza ',
      id: 5,
    },
    {
      url: 'https://drive.google.com/file/d/19daJ9w7yMiFkUnNaRUxgiMKqotX4l9bh/view?usp=sharing',
      texto: 'Mínimas de la Federación Andaluza ',
      id: 6,
    },
    {
      url: 'https://drive.google.com/file/d/18ct-tAEkeqMzJDNymVyyuTE9WFSNha7y/view?usp=drive_link',
      texto: 'Aspectos Generales Normativa Federación Española ',
      id: 7,
    },
    {
      url: 'https://drive.google.com/file/d/1nro-1D8Btb_cuE19_OUjM9HPrb3dS_eE/view?usp=drive_link',
      texto: 'Mínimas Federación Española INFANTIL de invierno ',
      id: 8,
    },
    {
      url: 'https://drive.google.com/file/d/1g1bPUA7dR3eZEttDqk-1Kwn9ef3HWEXk/view?usp=drive_link',
      texto: 'Mínimas Federación Española JUNIOR/ABSOLUTO de invierno  ',
      id: 9,
    },
  ];*/
  documentosList: P005GetDocumentacion[] = [];

  constructor(private service: P005Service, private router: Router) {}
  ngOnInit() {
    this.Get_Documentos();
  }

  Get_Documentos() {
    this.service.Get_Documentos().subscribe((data: any) => {
      this.documentosList = data;
    });
    console.log(this.documentosList);
  }

  gotoFormulario() {
    this.router.navigate(['/add_edit_documento']);
  }

  editarDocumentacion(id: number) {
    console.log(id);
    this.router.navigate(['/add_edit_documento'], {
      queryParams: { editMode: true, idDocumentacion: id },
    });
  }

  Delete_Documento(id: number) {
    if (id) {
      this.service.Delete_Documento(id).subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response);

          window.location.reload();
        },
        (error) => {
          console.error('Error al llamar al endpoint:', error);
        }
      );
    }
  }
}
