const list =
  React.createElement('div', {},
    React.createElement('h1', {}, 'My favorite ice cream flavors'),
    React.createElement('ul', {},
      [
        React.createElement('li', { class: 'brown' }, 'Chocolate'),
        React.createElement('li', { class: 'white' }, 'Vanilla'),
        React.createElement('li', { class: 'yellow' }, 'Banana')
      ]
    ));

ReactDOM.render(list, document.getElementById('main'));


const title = React.createElement('h1', {}, 'My First React Code')

ReactDOM.render(
  title,
  document.getElementById('main')
)
