export class DeepThought {
  getAlmightyAnswer() {
    return 42;
  }
}

describe('Deep Thought', () => {

  let deepThought: DeepThought;
  beforeEach(() => {

    // Arrange
    deepThought = new DeepThought();
  });

  it('should know the answer to life, the universe and everything', () => {

    // Act
    const answer = deepThought.getAlmightyAnswer();

    // Assert
    expect(answer).toBeGreaterThan(0);
  });
});
