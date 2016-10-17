import lincsLogo from './logos/lincs_logo_min.png';
import dcicLogo from './logos/dcic_logo.png';
import neurolincsLogo from './logos/neurolincs_logo.png';
import broadinstituteLogo from './logos/broadinstitute_logo.png';
import dtoxsLogo from './logos/dtoxs_logo.png';
import mepLogo from './logos/mep_lincs_logo.png';
import lincsPccseLogo from './logos/lincs_pccse_logo.png';

const mediumRadius = 5;
const largeRadius = 7;
const fillKey = 'BLUE';

export const awardeeInstitutions = [
  {
    name: 'Oregon Health & Science University',
    latitude: 45.4990,
    longitude: -122.6859,
    logo: mepLogo,
    radius: largeRadius,
    fillKey,
  },
  {
    name: 'University of California - Irvine',
    latitude: 33.6405,
    longitude: -117.8443,
    logo: neurolincsLogo,
    radius: largeRadius,
    fillKey,
  },
  {
    name: 'Icahn School of Medicine at Mt. Sinai',
    latitude: 41.389764,
    longitude: -73.952906,
    logo: dcicLogo,
    radius: largeRadius,
    fillKey,
  },
  {
    name: 'Icahn School of Medicine at Mt. Sinai',
    latitude: 42.349764,
    longitude: -74.352906,
    logo: dtoxsLogo,
    radius: largeRadius,
    fillKey,
  },
  {
    name: 'Broad Institute',
    latitude: 42.367086,
    longitude: -72.214419,
    logo: broadinstituteLogo,
    radius: mediumRadius,
    fillKey,
  },
  {
    name: 'Broad Institute',
    latitude: 42.276818,
    longitude: -71.159199,
    logo: lincsPccseLogo,
    radius: mediumRadius,
    fillKey,
  },
  {
    name: 'Harvard Medical School',
    latitude: 42.478319,
    longitude: -73.028895,
    logo: lincsLogo,
    radius: mediumRadius,
    fillKey,
  },
]

export const institutions = [
  {
    name: 'Massachusetts Institute of Technology',
    latitude: 42.166593,
    longitude: -70.199068,
    logo: neurolincsLogo,
    radius: mediumRadius,
    fillKey,
  },
  {
    name: 'Rutgers University',
    latitude: 40.5008,
    longitude: -74.4474,
    logo: dtoxsLogo,
    radius: largeRadius,
    fillKey,
  },
  {
    name: 'Johns Hopkins University',
    latitude: 38.9081,
    longitude: -77.0403,
    logo: neurolincsLogo,
    radius: largeRadius,
    fillKey,
  },
  {
    name: 'Unversity of Cincinnati',
    latitude: 39.1329,
    longitude: -84.5150,
    logo: dcicLogo,
    radius: largeRadius,
    fillKey,
  },
  {
    name: 'MD Anderson',
    latitude: 29.7070,
    longitude: -95.3972,
    logo: mepLogo,
    radius: largeRadius,
    fillKey,
  },
  {
    name: 'University Of Miami',
    latitude: 25.7209,
    longitude: -80.2779,
    logo: dcicLogo,
    radius: largeRadius,
    fillKey,
  },
  {
    name: 'University Of Washington',
    latitude: 47.6553,
    longitude: -122.3035,
    logo: lincsPccseLogo,
    radius: largeRadius,
    fillKey,
  },
  {
    name: 'Gladstone',
    latitude: 37.815758,
    longitude: -122.394674,
    logo: neurolincsLogo,
    radius: largeRadius,
    fillKey,
  },
  {
    name: 'University of California - Santa Cruz',
    latitude: 36.9914,
    longitude: -122.0609,
    logo: lincsLogo,
    radius: largeRadius,
    fillKey,
  },
  {
    name: 'Cedars-Sinai',
    latitude: 34.0753,
    longitude: -118.3804,
    logo: neurolincsLogo,
    radius: largeRadius,
    fillKey,
  },
];
