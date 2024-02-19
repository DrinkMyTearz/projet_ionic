import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PalNewPage } from './pal-new.page';

describe('PalNewPage', () => {
  let component: PalNewPage;
  let fixture: ComponentFixture<PalNewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PalNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
