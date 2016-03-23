import bookshelf from '../bookshelf';

export default bookshelf.Model.extend({
  tableName: 'symposia',
});

/* eslint max-len:0 */
//
// const syms = [
//   {
//     title: 'LINCS Outreach Meeting 2016',
//     description: '',
//     location: 'University of California, Irvine, CA',
//     startDate: new Date('March 10, 2016'),
//     endDate: new Date('March 11, 2016'),
//     keyLinks: {
//       'Meeting Homepage': 'https://meetings.ninds.nih.gov/Home/Index/13365',
//     },
//   },
//   {
//     title: 'Molecular Medicine Tri-Conference 2016',
//     description: 'As part of the BD2K-LINCS DCIC’s community outreach efforts, Avi Ma’ayan PhD and Stephan Schurer PhD will present in the Informatics channel at the Molecular Medicine Tri-Conference 2016.',
//     location: 'San Francisco, CA',
//     startDate: new Date('March 8, 2016'),
//     keyLinks: {
//       'Tri-Conference Homepage': 'http://www.triconference.com/',
//       'Tri-Conference Informatics Channel': 'http://www.triconference.com/Informatics/',
//     },
//   },
//   {
//     title: 'Systems Biology Data Science Symposium',
//     description: '',
//     location: 'University of Miami, Coral Gables, FL',
//     startDate: new Date('January 19, 2016'),
//     endDate: new Date('January 20, 2016'),
//     keyLinks: {},
//   },
//   {
//     title: 'Turning Big Data to Knowledge: An Introduction to the BD2K and LINCS Projects',
//     subTitle: 'BD2K-LINCS DCIC Outreach Session at the Society of Toxicology’s Annual Meeting',
//     description: 'Poster session: Big Data to Knowledge (BD2K) – A Graphical Approach for Data Coordination and Integration presented by John Reichard PhD, Mario Medvedovic PhD, Siva Sivaganesan PhD.',
//     location: 'San Diego, CA',
//     startDate: new Date('March 23, 2015'),
//     keyLinks: {
//       'Meeting Program': 'https://www.toxicology.org/pubs/docs/Prog/2015Program.pdf',
//     },
//   },
//   {
//     title: 'BD2K-LINCS Data Coordination and Integration Center’s Mini-Symposium',
//     subTitle: 'Big Data Applications for Drug and Target Discovery',
//     description: '',
//     location: 'Icahn School of Medicine at Mount Sinai, New York, NY',
//     startDate: new Date('January 7, 2015'),
//     keyLinks: {
//       'Big Data Symposium': 'http://lincs-dcic.org/static/big_data_symposium.pdf',
//     },
//   },
//   {
//     title: 'LINCS Data Forum 2013',
//     description: '',
//     location: 'Harvard Medical School, Boston, MA',
//     startDate: new Date('March 20, 2013'),
//     endDate: new Date('March 21, 2013'),
//     keyLinks: {
//       'Meeting Agenda': '/LINCS/files/LINCSDataForum2013.pdf',
//     },
//   },
// ];
//
// Symposium.create(syms, (err) => {
//   if (err) {
//     console.log(err);
//   }
// });
