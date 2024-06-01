import { Component, OnInit } from '@angular/core';
import { ProjetService } from 'src/app/services/projet.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  userTab: any = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((data) => {
      // Assignation des données récupérées à la variable userTab
      this.userTab = data;
    });
  }
  acceptUser(user:any){
    user.etat = true;
    this.userService.saveUser(user).subscribe((data) => {
      // Assignation des données récupérées à la variable userTab
      // this.userTab.array.forEach((u) => {
      //   if(u.id = data.id)
      //     u = data
      // });
    });
  }
  deleteUser(){

  }

}
