```python
import csv
import synapseclient

syn = synapseclient.login(username, password)
res = syn.tableQuery("SELECT * FROM syn5691738 WHERE Level='4'")

with file(res.filepath) as f:
    r = csv.DictReader(f)
    map(lambda x: syn.get(x['id'], downloadLocation="./"), r)
```
