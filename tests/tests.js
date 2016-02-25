var expect = chai.expect

describe('Pruebas del conversor de temperatura', function(){
  it('32C deberia ser 32C,89.6F,305.15K', function(){
    this.value = "32C"
    expect(calculate(this)).to.deep.equal([ '32.00 C', '89.60 F', '305.15 K' ]);
  });
});
