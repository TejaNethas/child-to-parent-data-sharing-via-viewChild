import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core'; //add viewchild and afterviewinit from angulae core
import { ChildComComponent } from '../child-com/child-com.component'; // adding child component path in parent component

@Component({
  selector: 'app-parent-component',
  template: `
    Message from child: {{ childMsgPassing }}
    <app-child-com</app-child-com>
  `,
   styleUrls: ['./parent-component.component.css']
})

export class ParentComponent implements OnInit, AfterViewInit {

@ViewChild(ChildComComponent, {static : false}) child; // viewchild data transfer via child to parent component
// if your'e using angualr 8 @viewChild element need to add one more parameter inside of @viewChild is {static : false}

childMsgPassing:string;

ngAfterViewInit(){
  this.childMsgPassing = this.child.childToParentMsg;
}

}



