import { VoteComponent } from "./vote.component";

describe('VoteComponent', () => {
  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  })

  it('should implement totalVotes when upvoted, upVote()', () => {
    component.upVote();
    expect(component.totalVotes).toBe(1);
  })

  it('should decrement totalVotes when downvoted, upVote()', () => {

    component.downVote();
    expect(component.totalVotes).toBe(-1);
  })

})
