import { Moment } from 'moment';

export class Task {

    id: number;
    name: string;
    parentTask?: string;
    priority: number;
    completed: boolean;
    startDate: Moment;
    endDate: Moment;
}   