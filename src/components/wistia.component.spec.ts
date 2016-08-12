
/// <reference path="../../typings/globals/jasmine/index.d.ts" />
import {Component} from '@angular/core';
import {
  inject, addProviders
} from '@angular/core/testing';
import {WistiaPlayerComponent} from './wistia.component';

@Component({
  selector: 'container',
  template: `<wistia-player password="408f8874fe2e2ecdf849fa5ddbecfad822c6fdfd267b0681bbda4cdd97113c1d"></wistia-player>`,
  directives: [WistiaPlayerComponent]
})
export class ContainerComponent { }

describe('Component: WistiaPlayerComponent', () => {
  beforeEach(() => {
      addProviders([
     ContainerComponent
    ]);
  });
  it('should be fine', inject([ContainerComponent], (fixture) => {
    expect(fixture).not.toBeNull();
  }));
});
