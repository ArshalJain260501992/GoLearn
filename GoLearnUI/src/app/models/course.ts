import { Module } from './module'

export class Course {
    name: string;
    instructor: string;
    description: string;
    modules: Module[] = [];
    price: number;
}
