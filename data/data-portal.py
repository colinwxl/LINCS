from pymongo import MongoClient
from dateutil.parser import parse
import requests as re
from datetime import datetime

client = MongoClient('mongodb://hannah')
lincs = client['LINCS-new']
datasets = lincs['datasets']
datasets.drop()
# proteins = lincs['proteins']
# proteins.drop()
# smallMolecules = lincs['smallMolecules']
# smallMolecules.drop()
# shRNA = lincs['shRNA']
# shRNA.drop()
# cDNA = lincs['cDNA']
# cDNA.drop()
# cellLines = lincs['cellLines']
# cellLines.drop()
# iPSCs = lincs['iPSCs']
# iPSCs.drop()
# primaryCells = lincs['primaryCells']
# primaryCells.drop()
# genes = lincs['genes']
# genes.drop()
# peptideProbes = lincs['peptideProbes']
# peptideProbes.drop()

r = re.get('http://lincsportal.ccs.miami.edu/dcic/api/fetchdata?searchTerm=*&limit=10000000&skip=0')

response = r.json()
results = response['results']

for doc in results['documents']:
    dataset = {
        'assay': doc['assayname'],
        'assayFormat': doc['assayformat'],
        'principalInvestigator': '',
        'screeningLabInvestigator': '',
        'assayDesignMethod': doc['assaydesignmethod'],
        'centerDatasetId': doc['centerdatasetid'],
        'project': doc['projectname'],
        'biologicalProcess': doc['biologicalprocess'],
        'physicalDetection': doc['physicaldetection'],
        'endpointCategorization': doc['endpointcategorization'],
        'technologies': doc['technologies'],
        'centerFullName': doc['centerfullname'],
        'center': doc['centername'],
        'name': doc['datasetname'],
        'lincsId': doc['datasetid'],
        'cDNA': doc.get('cDNA', []),
        'cellLines': doc.get('cellline', []),
        'genes': doc.get('gene', []),
        'iPSCs': doc.get('iPSC', []),
        'peptideProbes': doc.get('phosphoprotein', []),
        'primaryCells': doc.get('primarycell', []),
        'proteins': doc.get('protein', []),
        'shRNA': doc.get('shRNA', []),
        'smallMolecules': doc.get('smallmolecule', []),
    }
    if 'datemodified' in doc:
        dataset['dateModified'] = parse(doc['datemodified'])
    else:
        dataset['dateModified'] = datetime.now()
    if 'datereleased' in doc:
        dataset['dateReleased'] = parse(doc['datereleased'])
        dataset['principalInvestigator'] = doc.get('principalinvestigator', None)
        dataset['screeningLabInvestigator'] = doc.get('screeninglabinvestigator', None)
        dataset['smallMolecules'] = doc.get('smallmolecule', None)
        dataset['primaryCells'] = doc.get('primarycell', None)
        dataset['proteins'] = doc.get('protein', None)
    datasets.insert(dataset)

# r = re.get('http://lincsportal.ccs.miami.edu/dcic/api/fetchentities?searchTerm=*&limit=100000000&skip=0')
# response = r.json()
# results = response['results']
#
# for doc in results['documents']:
#     entity = {
#         'lincsId': doc['lincsidentifier'][0],
#         'name': doc['entityName'][0],
#         'category': doc['category'],
#         'assays': doc.get('assays', []),
#         'sources': doc.get('source', []),
#     }
#
#     if entity['category'] == 'Protein':
#         entity['geneId'] = doc.get('PR_Gene_ID', [None])[0]
#         entity['uniprotId'] = doc.get('PR_UniProt_ID', [None])[0]
#         entity['geneSymbol'] = doc.get('PR_Gene_Symbol', [None])[0]
#         entity['proteinSpecies'] = doc.get('PR_Protein_Species', [None])[0]
#         entity['kinaseGroup'] = doc.get('PR_Kinasegroup', [None])[0]
#         entity['kinaseDomain'] = doc.get('PR_Kinasedomain', [None])[0]
#         entity['kinaseFamily'] = doc.get('PR_Kinasefamily', [None])[0]
#         entity['gateKeeper'] = doc.get('PR_Gatekeeper', [None])[0]
#         entity['mutation'] = doc.get('PR_Mutation', [None])[0]
#         entity['hingeI1'] = doc.get('PR_Hinge_i1', [None])[0]
#         entity['hingeI3'] = doc.get('PR_Hinge_i3', [None])[0]
#         proteins.insert(entity)
#
#     elif entity['category'] == 'Small Molecule':
#         entity['pubChemCId'] = doc.get('SM_PubChem_CID', [None])[0]
#         entity['alternateNames'] = doc.get('SM_Alternative_Name', None)
#         entity['smilesBatches'] = doc.get('SM_SMILES_Batch', None)
#         entity['inChiParents'] = doc.get('SM_InChi_Parent', None)
#         entity['centerSampleIds'] = doc.get('SM_Center_Sample_ID', None)
#         entity['centerCompoundIds'] = doc.get('SM_Center_Compound_ID', None)
#         entity['molecularMass'] = doc.get('SM_Molecular_Mass', None)
#         entity['smilesParent'] = doc.get('SM_SMILES_Parent', [None])[0]
#         smallMolecules.insert(entity)
#
#     elif entity['category'] == 'shRNA':
#         entity['sourceId'] = doc.get('SHRNA_SourceID', [None])[0]
#         entity['seed7MerSeq'] = doc.get('SHRNA_Seed7MerSeq', [None])[0]
#         entity['seed6MerSeq'] = doc.get('SHRNA_Seed6MerSeq', [None])[0]
#         entity['targetSequence'] = doc.get('SHRNA_TargetSequence', [None])[0]
#         shRNA.insert(entity)
#
#     elif entity['category'] == 'cDNA':
#         entity['source'] = doc.get('CDNA_Source', [None])[0]
#         cDNA.insert(entity)
#
#     elif entity['category'] == 'Cell Line':
#         entity['providerCatalogId'] = doc.get('CL_Provider_Catalog_ID', [None])[0]
#         entity['centerSpecificId'] = doc.get('CL_Center_Specific_ID', [None])[0]
#         cellLines.insert(entity)
#
#     elif entity['category'] == 'iPSC':
#         entity['reprogrammingMethod'] = doc.get('IP_Reprogramming_Method', [None])[0]
#         iPSCs.insert(entity)
#
#     elif entity['category'] == 'Primary Cell':
#         entity['donorAge'] = doc.get('PC_Donor_Age', [None])[0]
#         entity['providerName'] = doc.get('PC_Provider_Name', [None])[0]
#         entity['providerCatalogId'] = doc.get('PC_Provider_Catalog_ID', [None])[0]
#         primaryCells.insert(entity)
#
#     elif entity['category'] == 'Transcribed Gene':
#         entity['synonyms'] = doc.get('GENE_Synonyms', None)
#         entity['organism'] = doc.get('GENE_Organism', [None])[0]
#         entity['entresId'] = doc.get('GENE_EntresID', [None])[0]
#         entity['description'] = doc.get('GENE_Description', [None])[0]
#         genes.insert(entity)
#
#     elif entity['category'] == 'Peptide Probe':
#         entity['uniprotId'] = doc.get('PP_UniProt_ID', [None])[0]
#         peptideProbes.insert(entity)
