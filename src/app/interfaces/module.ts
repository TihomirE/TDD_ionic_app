import { ILesson } from './lesson';

export interface IModule {
    id: number;
    title: string;
    description: string;
    lessons: ILesson[];
}
