import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-child-com',
  templateUrl: './child-com.component.html',
  styleUrls: ['./child-com.component.css']
})
export class ChildComComponent implements OnInit {

 viewChildMsg:string = "view child data passing from local child component to parent component(about component)";


}
