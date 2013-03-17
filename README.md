AnchorURL
=========

AnchorURL allows you to create functions for handling of URL anchors easily. Know some of its main uses:

 - Creation and manipulation of ajax pages.
 - Creation of links with anchors, example: www.domain.com/#/page
 - Specific functions from the URL
 - Suporte nativo para o tratamento de diversas tipos de Ancoras. example: www.domain.com/#/url/ulr?args=3|funcs|
 
"Project is in development" 

API
=========

The API provides all the resources to handling of URL anchors.

- anchorUrl.addPath(path, func): Adds a path to be observed by AnchorURL.
- anchorUrl.rmPath(path): Removes a path of Observation of AnchorURL.
- anchorUrl.start(): Initializes the observation of anchors, and calls the function for each correct path.
- anchorUrl.stop(): Stop the observation of anchors.
- anchorUrl.actionDefault = function (path, args): Creates a default function that will be called on every observation that there is a change in anchors.