'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint max-len:0 */
exports.default = {
  datasets: {
    id: { type: 'increments', nullable: false, primary: true },
    description: { type: 'text', maxlength: 16777215, fieldtype: 'medium', nullable: true },
    full_assay_name: { type: 'text', maxlength: 65535, nullable: true },
    center_name: { type: 'string', maxlength: 255, nullable: false },
    assay: { type: 'string', maxlength: 255, nullable: false },
    method: { type: 'string', maxlength: 255, nullable: false },
    classification: { type: 'string', maxlength: 255, nullable: false },
    physical_detection: { type: 'string', maxlength: 255, nullable: false },
    lincs_id: { type: 'string', maxlength: 20, nullable: true },
    date_retrieved: { type: 'dateTime', nullable: true },
    created_at: { type: 'dateTime', nullable: false },
    updated_at: { type: 'dateTime', nullable: true }
  },
  cells: {
    id: { type: 'increments', nullable: false, primary: true },
    name: { type: 'string', maxlength: 255, nullable: false },
    lincs_id: { type: 'string', maxlength: 20, nullable: true },
    source: { type: 'string', maxlength: 255, nullable: false },
    created_at: { type: 'dateTime', nullable: false },
    updated_at: { type: 'dateTime', nullable: true }
  },
  cells_datasets: {
    id: { type: 'increments', nullable: false, primary: true },
    cell_id: { type: 'integer', nullable: false, unsigned: true, references: 'cells.id' },
    dataset_id: { type: 'integer', nullable: false, unsigned: true, references: 'datasets.id' }
  },
  tissues: {
    id: { type: 'increments', nullable: false, primary: true },
    name: { type: 'string', maxlength: 255, nullable: false },
    created_at: { type: 'dateTime', nullable: false },
    updated_at: { type: 'dateTime', nullable: true }
  },
  cells_tissues: {
    id: { type: 'increments', nullable: false, primary: true },
    cell_id: { type: 'integer', nullable: false, unsigned: true, references: 'cells.id' },
    tissue_id: { type: 'integer', nullable: false, unsigned: true, references: 'tissues.id' }
  },
  diseases: {
    id: { type: 'increments', nullable: false, primary: true },
    name: { type: 'string', maxlength: 255, nullable: false },
    created_at: { type: 'dateTime', nullable: false },
    updated_at: { type: 'dateTime', nullable: true }
  },
  cells_diseases: {
    id: { type: 'increments', nullable: false, primary: true },
    cell_id: { type: 'integer', nullable: false, unsigned: true, references: 'cells.id' },
    disease_id: { type: 'integer', nullable: false, unsigned: true, references: 'diseases.id' }
  },
  synonyms: {
    id: { type: 'increments', nullable: false, primary: true },
    name: { type: 'string', maxlength: 255, nullable: false },
    cell_id: { type: 'integer', nullable: false, unsigned: true, references: 'cells.id' },
    created_at: { type: 'dateTime', nullable: false },
    updated_at: { type: 'dateTime', nullable: true }
  },
  small_molecules: {
    id: { type: 'increments', nullable: false, primary: true },
    name: { type: 'string', maxlength: 255, nullable: true },
    source: { type: 'string', maxlength: 255, nullable: true },
    lincs_id: { type: 'string', maxlength: 20, nullable: false, unique: true },
    smiles_parent: { type: 'text', maxlength: 65535, nullable: true },
    molecular_mass: { type: 'string', maxlength: 20, nullable: true },
    bioactivity_information: { type: 'text', maxlength: 16777215, nullable: true },
    inchi_parent: { type: 'text', maxlength: 65535, nullable: true },
    pubchem_cid: { type: 'string', maxlength: 20, nullable: true },
    created_at: { type: 'dateTime', nullable: false },
    updated_at: { type: 'dateTime', nullable: true }
  },
  small_molecules_datasets: {
    id: { type: 'increments', nullable: false, primary: true },
    small_molecule_id: { type: 'integer', nullable: false, unsigned: true, references: 'small_molecules.id' },
    dataset_id: { type: 'integer', nullable: false, unsigned: true, references: 'datasets.id' }
  },
  funding_opportunities: {
    id: { type: 'increments', nullable: false, primary: true },
    title: { type: 'string', maxlength: 255, nullable: false },
    description: { type: 'text', maxlength: 16777215, fieldtype: 'medium', nullable: false },
    date: { type: 'dateTime', nullable: false },
    release_date: { type: 'dateTime', nullable: true },
    open_date: { type: 'dateTime', nullable: true },
    due_date: { type: 'dateTime', nullable: true },
    review_date: { type: 'dateTime', nullable: true },
    announced_date: { type: 'dateTime', nullable: true },
    start_date: { type: 'dateTime', nullable: true },
    key_links: { type: 'text', maxlength: 65535, nullable: true, isJson: true },
    created_at: { type: 'dateTime', nullable: false },
    updated_at: { type: 'dateTime', nullable: true }
  },
  symposia: {
    id: { type: 'increments', nullable: false, primary: true },
    title: { type: 'string', maxlength: 255, nullable: false },
    sub_title: { type: 'string', maxlength: 255, nullable: true },
    description: { type: 'text', maxlength: 16777215, fieldtype: 'medium', nullable: true },
    location: { type: 'text', maxlength: 65535, nullable: true },
    start_date: { type: 'dateTime', nullable: false },
    end_date: { type: 'dateTime', nullable: true },
    key_links: { type: 'text', maxlength: 65535, nullable: true, isJson: true },
    created_at: { type: 'dateTime', nullable: false },
    updated_at: { type: 'dateTime', nullable: true }
  },
  users: {
    id: { type: 'increments', nullable: false, primary: true },
    created_at: { type: 'dateTime', nullable: false },
    updated_at: { type: 'dateTime', nullable: true }
  },
  webinars: {
    id: { type: 'increments', nullable: false, primary: true },
    title: { type: 'string', maxlength: 255, nullable: false },
    presenter_name: { type: 'string', maxlength: 255, nullable: true },
    presenter_affiliation: { type: 'text', maxlength: 65535, nullable: true },
    presenter_url: { type: 'string', maxlength: 255, nullable: true },
    url: { type: 'string', maxlength: 255, nullable: true },
    date: { type: 'dateTime', nullable: false },
    created_at: { type: 'dateTime', nullable: false },
    updated_at: { type: 'dateTime', nullable: true }
  },
  workshops: {
    id: { type: 'increments', nullable: false, primary: true },
    title: { type: 'string', maxlength: 255, nullable: false },
    description: { type: 'text', maxlength: 16777215, fieldtype: 'medium', nullable: false },
    location: { type: 'text', maxlength: 65535, nullable: true },
    start_date: { type: 'dateTime', nullable: false },
    end_date: { type: 'dateTime', nullable: true },
    key_links: { type: 'text', maxlength: 65535, nullable: true, isJson: true },
    created_at: { type: 'dateTime', nullable: false },
    updated_at: { type: 'dateTime', nullable: true }
  },
  comp_tools: {
    id: { type: 'increments', nullable: false, primary: true },
    name: { type: 'string', maxlength: 255, nullable: false },
    description: { type: 'text', maxlength: 16777215, fieldtype: 'medium', nullable: true },
    url: { type: 'string', maxlength: 255, nullable: true }
  },
  comp_tools_publications: {
    id: { type: 'increments', nullable: false, primary: true },
    comp_tool_id: { type: 'integer', nullable: false, unsigned: true, references: 'comp_tools.id' },
    publication_id: { type: 'integer', nullable: false, unsigned: true, references: 'publications.id' }
  },
  authors: {
    id: { type: 'increments', nullable: false, primary: true },
    name: { type: 'string', maxlength: 255, nullable: false },
    url: { type: 'string', maxlength: 255, nullable: true }
  },
  authors_publications: {
    id: { type: 'increments', nullable: false, primary: true },
    author_id: { type: 'integer', nullable: false, unsigned: true, references: 'authors.id' },
    publication_id: { type: 'integer', nullable: false, unsigned: true, references: 'publications.id' }
  },
  publications: {
    id: { type: 'increments', nullable: false, primary: true },
    journal_name: { type: 'string', maxlength: 255, nullable: true },
    pp_pages: { type: 'string', maxlength: 255, nullable: true },
    issue: { type: 'string', maxlength: 255, nullable: true },
    volume: { type: 'string', maxlength: 255, nullable: true },
    pmc_id: { type: 'string', maxlength: 30, nullable: true },
    pm_id: { type: 'string', maxlength: 30, nullable: true },
    doi: { type: 'string', maxlength: 50, nullable: true },
    year_published: { type: 'integer', nullable: true },
    article_name: { type: 'text', maxlength: 65535, nullable: true },
    created_at: { type: 'dateTime', nullable: false },
    updated_at: { type: 'dateTime', nullable: true }
  }
};