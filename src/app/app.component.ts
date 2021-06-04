import { Component } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpClientService } from './http.client';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ui5-webcomponents';
  message = "Hello World";
  jsonObject: any;
  httpClientService: HttpClientService;

  serverElements=[{
    type: "server",
    name: "Test Server",
    content: "A test"
  },
  {
    type: "server",
    name: "Test Server",
    content: "A test"
  }
];
serverElement;

 constructor(private httpClient: HttpClient,) {
    this.httpClientService = new HttpClientService(this.httpClient);
    this.getData();
  }

  async getData() {
    let url = "http://localhost:8080/api/tasks";
    this.httpClientService.get(url)
      .subscribe( response => {
          console.log("Recieved Response");
          console.log(response);
      });
  }

  async postData() {
    let url = "http://localhost:8080/api/tasks";
    this.httpClientService.post(url, {})
      .subscribe(( res : {} ) => {
          if ( res == null ) return;
          console.log(res);
      });
  }
 
onServerAdded({serverName,serverContent}){
  this.serverElement = (<HTMLInputElement>event.target).value;
  this.serverElements.push({
    type: "server",
    name: serverName,
    content: serverContent
  })
}
onBlueprintAdded({serverName,serverContent}){
  this.serverElement = (<HTMLInputElement>event.target).value;
  this.serverElements.push({
    type: "blueprint",
    name: serverName,
    content: serverContent
  })
}
}
