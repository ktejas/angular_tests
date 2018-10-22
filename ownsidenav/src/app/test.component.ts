import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-shell',
  styleUrls : [
    'test.component.css'
  ],
  template: `
    <div class="bounds">
    
      <div class="content" 
           fxLayout="row" 
           fxLayout.xs="row" 
           fxFlexFill >
           
          <div fxFlex="30" class="sec1" fxFlex.xs="30">
              first-section
              <div>
              <p> A </p>  
              </div>
              <div>
              <p> B </p>  
              </div>
              <div>
              <p> C </p>  
              </div>
          </div>
          <div fxFlex="70" class="sec2" fxFlex.xs="70">
              third-section
              <div>
                <p> Content of A </p>  
              </div>
          </div>
          
      </div>
      
    </div>
  `
})
export class TestComponent implements OnInit {
  formButtonXs = true;

  constructor() { }


  ngOnInit() {  }


}
      



