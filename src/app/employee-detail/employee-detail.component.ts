import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeDetailComponent implements OnInit {
  employee = {};

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getEmployeeDetail(this.activatedRoute.snapshot.params['id']);
  }

  getEmployeeDetail(id) {
    this.http.get('/employee/' + id).subscribe(data => {
      this.employee = data;
    });
  }

  deleteEmployee(id) {
    this.http.delete('/employee/' + id)
      .subscribe(res => {
        this.router.navigate(['/employees']);
      }, (err) => {
        console.log(err);
      }
      );
  }
}
