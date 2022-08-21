import {
  Component,
  OnInit
} from '@angular/core';

type Person = {
  key: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})

export class ListUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

}