import { State } from '../../models';
import { Database } from '../../interfaces';

export class StatesRepository {
  protected state: typeof State;

  constructor() {
    this.state = State;
  }

  public list() {
    return this.state.find();
  }

  public insert(obj: Database.IState) {
    return this.state.create(obj);
  }

  public deleteMany() {
    return this.state.deleteMany({});
  }

  public findOne(query: any) {
    return this.state.findOne(query);
  }
}
