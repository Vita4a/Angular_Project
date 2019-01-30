import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';


@Injectable()
export class LeaderService {

  constructor() { }

  getLeaders(): Leader[] {
    return Promise.resolve(LEADERS);
  }

  getLeader(id: number): Leader {
    return Promise.resolve((leader) => leader.id == id)[0];
  }

  getFeaturedLeader(): Leader {
    return Promise.resolve((leader) => leader.featured)[0];
  }

}
