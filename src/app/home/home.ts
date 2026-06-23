import { Component, signal } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home { backendMessage = signal('');

  constructor(private api: ApiService) {
    this.loadMessage();
  }

  loadMessage() {
    this.api.getHello().subscribe((res: any) => {
      console.log('Response from backend:', res);
      this.backendMessage.set(res.message);
    });
  }
}