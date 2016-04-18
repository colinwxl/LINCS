import csv
import json
import requests

datasets = []

with open('datasets.csv', 'rU') as data:
    reader = csv.reader(data, skipinitialspace=False, delimiter=",")
    dsArr = [row for row in reader if any(row)]

with open('Small_Molecule_Metadata_LDS-1191.txt', 'rU') as data:
    reader = csv.reader(data, skipinitialspace=False, delimiter="\t")
    lds1191 = [row[1] for row in reader if any(row)]

with open('Small_Molecule_Metadata_LDS-1194.txt', 'rU') as data:
    reader = csv.reader(data, skipinitialspace=False, delimiter="\t")
    lds1194 = [row[1] for row in reader if any(row)]

with open('Small_Molecule_Metadata_LDS-1195.txt', 'rU') as data:
    reader = csv.reader(data, skipinitialspace=False, delimiter="\t")
    lds1195 = [row[1] for row in reader if any(row)]

r = requests.get('http://amp.pharm.mssm.edu/LINCS/api/v1/datasets/clicks')
clicks = r.json()

for dsRow in dsArr:
    if 'Dataset ID' in dsRow[0]:
        continue
    ds = {
        'lincs_id': dsRow[0],
        'center_name': dsRow[1],
        'classification': dsRow[2],
        'assay': dsRow[3],
        'method': dsRow[4],
        'physical_detection': dsRow[5],
        'date_updated': dsRow[6] if dsRow[6] else None,
        'date_retrieved': dsRow[7] if dsRow[7] else None,
        'cells': [x.strip() for x in dsRow[8].split(',')] if dsRow[8] else [],
        'smIds': [x.strip() for x in dsRow[9].split(',')] if dsRow[9] else [],
        'full_assay_name': dsRow[11],
        'source_link': dsRow[12] if dsRow[12] else None,
        'description': dsRow[14] if dsRow[14] else None,
        'assay_description': dsRow[15] if dsRow[15] else None,
        'download_link': dsRow[16] if dsRow[16] else None,
        'clicks': 0
    }
    if ds['lincs_id'] == 'LDS-1191':
        ds['smIds'] = lds1191;
    elif ds['lincs_id'] == 'LDS-1194':
        ds['smIds'] = lds1194;
    elif ds['lincs_id'] == 'LDS-1195':
        ds['smIds'] = lds1195;

    for dsObj in clicks:
        if ds['lincs_id'] == dsObj['lincsId'] and ds['method'] == dsObj.method:
            ds['clicks'] = dsObj.clicks
    datasets.append(ds)

with open('../seed/datasets.js', 'w+') as out:
    string = json.dumps(datasets)
    out.write('module.exports = ' + string)
