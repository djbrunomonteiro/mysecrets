import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  options = ['pessoal', 'bancos', 'casa', 'sites', 'trabalho', 'estudo', 'medico', 'outros']
  firstFormGroup: FormGroup = this._formBuilder.group({ firstCtrl: [''] });
  secondFormGroup: FormGroup = this._formBuilder.group({ secondCtrl: [''] });

  types = ['log', 'file', 'txt'];
  form = this._formBuilder.group({
    id: [''],
    name: [''],
    category: [''],
    type: ['log'],
    data_sheet: this._formBuilder.array([])
  });

  controlRef: FormArray = this.form?.get('data_sheet') as FormArray;

  constructor(
    private _formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  ngOnInit(): void {
    console.log(this.data);
    this.addInput();
  }


  addInput(remove = true) {
    if(remove){this.removeInput();}
    
    switch (this.form?.value.type) {
      case 'file':
        this.controlRef.push(
          this._formBuilder.group({
            type: [this.form?.value.type],
            file: [''],
            describe: ['']
          })
        );
        break;
      case 'log':
        this.controlRef.push(
          this._formBuilder.group({
            type: [this.form?.value.type],
            log: [],
            pass: [],
            describe: ['']
          })
        );
        break;
      default:
        console.log('def', this.form?.value.type);
        this.controlRef.push(
          this._formBuilder.group({
            type: [this.form?.value.type],
            describe: ['']
          })
        );

        
        


    }

    console.log('apos', this.form.value);


  }

  removeInput(){
    const result = (this.controlRef.value as any[]).filter(elem => elem?.type === this.form.value.type);
    this.controlRef.clear(); //remove todos os controles de dentro do array
    this.controlRef.controls = result

  }


}
