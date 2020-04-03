import { Component, OnInit } from '@angular/core';
import { LanguageService } from './_startup/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'api-demos';
  constructor(private ls: LanguageService) {}

  ngOnInit() {
    this.ls.setInitialAppLanguage();
  }
}
