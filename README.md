# ng2-wistia

For live demo go to [http://ng2-uploader.com](http://ng2-uploader.com).

## Angular2 Wistia Upload and Player

### How to build

```
npm install
node_modules/typescript/bin/tsc
npm run compile
```
### Run tests

```
npm test
```
### Installation

```
npm install ng2-file-upload --save 
npm install https://github.com/kibiluzbad/ng2-wistia.git --save
```

#### Setup system-config.ts

```js
/** Map relative paths to URLs. */
const map: any = {
   ...
   'ng2-wistia': 'vendor/ng2-wistia',
   'ng2-file-upload': 'vendor/ng2-file-upload',
   ...
};

/** User packages configuration. */
const packages: any = {
    ...
   'ng2-wistia': {
    defaultExtension: 'js'
    },
    'ng2-file-upload':{
    defaultExtension: 'js'
    },
    ...
};
```

#### LICENCE

MIT