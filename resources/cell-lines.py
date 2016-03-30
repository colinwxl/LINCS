import csv
import json

cellLines = []

with open('cell-lines.csv', 'rU') as data:
    reader = csv.reader(data, skipinitialspace=False, delimiter=",")
    clArr = [row for row in reader if any(row)]

for row in clArr:
    if 'Cell Line' in row[0]:
        continue
    cl = {
        'lincs_id': row[1] if row[1] else None,
        'source': row[2] if row[2] else None,
        'organ_tissue': row[3] if row[3] else None,
        'disease': row[4] if row[4] else None

    }
    if ';' in row[0]:
        names = [x.strip() for x in row[0].split(';')]
        # Pop will remove the first element in names list, leaving the rest as synonyms
        cl['name'] = names.pop(0)
        cl['synonyms'] = names
    else:
        cl['name'] = row[0]
        cl['synonyms'] = []
    cellLines.append(cl)

with open('../seed/cellLines.js', 'w+') as out:
    string = json.dumps(cellLines)
    out.write('module.exports = ' + string)
