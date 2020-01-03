import { Component, OnInit, Input } from '@angular/core';
import { ITestTemplate } from './test.interface';
import { AbstractControl, FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-template',
  template: `
  
 <div style='width:100%' id="contentInside" *ngFor="let template of templates;let i = index; ">
 <input class="text-box" [(ngModel)]='testTemplate[i].textBox'  id ="txt{{i}}"type="text" placeholder="Enter Name.."/>

  <input class="check-mark" id ="chk{{i}}" type="checkbox" [(ngModel)]='testTemplate[i].checkBox'>
  
  <select class="dropdown-color" [(ngModel)]='testTemplate[i].dropDown'  id="drp{{i}}">
  <option  class="dropdown-item" value="null" selected="selected"> Please choose one </option>
  <option class="dropdown-item" value="text">Text</option>
  <option class="dropdown-item" value="markdown" >Markdown</option>
  <option class="dropdown-item" value="binary">Binary</option>
</select>
<br />
</div>

<button (click)="add()">Add Template</button>
<button (click)="submitTemplate()"> Submit</button>
<br/>
<h1>{{json}}</h1>
`,
  styles: [`
#contentInside{
  margin:7px;
  display:inline-flex;
},
.form-control {
  color: #555;
 
}
`],
styleUrls: ['./app.component.css']
})
export class TemplateComponent implements OnInit {
  testTemplate: ITestTemplate[] = [];
  testTemplates: ITestTemplate = <ITestTemplate>{};
  templates = [];
  json: string;

  constructor() { }


  ngOnInit() {
    
    this.add();

  }


  add() {
    this.testTemplates = <ITestTemplate>{};
    this.testTemplates.dropDown=null;
    this.templates.push(this.templates.length);
    this.testTemplate.push(this.testTemplates);
  }

  submitTemplate() {   
    let json = this.testTemplate;
    let body = JSON.stringify({ json });
    this.json = body;
  }

}
