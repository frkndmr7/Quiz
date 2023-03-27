function UI(){
    this.page_body = document.querySelector(".page_body"),
    this.title = document.querySelector(".title"),
    this.btn_start = document.querySelector(".btn_start"),
    this.btn_finish = document.querySelector(".btn_finish"),
    this.test_box = document.querySelector(".test_box"),
    this.option_list = document.querySelector(".option_list"),
    this.btn_next = document.querySelector(".btn_next"),
    this.info_box = document.querySelector(".info_box"),
    this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>',
    this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>',
    this.ready = document.querySelector(".ready"),
    this.quit1 = document.querySelector(".quit1"),
    this.time_left = document.querySelector(".time-left"),
    this.time_text = document.querySelector(".time-text")
}


UI.prototype.soruGoster = function(soru) {               
    let question = `<span>${soru.soruMetni}</span>`;     
    let image = `<img src ="img/${soru.soruFoto}">`;
    let options = '';

    for(let cevap in soru.cevapSecenekleri) {
        options += 
            `
                <div class="option"> 
                    <span> <b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]}</span>
                </div>
            `;
    }

    document.querySelector(".question_text").innerHTML = question;
    document.querySelector(".image").innerHTML = image;
    this.option_list.innerHTML = options;

    const option = this.option_list.querySelectorAll(".option");

    for(let opt of option) {
        opt.setAttribute("onclick", "optionSelected(this)")
    }


}
