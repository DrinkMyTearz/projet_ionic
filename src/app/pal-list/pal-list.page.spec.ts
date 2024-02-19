import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PalListPage } from './pal-list.page';

describe('PalListPage', () => {
  let component: PalListPage;
  let fixture: ComponentFixture<PalListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PalListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
