Some constants are put in a file which you will need to create to run this.

BASE_URL and DELTA are the only ones required if you're not using the location mock

/* keystore.js */
```
module.exports = {  
  BASE_URL: <string> - the url for the API
  BASE_LAT: <float> - GPS base latitude for the location mock
  BASE_LONG: <float> - GPS base longitude for the location mock
  DELTA: <float> - Accuracy delta (suggest 0.01)
};
```

Apple Headquarters, if you're so inclined to start there:
  ```
  BASE_LAT: 37.33233,
  BASE_LONG: -122.03121,
```