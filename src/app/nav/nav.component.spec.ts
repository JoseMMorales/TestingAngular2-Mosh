import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavComponent ],
      imports: [ RouterTestingModule.withRoutes([]) ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a link to todos page', () => {
    //<a href="/todos"> in routerLink
    //One Way
    let debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    let index = debugElements.findIndex(de => de.properties['href'] === '/todos');
    expect(index).toBeGreaterThan(-1);

    //Another Way
    let href = fixture.debugElement.query(By.css('a')).nativeElement.getAttribute('href');
    expect(href).toEqual('/todos');
  });

});
