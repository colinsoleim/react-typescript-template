import { useEffect, useState } from 'react';
import { map, skip, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { BaseFormStore } from './baseForm.store';
import { BaseRecordStore } from './baseRecord.store';

export const useStoreObservable = <T>(store: BaseFormStore<T> | BaseRecordStore<T>): T => {
  const [storeState, setStateInComponent] = useState(store.getState());

  useEffect(() => {
    const destroyed$: Subject<boolean> = new Subject<boolean>();

    store.state$
      .pipe(
        skip(1), // skip 1 because we already start with the initial value
        map((state) => ({ ...state })), // we must copy the state object here so React knows to re-render
        takeUntil(destroyed$),
      )
      .subscribe((state) => setStateInComponent(state));

    return () => destroyed$.next(true); // unsubscrbe from the state service when the component is destroyed
  }, [store.state$]);

  return storeState;
};
