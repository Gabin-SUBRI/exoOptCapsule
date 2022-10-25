for (let i = 0; i < document.querySelectorAll('img').length; i++) {
    document.querySelectorAll('img')[i].addEventListener('click',
       function () {
      const searchTerm = '1';
      
      if(this.src.indexOf("cookie-2")===-1){
         this.src ='https://static.lacapsule.academy/practice/cookies/cookie-2.jpg'
         } else {
        this.remove()
      }
      
         
    });
      
    }