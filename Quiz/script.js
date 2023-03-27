const test = new Test(sorular);
const ui = new UI();




ui.btn_start.addEventListener("click", function() {
  //ui.page_body.classList.add("active");
  ui.btn_start.classList.add("hidden")
  document.querySelector(".info_box").classList.add("active");
  ui.title.classList.add("pasive");
  // ui.soruGoster(test.soruGetir());

});

ui.ready.addEventListener("click", function(){
    
    startCountdown(20);

    document.querySelector(".info_box").classList.remove("active");
    document.querySelector(".sayilar").classList.remove("pasive");
    document.querySelector(".timer-div").classList.add("active");
    document.querySelector(".page_body").classList.add("active");
    clearInterval(timer);
    startCountdown(20);
    test.soruIndex=0;
    ui.soruGoster(test.soruGetir());
    document.querySelector(".btn_next").classList.add("active");
    document.querySelector(".number-of-question").innerHTML= test.soruIndex +1 +` of 10 question`;
});

ui.quit1.addEventListener("click", function(){
    document.querySelector(".info_box").classList.remove("active");
    document.querySelector(".title").classList.remove("pasive");
    document.querySelector(".btn_start").classList.remove("hidden");
});



ui.btn_next.addEventListener("click", function(){
    test.soruIndex += 1;
    clearInterval(timer);
    // resetCountdown();
    startCountdown(20);
    ui.soruGoster(test.soruGetir());
    document.querySelector(".number-of-question").innerHTML= test.soruIndex +1 +` of 10 question`;
    if(test.soruIndex+1==10){
      document.querySelector(".btn_finish").classList.add("active");
      document.querySelector(".btn_next").classList.remove("active");
   }   
    
    
});

document.querySelector(".btn_finish").addEventListener("click", function(){
  document.querySelector(".result_box").classList.add("active");
  document.querySelector(".score_text").innerHTML = `<span>${test.sorular.length} sorudan ${test.dogruCevapSayisi} soruyu doğru cevapladınız.</span>`;
  ui.page_body.classList.remove("active");
  ui.btn_next.classList.remove("active");
  ui.btn_finish.classList.remove("active");
  document.querySelector(".sayilar").classList.add("pasive");
    document.querySelector(".timer-div").classList.remove("active");
});

document.querySelector(".quit2").addEventListener("click", function(){
  document.querySelector(".page_body").classList.remove("active");
  document.querySelector(".title").classList.remove("pasive");
  document.querySelector(".btn_start").classList.remove("hidden");
  document.querySelector(".btn_finish").classList.remove("active");
  document.querySelector(".btn_next").classList.remove("active");
  document.querySelector(".sayilar").classList.add("pasive");
  document.querySelector(".result_box").classList.remove("active");
  test.dogruCevapSayisi = 0;
});

document.querySelector(".restart").addEventListener("click", function(){
  document.querySelector(".btn_finish").classList.remove("active");
  document.querySelector(".result_box").classList.remove("active");
  document.querySelector(".sayilar").classList.remove("pasive");
  document.querySelector(".timer-div").classList.add("active");
  document.querySelector(".btn_next").classList.add("active");
  clearInterval(timer);
  startCountdown(15); 
  test.soruIndex=0;
  document.querySelector(".number-of-question").innerHTML= test.soruIndex +1 +` of 10 question`;
  ui.soruGoster(test.soruGetir());
  ui.page_body.classList.add("active");
  test.dogruCevapSayisi = 0;
  
    
});
window.addEventListener("beforeunload", function() {
  clearInterval(timer);
});



function optionSelected(option) {
  clearInterval(timer);
  
  let cevap =  option.querySelector("span b").textContent;
  let soru = test.soruGetir();

  if(soru.cevabiKontrolEt(cevap)) {
      test.dogruCevapSayisi += 1;
      option.classList.add("correct");
      option.insertAdjacentHTML("beforeend", ui.correctIcon);
  } else {
      option.classList.add("incorrect");
      option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
  }

  for(let i=0; i < ui.option_list.children.length; i++) {
      ui.option_list.children[i].classList.add("disabled");
  }

  
}


 let timer;

function startCountdown(timeLeft) {
  clearInterval(timer);
  timer = setInterval(countdown, 1000);

  function countdown() {
    ui.time_left.textContent = timeLeft;
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timer);
      ui.time_text.textContent = "Süre Bitti";
      ui.time_left.textContent =""
      ui.time_text.style.textAlign="center"

      let cevap = test.soruGetir().dogruCevap;

      for (let option of ui.option_list.children) {
        if (option.querySelector("span b").textContent == cevap) {
          option.classList.add("correct");
          option.insertAdjacentHTML("beforeend", ui.correctIcon);
          // test.dogruCevapSayisi -= 1;
        }

        option.classList.add("disabled");
      }
    } else {
      ui.time_text.textContent = "Timer: ";
    }
  }
}
  
  // function resetCountdown() {
  //   clearInterval(timer);
  //   timeLeft = 15;
  //   document.querySelector(".time-left").textContent = timeLeft;
  // }
  



