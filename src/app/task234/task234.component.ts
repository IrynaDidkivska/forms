import { CommonModule, NgFor, NgIf } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-task234",
  imports: [NgIf, NgFor, CommonModule, ReactiveFormsModule],
  templateUrl: "./task234.component.html",
  styleUrl: "./task234.component.scss",
})
export class Task234Component implements OnInit {
  form!: FormGroup;
  submittedData: any = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      agree: [false, Validators.requiredTrue],
      hobbies: this.fb.array([]),
    });
  }

  get hobbies() {
    return this.form.get("hobbies") as FormArray;
  }
  addHobby() {
    this.hobbies.push(this.fb.group({ hobby: ["", Validators.required] }));
  }

  removeHobby(index: number) {
    this.hobbies.removeAt(index);
  }

  onSubmit(form: FormGroup) {
    if (this.form.valid) {
      this.submittedData = this.form.value;
      console.log(this.submittedData);
      console.log(this.hobbies);
      this.form.reset({ email: "", password: "", agree: false, hobbies: [] });
    } else {
      console.log("Form is invalid or empty");
    }
  }
}
