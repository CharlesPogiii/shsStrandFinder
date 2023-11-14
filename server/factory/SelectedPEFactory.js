class SelectedPEFactory {
  constructor(selectedPE) {
    this.selectedPE = selectedPE;
  }

  async make(user, pe, yes) {
    // INIT
    this.selectedPE.user = user;
    this.selectedPE.pe = pe;
    this.selectedPE.yes = yes;

    // SAVE
    await this.selectedPE.save();
  }
}

module.exports = SelectedPEFactory;
