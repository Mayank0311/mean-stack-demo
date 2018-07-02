import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  employee: Partial<Employee> = {
    name: null,
    gender: null,
    email: null,
    phone: null,
    dateOfBirth: null,
    department: null
  };

  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.getEmployee(this.activatedRoute.snapshot.params['id']);
  }

  getEmployee(id) {
    this.http.get('/employee/' + id).subscribe(data => {
      this.employee = data;
    });
  }

  updateEmployee(id, data) {
    this.http.put('/employee/' + id, data)
      .subscribe(res => {
        const resId = res['_id'];
        this.router.navigate(['employees']);
        // this.router.navigate(['/employee-details', resId]);
      }, (err) => {
        console.log(err);
      }
      );
  }
}
