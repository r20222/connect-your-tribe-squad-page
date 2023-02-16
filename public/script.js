const sportButton = document.querySelector('.sport')
const articles = document.querySelector('.articles')
const buttons = document.querySelectorAll('button')


    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(button => button.remove());
            articles.style.display = 'flex'
        });
      });
