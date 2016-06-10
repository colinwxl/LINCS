import csv
import json
import requests

allSms = {}
sms = {}

def addSms(smArr):
    for smRow in smArr:
        if 'SM_Name' in smRow[0]:
            continue
        sm = {
          'name': smRow[0],
          'lincs_id': smRow[1],
          'source': smRow[8] if smRow[8] else None,
          'smiles_parent': smRow[7] if smRow[7] else None,
          'molecular_mass': smRow[18] if smRow[18] else None,
          'bioactivity_information': smRow[7] if smRow[7] else None,
          'inchi_parent': smRow[5] if smRow[5] else None,
          'pubchem_cid': smRow[3] if smRow[3] else None
        }
        allSms[sm['lincs_id']] = sm



r = requests.get('http://lincsportal.ccs.miami.edu/dcic/api/fetchentities?searchTerm=category:%22Small%20Molecule%22%20*&limit=2000000')
docs = r.json()['results']['documents']
for doc in docs:
    sm = {
        'name': doc['entityName'][0],
        'lincs_id': doc['lincsidentifier'][0],
        'source': doc.get('source', [None])[0],
        'smiles_parent': doc.get('SM_SMILES_Parent', [None])[0],
        'molecular_mass': doc.get('SM_Molecular_Mass', [None])[0],
        'bioactivity_information': doc.get('SM_BioActivity_Information', [None])[0],
        'inchi_parent': doc.get('SM_InChi_Parent', [None])[0],
        'pubchem_cid': doc.get('SM_PubChem_CID', [None])[0]
    }
    allSms[sm['lincs_id']] = sm

with open('Small_Molecule_Metadata_LDS-1191.txt', 'rU') as data:
    reader = csv.reader(data, skipinitialspace=False, delimiter="\t")
    smArr = [row for row in reader if any(row)]
    addSms(smArr)

with open('Small_Molecule_Metadata_LDS-1194.txt', 'rU') as data:
    reader = csv.reader(data, skipinitialspace=False, delimiter="\t")
    smArr = [row for row in reader if any(row)]
    addSms(smArr)

with open('Small_Molecule_Metadata_LDS-1195.txt', 'rU') as data:
    reader = csv.reader(data, skipinitialspace=False, delimiter="\t")
    smArr = [row for row in reader if any(row)]
    addSms(smArr)


with open('../seed/cellsAndSMs.js', 'w+') as out:
    string = json.dumps(allSms)
    out.write('module.exports = ' + string)
