// Two Way Data Binding

// import { Component, OnInit } from '@angular/core';

// interface ContactForm {
//   name: string,
//   accept: boolean,
//   operativeSystem: string,
//   comment: string
// }

// @Component({
//   selector: 'app-formulario',
//   templateUrl: './formulario.component.html',
//   styles: [
//   ]
// })
// export class FormularioComponent implements OnInit {

//   model: ContactForm = {
//     name: '',
//     accept: false,
//     operativeSystem: '',
//     comment: ''
//   }

//   constructor() { }

//   ngOnInit(): void {
//   }

//   onSubmit(contactForm: any) {
//     console.log(contactForm)
//   }

// }

/************************************************************/

// Two Way Data Binding and validation

// import { Component, OnInit } from '@angular/core';

// interface ContactForm {
//   name: string,
//   accept: boolean,
//   operativeSystem: string,
//   comment: string
// }

// @Component({
//   selector: 'app-formulario',
//   templateUrl: './formulario.component.html',
//   styles: [
//   ]
// })
// export class FormularioComponent implements OnInit {

//   model: ContactForm = {
//     name: '',
//     accept: false,
//     operativeSystem: '',
//     comment: ''
//   }

//   constructor() { }

//   ngOnInit(): void {
//   }

//   onSubmit(contactForm: any) {
//     console.log(contactForm)
//   }

// }


/************************************************************/

// Formularios reactivos

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: [
  ]
})
export class FormularioComponent implements OnInit {

  contactForm! : FormGroup

  constructor(private readonly formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.initForm()
    this.onPathValue()
  }

  initForm() : FormGroup{
    return this.formBuilder.group ({
      name : ['', [Validators.required, Validators.minLength(3)]],
      accept : ['', [Validators.required]],
      operativeSystem : ['', [Validators.required]],
      comment : ['']
    })
  }

  onPathValue() {
    this.contactForm.patchValue( { name : 'Pepito' } )
  }

  onSubmit() {
    console.log(this.contactForm)
  }

}





