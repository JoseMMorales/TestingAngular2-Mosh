import { VoteComponent } from "./vote.component";

describe('VoteComponent', () => {
  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  })

  it('should raise voteCHange event when upvoted, upVote()', () => {
    let totalVotes: number  = 0;
    component.voteChanged.subscribe(tv => totalVotes = tv);

    component.upVote();

    expect(totalVotes).not.toBeNull();
    expect(totalVotes).toBe(1);
  })
})
