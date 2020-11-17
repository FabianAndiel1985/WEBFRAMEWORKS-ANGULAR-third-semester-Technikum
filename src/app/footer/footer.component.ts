import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  creator = 'Fabian Andiel';
  inspirator = 'Bernhard Loewenstein';

  constructor() { }

  ngOnInit(): void {
  }

}
