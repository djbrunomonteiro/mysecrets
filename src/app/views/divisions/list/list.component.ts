import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EAction, EGroup, appActions } from 'src/app/store/app.actions';
import { selectOptDivision } from 'src/app/store/app.selectors';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  divisions: any[] = [
  ]

  optDivision$ = this.store.select(selectOptDivision);

  constructor(private store: Store){}

  ngOnInit(): void {
    this.getOptionsDivision();
  }

  getOptionsDivision(){
    this.store.dispatch(appActions({group: EGroup.OptDivision, action: EAction.GetAll, params: {collection: 'options_division'}}));
    
  }

}
