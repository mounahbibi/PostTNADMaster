import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Importez Router depuis @angular/router

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      // Define your form controls here
      cn: ['', Validators.required], // Example control
      // Add more controls as needed
    });
  }

  onSubmit() {
    // Handle form submission logic here
    if (this.userForm.valid) {
      // Form is valid, submit data
      console.log(this.userForm.value); // Example: Log form data

      // After processing form data, navigate to liste-user page
      this.router.navigate(['/liste-user']);
    } else {
      // Form is invalid, display error messages or prevent submission
    }
  }

  // Function to add user
  ajouterUser() {
    // You can call onSubmit() function here to reuse the logic if needed
    this.onSubmit();
  }
}
