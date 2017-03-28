module.exports = {
  "middlewares": {
    "summary": [
      "summary?sourcePattern=build/messages/**/*.json"
    ],
    "process": [
      "fetchLocal?source=locales,skip",
      "metaToResult?from=defaultMessage,to=zh",
      "gugu?from[]=zh,to[]=en",
      "reduce?-autoPick,autoReduce[]=local,autoReduce[]=meta"
    ],
    "emit": [
      "save?dest=locales"
    ]
  }
}
