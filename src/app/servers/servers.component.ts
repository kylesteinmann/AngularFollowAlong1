import { Component } from '@angular/core';

@Component({
  selector: "app-servers",
  templateUrl: 'servers.component.html',
  // template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = "No sever was created!";
  serverName = 'testServer';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is' + this.serverName;
  }

  onUpdateServerName(event: any){
    console.log(event)
    this.serverName = (<HTMLInputElement>event.target).value

  }
}
