## [1.1.0] 2021-02-04
### Bug fixing
- Changed all class components to functional ones (the `pages/_app.js` and `pages/_document.js` were kept as class components, read more here: https://nextjs.org/docs/advanced-features/custom-document)
### Major style changes
- Delete the `src/assets/scss/bootstrap` folder and changed all the bootstrap imports from `src/assets/scss` files to ones from `node_modules`
### Deleted components
### Added components
### Deleted dependencies
- @types/react
- @types/markerclustererplus
- @types/googlemaps
- react-google-maps (We've replace this plugin with Google Maps API Vanilla JS)
### Added dependencies
+ bootstrap@4.6.0 (and deleted the downloaded version of Bootstrap)
+ node-sass-package-importer@5.3.2 (so we can import bootstrap from node_modules)
### Updated dependencies
```
@fortawesome/fontawesome-free    5.14.0   →   5.15.2
chart.js                          2.9.3   →    2.9.4
moment                           2.27.0   →   2.29.1
next                              9.5.2   →   10.0.6
next-compose-plugins              2.2.0   →    2.2.1
nouislider                       14.6.1   →   14.6.3
react                           16.13.1   →   17.0.1
react-chartjs-2                  2.10.0   →   2.11.1
react-copy-to-clipboard           5.0.2   →    5.0.3
react-datetime                   2.16.3   →    3.0.4
react-dom                       16.13.1   →   17.0.1
reactstrap                        8.5.1   →    8.9.0
```
### Warning
_The following warnings will appear when running the installation command, but they do not affect the UI or the functionality of the product (they will be solved in our next update):_
```
npm WARN react-datetime@3.0.4 requires a peer of react@^16.5.0 but none is installed. You must install peer dependencies yourself.
npm WARN react-popper@1.3.7 requires a peer of react@0.14.x || ^15.0.0 || ^16.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN create-react-context@0.3.0 requires a peer of react@^0.14.0 || ^15.0.0 || ^16.0.0 but none is installed. You must install peer dependencies yourself.
```
_If they will persist in our 2.*.* version, we will drop their usages and replace them with other plugins._
_In development mode, some of the above plugins will throw a warning because they still use React v16 syntax. If the error will persist in our 2.*.* version, we will drop their usage and replace them with other plugins._

## [1.0.0] 2020-09-14
### Original Release
- Started project with NextJS
- Added design from Argon Dashboard React by Creative Tim
### Warning
_Warnings might appear while doing an npm install - they do not affect the UI or the functionality of the product, and they appear because of NodeJS and not from the product itself._
_While in development some of the plugins that were used for this product will throw some warnings - note, this only happens in development, the UI or the functionality of the product is not affected, also, if the issues will persist in React 17, we'll drop usage of those plugins, and replace them with other ones._
