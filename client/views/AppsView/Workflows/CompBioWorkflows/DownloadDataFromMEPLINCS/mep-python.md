```python
import synapseclient
syn = synapseclient.login(username, password)
res = syn.chunkedQuery("SELECT id FROM file WHERE projectId=='syn2862345' AND Level==4")
objs = map(lambda x: syn.get(x['file.id'], downloadLocation="./"), res)
```
