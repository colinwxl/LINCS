from pymongo import MongoClient
from copy import deepcopy

client = MongoClient('mongodb://hannah')
lincs = client['LINCS-new']
datasets = lincs['datasets']
newDatasets = lincs['datasets-new']
newDatasets.drop()
proteins = lincs['proteins']
smallMolecules = lincs['smallMolecules']
shRNA = lincs['shRNA']
cDNA = lincs['cDNA']
cellLines = lincs['cellLines']
iPSCs = lincs['iPSCs']
primaryCells = lincs['primaryCells']
genes = lincs['genes']
peptideProbes = lincs['peptideProbes']

def findId(col, name):
    return col.find_one({ 'name': name })['_id']

for dataset in datasets.find({}):
    ds = deepcopy(dataset)
    if 'cDNA' in ds and not ds['cDNA'] == None:
        ds['cDNA'] = [findId(cDNA, name) for name in ds['cDNA']]
    if 'cellLines' in ds and not ds['cellLines'] == None:
        ds['cellLines'] = [findId(cellLines, name) for name in ds['cellLines']]
    if 'genes' in ds and not ds['genes'] == None:
        ds['genes'] = [findId(genes, name) for name in ds['genes']]
    if 'iPSCs' in ds and not ds['iPSCs'] == None:
        ds['iPSCs'] = [findId(iPSCs, name) for name in ds['iPSCs']]
    if 'peptideProbes' in ds and not ds['peptideProbes'] == None:
        ds['peptideProbes'] = [findId(peptideProbes, name) for name in ds['peptideProbes']]
    if 'primaryCells' in ds and not ds['primaryCells'] == None:
        ds['primaryCells'] = [findId(primaryCells, name) for name in ds['primaryCells']]
    if 'proteins' in ds and not ds['proteins'] == None:
        ds['proteins'] = [findId(proteins, name) for name in ds['proteins']]
    if 'shRNA' in ds and not ds['shRNA'] == None:
        ds['shRNA'] = [findId(shRNA, name) for name in ds['shRNA']]
    if 'smallMolecules' in ds and not ds['smallMolecules'] == None:
        ds['smallMolecules'] = [findId(smallMolecules, name) for name in ds['smallMolecules']]
    newDatasets.insert(ds)
