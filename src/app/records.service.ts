import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  info1: string[] = ["Fiach Keenan",'E234','fk@abc.com']
  info2: string[] = ["Evan Flynn",'E754','ef@abc.com']
  info3: string[] = ["James Reilly",'E293','jr@abc.com']

  getinfo1(): string[]{
    return this.info1
  }
  getinfo2(): string[]{
    return this.info2
  }
  getinfo3(): string[]{
    return this.info3
  }

  addInfo(info:string){
    this.info1.push(info)
    this.info2.push(info)
    this.info3.push(info)
    return this.info1
  }

  constructor() { }
}
