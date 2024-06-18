import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHello2(): {} {
    return {message: 'Welcome to Tooth Fixers!', title: 'Tooth Fixers'};
    }

  getHome(): {} {
      return {title: 'Home Page'}; }
  
  getAboutUs(): {} {
      return {title: 'About Us Page'}; }
}
