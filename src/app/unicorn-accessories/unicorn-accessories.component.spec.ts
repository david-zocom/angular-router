import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnicornAccessoriesComponent } from './unicorn-accessories.component';

describe('UnicornAccessoriesComponent', () => {
  let component: UnicornAccessoriesComponent;
  let fixture: ComponentFixture<UnicornAccessoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnicornAccessoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnicornAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
