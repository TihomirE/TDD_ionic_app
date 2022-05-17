import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NavController } from '@ionic/angular';
import { of } from 'rxjs';
import { ModulesService } from '../services/modules.service';
import { switchMap } from 'rxjs/operators';
import { ILesson } from '../interfaces/lesson';
import { IModule } from '../interfaces/module';

@Component({
  selector: 'app-lesson-select',
  templateUrl: './lesson-select.page.html',
  styleUrls: ['./lesson-select.page.scss'],
})
export class LessonSelectPage {

  module$ = this.route.paramMap.pipe(
    switchMap((params) =>
      this.modulesService.getModuleById(
        parseInt(params.get('moduleId'), 10)
      )
    )
  );

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private modulesService: ModulesService
  ) {}

  openLesson(lesson: ILesson) {
    this.navCtrl.navigateForward(
      // '/module/' + this.module$.id + '/lesson/' + lesson.id
      '/module/' + '1' + '/lesson/' + lesson.id
    );
  }

}


