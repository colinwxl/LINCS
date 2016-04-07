import csv
import json

tools = []


with open('tools.csv', 'rU') as data:
    reader = csv.reader(data, skipinitialspace=False, delimiter=",")
    toolArr = [row for row in reader if any(row)]

center = ''

for row in toolArr:
    if not row[1] or row[1] == 'Tools':
        continue
    if row[0]:
        center = row[0]
    tool = {
        'name': row[1].strip(),
        'center': center,
        'description': row[2] if row[2] else None,
        'url': row[3] if row[3] else None,
        'web_based_ui': row[4] == '1',
        'clust_l1000_data': row[5] == '1',
        'enrichment_analysis': row[6] == '1',
        'api': row[7] == '1',
        'desktop_software': row[8] == '1',
        'client_server_software': row[9] == '1',
        'matlab_python_script': row[10] == '1',
        'feature_access': row[11] == '1',
        'feature_search': row[12] == '1',
        'feature_navigation': row[13] == '1',
        'feature_integration': row[14] == '1',
        'feature_vizualization': row[15] == '1',
        'feature_signature_enrichment': row[16] == '1',
        'feature_browse': row[17] == '1',
        'feature_download': row[18] == '1',
        'feature_leverage_ontology': row[19] == '1',
        'feature_mining': row[20] == '1',
        'feature_query': row[21] == '1',
        'feature_data_analysis': row[22] == '1',
        'feature_image_analysis': row[23] == '1',
        'feature_image_manage': row[24] == '1'
    }
    tools.append(tool)

with open('../seed/tools.js', 'w+') as out:
    string = json.dumps(tools)
    out.write('module.exports = ' + string)
