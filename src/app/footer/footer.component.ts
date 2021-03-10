import { Component, OnInit } from '@angular/core';
import { faDiscord, faFacebookSquare, faInstagram, faInstagramSquare, faLinkedin, faLinkedinIn, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faFacebook = faFacebookSquare;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faTwitter = faTwitterSquare;
  faDiscord = faDiscord;
  constructor() { }

  ngOnInit(): void {
  }

}
