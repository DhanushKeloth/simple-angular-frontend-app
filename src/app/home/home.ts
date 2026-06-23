import { Component } from '@angular/core';
import { ApiService } from '../services/api.service.';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [JsonPipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
   message: any;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getHello().subscribe(res => {
      this.message = res;
    });
  }
}
