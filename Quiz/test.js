function Test(sorular) {
    this.sorular = sorular;
    this.soruIndex = 0;
    this.dogruCevapSayisi = 0;
}

Test.prototype.soruGetir = function() {
    return this.sorular[this.soruIndex];
}