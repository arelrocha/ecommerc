import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  //hay que importar el RouterModule para que nuestro sistema de rutar funcione
  imports: [RouterModule],
  templateUrl: './dashboard.component.html',
  styles: ``
})
export default class DashboardComponent {

}
