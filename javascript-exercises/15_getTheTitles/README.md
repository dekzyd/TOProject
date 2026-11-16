# Exercise 15 - Get the Titles!

You are given an array of objects that represent books with an author and a title that looks like this:

```javascript
const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]

const getTheTitles = function (array) {
  return array.map((book) => book.title);
};

getTheTitles(books) // ['Book','Book2']
```

## Hints

- You should use a built-in javascript method to do most of the work for you!
