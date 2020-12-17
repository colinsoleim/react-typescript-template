import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { BaseService } from './base.service';
import {
  BooleanStateSlicer,
  compareBooleans,
  compareObjectsDeepEquals,
  ComparisonFunc,
  ObjectStateSlicer,
  StateSlicer,
} from './state.model';

export abstract class BaseStore<StateType> extends BaseService {
  private _state$: BehaviorSubject<StateType>;
  public state$: Observable<StateType>;

  constructor(initialState: StateType) {
    super();
    this._state$ = new BehaviorSubject(initialState);
    this.state$ = this._state$.asObservable();
  }

  public setState(props: Partial<StateType>): void {
    const currentState = this.getState();
    const nextState = Object.assign(currentState, props);
    this._state$.next(nextState);
  }

  public getState(): StateType {
    return this._state$.getValue();
  }

  public logState(key = 'state'): void {
    console.log(key, this.getState());
  }

  // #####################
  // SELECTORS
  // #####################

  protected select$<R>(mapState: StateSlicer<StateType, R>, compareEquality: ComparisonFunc<R>): Observable<R> {
    return this.state$.pipe(
      map((state) => mapState(state)),
      distinctUntilChanged(compareEquality),
    );
  }

  protected selectBoolean$(mapState: BooleanStateSlicer<StateType>): Observable<boolean> {
    return this.select$(mapState, compareBooleans);
  }

  protected selectObject$<T = Object>(mapState: ObjectStateSlicer<StateType>): Observable<T> {
    return this.select$(mapState, compareObjectsDeepEquals);
  }
}
