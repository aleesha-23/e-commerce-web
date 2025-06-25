import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from "../../ui/footer/footer";

@Component({
  selector: 'app-about',
   standalone: true,
  imports: [RouterLink, Footer],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

}
