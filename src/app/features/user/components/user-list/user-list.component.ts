import { AfterViewInit, Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../../core/services/user.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { User } from '../../../../state/models/user.model';
import { fadeInOut } from '../../../../animations';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  animations: [fadeInOut],
})  
  

export class UserListComponent implements OnInit, AfterViewInit {
  users: User[] = [];
  totalUsers: number = 0;
  loading = true;
  displayedColumns: string[] = ['no', 'first_name', 'last_name', 'email', 'avatar', 'view'];
  dataSource = new MatTableDataSource<User>([]);
  isCardView: boolean = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @Input('rows') rowList: any[] = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loadUsers(1);
    this.rowList = [];
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadUsers(page: number): void {
    this.loading = true;
    this.userService.getUsers(page).subscribe(response => {
      this.users = response.data;
      this.dataSource.data = this.users;
      this.totalUsers = response.total;
      this.loading = false;
    });
  }

  onPageChange(event: any): void {
    this.loadUsers(event.pageIndex + 1);
  }

  goToUserDetails(id: number): void {
    debugger

    this.router.navigate([`/user/${id}`]);
  }


  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this.dataSource.sort = this.sort;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['rowList']?.currentValue.length) {
      this.dataSource.data = this.rowList;
      this.dataSource.sort = this.sort;
    }
  }
  toggleView(): void {
    this.isCardView = !this.isCardView;
  }
  onSearch(event: Event): void {
    const term = (event.target as HTMLInputElement).value;
    if (term) {
      this.loading = true;
      this.userService.getUserById(Number(term)).subscribe(user => {
        this.users = user ? [user] : [];
        this.dataSource.data = this.users;
        this.loading = false;
      });
    } else {
      this.loadUsers(1);
    }
  }
  
}
