import React from 'react';
import ReactDOM from 'react-dom';

// function Greeting()
// {
//   return <h4>This is first component</h4>;
// }

// const Greeting = () => {
//   return React.createElement('h1', {}, 'hello world');
// };

function Booklist() {
  return (
  <section> 
  <Book /> 
  </section>
  );
}

// const greeting = () => {
//   return React.createElement('div', {}, React.createElement('h1', {}, 'hello world')
//   );
// };

const Book = () => {
  return <article>
    this is a book
  </article>;
};

ReactDOM.render(<Booklist/>, document.getElementById('root'));

