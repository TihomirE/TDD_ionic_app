import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NavController } from '@ionic/angular';
import { of } from 'rxjs';
import { ModulesService } from '../services/modules.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-lesson-select',
  templateUrl: './lesson-select.page.html',
  styleUrls: ['./lesson-select.page.scss'],
})
export class LessonSelectPage implements OnInit {

  module$ = this.route.paramMap.pipe(
    switchMap((params) =>
      this.modulesService.getModuleById(parseInt(params.get('id'), 10))
    )
  );

  // params: Params;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private modulesService: ModulesService
  ) { }

  ngOnInit() {
    // this.params = this.route.snapshot.params;
  }

}


