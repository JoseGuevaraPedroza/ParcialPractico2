import { Component } from '@angular/core';
import { ConferenciaModule } from './conferencia/conferencia.module';
import { HttpClientModule } from '@angular/common/http';
import { ConferenciaService } from './conferencia/conferencia.service';

@Component({
  standalone:true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ConferenciaModule, HttpClientModule],
  providers:[ConferenciaModule, ConferenciaService]
})
export class AppComponent {
  title = 'Parcial2';
}
