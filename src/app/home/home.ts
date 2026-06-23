import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  backendMessage = '';

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getHello().subscribe((res: any) => {
      this.backendMessage = res.message;
    });
  }
}