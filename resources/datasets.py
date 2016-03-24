import csv
import json

datasets = []

with open('datasets.csv', 'rU') as data:
    reader = csv.reader(data, skipinitialspace=False, delimiter=",")
    dsArr = [row for row in reader if any(row)]
for dsRow in dsArr:
    ds = {
        'lincsId': dsRow[0],
        'centerDatasetId': dsRow[1] if dsRow[1] else None,
        'centerName': dsRow[2],
        'assayCategory': dsRow[3],
        'assay': dsRow[4],
        'fullAssayName': dsRow[12],
        'dateFromCenter': dsRow[6] if dsRow[6] else None,
        'tissues': dsRow[7].split(',') if dsRow[7] else [],
        'cells': dsRow[8].split(',') if dsRow[8] else [],
        'smIds': dsRow[9].split(',') if dsRow[9] else [],
        'diseases': dsRow[10].split(',') if dsRow[10] else [],
        'description': dsRow[11] if dsRow[11] else ''
    }
    datasets.append(ds)

with open('datasets.json', 'w+') as out:
    json.dump(datasets, out)
