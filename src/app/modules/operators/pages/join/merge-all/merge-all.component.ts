// Angular.
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

// Modelos.
import { DescriptionCard } from 'src/app/core/models/description-card';

// RXJS.
import { debounceTime, fromEvent, map, mergeAll, Observable, pipe, Subscription } from 'rxjs';
import { ajax } from 'rxjs/ajax';

interface GithubUserResponse {
  avatar_url:          string;
  bio:                 string;
  blog:                string;
  company:             string;
  created_at:          Date;
  email:               null;
  events_url:          string;
  followers:           number;
  followers_url:       string;
  following:           number;
  following_url:       string;
  gists_url:           string;
  gravatar_id:         string;
  hireable:            null;
  html_url:            string;
  id:                  number;
  location:            string;
  login:               string;
  name:                string;
  node_id:             string;
  organizations_url:   string;
  public_repos:        number;
  public_gists:        number;
  received_events_url: string;
  repos_url:           string;
  site_admin:          boolean;
  starred_url:         string;
  subscriptions_url:   string;
  type:                string;
  twitter_username:    null;
  updated_at:          Date;
  url:                 string;
};

export interface GithubUsers {
  incomplete_results: boolean;
  items:              GithubUser[];
  total_count:        number;
};

export interface GithubUser {
  avatar_url:          string;
  events_url:          string;
  followers_url:       string;
  following_url:       string;
  gists_url:           string;
  gravatar_id:         string;
  html_url:            string;
  id:                  number;
  login:               string;
  node_id:             string;
  organizations_url:   string;
  received_events_url: string;
  repos_url:           string;
  score:               number;
  site_admin:          boolean;
  starred_url:         string;
  subscriptions_url:   string;
  type:                string;
  url:                 string;
};



@Component({
  selector: 'app-merge-all',
  templateUrl: './merge-all.component.html',
  styleUrls: ['./merge-all.component.scss']
})
export class MergeAllComponent implements AfterViewInit, OnInit {

  value!: string;
  results: GithubUser[] = [];
  input$!: Subscription;

  dataCard: DescriptionCard = {
    imageURL: 'assets/images/rxjs.png',
    imageStyle: { 'display': 'flex', 'height': '100px', 'margin': '0 auto', 'width': '100px' },
    isList: false,
    showDivider: true,
    styleClass: { 'margin-bottom': '1rem', 'padding-top': '2rem', 'width': '400px' },
    text: 'Convierte un observable de orden superior en un observable de primer orden que entrega simultáneamente todos los valores que se emiten en los observables internos.',
    title: 'Merge All',
  };

  merge_all_code: string = `
    import { debounceTime, fromEvent, map, mergeAll, pipe, } from 'rxjs';
    import { ajax } from 'rxjs/ajax';

    this.input$ = fromEvent<KeyboardEvent>(this.inputReference.nativeElement, 'keyup')
      .pipe(
        debounceTime(1000),
        map<KeyboardEvent, Observable<unknown>((event: KeyboardEvent) => {
        const value = (event.target as HTMLInputElement).value;
        
        return ajax.getJSON('https://api.github.com/search/users?q=value');
      }),
        mergeAll<Observable<unknown>>(),
        pipe(map(response => response.items)))
        .subscribe(console.log);
  `;

  @ViewChild('input') inputReference!: ElementRef;


  constructor() { }
    
  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.input$ = fromEvent<KeyboardEvent>(this.inputReference.nativeElement, 'keyup')
      .pipe(
        debounceTime(1000),
        map<KeyboardEvent, Observable<GithubUsers>>((event: KeyboardEvent) => {
        const value = (event.target as HTMLInputElement).value;
        
        return ajax.getJSON(`https://api.github.com/search/users?q=${value}`);
      }),
        mergeAll<Observable<GithubUsers>>(),
        pipe(map<GithubUsers, GithubUser[]>(response => response.items)))
        .subscribe(results => this.results = results);
  }

  goToPage(url: string) {
    window.open(url, '_blank');
  }
}