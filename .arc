@app
sense8

@html
get /

@json
post /memberships

@tables
memberships
  userId *String

clusters
  clusterId *String
  createdAt **Number

@static
staging sense8clustersstaging.joinapod.com
production sense8clusters.joinapod.com

@domain
sense8.joinapod.com