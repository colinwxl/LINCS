// This file is the database schema. It is used in several places, most importantly in
// ./migrate. For more information on this, browse the code around this schema (Ghost Blog):
// https://github.com/TryGhost/Ghost/blob/master/core/server/data/schema/schema.js

/* eslint max-len:0 */
export default {
  centers: {
    id: { type: 'increments', nullable: false, primary: true },
    name: { type: 'string', maxlength: 255, nullable: false, unique: true },
    description: { type: 'text', maxlength: 16777215, fieldtype: 'medium', nullable: false },
    logo_url: { type: 'string', maxlength: 255, nullable: false },
    website: { type: 'text', maxlength: 2000, nullable: false },
    created_at: { type: 'dateTime', nullable: false },
    updated_at: { type: 'dateTime', nullable: true },
  },
  datasets: {
    id: { type: 'increments', nullable: false, primary: true },
    description: { type: 'text', maxlength: 16777215, fieldtype: 'medium', nullable: true },
    full_assay_name: { type: 'text', maxlength: 65535, nullable: true },
    center_id: { type: 'integer', nullable: false, unsigned: true, references: 'centers.id' },
    assay: { type: 'string', maxlength: 255, nullable: false },
    method: { type: 'string', maxlength: 255, nullable: false },
    classification: { type: 'string', maxlength: 255, nullable: false },
    physical_detection: { type: 'string', maxlength: 255, nullable: false },
    lincs_id: { type: 'string', maxlength: 20, nullable: true },
    date_retrieved: { type: 'dateTime', nullable: true },
    date_released: { type: 'dateTime', nullable: true },
    clicks: { type: 'integer', nullable: false, defaultTo: 0 },
    source_link: { type: 'text', maxlength: 2000, nullable: true },
    has_been_released: { type: 'bool', nullable: false, defaultTo: 0 },
    created_at: { type: 'dateTime', nullable: false },
    updated_at: { type: 'dateTime', nullable: true },
  },
  cells: {
    id: { type: 'increments', nullable: false, primary: true },
    name: { type: 'string', maxlength: 255, nullable: false },
    lincs_id: { type: 'string', maxlength: 20, nullable: true },
    source: { type: 'string', maxlength: 255, nullable: false },
    created_at: { type: 'dateTime', nullable: false },
    updated_at: { type: 'dateTime', nullable: true },
  },
  cells_datasets: {
    id: { type: 'increments', nullable: false, primary: true },
    cell_id: { type: 'integer', nullable: false, unsigned: true, references: 'cells.id' },
    dataset_id: { type: 'integer', nullable: false, unsigned: true, references: 'datasets.id' },
  },
  tissues: {
    id: { type: 'increments', nullable: false, primary: true },
    name: { type: 'string', maxlength: 255, nullable: false },
    created_at: { type: 'dateTime', nullable: false },
    updated_at: { type: 'dateTime', nullable: true },
  },
  cells_tissues: {
    id: { type: 'increments', nullable: false, primary: true },
    cell_id: { type: 'integer', nullable: false, unsigned: true, references: 'cells.id' },
    tissue_id: { type: 'integer', nullable: false, unsigned: true, references: 'tissues.id' },
  },
  diseases: {
    id: { type: 'increments', nullable: false, primary: true },
    name: { type: 'string', maxlength: 255, nullable: false },
    created_at: { type: 'dateTime', nullable: false },
    updated_at: { type: 'dateTime', nullable: true },
  },
  cells_diseases: {
    id: { type: 'increments', nullable: false, primary: true },
    cell_id: { type: 'integer', nullable: false, unsigned: true, references: 'cells.id' },
    disease_id: { type: 'integer', nullable: false, unsigned: true, references: 'diseases.id' },
  },
  synonyms: {
    id: { type: 'increments', nullable: false, primary: true },
    name: { type: 'string', maxlength: 255, nullable: false },
    cell_id: { type: 'integer', nullable: false, unsigned: true, references: 'cells.id' },
    created_at: { type: 'dateTime', nullable: false },
    updated_at: { type: 'dateTime', nullable: true },
  },
  small_molecules: {
    id: { type: 'increments', nullable: false, primary: true },
    name: { type: 'string', maxlength: 255, nullable: true },
    source: { type: 'string', maxlength: 255, nullable: true },
    lincs_id: { type: 'string', maxlength: 20, nullable: false, unique: true },
    broad_id: { type: 'string', maxlength: 20, nullable: false, unique: true },
    smiles_parent: { type: 'text', maxlength: 65535, nullable: true },
    molecular_mass: { type: 'string', maxlength: 20, nullable: true },
    bioactivity_information: { type: 'text', maxlength: 16777215, nullable: true },
    inchi_parent: { type: 'text', maxlength: 65535, nullable: true },
    pubchem_cid: { type: 'string', maxlength: 20, nullable: true },
    created_at: { type: 'dateTime', nullable: false },
    updated_at: { type: 'dateTime', nullable: true },
  },
  small_molecules_datasets: {
    id: { type: 'increments', nullable: false, primary: true },
    small_molecule_id: { type: 'integer', nullable: false, unsigned: true, references: 'small_molecules.id' },
    dataset_id: { type: 'integer', nullable: false, unsigned: true, references: 'datasets.id' },
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
    updated_at: { type: 'dateTime', nullable: true },
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
    updated_at: { type: 'dateTime', nullable: true },
  },
  users: {
    id: { type: 'increments', nullable: false, primary: true },
    created_at: { type: 'dateTime', nullable: false },
    updated_at: { type: 'dateTime', nullable: true },
  },
  webinars: {
    id: { type: 'increments', nullable: false, primary: true },
    title: { type: 'string', maxlength: 255, nullable: false },
    abstract: { type: 'text', nullable: true },
    presenter_name: { type: 'string', maxlength: 255, nullable: true },
    presenter_affiliation: { type: 'text', maxlength: 65535, nullable: true },
    presenter_url: { type: 'string', maxlength: 255, nullable: true },
    url: { type: 'string', maxlength: 255, nullable: true },
    date: { type: 'dateTime', nullable: false },
    created_at: { type: 'dateTime', nullable: false },
    updated_at: { type: 'dateTime', nullable: true },
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
    updated_at: { type: 'dateTime', nullable: true },
  },
  tools: {
    id: { type: 'increments', nullable: false, primary: true },
    name: { type: 'string', maxlength: 255, nullable: false },
    description: { type: 'text', maxlength: 16777215, fieldtype: 'medium', nullable: true },
    url: { type: 'string', maxlength: 255, nullable: true, unique: true },
    icon_url: { type: 'string', maxlength: 255, nullable: true },
    home_order: { type: 'integer', nullable: true },
    order: { type: 'integer', nullable: false },
    clicks: { type: 'integer', nullable: false, defaultTo: 0 },
    tutorial_url: { type: 'string', maxlength: 255, nullable: true },
    tutorial_preview_url: { type: 'string', maxlength: 255, nullable: true },
    transcript_data: { type: 'integer', nullable: false, defaultTo: false },
    protein_data: { type: 'integer', nullable: false, defaultTo: false },
    cell_state_data: { type: 'integer', nullable: false, defaultTo: false },
    morphology_data: { type: 'integer', nullable: false, defaultTo: false },
    drug_binding_data: { type: 'integer', nullable: false, defaultTo: false },
    data_formatting: { type: 'integer', nullable: false, defaultTo: false },
    data_storage: { type: 'integer', nullable: false, defaultTo: false },
    data_visualization: { type: 'integer', nullable: false, defaultTo: false },
    data_analysis: { type: 'integer', nullable: false, defaultTo: false },
    data_integration: { type: 'integer', nullable: false, defaultTo: false },
    signature_generation: { type: 'integer', nullable: false, defaultTo: false },
    network_analysis: { type: 'integer', nullable: false, defaultTo: false },
    data_documentation: { type: 'integer', nullable: false, defaultTo: false },
    api: { type: 'integer', nullable: false, defaultTo: false },
    command_line: { type: 'integer', nullable: false, defaultTo: false },
    database: { type: 'integer', nullable: false, defaultTo: false },
    ontology: { type: 'integer', nullable: false, defaultTo: false },
    open_source: { type: 'integer', nullable: false, defaultTo: false },
    search_engine: { type: 'integer', nullable: false, defaultTo: false },
    web_based: { type: 'integer', nullable: false, defaultTo: false },
    scripting: { type: 'integer', nullable: false, defaultTo: false },
    provenance: { type: 'integer', nullable: false, defaultTo: false },
    documentation: { type: 'integer', nullable: false, defaultTo: false },
    versioning: { type: 'integer', nullable: false, defaultTo: false },
  },
  tools_publications: {
    id: { type: 'increments', nullable: false, primary: true },
    tool_id: { type: 'integer', nullable: false, unsigned: true, references: 'tools.id' },
    publication_id: { type: 'integer', nullable: false, unsigned: true, references: 'publications.id' },
  },
  workflows: {
    id: { type: 'increments', nullable: false, primary: true },
    question: { type: 'text', maxlength: 1000, nullable: false },
    type: { type: 'string', maxlength: 255, nullable: false },
    exists: { type: 'bool', nullable: false, defaultTo: false },
    email: { type: 'string', maxlength: 255, nullable: true },
    url: { type: 'text', maxlength: 1000, nullable: true },
  },
  authors: {
    id: { type: 'increments', nullable: false, primary: true },
    name: { type: 'string', maxlength: 255, nullable: false },
    url: { type: 'string', maxlength: 255, nullable: true },
  },
  authors_publications: {
    id: { type: 'increments', nullable: false, primary: true },
    author_id: { type: 'integer', nullable: false, unsigned: true, references: 'authors.id' },
    publication_id: { type: 'integer', nullable: false, unsigned: true, references: 'publications.id' },
  },
  publications: {
    id: { type: 'increments', nullable: false, primary: true },
    journal_name: { type: 'string', maxlength: 255, nullable: true },
    show_at_home_order: { type: 'integer', nullable: true },
    abstract: { type: 'text', maxlength: 16777215, fieldtype: 'medium', nullable: false },
    resource_links: { type: 'text', maxlength: 65535, nullable: true, isJson: true },
    pp_pages: { type: 'string', maxlength: 255, nullable: true },
    issue: { type: 'string', maxlength: 255, nullable: true },
    volume: { type: 'string', maxlength: 255, nullable: true },
    pmc_id: { type: 'string', maxlength: 30, nullable: true, unique: true },
    pm_id: { type: 'string', maxlength: 30, nullable: true, unique: true },
    doi: { type: 'string', maxlength: 50, nullable: true, unique: true },
    other_link: { type: 'text', maxlength: 2000, nullable: true },
    year_published: { type: 'integer', nullable: false },
    article_name: { type: 'text', maxlength: 65535, nullable: true },
    assay_development: { type: 'bool', nullable: false, defaultTo: false },
    data_generation: { type: 'bool', nullable: false, defaultTo: false },
    data_analysis: { type: 'bool', nullable: false, defaultTo: false },
    data_integration: { type: 'bool', nullable: false, defaultTo: false },
    signature_generation: { type: 'bool', nullable: false, defaultTo: false },
    analytical_method_development: { type: 'bool', nullable: false, defaultTo: false },
    software_development: { type: 'bool', nullable: false, defaultTo: false },
    data_standards: { type: 'bool', nullable: false, defaultTo: false },
    review: { type: 'bool', nullable: false, defaultTo: false },
    created_at: { type: 'dateTime', nullable: false },
    updated_at: { type: 'dateTime', nullable: true },
    center_pub: { type: 'integer', nullable: false },
  },
  news: {
    id: { type: 'increments', nullable: false, primary: true },
    title: { type: 'string', maxlength: 255, nullable: false },
    presenter_name: { type: 'string', maxlength: 255, nullable: true },
    presenter_affiliation: { type: 'text', maxlength: 65535, nullable: true },
    category: { type: 'string', maxlength: 255, nullable: false },
    presenter_url: { type: 'string', maxlength: 255, nullable: true },
    url: { type: 'string', maxlength: 255, nullable: true },
    date: { type: 'dateTime', nullable: false },
    created_at: { type: 'dateTime', nullable: false },
    updated_at: { type: 'dateTime', nullable: true },
  },
  centers_tools: {
    id: { type: 'increments', nullable: false, primary: true },
    center_id: { type: 'integer', nullable: false, unsigned: true, references: 'centers.id' },
    tool_id: { type: 'integer', nullable: false, unsigned: true, references: 'tools.id' },
  },
  announcements: {
    id: { type: 'increments', nullable: false, primary: true },
    title: { type: 'string', maxlength: 255, nullable: false },
    description: { type: 'text', maxlength: 16777215, fieldtype: 'medium', nullable: true },
    presenter: { type: 'string', maxlength: 255, nullable: true },
    eDSR: { type: 'integer', nullable: true },
    webinar: { type: 'integer', nullable: true },
    course: { type: 'integer', nullable: true },
    training_program: { type: 'integer', nullable: true },
    new_update: { type: 'integer', nullable: true },
    custom: { type: 'string', maxlength: 255, nullable: true },
    event_date: { type: 'dateTime', nullable: false },
    link: { type: 'string', maxlength: 255, nullable: true },
    link_text: { type: 'string', maxlength: 255, nullable: true },
    created_at: { type: 'dateTime', nullable: false },
    updated_at: { type: 'dateTime', nullable: true },
  },
};
