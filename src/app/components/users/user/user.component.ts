import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  isTest = true;
  id?: number;
  private sub: any;
  user: User = {};
  constructor(private userService:UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; 
      this.getById();

  })
}
ngOnDestroy() {
  this.sub.unsubscribe();
}

  getById(){
    
    this.userService.getRequest(this.id).subscribe((r:User)=> this.user = r);
  }

}
