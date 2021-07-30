/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.likes = numberOfLikes;
    this.comments = comments;
  }

  addComments() {
    this.comments.push('haha hi');
  }
  addLike() {
    this.likes = this.likes+1;
  }
}

  var tweetOne = new Tweet('Carly', 'Hello, world!', '4:34 PM', 500, ['Hi there', 'sup', 'HI!']);
  console.log(tweetOne);

  var tweetTwo = new Tweet('Carly', 'Today is a good day!', '5:55 AM', 300, ['Miss you!', 'Yeah it is', 'no']);
  console.log(tweetTwo);

  tweetOne.addComments();
  console.log(tweetOne);

  tweetTwo.addComments();
  console.log(tweetTwo);

  tweetOne.addLike();
  console.log(tweetOne);
