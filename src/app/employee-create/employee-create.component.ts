import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeCreateComponent implements OnInit {
  employee: Employee = {
    name: null,
    gender: null,
    email: null,
    phone: null,
    dateOfBirth: null,
    department: null
  };

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
  }

  saveEmployee() {
    this.http.post('/employee', this.employee)
      .subscribe(res => {
        const id = res['_id'];
        // this.router.navigate(['/employee-details', id]);
        this.router.navigate(['employees']);
      }, (err) => {
        console.log(err);
      }
      );
  }

}
