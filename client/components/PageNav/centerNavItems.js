const centersRoute = '/centers';
const dsgcRoute = `${centersRoute}/data-and-signature-generating-centers`;

export default [
  {
    title: 'Overview',
    route: `${centersRoute}/overview`,
    children: [],
  },
  {
    title: 'BD2K-LINCS Data Coordination and Integration Center',
    route: `${centersRoute}/dcic`,
    children: [],
  },
  {
    title: 'Data and Signature Generation Centers',
    route: dsgcRoute,
    children: [
      { title: 'Introduction', route: dsgcRoute },
      { title: 'Drug Toxicity Signature Generation Center', route: `${dsgcRoute}/dtoxs` },
      { title: 'HMS LINCS', route: `${dsgcRoute}/hms-lincs` },
      {
        title: 'LINCS Center for Transcriptomics',
        route: `${dsgcRoute}/lincs-transcriptomics`,
      },
      {
        title: 'LINCS Proteomic Characterization Center for Signaling and Epigenetics',
        route: `${dsgcRoute}/lincs-pccse`,
      },
      {
        title: 'Microenvironment Perturbagen (MEP) LINCS Center',
        route: `${dsgcRoute}/mep-lincs`,
      },
      { title: 'NeuroLINCS Center', route: `${dsgcRoute}/neurolincs` },
    ],
  },
  {
    title: 'Pilot Phase I Centers',
    route: `${centersRoute}/phase-one`,
    children: [],
  },
];
