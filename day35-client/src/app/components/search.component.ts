import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { BGGService } from '../bgg.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  form !: FormGroup

  // @Output()
  // onResults = new Subject<Game[]>()

  constructor(private fb: FormBuilder, private bggSvc: BGGService) {}

  ngOnInit(): void {
    this.form = this.createForm()
      
  }

  doSearch() {
    const name = this.form.get('name')?.value
    console.info('>>>> name: ', name)

    this.bggSvc.searchGameByName(name)
      .then(games => {
        console.info('>>> games: ', games)
        this.form.reset()
      })
      .catch(error => {
        console.error('>>> error: ', error)
      })
  }

  private createForm(): FormGroup {
    return this.fb.group({
      name: this.fb.control('', [Validators.required])
    })
  }
}
