import { Brazil } from '../../models';
import { Database } from '../../interfaces';

export class BrazilRepository {
  protected brazil: typeof Brazil;

  constructor() {
    this.brazil = Brazil;
  }

  public insert(obj: Database.IBrazil) {
    return this.brazil.create(obj);
  }

  public deleteMany() {
    return this.brazil.deleteMany({});
  }

  public findOne() {
    return this.brazil.findOne();
  }
}
