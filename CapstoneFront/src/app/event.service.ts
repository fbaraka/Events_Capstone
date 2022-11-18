import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from './event';


@Injectable({
  providedIn: 'root'
})


// 
export class EventService {

  constructor(private http: HttpClient) { }

  getAll(cb: any) {
		// https://localhost:7147/Drink
		this.http.get<Event[]>('https://localhost:7008/event').subscribe(cb);
	}

	getOne(cb: any, id: number) {
		// Typo! Take out the [].
		this.http.get<Event>(`https://localhost:7008/event/${id}`).subscribe(cb);
	}

	add(cb: any, evnt: Event) {
		this.http.post<Event>('https://localhost:7008/event', evnt).subscribe(cb);
	}

	delete(cb: any, id: number) {
		this.http.delete(`https://localhost:7008/event/${id}`).subscribe(cb);
	}

	update(cb: any, e: Event) {
		this.http.put('https://localhost:7008/event', e).subscribe(cb);
	}

  
}
