import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorCatalogComponent } from './sector-catalog.component';

describe('SectorCatalogComponent', () => {
  let component: SectorCatalogComponent;
  let fixture: ComponentFixture<SectorCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
