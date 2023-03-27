function Soru(soruMetni,soruFoto ,cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.soruFoto = soruFoto;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
    
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
        return cevap === this.dogruCevap
    }



let sorular = [
    new Soru("1. Aşağıdaki harflerden 8 harfli anlamlı bir kelime oluşturduğunuzda, bu kelime aslında ne olmuş olur?", 
             "1.jpeg",
             { a: "Kuş", b: "Şehir", c: "Meyve" , d: "Sebze" },
             "a"),
    new Soru("2. 15'ten sonra hangi sayı gelmelidir?",
             "2.jpeg", 
            { a: 10, b: 14, c: 4, d: 5 },
            "a"),
    new Soru("3. Bir toplantı sonunda, 10 tane insan birbiriyle el sıkışmıştır. Toplamda kaç kez el sıkışma yaşanmıştır?",
             "3.jpeg",
            { a: 50, b: 20, c: 100, d: 45 },
            "d"),
    new Soru("4. Seride sıradaki sayı nedir?",
             "4.jpeg",
            { a: 21, b: 31, c: 4, d: 34 },
            "d"),
    new Soru("5. Hangi sayı buraya ait değildir?",
            "5.jpeg",
            { a: 17, b: 32, c: 322, d: 64 },
            "a"),
    new Soru("6. Mezarın başında bir kız ağlıyor. Mezarda yatanın annesi ağlayan kızın annesinin kayın validesi. Mezarda yatan, ağlayan kızın nesi olur?",
            "6.jpeg",
            { a: "Teyzesi", b: "Yengesi", c: "Anneannesi", d: "Halası" },
            "d"),
    new Soru("7. Aşağıdakilerden bir grup oluşturduğunuzda, hangisi dışarıda kalır?",
            "7.jpeg",
            { a: "Üzüm", b: "Reçel", c: "Portakal", d: "Elma" },
            "b"),
    new Soru("8. Bu üç kelimenin ortak noktası ve sonucu-çıkarımı (analojisi) nedir?",
            "8.jpeg",
            { a: "Oligarşi", b: "Demokrasi", c: "Aristokrasi", d: "Teknokrasi" },
            "c"),
    new Soru("9. Kütüphane kitaplardan, kitaplar ise (...) oluşur.",
            "9.jpeg",
            { a: "Nüshalardan", b: "Ciltten", c: "Sayfalardan", d: "Kapaktan" },
            "c"),
    new Soru("10. Tahminen şurada 4 kenarlı kaç tane şekil vardır?",
            "10.jpeg",
            { a: "11-15", b: "16-20", c: "26-30", d: "21-25" },
            "c")
    
];




















