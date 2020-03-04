describe('Deep Thought', () => {

  let deepThought; 
  beforeEach(() => {
    deepThought = new DeepThought(); 
  });

  it('should know the answer to life, the universe and everything', () => {

    const answer = deepThought.getAlmightyAnswer();

    // ...Assert!
  });

  it('should also work for another spec', () => {
    console.log(deepThought);
  });
});
