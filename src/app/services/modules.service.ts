import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ILesson } from '../interfaces/lesson';
import { IModule } from '../interfaces/module';

@Injectable({
  providedIn: 'root'
})
export class ModulesService {

  constructor() { }

  public getModuleById(id: number): Observable<IModule> {
    return of({
      id: 0,
      title: '',
      description: '',
      lessons: [
        { id: 1, title: 'lesson1', content: 'hello' },
        { id: 2, title: 'lesson2', content: 'hello' },
        { id: 3, title: 'lesson3', content: 'hello' },
        { id: 4, title: 'lesson4', content: 'hello' },
      ]
    } as IModule);
  };

  getLessonById(moduleId: number, lessonId: number): Observable<ILesson> {
    return of({
      id: 1,
      title: 'lesson 1',
      content: 'this is the lesson content',
    });
  };
}
