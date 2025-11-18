import { Routes } from '@angular/router';
import { DataBinding } from './components/data-binding/data-binding';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dataBinding',
    pathMatch: 'full',
  },
  {
    path: 'dataBinding',
    component: DataBinding,
  },
  {
    path: 'renderComponents',
    loadComponent: () =>
      import('./components/render-component/render-component').then((c) => c.RenderComponent),
  },
  {
    path: 'directivePrac',
    loadComponent: () =>
      import('./components/directive-prac/directive-prac').then((c) => c.DirectivePrac),
  },
  {
    path: 'signals',
    loadComponent: () => import('./components/signals/signals').then((c) => c.Signals),
  },
  {
    path: 'templateDriverForm',
    loadComponent: () =>
      import('./components/form/template-driven-form-prac/template-driven-form-prac').then(
        (c) => c.TemplateDrivenFormPrac
      ),
  },
  {
    path: 'reactiveFromPrac',
    loadComponent: () =>
      import('./components/form/reactive-form-prac/reactive-form-prac').then(
        (c) => c.ReactiveFormPrac
      ),
  },
  {
    path: 'getApi',
    loadComponent: () => import('./components/API/get-api/get-api').then((c) => c.GetApi),
  },
];
