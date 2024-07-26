import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Nav_Bar_publicComponent } from '../../../Components/Nav_Bars/Nav_Bar_public/Nav_Bar_public.component';
import { HeaderComponent } from '../../../Components/Header/Header.component';
import { P006Tiempo } from '../../../Models/Private/DtosP006/P006Get_TiemposDto';
import { Public006Service } from '../../../Services/Public/P006.service';
import { FooterComponent } from '../../../Components/Footer/Footer.component';
import { Final_Nav_BarComponent } from '../../../Components/Nav_Bars/Final_Nav_Bar/Final_Nav_Bar.component';

@Component({
  selector: 'app-P006Records',
  standalone: true,
  imports: [
    CommonModule,
    Final_Nav_BarComponent,
    HeaderComponent,
    FooterComponent,
  ],

  templateUrl: './P006Records.component.html',
  styleUrls: ['./P006Records.component.scss'],
})
export class P006RecordsComponent implements OnInit {
  @Input({ required: true })
  recordlist: P006Tiempo[] = [];
  constructor(private service: Public006Service) {}

  ngOnInit() {
    this.Get_Records();
  }

  Get_Records() {
    this.service.Get_Records().subscribe((data: any) => {
      this.recordlist = data;
    });
  }
}
