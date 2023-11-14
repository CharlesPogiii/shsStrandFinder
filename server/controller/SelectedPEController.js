const SelectedPE = require("../model/selected_personal_engagements");
const PE = require("../model/personal_engagements");
const Strand = require("../model/strands");

// LODASH
const _ = require("lodash");

class SelectedPEController {
  /* CRUD ----------------------------------------------------------- */
  // CREATE
  async create(req, res) {
    const { user, pe, yes } = req.body;

    // INIT
    const newSelectedPE = new SelectedPE({ user, pe, yes });

    // SAVE
    newSelectedPE.save();

    // RESPONSE
    res.json({ user, pe, yes });
  }

  // READ ALL
  async findAll(req, res) {
    // FIND ALL
    const selectedPEs = await SelectedPE.find({}).exec();

    // RESPONSE
    res.json(selectedPEs);
  }

  // READ BY ID
  async findById(req, res) {
    const { selectedPEID } = req.params;

    // FIND SINGLE DATA
    const selectedPE = await SelectedPE.findById(selectedPEID).exec();

    // RESPONSE
    res.json(selectedPE);
  }

  // READ BY USER ID
  async findByUserID(req, res) {
    const { userID } = req.params;

    // INIT
    const strands = await Strand.find({}).exec();

    // FIND SINGLE DATA
    const selectedPEs = await SelectedPE.find({ user: userID }).exec();
    const mappedPEs = await Promise.all(
      selectedPEs.map(async (selectedPE) => {
        const pe = await PE.findOne({ _id: selectedPE.pe.toString() });

        return {
          ...selectedPE.toObject(),
          question: pe.question,
          strand: pe.strand,
        };
      })
    );

    // Create a mapping of group.no to their corresponding values
    const groupMap = new Map();
    const newStrands = [];

    mappedPEs.forEach((mappedPE) => {
      const strandID = mappedPE.strand.toString();
      delete mappedPE.strand;

      if (!groupMap.has(strandID)) {
        groupMap.set(strandID, []);
      }

      groupMap.get(strandID).push({
        ...mappedPE,
      });
    });

    // Convert the mapping into the desired format
    groupMap.forEach((values, strandID) => {
      let yes = 0;
      let no = 0;
      const strand = strands.filter(
        (strand) => strand._id.toString() === strandID
      );

      values.forEach((value) => {
        if (value.yes) yes++;
        else no++;
      });

      const prob = (yes / values.length) * 100;

      newStrands.push({
        ...strand[0].toObject(),
        total: values.length,
        yes,
        no,
        prob,
        personalEngagements: values,
      });
    });

    const orderedStrands = _.orderBy(newStrands, ["prob"], ["desc"]);

    // RESPONSE
    res.json(orderedStrands);
  }

  // UPDATE
  async put(req, res) {
    const { selectedPEID } = req.params;
    const { user, pe, yes } = req.body;

    // FIND SINGLE DATA
    const selectedPE = await SelectedPE.findById(selectedPEID).exec();

    // UPDATE
    selectedPE.user = user || selectedPE.user;
    selectedPE.pe = pe || selectedPE.pe;
    selectedPE.yes = yes != null ? yes : selectedPE.yes;

    // SAVE
    await selectedPE.save();

    // RESPONSE
    res.json(selectedPE);
  }

  // DELETE
  async delete(req, res) {
    const { selectedPEID } = req.params;

    // DELETE SINGLE DATA
    const selectedPE = await SelectedPE.deleteOne({ _id: selectedPEID });

    // RESPONSE
    res.json(selectedPE);
  }

  // DELETE ALL
  async deleteAll(req, res) {
    // DELETE ALL DATA
    const deletedSelectedPE = await SelectedPE.deleteMany({});

    // RESPONSE
    res.json(deletedSelectedPE);
  }
}

module.exports = SelectedPEController;
