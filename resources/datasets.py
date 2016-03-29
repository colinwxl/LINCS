import csv
import json

datasets = []

with open('datasets.csv', 'rU') as data:
    reader = csv.reader(data, skipinitialspace=False, delimiter=",")
    dsArr = [row for row in reader if any(row)]
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
        'tissues': [x.strip() for x in dsRow[8].split(',')] if dsRow[8] else [],
        'cells': [x.strip() for x in dsRow[9].split(',')] if dsRow[9] else [],
        'smIds': [x.strip() for x in dsRow[10].split(',')] if dsRow[10] else [],
        'diseases': [x.strip() for x in dsRow[11].split(',')] if dsRow[11] else [],
        'description': dsRow[12] if dsRow[12] else '',
        'full_assay_name': dsRow[13]
    }
    datasets.append(ds)

with open('datasets.json', 'w+') as out:
    json.dump(datasets, out)
