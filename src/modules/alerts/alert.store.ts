import { Color as AlertColor } from '@material-ui/lab/Alert';
import { BaseStore } from '../globalState/base.store';
import { Translation } from '../../translations/common/model';
import { _toTranslation } from '../../translations/common/utils';

export class AlertState {
  isOpen: boolean;
  translation: Translation;
  severity: AlertColor;
  autoHideDurationInMs: number;

  static create(props: Partial<AlertState>): AlertState {
    const defaults: AlertState = {
      isOpen: false,
      translation: null,
      severity: null,
      autoHideDurationInMs: 3000,
    };
    return Object.assign(new AlertState(), defaults, props || {});
  }
}

export class AlertStore extends BaseStore<AlertState> {
  constructor() {
    super(AlertState.create({}));
  }

  public handleClose(): void {
    this.setState({ isOpen: false });
  }

  public alertSuccess(text: string | Translation, props: Partial<AlertState> = {}): void {
    this.setAlert(text, { severity: 'success', ...props });
  }

  public alertError(text: string | Translation, props: Partial<AlertState> = {}): void {
    this.setAlert(text, { severity: 'error', ...props });
  }

  public alertInfo(text: string | Translation, props: Partial<AlertState> = {}): void {
    this.setAlert(text, { severity: 'info', ...props });
  }

  public alertWarning(text: string | Translation, props: Partial<AlertState> = {}): void {
    this.setAlert(text, { severity: 'warning', ...props });
  }

  private setAlert(text: string | Translation, props: Partial<AlertState>): void {
    this.setState({ translation: _toTranslation(text), isOpen: true, ...props });
  }
}
