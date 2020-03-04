export class DeepThought {
  getAlmightyAnswer() {
    return 42;
  }
}

describe('Deep Thought', () => {

  let deepThought, answer;
  beforeEach(() => {

    // Arrange
    deepThought = new DeepThought();

    // Act
    answer = deepThought.getAlmightyAnswer();
  });

  it('should know the answer to life, the universe and everything', () => {

    // Assert
    expect(answer).toBeGreaterThan(0);
  });
});
