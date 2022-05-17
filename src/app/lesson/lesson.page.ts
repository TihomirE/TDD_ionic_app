import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ModulesService } from '../services/modules.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.page.html',
  styleUrls: ['./lesson.page.scss'],
})
export class LessonPage {

  lesson$ = this.route.paramMap.pipe(
    switchMap((params) =>
      this.modulesService.getLessonById(
        parseInt(params.get('moduleId'), 10),
        parseInt(params.get('lessonId'), 10)
      )
    )
  );
  // params: Params;

  constructor(private route: ActivatedRoute, private modulesService: ModulesService) { }

  // ngOnInit() {
  //   this.params = this.route.snapshot.params;
  // }

}
