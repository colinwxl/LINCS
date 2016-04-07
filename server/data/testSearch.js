import { esClient } from '../serverConf';

esClient.search({
  index: 'datasets',
  type: 'dataset',
  body: {
    query: {
      multi_match: {
        fields: [
          'full_assay_name', 'description', 'center_name', 'assay', 'method', 'classification',
          'physical_detection', 'lincs_id',
        ],
        query: process.argv[2],
        type: 'phrase_prefix',
        max_expansions: 10,
        use_dis_max: false,
      },
    },
  },
}, (err) => {
  if (err) {
    throw err;
  } else {
    process.exit(0);
  }
});
