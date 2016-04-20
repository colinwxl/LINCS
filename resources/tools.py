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
        'icon_url': row[4] if row[4] else None,
        'order': int(row[5]),
        'web_based_ui': row[6] == '1',
        'clust_l1000_data': row[7] == '1',
        'enrichment_analysis': row[8] == '1',
        'api': row[9] == '1',
        'desktop_software': row[10] == '1',
        'client_server_software': row[11] == '1',
        'matlab_python_script': row[12] == '1',
        'feature_access': row[13] == '1',
        'feature_search': row[14] == '1',
        'feature_navigation': row[15] == '1',
        'feature_integration': row[16] == '1',
        'feature_vizualization': row[17] == '1',
        'feature_signature_enrichment': row[18] == '1',
        'feature_browse': row[19] == '1',
        'feature_download': row[20] == '1',
        'feature_leverage_ontology': row[21] == '1',
        'feature_mining': row[22] == '1',
        'feature_query': row[23] == '1',
        'feature_data_analysis': row[24] == '1',
        'feature_image_analysis': row[25] == '1',
        'feature_image_manage': row[26] == '1'
    }
    tools.append(tool)

with open('../seed/tools.js', 'w+') as out:
    string = json.dumps(tools)
    out.write('module.exports = ' + string)
