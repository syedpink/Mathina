import React from 'react'
    function bluring(){
      let button = document.getElementById('display')
      button.addEventListener('click',()=>{
      button.blur();
      });
    }
    function appendToDisplay(input) {
      display.value += input;
    }
    function clearDisplay() {
      display.value = "";
    }
    function calculate() {
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = "Error";
      }
    }
    function erase(){
        display.value = display.value.length - 1;
    }
    
  return (
    <></>
  )

export default calculator



    