import { CommonModule, NgIf } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";

@Component({
  selector: "app-task1",
  imports: [FormsModule, NgIf, CommonModule],
  templateUrl: "./task1.component.html",
  styleUrl: "./task1.component.scss",
})
export class Task1Component implements OnInit {
  email: string = "";
  password: string = "";
  submittedData: any = null;

  constructor() {}
  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.submittedData = { email: this.email, password: this.password };
      console.log(this.submittedData);
    } else {
      alert("Form is invalid or empty");
    }
  }
}
