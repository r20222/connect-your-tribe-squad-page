const sportButton = document.querySelector('.sport')
const articles = document.querySelector('.articles')
const buttons = document.querySelectorAll('button')
const returnButton = document.querySelector('.return')


    buttons.forEach(button => {
        button.addEventListener('click', () => {
            
            buttons.forEach(button => 
                {if (button !== returnButton) {
                button.style.display = 'none';
              }
            articles.style.display = 'flex'
            returnButton.style.display = 'inline-block'
        });
      });})

      if(returnButton){
        returnButton.addEventListener('click', hobbies)
      }

      function hobbies(){

        buttons.forEach(button => 
            {if (button !== returnButton) {
            button.style.display = 'inline-block';
          }
        articles.style.display = 'none'
        returnButton.style.display = 'none'
      })}