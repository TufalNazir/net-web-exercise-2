import {Component, OnInit} from '@angular/core';
import {TableModule} from "primeng/table";
import {NgForOf, NgIf} from "@angular/common";
import {DialogModule} from "primeng/dialog";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [
    TableModule,
    NgIf,
    DialogModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    NgForOf,
  ],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent implements OnInit {

  students: any[] = [
    {
      firstName: 'Tufal Nazir',
      lastName: 'Shaikh',
      email: 'tufal@netweb.com',
      address: 'Vadodara, Gujarat, India',
      contactNumber: '+916955623245'
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      address: 'New York, USA',
      contactNumber: '+1234567890'
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane@example.com',
      address: 'London, UK',
      contactNumber: '+4455667788'
    },
    {
      firstName: 'Michael',
      lastName: 'Johnson',
      email: 'michael@example.com',
      address: 'Los Angeles, USA',
      contactNumber: '+1122334455'
    },
    {
      firstName: 'Emily',
      lastName: 'Brown',
      email: 'emily@example.com',
      address: 'Sydney, Australia',
      contactNumber: '+617889944'
    }
  ];
  showStudentForm = false;
  studentForm!: FormGroup;

  formData: any[] = [
    {controlName: 'firstName', position: 1, isRequired: true},
    {controlName: 'lastName', position: 2, isRequired: false},
    {controlName: 'email', position: 4, isRequired: false},
    {controlName: 'address', position: 5, isRequired: false},
    {controlName: 'contactNumber', position: 3, isRequired: true},
  ];

  ngOnInit(): void {
    this.initializeForm();
    const stud = localStorage.getItem('students');
    if (stud) {
      this.students = JSON.parse(stud);
    }
  }

  onClickOfAddNewStudent() {
    console.log(this.studentForm.value);
    this.students.unshift(this.studentForm.value);
    localStorage.setItem('students', JSON.stringify(this.students));
  }

  initializeForm() {
    this.formData.sort((a, b) => a.position - b.position);
    const formGroupConfig: any = {};

    // Iterate over the formData array and add form controls dynamically
    this.formData.forEach(item => {
      // Define the control with or without validators based on the IsRequired property
      const validators = item.isRequired ? [Validators.required] : [];
      formGroupConfig[item.controlName] = new FormControl('', validators);
    });

    // Create the FormGroup with the dynamically added form controls
    this.studentForm = new FormGroup(formGroupConfig);
  }

}
