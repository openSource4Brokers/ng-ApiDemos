import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsplashComponent } from './unsplash.component';

describe('UnsplashComponent', () => {
  let component: UnsplashComponent;
  let fixture: ComponentFixture<UnsplashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsplashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
