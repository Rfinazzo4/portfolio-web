import { Component, OnInit } from '@angular/core';
import { faInstagramSquare, faGithubSquare, faYoutubeSquare, faLinkedin, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faPodcast } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public faInstagramSquare: IconDefinition = faInstagramSquare;
  public faGithubSquare: IconDefinition = faGithubSquare;
  public faYoutubeSquare: IconDefinition = faYoutubeSquare;
  public faLinkedin: IconDefinition = faLinkedin;
  public faPodcast: IconDefinition = faPodcast;

  constructor() { }

  ngOnInit(): void {
  }

}
