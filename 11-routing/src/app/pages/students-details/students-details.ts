import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-students-details',
  imports: [],
  templateUrl: './students-details.html',
  styleUrl: './students-details.css',
})
export class StudentsDetails {
  studentId: string | null = null;
  studentName: string | null = null;
  studentCourse: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.studentId = this.route.snapshot.paramMap.get('id');
    this.studentName = this.route.snapshot.queryParamMap.get('name');
    this.studentCourse = this.route.snapshot.queryParamMap.get('course');
  }
}
