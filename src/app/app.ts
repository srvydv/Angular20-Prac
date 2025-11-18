import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import { SharedModule } from './module/shared/shared-module';
import { MediaMatcher } from '@angular/cdk/layout';
import { GlobalSpinner } from './common/components/global-spinner/global-spinner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SharedModule, RouterLinkWithHref, RouterLinkActive, GlobalSpinner],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Angular20-Prac');

  protected readonly isMobile = signal(true);

  private readonly _mobileQuery: MediaQueryList;
  private readonly _mobileQueryListener: () => void;

  constructor() {
    const media = inject(MediaMatcher);

    this._mobileQuery = media.matchMedia('(max-width: 600px)');
    this.isMobile.set(this._mobileQuery.matches);
    this._mobileQueryListener = () => this.isMobile.set(this._mobileQuery.matches);
    this._mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this._mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

  navigationLink = [
    { path: 'dataBinding', name: 'Data Binding', icon: 'data_usage' },
    { path: 'renderComponents', name: 'Render', icon: 'settings_input_component' },
    { path: 'directivePrac', name: 'Directive', icon: 'style' },
    { path: 'signals', name: 'Signals', icon: 'signal_cellular_alt' },
    { path: 'templateDriverForm', name: 'Template Form', icon: 'input' },
    { path: 'reactiveFromPrac', name: 'Reactive From', icon: 'transform' },
    { path: 'getApi', name: 'Get API', icon: 'get_app' },
  ];
}
