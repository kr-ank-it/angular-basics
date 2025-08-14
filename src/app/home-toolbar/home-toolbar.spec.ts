import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeToolbar } from './home-toolbar';

describe('HomeToolbar', () => {
  let component: HomeToolbar;
  let fixture: ComponentFixture<HomeToolbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeToolbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeToolbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
