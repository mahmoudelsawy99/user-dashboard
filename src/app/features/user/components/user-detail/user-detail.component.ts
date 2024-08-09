import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../../core/services/user.service';
import { User } from '../../../../state/models/user.model';
import { fadeInOut } from '../../../../animations';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  animations: [fadeInOut]
})
export class UserDetailComponent implements OnInit {
  user: User | null = null;
  loading: boolean = true;

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userService.getUserById(Number(id)).subscribe(response => {
        this.user = response;
        this.loading = false;
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
