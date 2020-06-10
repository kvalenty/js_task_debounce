'use strict';

/** 
     * Реализовать декоратор debounce
     * 
     * Чтобы оригинальная функция запускалась только после определённой паузы в запусках обёртки
     * Пока пользователь печататет - ничего
     * Если остановился и подождал секунду - вывести последнее значение
     * Функция onChange должна получать тот же `this` и аргументы, что и обёртка
     **/
    function debounce(f, delay) {
      let timeOut;
      
      return function() {
        const fCall = () => { f.apply(this, arguments) };
        clearTimeout(timeOut);
        
        timeOut = setTimeout(fCall, delay)
      }
    }

    function onChange(event) {
      console.log(event.target.value);
      console.log(this.value); // uncomment if you implemented debounce with correct this
    }
    
    onChange = debounce(onChange, 1000);

    input1.addEventListener('input', onChange);