import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PalPage } from './pal.page';

describe('PalPage', () => {
  let component: PalPage;
  let fixture: ComponentFixture<PalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
