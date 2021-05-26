import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {

  @Input() id: number = -1;
  @Input() title: string = "Sign Up! for News Letter";
  @Input() buttonTitle: string = "Subscribe for News Letter";
  formOpen = false;
  formData = { name: '', email: '' };
  formSubmitted = false;

  constructor() { }

  ngOnInit() {

  }
  openForm() {
    this.formData = { name: '', email: '' };
    this.formSubmitted = false;
    this.formOpen = true;
  }
  onSubmit(form: NgForm) {
    this.formSubmitted = true;
    if (!form.valid)
      return;
  }
  closeForm() {
    this.formOpen = false;
  }

}
