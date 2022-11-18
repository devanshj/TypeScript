type Type =
  | IntersectionType
  | UnionType

interface IntersectionType
  { flags: number & BitSet<TypeFlags.Intersection> & BitSet<TypeFlags.Foo>
  , left: Type
  , right: Type
  }

interface UnionType
  { flags: number & BitSet<TypeFlags.Union> & BitSet<TypeFlags.Foo>
  , left: Type
  , right: Type
  }

enum TypeFlags
  { Intersection = 1
  , Union = 2
  , Foo = 4
  }

let x = {} as Type

if (x.flags & TypeFlags.Union) {
  let _test: UnionType = x;
}

if (x.flags & TypeFlags.Foo) {
  // @ts-expect-error
  let _test: UnionType = x
}
