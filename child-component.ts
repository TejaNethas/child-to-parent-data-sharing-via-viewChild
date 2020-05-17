import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-child-com',
  templateUrl: './child-com.component.html',
  styleUrls: ['./child-com.component.css']
})
export class ChildComComponent implements OnInit {

public childToParentMsg = "I am comming from child component by using view child method"; 

//passing this string from child to parent via viewchild 
 
   ngOnInit(): void {
  }
  
}
