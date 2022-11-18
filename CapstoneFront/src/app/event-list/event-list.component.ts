import { Component, OnInit } from '@angular/core';
import { Event } from '../event';

import { EventService } from '../event.service';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})


export class EventListComponent implements OnInit {

  TheList: Event[] = [];
  favoriteListVisible: boolean = false;

  constructor(private eventSrv: EventService) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.eventSrv.getAll(
      (result: Event[]) => {
        this.TheList = result;
      }
    )
  }

  updateOne(evnt: Event){
    this.eventSrv.update(
      () => {this.refresh();}, evnt)
  }

  showFavoriteList(){
    this.favoriteListVisible = true;
  }

  showAll(){
    this.favoriteListVisible = false;
  }

}