```r
library(synapseClient)
synapseLogin(username, password)
res <- synQuery("SELECT id FROM file WHERE projectId=='syn2862345' AND Level='4'")

# This downloads to the Synapse cache, by default ~/.synapseCache
objs <- lapply(res$file.id, function(x) synGet(x))

# The path to each file can be found using getFileLocation()
objPaths <- lapply(objs, getFileLocation)
```
