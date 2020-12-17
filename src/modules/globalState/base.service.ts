import { BehaviorSubject, Observable } from 'rxjs';
import { filter, take } from 'rxjs/operators';

export abstract class BaseService {
  public isDebugMode = false;

  protected didInit: boolean;

  private initialized$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public init(): void {
    this.emitInitializationComplete();
  }

  public get initializationCompleted$(): Observable<boolean> {
    return this.initialized$.pipe(
      filter((didInitialize) => !!didInitialize),
      take(1),
    );
  }

  public get initializationCompleted(): boolean {
    return this.didInit;
  }

  protected emitInitializationComplete(): void {
    this.didInit = true;
    this.initialized$.next(true);
  }

  public debugLog(...items): void {
    if (this.isDebugMode) {
      console.log(...items);
    }
  }
}
