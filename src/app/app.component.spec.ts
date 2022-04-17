import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes([]) ],
      declarations: [ AppComponent ],
      schemas: [ NO_ERRORS_SCHEMA ] //Tells Angular to ignore properties not recognized
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'testing-demo-Angular'`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('testing-demo-Angular');
  });

  it('should have a router outlet', () => {
    let de = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(de).not.toBeNull();
  });
});
