import { Component } from '@angular/core';
import { HighlightDirective } from './Highlight';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 
})
export class AppComponent {
	title = 'Assignament 8.1!';
	
	
	constructor(fb: FormBuilder) {
		this.complexForm = fb.group({
			names 	: [null, Validators.required],
			username: [null, Validators.required],
			email: [null, Validators.required],
			phone: [null, Validators.required],
			password: [null, Validators.required],
			cpassword: [null, Validators.required]
	})
	}
	complexForm: FormGroup;

	submitForm(form: any): void {
		console.log('Form Data: ');
		console.log(form);
	}

	
 


}
