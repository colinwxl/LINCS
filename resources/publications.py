from pymongo import MongoClient
import json

client = MongoClient('mongodb://hannah/LDR')
ldr = client['LDR']
tools = ldr['tools']
pubs = ldr['publications']

pubsOut = [];

for doc in pubs.find({}):
    c = doc.get('citation', {})
    pub = {
        'journal_name': c.get('journalName'),
        'pp_pages': c.get('ppPages'),
        'year_published': None,
        'article_name': c.get('articleName'),
        'issue': c.get('issue'),
        'volume': c.get('volume'),
        'authors': c.get('authors'),
        'pmc_id': c.get('pmcId'),
        'pm_id': c.get('pmId'),
        'doi': c.get('doi'),
        'comp_tools': [],
        'readout_assay': doc.get('readoutAssay')
    }
    if 'yearPublished' in c and len(c['yearPublished']) > 0:
        pub['year_published'] = int(c.get('yearPublished'))
    for toolId in doc.get('compTools', []):
        tool = tools.find_one({ '_id': toolId })
        if not tool:
            continue
        del tool['_id']
        pub['comp_tools'].append(tool)
    pubsOut.append(pub)

with open('publications.json', 'w+') as out:
    json.dump(pubsOut, out)
