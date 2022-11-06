declare const f:
  <T extends F<T>>(t: T) => T

type F<T> =
  { a: unknown
  , b: (a: T extends { a: infer X } ? X : never) => unknown
  }

f({
  a: "hello",
  b: x => x.toUpperCase()
})