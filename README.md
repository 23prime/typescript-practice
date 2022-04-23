# typescript-practice #

Note of TypeScript.

## Init ##

### Install and pin tools and runtime by Volta ###

Make project directory and cd.

```console
mkdir typescript-practice
cd typescript-practice/
```

Pin Node.js.

```console
volta pin node@16.8.0
```

Pin yarn.

```console
volta pin yarn@1.22.18
```

Pin npx.

```console
volta pin npx@10.2.2
```

### Init project ###

Init yarn project.

```console
yarn init --yes
```

Add TypeScript dependencies.

```console
yarn add --dev typescript @types/node
```

Init TypeScript project.

```console
npx tsc --init
```

## Exec ##

Compile.

```console
yarn tsc
```

Run.

```console
node dist/index.js
```
