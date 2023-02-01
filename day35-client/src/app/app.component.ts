import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BGGService } from './bgg.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit, OnDestroy {

  prompt = ""
  sub$!: Subscription

  constructor(private bggSvc: BGGService) { }

  ngOnInit(): void {
    this.sub$ = this.bggSvc.onSearchQuery.subscribe(
      (name: string) => {
        this.prompt = name
      }
    )
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe()
  }
}
