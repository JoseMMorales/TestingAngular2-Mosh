import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { VoterComponent } from "./voter.component";

describe('VoterComponent', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterComponent ]
    })

    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Too test <span class="vote-count">{{ totalVotes }}</span>
  it('should render total votes', () => {
    component.othersVote = 20;
    component.myVote = 1;
    fixture.detectChanges();

    let debugElement = fixture.debugElement.query(By.css('.vote-count'));
    let element = debugElement.nativeElement;

    expect(element.innerText).toContain(21); //To Contain as this is a string
  });

  // To test [class.highlighted]="myVote == 1"
  it('should highlight the upvote button', () => {
    component.myVote = 1;
    fixture.detectChanges();

    let debugElement = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    expect(debugElement.classes['highlighted']).toBeTruthy();
  })
});
