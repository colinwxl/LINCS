import mongoose, { Schema } from 'mongoose';

const dsSchema = new Schema({
  name: { type: String, required: true, index: { unique: true } },
  assay: String,
  assayFormat: String,
  cellLines: [{ type: Schema.Types.ObjectId, ref: 'CellLine' }],
  center: { type: String, required: true },
  centerFullName: String,
  project: { type: String, required: true },
  lincsId: String,
  cDNA: [{ type: Schema.Types.ObjectId, ref: 'cDNA' }],
  genes: [{ type: Schema.Types.ObjectId, ref: 'Gene' }],
  iPSC: [{ type: Schema.Types.ObjectId, ref: 'iPSC' }],
  peptideProbes: [{ type: Schema.Types.ObjectId, ref: 'PeptideProbe' }],
  primaryCells: [{ type: Schema.Types.ObjectId, ref: 'PrimaryCell' }],
  proteins: [{ type: Schema.Types.ObjectId, ref: 'Protein' }],
  shRNA: [{ type: Schema.Types.ObjectId, ref: 'shRNA' }],
  smallMolecules: [{ type: Schema.Types.ObjectId, ref: 'SmallMolecule' }],
  assayDesignMethod: String,
  physicalDetection: String,
  technologies: String,
  centerDatasetId: String,
  screeningLabInvestigator: String,
  biologicalProcess: String,
  dateModified: Date,
  endpointCategorization: String,
  principalInvestigator: [String],
  dateReleased: Date,
});

export default mongoose.model('Dataset', dsSchema, 'datasets');
