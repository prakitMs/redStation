
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Amphures
 * 
 */
export type Amphures = $Result.DefaultSelection<Prisma.$AmphuresPayload>
/**
 * Model Provinces
 * 
 */
export type Provinces = $Result.DefaultSelection<Prisma.$ProvincesPayload>
/**
 * Model Region
 * 
 */
export type Region = $Result.DefaultSelection<Prisma.$RegionPayload>
/**
 * Model Tambons
 * 
 */
export type Tambons = $Result.DefaultSelection<Prisma.$TambonsPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Amphures
 * const amphures = await prisma.amphures.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Amphures
   * const amphures = await prisma.amphures.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.amphures`: Exposes CRUD operations for the **Amphures** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Amphures
    * const amphures = await prisma.amphures.findMany()
    * ```
    */
  get amphures(): Prisma.AmphuresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.provinces`: Exposes CRUD operations for the **Provinces** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Provinces
    * const provinces = await prisma.provinces.findMany()
    * ```
    */
  get provinces(): Prisma.ProvincesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.region`: Exposes CRUD operations for the **Region** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Regions
    * const regions = await prisma.region.findMany()
    * ```
    */
  get region(): Prisma.RegionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tambons`: Exposes CRUD operations for the **Tambons** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tambons
    * const tambons = await prisma.tambons.findMany()
    * ```
    */
  get tambons(): Prisma.TambonsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Amphures: 'Amphures',
    Provinces: 'Provinces',
    Region: 'Region',
    Tambons: 'Tambons',
    Users: 'Users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "amphures" | "provinces" | "region" | "tambons" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Amphures: {
        payload: Prisma.$AmphuresPayload<ExtArgs>
        fields: Prisma.AmphuresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AmphuresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmphuresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AmphuresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmphuresPayload>
          }
          findFirst: {
            args: Prisma.AmphuresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmphuresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AmphuresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmphuresPayload>
          }
          findMany: {
            args: Prisma.AmphuresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmphuresPayload>[]
          }
          create: {
            args: Prisma.AmphuresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmphuresPayload>
          }
          createMany: {
            args: Prisma.AmphuresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AmphuresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmphuresPayload>[]
          }
          delete: {
            args: Prisma.AmphuresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmphuresPayload>
          }
          update: {
            args: Prisma.AmphuresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmphuresPayload>
          }
          deleteMany: {
            args: Prisma.AmphuresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AmphuresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AmphuresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmphuresPayload>[]
          }
          upsert: {
            args: Prisma.AmphuresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmphuresPayload>
          }
          aggregate: {
            args: Prisma.AmphuresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAmphures>
          }
          groupBy: {
            args: Prisma.AmphuresGroupByArgs<ExtArgs>
            result: $Utils.Optional<AmphuresGroupByOutputType>[]
          }
          count: {
            args: Prisma.AmphuresCountArgs<ExtArgs>
            result: $Utils.Optional<AmphuresCountAggregateOutputType> | number
          }
        }
      }
      Provinces: {
        payload: Prisma.$ProvincesPayload<ExtArgs>
        fields: Prisma.ProvincesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProvincesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProvincesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincesPayload>
          }
          findFirst: {
            args: Prisma.ProvincesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProvincesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincesPayload>
          }
          findMany: {
            args: Prisma.ProvincesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincesPayload>[]
          }
          create: {
            args: Prisma.ProvincesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincesPayload>
          }
          createMany: {
            args: Prisma.ProvincesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProvincesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincesPayload>[]
          }
          delete: {
            args: Prisma.ProvincesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincesPayload>
          }
          update: {
            args: Prisma.ProvincesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincesPayload>
          }
          deleteMany: {
            args: Prisma.ProvincesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProvincesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProvincesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincesPayload>[]
          }
          upsert: {
            args: Prisma.ProvincesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincesPayload>
          }
          aggregate: {
            args: Prisma.ProvincesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProvinces>
          }
          groupBy: {
            args: Prisma.ProvincesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProvincesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProvincesCountArgs<ExtArgs>
            result: $Utils.Optional<ProvincesCountAggregateOutputType> | number
          }
        }
      }
      Region: {
        payload: Prisma.$RegionPayload<ExtArgs>
        fields: Prisma.RegionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          findFirst: {
            args: Prisma.RegionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          findMany: {
            args: Prisma.RegionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>[]
          }
          create: {
            args: Prisma.RegionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          createMany: {
            args: Prisma.RegionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>[]
          }
          delete: {
            args: Prisma.RegionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          update: {
            args: Prisma.RegionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          deleteMany: {
            args: Prisma.RegionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>[]
          }
          upsert: {
            args: Prisma.RegionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          aggregate: {
            args: Prisma.RegionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegion>
          }
          groupBy: {
            args: Prisma.RegionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegionCountArgs<ExtArgs>
            result: $Utils.Optional<RegionCountAggregateOutputType> | number
          }
        }
      }
      Tambons: {
        payload: Prisma.$TambonsPayload<ExtArgs>
        fields: Prisma.TambonsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TambonsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TambonsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TambonsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TambonsPayload>
          }
          findFirst: {
            args: Prisma.TambonsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TambonsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TambonsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TambonsPayload>
          }
          findMany: {
            args: Prisma.TambonsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TambonsPayload>[]
          }
          create: {
            args: Prisma.TambonsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TambonsPayload>
          }
          createMany: {
            args: Prisma.TambonsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TambonsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TambonsPayload>[]
          }
          delete: {
            args: Prisma.TambonsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TambonsPayload>
          }
          update: {
            args: Prisma.TambonsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TambonsPayload>
          }
          deleteMany: {
            args: Prisma.TambonsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TambonsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TambonsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TambonsPayload>[]
          }
          upsert: {
            args: Prisma.TambonsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TambonsPayload>
          }
          aggregate: {
            args: Prisma.TambonsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTambons>
          }
          groupBy: {
            args: Prisma.TambonsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TambonsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TambonsCountArgs<ExtArgs>
            result: $Utils.Optional<TambonsCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    amphures?: AmphuresOmit
    provinces?: ProvincesOmit
    region?: RegionOmit
    tambons?: TambonsOmit
    users?: UsersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProvincesCountOutputType
   */

  export type ProvincesCountOutputType = {
    Amphures: number
  }

  export type ProvincesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Amphures?: boolean | ProvincesCountOutputTypeCountAmphuresArgs
  }

  // Custom InputTypes
  /**
   * ProvincesCountOutputType without action
   */
  export type ProvincesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProvincesCountOutputType
     */
    select?: ProvincesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProvincesCountOutputType without action
   */
  export type ProvincesCountOutputTypeCountAmphuresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmphuresWhereInput
  }


  /**
   * Count Type RegionCountOutputType
   */

  export type RegionCountOutputType = {
    Provinces: number
  }

  export type RegionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Provinces?: boolean | RegionCountOutputTypeCountProvincesArgs
  }

  // Custom InputTypes
  /**
   * RegionCountOutputType without action
   */
  export type RegionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionCountOutputType
     */
    select?: RegionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RegionCountOutputType without action
   */
  export type RegionCountOutputTypeCountProvincesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProvincesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Amphures
   */

  export type AggregateAmphures = {
    _count: AmphuresCountAggregateOutputType | null
    _avg: AmphuresAvgAggregateOutputType | null
    _sum: AmphuresSumAggregateOutputType | null
    _min: AmphuresMinAggregateOutputType | null
    _max: AmphuresMaxAggregateOutputType | null
  }

  export type AmphuresAvgAggregateOutputType = {
    id: Decimal | null
    province_id: Decimal | null
  }

  export type AmphuresSumAggregateOutputType = {
    id: Decimal | null
    province_id: Decimal | null
  }

  export type AmphuresMinAggregateOutputType = {
    id: Decimal | null
    name_th: string | null
    name_en: string | null
    province_id: Decimal | null
  }

  export type AmphuresMaxAggregateOutputType = {
    id: Decimal | null
    name_th: string | null
    name_en: string | null
    province_id: Decimal | null
  }

  export type AmphuresCountAggregateOutputType = {
    id: number
    name_th: number
    name_en: number
    province_id: number
    _all: number
  }


  export type AmphuresAvgAggregateInputType = {
    id?: true
    province_id?: true
  }

  export type AmphuresSumAggregateInputType = {
    id?: true
    province_id?: true
  }

  export type AmphuresMinAggregateInputType = {
    id?: true
    name_th?: true
    name_en?: true
    province_id?: true
  }

  export type AmphuresMaxAggregateInputType = {
    id?: true
    name_th?: true
    name_en?: true
    province_id?: true
  }

  export type AmphuresCountAggregateInputType = {
    id?: true
    name_th?: true
    name_en?: true
    province_id?: true
    _all?: true
  }

  export type AmphuresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Amphures to aggregate.
     */
    where?: AmphuresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amphures to fetch.
     */
    orderBy?: AmphuresOrderByWithRelationInput | AmphuresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AmphuresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amphures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amphures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Amphures
    **/
    _count?: true | AmphuresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AmphuresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AmphuresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AmphuresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AmphuresMaxAggregateInputType
  }

  export type GetAmphuresAggregateType<T extends AmphuresAggregateArgs> = {
        [P in keyof T & keyof AggregateAmphures]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAmphures[P]>
      : GetScalarType<T[P], AggregateAmphures[P]>
  }




  export type AmphuresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmphuresWhereInput
    orderBy?: AmphuresOrderByWithAggregationInput | AmphuresOrderByWithAggregationInput[]
    by: AmphuresScalarFieldEnum[] | AmphuresScalarFieldEnum
    having?: AmphuresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AmphuresCountAggregateInputType | true
    _avg?: AmphuresAvgAggregateInputType
    _sum?: AmphuresSumAggregateInputType
    _min?: AmphuresMinAggregateInputType
    _max?: AmphuresMaxAggregateInputType
  }

  export type AmphuresGroupByOutputType = {
    id: Decimal
    name_th: string | null
    name_en: string | null
    province_id: Decimal | null
    _count: AmphuresCountAggregateOutputType | null
    _avg: AmphuresAvgAggregateOutputType | null
    _sum: AmphuresSumAggregateOutputType | null
    _min: AmphuresMinAggregateOutputType | null
    _max: AmphuresMaxAggregateOutputType | null
  }

  type GetAmphuresGroupByPayload<T extends AmphuresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AmphuresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AmphuresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AmphuresGroupByOutputType[P]>
            : GetScalarType<T[P], AmphuresGroupByOutputType[P]>
        }
      >
    >


  export type AmphuresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_th?: boolean
    name_en?: boolean
    province_id?: boolean
    Provinces?: boolean | Amphures$ProvincesArgs<ExtArgs>
  }, ExtArgs["result"]["amphures"]>

  export type AmphuresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_th?: boolean
    name_en?: boolean
    province_id?: boolean
    Provinces?: boolean | Amphures$ProvincesArgs<ExtArgs>
  }, ExtArgs["result"]["amphures"]>

  export type AmphuresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_th?: boolean
    name_en?: boolean
    province_id?: boolean
    Provinces?: boolean | Amphures$ProvincesArgs<ExtArgs>
  }, ExtArgs["result"]["amphures"]>

  export type AmphuresSelectScalar = {
    id?: boolean
    name_th?: boolean
    name_en?: boolean
    province_id?: boolean
  }

  export type AmphuresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name_th" | "name_en" | "province_id", ExtArgs["result"]["amphures"]>
  export type AmphuresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Provinces?: boolean | Amphures$ProvincesArgs<ExtArgs>
  }
  export type AmphuresIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Provinces?: boolean | Amphures$ProvincesArgs<ExtArgs>
  }
  export type AmphuresIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Provinces?: boolean | Amphures$ProvincesArgs<ExtArgs>
  }

  export type $AmphuresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Amphures"
    objects: {
      Provinces: Prisma.$ProvincesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: Prisma.Decimal
      name_th: string | null
      name_en: string | null
      province_id: Prisma.Decimal | null
    }, ExtArgs["result"]["amphures"]>
    composites: {}
  }

  type AmphuresGetPayload<S extends boolean | null | undefined | AmphuresDefaultArgs> = $Result.GetResult<Prisma.$AmphuresPayload, S>

  type AmphuresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AmphuresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AmphuresCountAggregateInputType | true
    }

  export interface AmphuresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Amphures'], meta: { name: 'Amphures' } }
    /**
     * Find zero or one Amphures that matches the filter.
     * @param {AmphuresFindUniqueArgs} args - Arguments to find a Amphures
     * @example
     * // Get one Amphures
     * const amphures = await prisma.amphures.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AmphuresFindUniqueArgs>(args: SelectSubset<T, AmphuresFindUniqueArgs<ExtArgs>>): Prisma__AmphuresClient<$Result.GetResult<Prisma.$AmphuresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Amphures that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AmphuresFindUniqueOrThrowArgs} args - Arguments to find a Amphures
     * @example
     * // Get one Amphures
     * const amphures = await prisma.amphures.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AmphuresFindUniqueOrThrowArgs>(args: SelectSubset<T, AmphuresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AmphuresClient<$Result.GetResult<Prisma.$AmphuresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Amphures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmphuresFindFirstArgs} args - Arguments to find a Amphures
     * @example
     * // Get one Amphures
     * const amphures = await prisma.amphures.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AmphuresFindFirstArgs>(args?: SelectSubset<T, AmphuresFindFirstArgs<ExtArgs>>): Prisma__AmphuresClient<$Result.GetResult<Prisma.$AmphuresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Amphures that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmphuresFindFirstOrThrowArgs} args - Arguments to find a Amphures
     * @example
     * // Get one Amphures
     * const amphures = await prisma.amphures.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AmphuresFindFirstOrThrowArgs>(args?: SelectSubset<T, AmphuresFindFirstOrThrowArgs<ExtArgs>>): Prisma__AmphuresClient<$Result.GetResult<Prisma.$AmphuresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Amphures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmphuresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Amphures
     * const amphures = await prisma.amphures.findMany()
     * 
     * // Get first 10 Amphures
     * const amphures = await prisma.amphures.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const amphuresWithIdOnly = await prisma.amphures.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AmphuresFindManyArgs>(args?: SelectSubset<T, AmphuresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmphuresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Amphures.
     * @param {AmphuresCreateArgs} args - Arguments to create a Amphures.
     * @example
     * // Create one Amphures
     * const Amphures = await prisma.amphures.create({
     *   data: {
     *     // ... data to create a Amphures
     *   }
     * })
     * 
     */
    create<T extends AmphuresCreateArgs>(args: SelectSubset<T, AmphuresCreateArgs<ExtArgs>>): Prisma__AmphuresClient<$Result.GetResult<Prisma.$AmphuresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Amphures.
     * @param {AmphuresCreateManyArgs} args - Arguments to create many Amphures.
     * @example
     * // Create many Amphures
     * const amphures = await prisma.amphures.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AmphuresCreateManyArgs>(args?: SelectSubset<T, AmphuresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Amphures and returns the data saved in the database.
     * @param {AmphuresCreateManyAndReturnArgs} args - Arguments to create many Amphures.
     * @example
     * // Create many Amphures
     * const amphures = await prisma.amphures.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Amphures and only return the `id`
     * const amphuresWithIdOnly = await prisma.amphures.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AmphuresCreateManyAndReturnArgs>(args?: SelectSubset<T, AmphuresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmphuresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Amphures.
     * @param {AmphuresDeleteArgs} args - Arguments to delete one Amphures.
     * @example
     * // Delete one Amphures
     * const Amphures = await prisma.amphures.delete({
     *   where: {
     *     // ... filter to delete one Amphures
     *   }
     * })
     * 
     */
    delete<T extends AmphuresDeleteArgs>(args: SelectSubset<T, AmphuresDeleteArgs<ExtArgs>>): Prisma__AmphuresClient<$Result.GetResult<Prisma.$AmphuresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Amphures.
     * @param {AmphuresUpdateArgs} args - Arguments to update one Amphures.
     * @example
     * // Update one Amphures
     * const amphures = await prisma.amphures.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AmphuresUpdateArgs>(args: SelectSubset<T, AmphuresUpdateArgs<ExtArgs>>): Prisma__AmphuresClient<$Result.GetResult<Prisma.$AmphuresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Amphures.
     * @param {AmphuresDeleteManyArgs} args - Arguments to filter Amphures to delete.
     * @example
     * // Delete a few Amphures
     * const { count } = await prisma.amphures.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AmphuresDeleteManyArgs>(args?: SelectSubset<T, AmphuresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Amphures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmphuresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Amphures
     * const amphures = await prisma.amphures.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AmphuresUpdateManyArgs>(args: SelectSubset<T, AmphuresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Amphures and returns the data updated in the database.
     * @param {AmphuresUpdateManyAndReturnArgs} args - Arguments to update many Amphures.
     * @example
     * // Update many Amphures
     * const amphures = await prisma.amphures.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Amphures and only return the `id`
     * const amphuresWithIdOnly = await prisma.amphures.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AmphuresUpdateManyAndReturnArgs>(args: SelectSubset<T, AmphuresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmphuresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Amphures.
     * @param {AmphuresUpsertArgs} args - Arguments to update or create a Amphures.
     * @example
     * // Update or create a Amphures
     * const amphures = await prisma.amphures.upsert({
     *   create: {
     *     // ... data to create a Amphures
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Amphures we want to update
     *   }
     * })
     */
    upsert<T extends AmphuresUpsertArgs>(args: SelectSubset<T, AmphuresUpsertArgs<ExtArgs>>): Prisma__AmphuresClient<$Result.GetResult<Prisma.$AmphuresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Amphures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmphuresCountArgs} args - Arguments to filter Amphures to count.
     * @example
     * // Count the number of Amphures
     * const count = await prisma.amphures.count({
     *   where: {
     *     // ... the filter for the Amphures we want to count
     *   }
     * })
    **/
    count<T extends AmphuresCountArgs>(
      args?: Subset<T, AmphuresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AmphuresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Amphures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmphuresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AmphuresAggregateArgs>(args: Subset<T, AmphuresAggregateArgs>): Prisma.PrismaPromise<GetAmphuresAggregateType<T>>

    /**
     * Group by Amphures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmphuresGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AmphuresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AmphuresGroupByArgs['orderBy'] }
        : { orderBy?: AmphuresGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AmphuresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAmphuresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Amphures model
   */
  readonly fields: AmphuresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Amphures.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AmphuresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Provinces<T extends Amphures$ProvincesArgs<ExtArgs> = {}>(args?: Subset<T, Amphures$ProvincesArgs<ExtArgs>>): Prisma__ProvincesClient<$Result.GetResult<Prisma.$ProvincesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Amphures model
   */
  interface AmphuresFieldRefs {
    readonly id: FieldRef<"Amphures", 'Decimal'>
    readonly name_th: FieldRef<"Amphures", 'String'>
    readonly name_en: FieldRef<"Amphures", 'String'>
    readonly province_id: FieldRef<"Amphures", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Amphures findUnique
   */
  export type AmphuresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amphures
     */
    select?: AmphuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amphures
     */
    omit?: AmphuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmphuresInclude<ExtArgs> | null
    /**
     * Filter, which Amphures to fetch.
     */
    where: AmphuresWhereUniqueInput
  }

  /**
   * Amphures findUniqueOrThrow
   */
  export type AmphuresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amphures
     */
    select?: AmphuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amphures
     */
    omit?: AmphuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmphuresInclude<ExtArgs> | null
    /**
     * Filter, which Amphures to fetch.
     */
    where: AmphuresWhereUniqueInput
  }

  /**
   * Amphures findFirst
   */
  export type AmphuresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amphures
     */
    select?: AmphuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amphures
     */
    omit?: AmphuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmphuresInclude<ExtArgs> | null
    /**
     * Filter, which Amphures to fetch.
     */
    where?: AmphuresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amphures to fetch.
     */
    orderBy?: AmphuresOrderByWithRelationInput | AmphuresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Amphures.
     */
    cursor?: AmphuresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amphures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amphures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Amphures.
     */
    distinct?: AmphuresScalarFieldEnum | AmphuresScalarFieldEnum[]
  }

  /**
   * Amphures findFirstOrThrow
   */
  export type AmphuresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amphures
     */
    select?: AmphuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amphures
     */
    omit?: AmphuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmphuresInclude<ExtArgs> | null
    /**
     * Filter, which Amphures to fetch.
     */
    where?: AmphuresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amphures to fetch.
     */
    orderBy?: AmphuresOrderByWithRelationInput | AmphuresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Amphures.
     */
    cursor?: AmphuresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amphures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amphures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Amphures.
     */
    distinct?: AmphuresScalarFieldEnum | AmphuresScalarFieldEnum[]
  }

  /**
   * Amphures findMany
   */
  export type AmphuresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amphures
     */
    select?: AmphuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amphures
     */
    omit?: AmphuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmphuresInclude<ExtArgs> | null
    /**
     * Filter, which Amphures to fetch.
     */
    where?: AmphuresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amphures to fetch.
     */
    orderBy?: AmphuresOrderByWithRelationInput | AmphuresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Amphures.
     */
    cursor?: AmphuresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amphures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amphures.
     */
    skip?: number
    distinct?: AmphuresScalarFieldEnum | AmphuresScalarFieldEnum[]
  }

  /**
   * Amphures create
   */
  export type AmphuresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amphures
     */
    select?: AmphuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amphures
     */
    omit?: AmphuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmphuresInclude<ExtArgs> | null
    /**
     * The data needed to create a Amphures.
     */
    data: XOR<AmphuresCreateInput, AmphuresUncheckedCreateInput>
  }

  /**
   * Amphures createMany
   */
  export type AmphuresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Amphures.
     */
    data: AmphuresCreateManyInput | AmphuresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Amphures createManyAndReturn
   */
  export type AmphuresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amphures
     */
    select?: AmphuresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Amphures
     */
    omit?: AmphuresOmit<ExtArgs> | null
    /**
     * The data used to create many Amphures.
     */
    data: AmphuresCreateManyInput | AmphuresCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmphuresIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Amphures update
   */
  export type AmphuresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amphures
     */
    select?: AmphuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amphures
     */
    omit?: AmphuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmphuresInclude<ExtArgs> | null
    /**
     * The data needed to update a Amphures.
     */
    data: XOR<AmphuresUpdateInput, AmphuresUncheckedUpdateInput>
    /**
     * Choose, which Amphures to update.
     */
    where: AmphuresWhereUniqueInput
  }

  /**
   * Amphures updateMany
   */
  export type AmphuresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Amphures.
     */
    data: XOR<AmphuresUpdateManyMutationInput, AmphuresUncheckedUpdateManyInput>
    /**
     * Filter which Amphures to update
     */
    where?: AmphuresWhereInput
    /**
     * Limit how many Amphures to update.
     */
    limit?: number
  }

  /**
   * Amphures updateManyAndReturn
   */
  export type AmphuresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amphures
     */
    select?: AmphuresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Amphures
     */
    omit?: AmphuresOmit<ExtArgs> | null
    /**
     * The data used to update Amphures.
     */
    data: XOR<AmphuresUpdateManyMutationInput, AmphuresUncheckedUpdateManyInput>
    /**
     * Filter which Amphures to update
     */
    where?: AmphuresWhereInput
    /**
     * Limit how many Amphures to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmphuresIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Amphures upsert
   */
  export type AmphuresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amphures
     */
    select?: AmphuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amphures
     */
    omit?: AmphuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmphuresInclude<ExtArgs> | null
    /**
     * The filter to search for the Amphures to update in case it exists.
     */
    where: AmphuresWhereUniqueInput
    /**
     * In case the Amphures found by the `where` argument doesn't exist, create a new Amphures with this data.
     */
    create: XOR<AmphuresCreateInput, AmphuresUncheckedCreateInput>
    /**
     * In case the Amphures was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AmphuresUpdateInput, AmphuresUncheckedUpdateInput>
  }

  /**
   * Amphures delete
   */
  export type AmphuresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amphures
     */
    select?: AmphuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amphures
     */
    omit?: AmphuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmphuresInclude<ExtArgs> | null
    /**
     * Filter which Amphures to delete.
     */
    where: AmphuresWhereUniqueInput
  }

  /**
   * Amphures deleteMany
   */
  export type AmphuresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Amphures to delete
     */
    where?: AmphuresWhereInput
    /**
     * Limit how many Amphures to delete.
     */
    limit?: number
  }

  /**
   * Amphures.Provinces
   */
  export type Amphures$ProvincesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provinces
     */
    select?: ProvincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provinces
     */
    omit?: ProvincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvincesInclude<ExtArgs> | null
    where?: ProvincesWhereInput
  }

  /**
   * Amphures without action
   */
  export type AmphuresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amphures
     */
    select?: AmphuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amphures
     */
    omit?: AmphuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmphuresInclude<ExtArgs> | null
  }


  /**
   * Model Provinces
   */

  export type AggregateProvinces = {
    _count: ProvincesCountAggregateOutputType | null
    _avg: ProvincesAvgAggregateOutputType | null
    _sum: ProvincesSumAggregateOutputType | null
    _min: ProvincesMinAggregateOutputType | null
    _max: ProvincesMaxAggregateOutputType | null
  }

  export type ProvincesAvgAggregateOutputType = {
    id: Decimal | null
    geography_id: Decimal | null
  }

  export type ProvincesSumAggregateOutputType = {
    id: Decimal | null
    geography_id: Decimal | null
  }

  export type ProvincesMinAggregateOutputType = {
    id: Decimal | null
    name_th: string | null
    name_en: string | null
    geography_id: Decimal | null
  }

  export type ProvincesMaxAggregateOutputType = {
    id: Decimal | null
    name_th: string | null
    name_en: string | null
    geography_id: Decimal | null
  }

  export type ProvincesCountAggregateOutputType = {
    id: number
    name_th: number
    name_en: number
    geography_id: number
    _all: number
  }


  export type ProvincesAvgAggregateInputType = {
    id?: true
    geography_id?: true
  }

  export type ProvincesSumAggregateInputType = {
    id?: true
    geography_id?: true
  }

  export type ProvincesMinAggregateInputType = {
    id?: true
    name_th?: true
    name_en?: true
    geography_id?: true
  }

  export type ProvincesMaxAggregateInputType = {
    id?: true
    name_th?: true
    name_en?: true
    geography_id?: true
  }

  export type ProvincesCountAggregateInputType = {
    id?: true
    name_th?: true
    name_en?: true
    geography_id?: true
    _all?: true
  }

  export type ProvincesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Provinces to aggregate.
     */
    where?: ProvincesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     */
    orderBy?: ProvincesOrderByWithRelationInput | ProvincesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProvincesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Provinces
    **/
    _count?: true | ProvincesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProvincesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProvincesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProvincesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProvincesMaxAggregateInputType
  }

  export type GetProvincesAggregateType<T extends ProvincesAggregateArgs> = {
        [P in keyof T & keyof AggregateProvinces]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProvinces[P]>
      : GetScalarType<T[P], AggregateProvinces[P]>
  }




  export type ProvincesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProvincesWhereInput
    orderBy?: ProvincesOrderByWithAggregationInput | ProvincesOrderByWithAggregationInput[]
    by: ProvincesScalarFieldEnum[] | ProvincesScalarFieldEnum
    having?: ProvincesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProvincesCountAggregateInputType | true
    _avg?: ProvincesAvgAggregateInputType
    _sum?: ProvincesSumAggregateInputType
    _min?: ProvincesMinAggregateInputType
    _max?: ProvincesMaxAggregateInputType
  }

  export type ProvincesGroupByOutputType = {
    id: Decimal
    name_th: string | null
    name_en: string | null
    geography_id: Decimal | null
    _count: ProvincesCountAggregateOutputType | null
    _avg: ProvincesAvgAggregateOutputType | null
    _sum: ProvincesSumAggregateOutputType | null
    _min: ProvincesMinAggregateOutputType | null
    _max: ProvincesMaxAggregateOutputType | null
  }

  type GetProvincesGroupByPayload<T extends ProvincesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProvincesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProvincesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProvincesGroupByOutputType[P]>
            : GetScalarType<T[P], ProvincesGroupByOutputType[P]>
        }
      >
    >


  export type ProvincesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_th?: boolean
    name_en?: boolean
    geography_id?: boolean
    Amphures?: boolean | Provinces$AmphuresArgs<ExtArgs>
    Region?: boolean | Provinces$RegionArgs<ExtArgs>
    _count?: boolean | ProvincesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["provinces"]>

  export type ProvincesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_th?: boolean
    name_en?: boolean
    geography_id?: boolean
    Region?: boolean | Provinces$RegionArgs<ExtArgs>
  }, ExtArgs["result"]["provinces"]>

  export type ProvincesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_th?: boolean
    name_en?: boolean
    geography_id?: boolean
    Region?: boolean | Provinces$RegionArgs<ExtArgs>
  }, ExtArgs["result"]["provinces"]>

  export type ProvincesSelectScalar = {
    id?: boolean
    name_th?: boolean
    name_en?: boolean
    geography_id?: boolean
  }

  export type ProvincesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name_th" | "name_en" | "geography_id", ExtArgs["result"]["provinces"]>
  export type ProvincesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Amphures?: boolean | Provinces$AmphuresArgs<ExtArgs>
    Region?: boolean | Provinces$RegionArgs<ExtArgs>
    _count?: boolean | ProvincesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProvincesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Region?: boolean | Provinces$RegionArgs<ExtArgs>
  }
  export type ProvincesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Region?: boolean | Provinces$RegionArgs<ExtArgs>
  }

  export type $ProvincesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Provinces"
    objects: {
      Amphures: Prisma.$AmphuresPayload<ExtArgs>[]
      Region: Prisma.$RegionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: Prisma.Decimal
      name_th: string | null
      name_en: string | null
      geography_id: Prisma.Decimal | null
    }, ExtArgs["result"]["provinces"]>
    composites: {}
  }

  type ProvincesGetPayload<S extends boolean | null | undefined | ProvincesDefaultArgs> = $Result.GetResult<Prisma.$ProvincesPayload, S>

  type ProvincesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProvincesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProvincesCountAggregateInputType | true
    }

  export interface ProvincesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Provinces'], meta: { name: 'Provinces' } }
    /**
     * Find zero or one Provinces that matches the filter.
     * @param {ProvincesFindUniqueArgs} args - Arguments to find a Provinces
     * @example
     * // Get one Provinces
     * const provinces = await prisma.provinces.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProvincesFindUniqueArgs>(args: SelectSubset<T, ProvincesFindUniqueArgs<ExtArgs>>): Prisma__ProvincesClient<$Result.GetResult<Prisma.$ProvincesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Provinces that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProvincesFindUniqueOrThrowArgs} args - Arguments to find a Provinces
     * @example
     * // Get one Provinces
     * const provinces = await prisma.provinces.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProvincesFindUniqueOrThrowArgs>(args: SelectSubset<T, ProvincesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProvincesClient<$Result.GetResult<Prisma.$ProvincesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Provinces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvincesFindFirstArgs} args - Arguments to find a Provinces
     * @example
     * // Get one Provinces
     * const provinces = await prisma.provinces.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProvincesFindFirstArgs>(args?: SelectSubset<T, ProvincesFindFirstArgs<ExtArgs>>): Prisma__ProvincesClient<$Result.GetResult<Prisma.$ProvincesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Provinces that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvincesFindFirstOrThrowArgs} args - Arguments to find a Provinces
     * @example
     * // Get one Provinces
     * const provinces = await prisma.provinces.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProvincesFindFirstOrThrowArgs>(args?: SelectSubset<T, ProvincesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProvincesClient<$Result.GetResult<Prisma.$ProvincesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Provinces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvincesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Provinces
     * const provinces = await prisma.provinces.findMany()
     * 
     * // Get first 10 Provinces
     * const provinces = await prisma.provinces.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const provincesWithIdOnly = await prisma.provinces.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProvincesFindManyArgs>(args?: SelectSubset<T, ProvincesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProvincesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Provinces.
     * @param {ProvincesCreateArgs} args - Arguments to create a Provinces.
     * @example
     * // Create one Provinces
     * const Provinces = await prisma.provinces.create({
     *   data: {
     *     // ... data to create a Provinces
     *   }
     * })
     * 
     */
    create<T extends ProvincesCreateArgs>(args: SelectSubset<T, ProvincesCreateArgs<ExtArgs>>): Prisma__ProvincesClient<$Result.GetResult<Prisma.$ProvincesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Provinces.
     * @param {ProvincesCreateManyArgs} args - Arguments to create many Provinces.
     * @example
     * // Create many Provinces
     * const provinces = await prisma.provinces.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProvincesCreateManyArgs>(args?: SelectSubset<T, ProvincesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Provinces and returns the data saved in the database.
     * @param {ProvincesCreateManyAndReturnArgs} args - Arguments to create many Provinces.
     * @example
     * // Create many Provinces
     * const provinces = await prisma.provinces.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Provinces and only return the `id`
     * const provincesWithIdOnly = await prisma.provinces.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProvincesCreateManyAndReturnArgs>(args?: SelectSubset<T, ProvincesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProvincesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Provinces.
     * @param {ProvincesDeleteArgs} args - Arguments to delete one Provinces.
     * @example
     * // Delete one Provinces
     * const Provinces = await prisma.provinces.delete({
     *   where: {
     *     // ... filter to delete one Provinces
     *   }
     * })
     * 
     */
    delete<T extends ProvincesDeleteArgs>(args: SelectSubset<T, ProvincesDeleteArgs<ExtArgs>>): Prisma__ProvincesClient<$Result.GetResult<Prisma.$ProvincesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Provinces.
     * @param {ProvincesUpdateArgs} args - Arguments to update one Provinces.
     * @example
     * // Update one Provinces
     * const provinces = await prisma.provinces.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProvincesUpdateArgs>(args: SelectSubset<T, ProvincesUpdateArgs<ExtArgs>>): Prisma__ProvincesClient<$Result.GetResult<Prisma.$ProvincesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Provinces.
     * @param {ProvincesDeleteManyArgs} args - Arguments to filter Provinces to delete.
     * @example
     * // Delete a few Provinces
     * const { count } = await prisma.provinces.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProvincesDeleteManyArgs>(args?: SelectSubset<T, ProvincesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Provinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvincesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Provinces
     * const provinces = await prisma.provinces.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProvincesUpdateManyArgs>(args: SelectSubset<T, ProvincesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Provinces and returns the data updated in the database.
     * @param {ProvincesUpdateManyAndReturnArgs} args - Arguments to update many Provinces.
     * @example
     * // Update many Provinces
     * const provinces = await prisma.provinces.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Provinces and only return the `id`
     * const provincesWithIdOnly = await prisma.provinces.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProvincesUpdateManyAndReturnArgs>(args: SelectSubset<T, ProvincesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProvincesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Provinces.
     * @param {ProvincesUpsertArgs} args - Arguments to update or create a Provinces.
     * @example
     * // Update or create a Provinces
     * const provinces = await prisma.provinces.upsert({
     *   create: {
     *     // ... data to create a Provinces
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Provinces we want to update
     *   }
     * })
     */
    upsert<T extends ProvincesUpsertArgs>(args: SelectSubset<T, ProvincesUpsertArgs<ExtArgs>>): Prisma__ProvincesClient<$Result.GetResult<Prisma.$ProvincesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Provinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvincesCountArgs} args - Arguments to filter Provinces to count.
     * @example
     * // Count the number of Provinces
     * const count = await prisma.provinces.count({
     *   where: {
     *     // ... the filter for the Provinces we want to count
     *   }
     * })
    **/
    count<T extends ProvincesCountArgs>(
      args?: Subset<T, ProvincesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProvincesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Provinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvincesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProvincesAggregateArgs>(args: Subset<T, ProvincesAggregateArgs>): Prisma.PrismaPromise<GetProvincesAggregateType<T>>

    /**
     * Group by Provinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvincesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProvincesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProvincesGroupByArgs['orderBy'] }
        : { orderBy?: ProvincesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProvincesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProvincesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Provinces model
   */
  readonly fields: ProvincesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Provinces.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProvincesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Amphures<T extends Provinces$AmphuresArgs<ExtArgs> = {}>(args?: Subset<T, Provinces$AmphuresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmphuresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Region<T extends Provinces$RegionArgs<ExtArgs> = {}>(args?: Subset<T, Provinces$RegionArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Provinces model
   */
  interface ProvincesFieldRefs {
    readonly id: FieldRef<"Provinces", 'Decimal'>
    readonly name_th: FieldRef<"Provinces", 'String'>
    readonly name_en: FieldRef<"Provinces", 'String'>
    readonly geography_id: FieldRef<"Provinces", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Provinces findUnique
   */
  export type ProvincesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provinces
     */
    select?: ProvincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provinces
     */
    omit?: ProvincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvincesInclude<ExtArgs> | null
    /**
     * Filter, which Provinces to fetch.
     */
    where: ProvincesWhereUniqueInput
  }

  /**
   * Provinces findUniqueOrThrow
   */
  export type ProvincesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provinces
     */
    select?: ProvincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provinces
     */
    omit?: ProvincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvincesInclude<ExtArgs> | null
    /**
     * Filter, which Provinces to fetch.
     */
    where: ProvincesWhereUniqueInput
  }

  /**
   * Provinces findFirst
   */
  export type ProvincesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provinces
     */
    select?: ProvincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provinces
     */
    omit?: ProvincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvincesInclude<ExtArgs> | null
    /**
     * Filter, which Provinces to fetch.
     */
    where?: ProvincesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     */
    orderBy?: ProvincesOrderByWithRelationInput | ProvincesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Provinces.
     */
    cursor?: ProvincesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Provinces.
     */
    distinct?: ProvincesScalarFieldEnum | ProvincesScalarFieldEnum[]
  }

  /**
   * Provinces findFirstOrThrow
   */
  export type ProvincesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provinces
     */
    select?: ProvincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provinces
     */
    omit?: ProvincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvincesInclude<ExtArgs> | null
    /**
     * Filter, which Provinces to fetch.
     */
    where?: ProvincesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     */
    orderBy?: ProvincesOrderByWithRelationInput | ProvincesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Provinces.
     */
    cursor?: ProvincesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Provinces.
     */
    distinct?: ProvincesScalarFieldEnum | ProvincesScalarFieldEnum[]
  }

  /**
   * Provinces findMany
   */
  export type ProvincesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provinces
     */
    select?: ProvincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provinces
     */
    omit?: ProvincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvincesInclude<ExtArgs> | null
    /**
     * Filter, which Provinces to fetch.
     */
    where?: ProvincesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     */
    orderBy?: ProvincesOrderByWithRelationInput | ProvincesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Provinces.
     */
    cursor?: ProvincesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     */
    skip?: number
    distinct?: ProvincesScalarFieldEnum | ProvincesScalarFieldEnum[]
  }

  /**
   * Provinces create
   */
  export type ProvincesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provinces
     */
    select?: ProvincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provinces
     */
    omit?: ProvincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvincesInclude<ExtArgs> | null
    /**
     * The data needed to create a Provinces.
     */
    data: XOR<ProvincesCreateInput, ProvincesUncheckedCreateInput>
  }

  /**
   * Provinces createMany
   */
  export type ProvincesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Provinces.
     */
    data: ProvincesCreateManyInput | ProvincesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Provinces createManyAndReturn
   */
  export type ProvincesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provinces
     */
    select?: ProvincesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Provinces
     */
    omit?: ProvincesOmit<ExtArgs> | null
    /**
     * The data used to create many Provinces.
     */
    data: ProvincesCreateManyInput | ProvincesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvincesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Provinces update
   */
  export type ProvincesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provinces
     */
    select?: ProvincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provinces
     */
    omit?: ProvincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvincesInclude<ExtArgs> | null
    /**
     * The data needed to update a Provinces.
     */
    data: XOR<ProvincesUpdateInput, ProvincesUncheckedUpdateInput>
    /**
     * Choose, which Provinces to update.
     */
    where: ProvincesWhereUniqueInput
  }

  /**
   * Provinces updateMany
   */
  export type ProvincesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Provinces.
     */
    data: XOR<ProvincesUpdateManyMutationInput, ProvincesUncheckedUpdateManyInput>
    /**
     * Filter which Provinces to update
     */
    where?: ProvincesWhereInput
    /**
     * Limit how many Provinces to update.
     */
    limit?: number
  }

  /**
   * Provinces updateManyAndReturn
   */
  export type ProvincesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provinces
     */
    select?: ProvincesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Provinces
     */
    omit?: ProvincesOmit<ExtArgs> | null
    /**
     * The data used to update Provinces.
     */
    data: XOR<ProvincesUpdateManyMutationInput, ProvincesUncheckedUpdateManyInput>
    /**
     * Filter which Provinces to update
     */
    where?: ProvincesWhereInput
    /**
     * Limit how many Provinces to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvincesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Provinces upsert
   */
  export type ProvincesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provinces
     */
    select?: ProvincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provinces
     */
    omit?: ProvincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvincesInclude<ExtArgs> | null
    /**
     * The filter to search for the Provinces to update in case it exists.
     */
    where: ProvincesWhereUniqueInput
    /**
     * In case the Provinces found by the `where` argument doesn't exist, create a new Provinces with this data.
     */
    create: XOR<ProvincesCreateInput, ProvincesUncheckedCreateInput>
    /**
     * In case the Provinces was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProvincesUpdateInput, ProvincesUncheckedUpdateInput>
  }

  /**
   * Provinces delete
   */
  export type ProvincesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provinces
     */
    select?: ProvincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provinces
     */
    omit?: ProvincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvincesInclude<ExtArgs> | null
    /**
     * Filter which Provinces to delete.
     */
    where: ProvincesWhereUniqueInput
  }

  /**
   * Provinces deleteMany
   */
  export type ProvincesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Provinces to delete
     */
    where?: ProvincesWhereInput
    /**
     * Limit how many Provinces to delete.
     */
    limit?: number
  }

  /**
   * Provinces.Amphures
   */
  export type Provinces$AmphuresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amphures
     */
    select?: AmphuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amphures
     */
    omit?: AmphuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmphuresInclude<ExtArgs> | null
    where?: AmphuresWhereInput
    orderBy?: AmphuresOrderByWithRelationInput | AmphuresOrderByWithRelationInput[]
    cursor?: AmphuresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AmphuresScalarFieldEnum | AmphuresScalarFieldEnum[]
  }

  /**
   * Provinces.Region
   */
  export type Provinces$RegionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    where?: RegionWhereInput
  }

  /**
   * Provinces without action
   */
  export type ProvincesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provinces
     */
    select?: ProvincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provinces
     */
    omit?: ProvincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvincesInclude<ExtArgs> | null
  }


  /**
   * Model Region
   */

  export type AggregateRegion = {
    _count: RegionCountAggregateOutputType | null
    _avg: RegionAvgAggregateOutputType | null
    _sum: RegionSumAggregateOutputType | null
    _min: RegionMinAggregateOutputType | null
    _max: RegionMaxAggregateOutputType | null
  }

  export type RegionAvgAggregateOutputType = {
    id: Decimal | null
  }

  export type RegionSumAggregateOutputType = {
    id: Decimal | null
  }

  export type RegionMinAggregateOutputType = {
    id: Decimal | null
    name_thai: string | null
    name_en: string | null
  }

  export type RegionMaxAggregateOutputType = {
    id: Decimal | null
    name_thai: string | null
    name_en: string | null
  }

  export type RegionCountAggregateOutputType = {
    id: number
    name_thai: number
    name_en: number
    _all: number
  }


  export type RegionAvgAggregateInputType = {
    id?: true
  }

  export type RegionSumAggregateInputType = {
    id?: true
  }

  export type RegionMinAggregateInputType = {
    id?: true
    name_thai?: true
    name_en?: true
  }

  export type RegionMaxAggregateInputType = {
    id?: true
    name_thai?: true
    name_en?: true
  }

  export type RegionCountAggregateInputType = {
    id?: true
    name_thai?: true
    name_en?: true
    _all?: true
  }

  export type RegionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Region to aggregate.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Regions
    **/
    _count?: true | RegionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegionMaxAggregateInputType
  }

  export type GetRegionAggregateType<T extends RegionAggregateArgs> = {
        [P in keyof T & keyof AggregateRegion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegion[P]>
      : GetScalarType<T[P], AggregateRegion[P]>
  }




  export type RegionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegionWhereInput
    orderBy?: RegionOrderByWithAggregationInput | RegionOrderByWithAggregationInput[]
    by: RegionScalarFieldEnum[] | RegionScalarFieldEnum
    having?: RegionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegionCountAggregateInputType | true
    _avg?: RegionAvgAggregateInputType
    _sum?: RegionSumAggregateInputType
    _min?: RegionMinAggregateInputType
    _max?: RegionMaxAggregateInputType
  }

  export type RegionGroupByOutputType = {
    id: Decimal
    name_thai: string | null
    name_en: string | null
    _count: RegionCountAggregateOutputType | null
    _avg: RegionAvgAggregateOutputType | null
    _sum: RegionSumAggregateOutputType | null
    _min: RegionMinAggregateOutputType | null
    _max: RegionMaxAggregateOutputType | null
  }

  type GetRegionGroupByPayload<T extends RegionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegionGroupByOutputType[P]>
            : GetScalarType<T[P], RegionGroupByOutputType[P]>
        }
      >
    >


  export type RegionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_thai?: boolean
    name_en?: boolean
    Provinces?: boolean | Region$ProvincesArgs<ExtArgs>
    _count?: boolean | RegionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["region"]>

  export type RegionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_thai?: boolean
    name_en?: boolean
  }, ExtArgs["result"]["region"]>

  export type RegionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_thai?: boolean
    name_en?: boolean
  }, ExtArgs["result"]["region"]>

  export type RegionSelectScalar = {
    id?: boolean
    name_thai?: boolean
    name_en?: boolean
  }

  export type RegionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name_thai" | "name_en", ExtArgs["result"]["region"]>
  export type RegionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Provinces?: boolean | Region$ProvincesArgs<ExtArgs>
    _count?: boolean | RegionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RegionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RegionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RegionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Region"
    objects: {
      Provinces: Prisma.$ProvincesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: Prisma.Decimal
      name_thai: string | null
      name_en: string | null
    }, ExtArgs["result"]["region"]>
    composites: {}
  }

  type RegionGetPayload<S extends boolean | null | undefined | RegionDefaultArgs> = $Result.GetResult<Prisma.$RegionPayload, S>

  type RegionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegionCountAggregateInputType | true
    }

  export interface RegionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Region'], meta: { name: 'Region' } }
    /**
     * Find zero or one Region that matches the filter.
     * @param {RegionFindUniqueArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegionFindUniqueArgs>(args: SelectSubset<T, RegionFindUniqueArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Region that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegionFindUniqueOrThrowArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegionFindUniqueOrThrowArgs>(args: SelectSubset<T, RegionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Region that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindFirstArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegionFindFirstArgs>(args?: SelectSubset<T, RegionFindFirstArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Region that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindFirstOrThrowArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegionFindFirstOrThrowArgs>(args?: SelectSubset<T, RegionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Regions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Regions
     * const regions = await prisma.region.findMany()
     * 
     * // Get first 10 Regions
     * const regions = await prisma.region.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const regionWithIdOnly = await prisma.region.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegionFindManyArgs>(args?: SelectSubset<T, RegionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Region.
     * @param {RegionCreateArgs} args - Arguments to create a Region.
     * @example
     * // Create one Region
     * const Region = await prisma.region.create({
     *   data: {
     *     // ... data to create a Region
     *   }
     * })
     * 
     */
    create<T extends RegionCreateArgs>(args: SelectSubset<T, RegionCreateArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Regions.
     * @param {RegionCreateManyArgs} args - Arguments to create many Regions.
     * @example
     * // Create many Regions
     * const region = await prisma.region.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegionCreateManyArgs>(args?: SelectSubset<T, RegionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Regions and returns the data saved in the database.
     * @param {RegionCreateManyAndReturnArgs} args - Arguments to create many Regions.
     * @example
     * // Create many Regions
     * const region = await prisma.region.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Regions and only return the `id`
     * const regionWithIdOnly = await prisma.region.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegionCreateManyAndReturnArgs>(args?: SelectSubset<T, RegionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Region.
     * @param {RegionDeleteArgs} args - Arguments to delete one Region.
     * @example
     * // Delete one Region
     * const Region = await prisma.region.delete({
     *   where: {
     *     // ... filter to delete one Region
     *   }
     * })
     * 
     */
    delete<T extends RegionDeleteArgs>(args: SelectSubset<T, RegionDeleteArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Region.
     * @param {RegionUpdateArgs} args - Arguments to update one Region.
     * @example
     * // Update one Region
     * const region = await prisma.region.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegionUpdateArgs>(args: SelectSubset<T, RegionUpdateArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Regions.
     * @param {RegionDeleteManyArgs} args - Arguments to filter Regions to delete.
     * @example
     * // Delete a few Regions
     * const { count } = await prisma.region.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegionDeleteManyArgs>(args?: SelectSubset<T, RegionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Regions
     * const region = await prisma.region.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegionUpdateManyArgs>(args: SelectSubset<T, RegionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regions and returns the data updated in the database.
     * @param {RegionUpdateManyAndReturnArgs} args - Arguments to update many Regions.
     * @example
     * // Update many Regions
     * const region = await prisma.region.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Regions and only return the `id`
     * const regionWithIdOnly = await prisma.region.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RegionUpdateManyAndReturnArgs>(args: SelectSubset<T, RegionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Region.
     * @param {RegionUpsertArgs} args - Arguments to update or create a Region.
     * @example
     * // Update or create a Region
     * const region = await prisma.region.upsert({
     *   create: {
     *     // ... data to create a Region
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Region we want to update
     *   }
     * })
     */
    upsert<T extends RegionUpsertArgs>(args: SelectSubset<T, RegionUpsertArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionCountArgs} args - Arguments to filter Regions to count.
     * @example
     * // Count the number of Regions
     * const count = await prisma.region.count({
     *   where: {
     *     // ... the filter for the Regions we want to count
     *   }
     * })
    **/
    count<T extends RegionCountArgs>(
      args?: Subset<T, RegionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Region.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RegionAggregateArgs>(args: Subset<T, RegionAggregateArgs>): Prisma.PrismaPromise<GetRegionAggregateType<T>>

    /**
     * Group by Region.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RegionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegionGroupByArgs['orderBy'] }
        : { orderBy?: RegionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RegionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Region model
   */
  readonly fields: RegionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Region.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Provinces<T extends Region$ProvincesArgs<ExtArgs> = {}>(args?: Subset<T, Region$ProvincesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProvincesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Region model
   */
  interface RegionFieldRefs {
    readonly id: FieldRef<"Region", 'Decimal'>
    readonly name_thai: FieldRef<"Region", 'String'>
    readonly name_en: FieldRef<"Region", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Region findUnique
   */
  export type RegionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region findUniqueOrThrow
   */
  export type RegionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region findFirst
   */
  export type RegionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regions.
     */
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region findFirstOrThrow
   */
  export type RegionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regions.
     */
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region findMany
   */
  export type RegionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Regions to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region create
   */
  export type RegionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The data needed to create a Region.
     */
    data: XOR<RegionCreateInput, RegionUncheckedCreateInput>
  }

  /**
   * Region createMany
   */
  export type RegionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Regions.
     */
    data: RegionCreateManyInput | RegionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Region createManyAndReturn
   */
  export type RegionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * The data used to create many Regions.
     */
    data: RegionCreateManyInput | RegionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Region update
   */
  export type RegionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The data needed to update a Region.
     */
    data: XOR<RegionUpdateInput, RegionUncheckedUpdateInput>
    /**
     * Choose, which Region to update.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region updateMany
   */
  export type RegionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Regions.
     */
    data: XOR<RegionUpdateManyMutationInput, RegionUncheckedUpdateManyInput>
    /**
     * Filter which Regions to update
     */
    where?: RegionWhereInput
    /**
     * Limit how many Regions to update.
     */
    limit?: number
  }

  /**
   * Region updateManyAndReturn
   */
  export type RegionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * The data used to update Regions.
     */
    data: XOR<RegionUpdateManyMutationInput, RegionUncheckedUpdateManyInput>
    /**
     * Filter which Regions to update
     */
    where?: RegionWhereInput
    /**
     * Limit how many Regions to update.
     */
    limit?: number
  }

  /**
   * Region upsert
   */
  export type RegionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The filter to search for the Region to update in case it exists.
     */
    where: RegionWhereUniqueInput
    /**
     * In case the Region found by the `where` argument doesn't exist, create a new Region with this data.
     */
    create: XOR<RegionCreateInput, RegionUncheckedCreateInput>
    /**
     * In case the Region was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegionUpdateInput, RegionUncheckedUpdateInput>
  }

  /**
   * Region delete
   */
  export type RegionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter which Region to delete.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region deleteMany
   */
  export type RegionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Regions to delete
     */
    where?: RegionWhereInput
    /**
     * Limit how many Regions to delete.
     */
    limit?: number
  }

  /**
   * Region.Provinces
   */
  export type Region$ProvincesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provinces
     */
    select?: ProvincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provinces
     */
    omit?: ProvincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvincesInclude<ExtArgs> | null
    where?: ProvincesWhereInput
    orderBy?: ProvincesOrderByWithRelationInput | ProvincesOrderByWithRelationInput[]
    cursor?: ProvincesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProvincesScalarFieldEnum | ProvincesScalarFieldEnum[]
  }

  /**
   * Region without action
   */
  export type RegionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
  }


  /**
   * Model Tambons
   */

  export type AggregateTambons = {
    _count: TambonsCountAggregateOutputType | null
    _avg: TambonsAvgAggregateOutputType | null
    _sum: TambonsSumAggregateOutputType | null
    _min: TambonsMinAggregateOutputType | null
    _max: TambonsMaxAggregateOutputType | null
  }

  export type TambonsAvgAggregateOutputType = {
    id: Decimal | null
    zip_code: Decimal | null
    amphure_id: Decimal | null
  }

  export type TambonsSumAggregateOutputType = {
    id: Decimal | null
    zip_code: Decimal | null
    amphure_id: Decimal | null
  }

  export type TambonsMinAggregateOutputType = {
    id: Decimal | null
    zip_code: Decimal | null
    name_th: string | null
    name_en: string | null
    amphure_id: Decimal | null
  }

  export type TambonsMaxAggregateOutputType = {
    id: Decimal | null
    zip_code: Decimal | null
    name_th: string | null
    name_en: string | null
    amphure_id: Decimal | null
  }

  export type TambonsCountAggregateOutputType = {
    id: number
    zip_code: number
    name_th: number
    name_en: number
    amphure_id: number
    _all: number
  }


  export type TambonsAvgAggregateInputType = {
    id?: true
    zip_code?: true
    amphure_id?: true
  }

  export type TambonsSumAggregateInputType = {
    id?: true
    zip_code?: true
    amphure_id?: true
  }

  export type TambonsMinAggregateInputType = {
    id?: true
    zip_code?: true
    name_th?: true
    name_en?: true
    amphure_id?: true
  }

  export type TambonsMaxAggregateInputType = {
    id?: true
    zip_code?: true
    name_th?: true
    name_en?: true
    amphure_id?: true
  }

  export type TambonsCountAggregateInputType = {
    id?: true
    zip_code?: true
    name_th?: true
    name_en?: true
    amphure_id?: true
    _all?: true
  }

  export type TambonsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tambons to aggregate.
     */
    where?: TambonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tambons to fetch.
     */
    orderBy?: TambonsOrderByWithRelationInput | TambonsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TambonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tambons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tambons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tambons
    **/
    _count?: true | TambonsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TambonsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TambonsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TambonsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TambonsMaxAggregateInputType
  }

  export type GetTambonsAggregateType<T extends TambonsAggregateArgs> = {
        [P in keyof T & keyof AggregateTambons]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTambons[P]>
      : GetScalarType<T[P], AggregateTambons[P]>
  }




  export type TambonsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TambonsWhereInput
    orderBy?: TambonsOrderByWithAggregationInput | TambonsOrderByWithAggregationInput[]
    by: TambonsScalarFieldEnum[] | TambonsScalarFieldEnum
    having?: TambonsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TambonsCountAggregateInputType | true
    _avg?: TambonsAvgAggregateInputType
    _sum?: TambonsSumAggregateInputType
    _min?: TambonsMinAggregateInputType
    _max?: TambonsMaxAggregateInputType
  }

  export type TambonsGroupByOutputType = {
    id: Decimal
    zip_code: Decimal | null
    name_th: string | null
    name_en: string | null
    amphure_id: Decimal | null
    _count: TambonsCountAggregateOutputType | null
    _avg: TambonsAvgAggregateOutputType | null
    _sum: TambonsSumAggregateOutputType | null
    _min: TambonsMinAggregateOutputType | null
    _max: TambonsMaxAggregateOutputType | null
  }

  type GetTambonsGroupByPayload<T extends TambonsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TambonsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TambonsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TambonsGroupByOutputType[P]>
            : GetScalarType<T[P], TambonsGroupByOutputType[P]>
        }
      >
    >


  export type TambonsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zip_code?: boolean
    name_th?: boolean
    name_en?: boolean
    amphure_id?: boolean
  }, ExtArgs["result"]["tambons"]>

  export type TambonsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zip_code?: boolean
    name_th?: boolean
    name_en?: boolean
    amphure_id?: boolean
  }, ExtArgs["result"]["tambons"]>

  export type TambonsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zip_code?: boolean
    name_th?: boolean
    name_en?: boolean
    amphure_id?: boolean
  }, ExtArgs["result"]["tambons"]>

  export type TambonsSelectScalar = {
    id?: boolean
    zip_code?: boolean
    name_th?: boolean
    name_en?: boolean
    amphure_id?: boolean
  }

  export type TambonsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "zip_code" | "name_th" | "name_en" | "amphure_id", ExtArgs["result"]["tambons"]>

  export type $TambonsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tambons"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: Prisma.Decimal
      zip_code: Prisma.Decimal | null
      name_th: string | null
      name_en: string | null
      amphure_id: Prisma.Decimal | null
    }, ExtArgs["result"]["tambons"]>
    composites: {}
  }

  type TambonsGetPayload<S extends boolean | null | undefined | TambonsDefaultArgs> = $Result.GetResult<Prisma.$TambonsPayload, S>

  type TambonsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TambonsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TambonsCountAggregateInputType | true
    }

  export interface TambonsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tambons'], meta: { name: 'Tambons' } }
    /**
     * Find zero or one Tambons that matches the filter.
     * @param {TambonsFindUniqueArgs} args - Arguments to find a Tambons
     * @example
     * // Get one Tambons
     * const tambons = await prisma.tambons.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TambonsFindUniqueArgs>(args: SelectSubset<T, TambonsFindUniqueArgs<ExtArgs>>): Prisma__TambonsClient<$Result.GetResult<Prisma.$TambonsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tambons that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TambonsFindUniqueOrThrowArgs} args - Arguments to find a Tambons
     * @example
     * // Get one Tambons
     * const tambons = await prisma.tambons.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TambonsFindUniqueOrThrowArgs>(args: SelectSubset<T, TambonsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TambonsClient<$Result.GetResult<Prisma.$TambonsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tambons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TambonsFindFirstArgs} args - Arguments to find a Tambons
     * @example
     * // Get one Tambons
     * const tambons = await prisma.tambons.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TambonsFindFirstArgs>(args?: SelectSubset<T, TambonsFindFirstArgs<ExtArgs>>): Prisma__TambonsClient<$Result.GetResult<Prisma.$TambonsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tambons that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TambonsFindFirstOrThrowArgs} args - Arguments to find a Tambons
     * @example
     * // Get one Tambons
     * const tambons = await prisma.tambons.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TambonsFindFirstOrThrowArgs>(args?: SelectSubset<T, TambonsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TambonsClient<$Result.GetResult<Prisma.$TambonsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tambons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TambonsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tambons
     * const tambons = await prisma.tambons.findMany()
     * 
     * // Get first 10 Tambons
     * const tambons = await prisma.tambons.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tambonsWithIdOnly = await prisma.tambons.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TambonsFindManyArgs>(args?: SelectSubset<T, TambonsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TambonsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tambons.
     * @param {TambonsCreateArgs} args - Arguments to create a Tambons.
     * @example
     * // Create one Tambons
     * const Tambons = await prisma.tambons.create({
     *   data: {
     *     // ... data to create a Tambons
     *   }
     * })
     * 
     */
    create<T extends TambonsCreateArgs>(args: SelectSubset<T, TambonsCreateArgs<ExtArgs>>): Prisma__TambonsClient<$Result.GetResult<Prisma.$TambonsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tambons.
     * @param {TambonsCreateManyArgs} args - Arguments to create many Tambons.
     * @example
     * // Create many Tambons
     * const tambons = await prisma.tambons.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TambonsCreateManyArgs>(args?: SelectSubset<T, TambonsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tambons and returns the data saved in the database.
     * @param {TambonsCreateManyAndReturnArgs} args - Arguments to create many Tambons.
     * @example
     * // Create many Tambons
     * const tambons = await prisma.tambons.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tambons and only return the `id`
     * const tambonsWithIdOnly = await prisma.tambons.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TambonsCreateManyAndReturnArgs>(args?: SelectSubset<T, TambonsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TambonsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tambons.
     * @param {TambonsDeleteArgs} args - Arguments to delete one Tambons.
     * @example
     * // Delete one Tambons
     * const Tambons = await prisma.tambons.delete({
     *   where: {
     *     // ... filter to delete one Tambons
     *   }
     * })
     * 
     */
    delete<T extends TambonsDeleteArgs>(args: SelectSubset<T, TambonsDeleteArgs<ExtArgs>>): Prisma__TambonsClient<$Result.GetResult<Prisma.$TambonsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tambons.
     * @param {TambonsUpdateArgs} args - Arguments to update one Tambons.
     * @example
     * // Update one Tambons
     * const tambons = await prisma.tambons.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TambonsUpdateArgs>(args: SelectSubset<T, TambonsUpdateArgs<ExtArgs>>): Prisma__TambonsClient<$Result.GetResult<Prisma.$TambonsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tambons.
     * @param {TambonsDeleteManyArgs} args - Arguments to filter Tambons to delete.
     * @example
     * // Delete a few Tambons
     * const { count } = await prisma.tambons.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TambonsDeleteManyArgs>(args?: SelectSubset<T, TambonsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tambons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TambonsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tambons
     * const tambons = await prisma.tambons.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TambonsUpdateManyArgs>(args: SelectSubset<T, TambonsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tambons and returns the data updated in the database.
     * @param {TambonsUpdateManyAndReturnArgs} args - Arguments to update many Tambons.
     * @example
     * // Update many Tambons
     * const tambons = await prisma.tambons.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tambons and only return the `id`
     * const tambonsWithIdOnly = await prisma.tambons.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TambonsUpdateManyAndReturnArgs>(args: SelectSubset<T, TambonsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TambonsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tambons.
     * @param {TambonsUpsertArgs} args - Arguments to update or create a Tambons.
     * @example
     * // Update or create a Tambons
     * const tambons = await prisma.tambons.upsert({
     *   create: {
     *     // ... data to create a Tambons
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tambons we want to update
     *   }
     * })
     */
    upsert<T extends TambonsUpsertArgs>(args: SelectSubset<T, TambonsUpsertArgs<ExtArgs>>): Prisma__TambonsClient<$Result.GetResult<Prisma.$TambonsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tambons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TambonsCountArgs} args - Arguments to filter Tambons to count.
     * @example
     * // Count the number of Tambons
     * const count = await prisma.tambons.count({
     *   where: {
     *     // ... the filter for the Tambons we want to count
     *   }
     * })
    **/
    count<T extends TambonsCountArgs>(
      args?: Subset<T, TambonsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TambonsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tambons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TambonsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TambonsAggregateArgs>(args: Subset<T, TambonsAggregateArgs>): Prisma.PrismaPromise<GetTambonsAggregateType<T>>

    /**
     * Group by Tambons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TambonsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TambonsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TambonsGroupByArgs['orderBy'] }
        : { orderBy?: TambonsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TambonsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTambonsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tambons model
   */
  readonly fields: TambonsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tambons.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TambonsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tambons model
   */
  interface TambonsFieldRefs {
    readonly id: FieldRef<"Tambons", 'Decimal'>
    readonly zip_code: FieldRef<"Tambons", 'Decimal'>
    readonly name_th: FieldRef<"Tambons", 'String'>
    readonly name_en: FieldRef<"Tambons", 'String'>
    readonly amphure_id: FieldRef<"Tambons", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Tambons findUnique
   */
  export type TambonsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tambons
     */
    select?: TambonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tambons
     */
    omit?: TambonsOmit<ExtArgs> | null
    /**
     * Filter, which Tambons to fetch.
     */
    where: TambonsWhereUniqueInput
  }

  /**
   * Tambons findUniqueOrThrow
   */
  export type TambonsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tambons
     */
    select?: TambonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tambons
     */
    omit?: TambonsOmit<ExtArgs> | null
    /**
     * Filter, which Tambons to fetch.
     */
    where: TambonsWhereUniqueInput
  }

  /**
   * Tambons findFirst
   */
  export type TambonsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tambons
     */
    select?: TambonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tambons
     */
    omit?: TambonsOmit<ExtArgs> | null
    /**
     * Filter, which Tambons to fetch.
     */
    where?: TambonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tambons to fetch.
     */
    orderBy?: TambonsOrderByWithRelationInput | TambonsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tambons.
     */
    cursor?: TambonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tambons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tambons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tambons.
     */
    distinct?: TambonsScalarFieldEnum | TambonsScalarFieldEnum[]
  }

  /**
   * Tambons findFirstOrThrow
   */
  export type TambonsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tambons
     */
    select?: TambonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tambons
     */
    omit?: TambonsOmit<ExtArgs> | null
    /**
     * Filter, which Tambons to fetch.
     */
    where?: TambonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tambons to fetch.
     */
    orderBy?: TambonsOrderByWithRelationInput | TambonsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tambons.
     */
    cursor?: TambonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tambons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tambons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tambons.
     */
    distinct?: TambonsScalarFieldEnum | TambonsScalarFieldEnum[]
  }

  /**
   * Tambons findMany
   */
  export type TambonsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tambons
     */
    select?: TambonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tambons
     */
    omit?: TambonsOmit<ExtArgs> | null
    /**
     * Filter, which Tambons to fetch.
     */
    where?: TambonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tambons to fetch.
     */
    orderBy?: TambonsOrderByWithRelationInput | TambonsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tambons.
     */
    cursor?: TambonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tambons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tambons.
     */
    skip?: number
    distinct?: TambonsScalarFieldEnum | TambonsScalarFieldEnum[]
  }

  /**
   * Tambons create
   */
  export type TambonsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tambons
     */
    select?: TambonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tambons
     */
    omit?: TambonsOmit<ExtArgs> | null
    /**
     * The data needed to create a Tambons.
     */
    data: XOR<TambonsCreateInput, TambonsUncheckedCreateInput>
  }

  /**
   * Tambons createMany
   */
  export type TambonsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tambons.
     */
    data: TambonsCreateManyInput | TambonsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tambons createManyAndReturn
   */
  export type TambonsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tambons
     */
    select?: TambonsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tambons
     */
    omit?: TambonsOmit<ExtArgs> | null
    /**
     * The data used to create many Tambons.
     */
    data: TambonsCreateManyInput | TambonsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tambons update
   */
  export type TambonsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tambons
     */
    select?: TambonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tambons
     */
    omit?: TambonsOmit<ExtArgs> | null
    /**
     * The data needed to update a Tambons.
     */
    data: XOR<TambonsUpdateInput, TambonsUncheckedUpdateInput>
    /**
     * Choose, which Tambons to update.
     */
    where: TambonsWhereUniqueInput
  }

  /**
   * Tambons updateMany
   */
  export type TambonsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tambons.
     */
    data: XOR<TambonsUpdateManyMutationInput, TambonsUncheckedUpdateManyInput>
    /**
     * Filter which Tambons to update
     */
    where?: TambonsWhereInput
    /**
     * Limit how many Tambons to update.
     */
    limit?: number
  }

  /**
   * Tambons updateManyAndReturn
   */
  export type TambonsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tambons
     */
    select?: TambonsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tambons
     */
    omit?: TambonsOmit<ExtArgs> | null
    /**
     * The data used to update Tambons.
     */
    data: XOR<TambonsUpdateManyMutationInput, TambonsUncheckedUpdateManyInput>
    /**
     * Filter which Tambons to update
     */
    where?: TambonsWhereInput
    /**
     * Limit how many Tambons to update.
     */
    limit?: number
  }

  /**
   * Tambons upsert
   */
  export type TambonsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tambons
     */
    select?: TambonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tambons
     */
    omit?: TambonsOmit<ExtArgs> | null
    /**
     * The filter to search for the Tambons to update in case it exists.
     */
    where: TambonsWhereUniqueInput
    /**
     * In case the Tambons found by the `where` argument doesn't exist, create a new Tambons with this data.
     */
    create: XOR<TambonsCreateInput, TambonsUncheckedCreateInput>
    /**
     * In case the Tambons was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TambonsUpdateInput, TambonsUncheckedUpdateInput>
  }

  /**
   * Tambons delete
   */
  export type TambonsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tambons
     */
    select?: TambonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tambons
     */
    omit?: TambonsOmit<ExtArgs> | null
    /**
     * Filter which Tambons to delete.
     */
    where: TambonsWhereUniqueInput
  }

  /**
   * Tambons deleteMany
   */
  export type TambonsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tambons to delete
     */
    where?: TambonsWhereInput
    /**
     * Limit how many Tambons to delete.
     */
    limit?: number
  }

  /**
   * Tambons without action
   */
  export type TambonsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tambons
     */
    select?: TambonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tambons
     */
    omit?: TambonsOmit<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: Decimal | null
  }

  export type UsersSumAggregateOutputType = {
    id: Decimal | null
  }

  export type UsersMinAggregateOutputType = {
    id: Decimal | null
    email: string | null
    username: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: Decimal | null
    email: string | null
    username: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    username: number
    password: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: Decimal
    email: string
    username: string
    password: string
    name: string | null
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "password" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: Prisma.Decimal
      email: string
      username: string
      password: string
      name: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Decimal'>
    readonly email: FieldRef<"Users", 'String'>
    readonly username: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly name: FieldRef<"Users", 'String'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AmphuresScalarFieldEnum: {
    id: 'id',
    name_th: 'name_th',
    name_en: 'name_en',
    province_id: 'province_id'
  };

  export type AmphuresScalarFieldEnum = (typeof AmphuresScalarFieldEnum)[keyof typeof AmphuresScalarFieldEnum]


  export const ProvincesScalarFieldEnum: {
    id: 'id',
    name_th: 'name_th',
    name_en: 'name_en',
    geography_id: 'geography_id'
  };

  export type ProvincesScalarFieldEnum = (typeof ProvincesScalarFieldEnum)[keyof typeof ProvincesScalarFieldEnum]


  export const RegionScalarFieldEnum: {
    id: 'id',
    name_thai: 'name_thai',
    name_en: 'name_en'
  };

  export type RegionScalarFieldEnum = (typeof RegionScalarFieldEnum)[keyof typeof RegionScalarFieldEnum]


  export const TambonsScalarFieldEnum: {
    id: 'id',
    zip_code: 'zip_code',
    name_th: 'name_th',
    name_en: 'name_en',
    amphure_id: 'amphure_id'
  };

  export type TambonsScalarFieldEnum = (typeof TambonsScalarFieldEnum)[keyof typeof TambonsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    password: 'password',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type AmphuresWhereInput = {
    AND?: AmphuresWhereInput | AmphuresWhereInput[]
    OR?: AmphuresWhereInput[]
    NOT?: AmphuresWhereInput | AmphuresWhereInput[]
    id?: DecimalFilter<"Amphures"> | Decimal | DecimalJsLike | number | string
    name_th?: StringNullableFilter<"Amphures"> | string | null
    name_en?: StringNullableFilter<"Amphures"> | string | null
    province_id?: DecimalNullableFilter<"Amphures"> | Decimal | DecimalJsLike | number | string | null
    Provinces?: XOR<ProvincesNullableScalarRelationFilter, ProvincesWhereInput> | null
  }

  export type AmphuresOrderByWithRelationInput = {
    id?: SortOrder
    name_th?: SortOrderInput | SortOrder
    name_en?: SortOrderInput | SortOrder
    province_id?: SortOrderInput | SortOrder
    Provinces?: ProvincesOrderByWithRelationInput
  }

  export type AmphuresWhereUniqueInput = Prisma.AtLeast<{
    id?: Decimal | DecimalJsLike | number | string
    AND?: AmphuresWhereInput | AmphuresWhereInput[]
    OR?: AmphuresWhereInput[]
    NOT?: AmphuresWhereInput | AmphuresWhereInput[]
    name_th?: StringNullableFilter<"Amphures"> | string | null
    name_en?: StringNullableFilter<"Amphures"> | string | null
    province_id?: DecimalNullableFilter<"Amphures"> | Decimal | DecimalJsLike | number | string | null
    Provinces?: XOR<ProvincesNullableScalarRelationFilter, ProvincesWhereInput> | null
  }, "id">

  export type AmphuresOrderByWithAggregationInput = {
    id?: SortOrder
    name_th?: SortOrderInput | SortOrder
    name_en?: SortOrderInput | SortOrder
    province_id?: SortOrderInput | SortOrder
    _count?: AmphuresCountOrderByAggregateInput
    _avg?: AmphuresAvgOrderByAggregateInput
    _max?: AmphuresMaxOrderByAggregateInput
    _min?: AmphuresMinOrderByAggregateInput
    _sum?: AmphuresSumOrderByAggregateInput
  }

  export type AmphuresScalarWhereWithAggregatesInput = {
    AND?: AmphuresScalarWhereWithAggregatesInput | AmphuresScalarWhereWithAggregatesInput[]
    OR?: AmphuresScalarWhereWithAggregatesInput[]
    NOT?: AmphuresScalarWhereWithAggregatesInput | AmphuresScalarWhereWithAggregatesInput[]
    id?: DecimalWithAggregatesFilter<"Amphures"> | Decimal | DecimalJsLike | number | string
    name_th?: StringNullableWithAggregatesFilter<"Amphures"> | string | null
    name_en?: StringNullableWithAggregatesFilter<"Amphures"> | string | null
    province_id?: DecimalNullableWithAggregatesFilter<"Amphures"> | Decimal | DecimalJsLike | number | string | null
  }

  export type ProvincesWhereInput = {
    AND?: ProvincesWhereInput | ProvincesWhereInput[]
    OR?: ProvincesWhereInput[]
    NOT?: ProvincesWhereInput | ProvincesWhereInput[]
    id?: DecimalFilter<"Provinces"> | Decimal | DecimalJsLike | number | string
    name_th?: StringNullableFilter<"Provinces"> | string | null
    name_en?: StringNullableFilter<"Provinces"> | string | null
    geography_id?: DecimalNullableFilter<"Provinces"> | Decimal | DecimalJsLike | number | string | null
    Amphures?: AmphuresListRelationFilter
    Region?: XOR<RegionNullableScalarRelationFilter, RegionWhereInput> | null
  }

  export type ProvincesOrderByWithRelationInput = {
    id?: SortOrder
    name_th?: SortOrderInput | SortOrder
    name_en?: SortOrderInput | SortOrder
    geography_id?: SortOrderInput | SortOrder
    Amphures?: AmphuresOrderByRelationAggregateInput
    Region?: RegionOrderByWithRelationInput
  }

  export type ProvincesWhereUniqueInput = Prisma.AtLeast<{
    id?: Decimal | DecimalJsLike | number | string
    AND?: ProvincesWhereInput | ProvincesWhereInput[]
    OR?: ProvincesWhereInput[]
    NOT?: ProvincesWhereInput | ProvincesWhereInput[]
    name_th?: StringNullableFilter<"Provinces"> | string | null
    name_en?: StringNullableFilter<"Provinces"> | string | null
    geography_id?: DecimalNullableFilter<"Provinces"> | Decimal | DecimalJsLike | number | string | null
    Amphures?: AmphuresListRelationFilter
    Region?: XOR<RegionNullableScalarRelationFilter, RegionWhereInput> | null
  }, "id">

  export type ProvincesOrderByWithAggregationInput = {
    id?: SortOrder
    name_th?: SortOrderInput | SortOrder
    name_en?: SortOrderInput | SortOrder
    geography_id?: SortOrderInput | SortOrder
    _count?: ProvincesCountOrderByAggregateInput
    _avg?: ProvincesAvgOrderByAggregateInput
    _max?: ProvincesMaxOrderByAggregateInput
    _min?: ProvincesMinOrderByAggregateInput
    _sum?: ProvincesSumOrderByAggregateInput
  }

  export type ProvincesScalarWhereWithAggregatesInput = {
    AND?: ProvincesScalarWhereWithAggregatesInput | ProvincesScalarWhereWithAggregatesInput[]
    OR?: ProvincesScalarWhereWithAggregatesInput[]
    NOT?: ProvincesScalarWhereWithAggregatesInput | ProvincesScalarWhereWithAggregatesInput[]
    id?: DecimalWithAggregatesFilter<"Provinces"> | Decimal | DecimalJsLike | number | string
    name_th?: StringNullableWithAggregatesFilter<"Provinces"> | string | null
    name_en?: StringNullableWithAggregatesFilter<"Provinces"> | string | null
    geography_id?: DecimalNullableWithAggregatesFilter<"Provinces"> | Decimal | DecimalJsLike | number | string | null
  }

  export type RegionWhereInput = {
    AND?: RegionWhereInput | RegionWhereInput[]
    OR?: RegionWhereInput[]
    NOT?: RegionWhereInput | RegionWhereInput[]
    id?: DecimalFilter<"Region"> | Decimal | DecimalJsLike | number | string
    name_thai?: StringNullableFilter<"Region"> | string | null
    name_en?: StringNullableFilter<"Region"> | string | null
    Provinces?: ProvincesListRelationFilter
  }

  export type RegionOrderByWithRelationInput = {
    id?: SortOrder
    name_thai?: SortOrderInput | SortOrder
    name_en?: SortOrderInput | SortOrder
    Provinces?: ProvincesOrderByRelationAggregateInput
  }

  export type RegionWhereUniqueInput = Prisma.AtLeast<{
    id?: Decimal | DecimalJsLike | number | string
    AND?: RegionWhereInput | RegionWhereInput[]
    OR?: RegionWhereInput[]
    NOT?: RegionWhereInput | RegionWhereInput[]
    name_thai?: StringNullableFilter<"Region"> | string | null
    name_en?: StringNullableFilter<"Region"> | string | null
    Provinces?: ProvincesListRelationFilter
  }, "id">

  export type RegionOrderByWithAggregationInput = {
    id?: SortOrder
    name_thai?: SortOrderInput | SortOrder
    name_en?: SortOrderInput | SortOrder
    _count?: RegionCountOrderByAggregateInput
    _avg?: RegionAvgOrderByAggregateInput
    _max?: RegionMaxOrderByAggregateInput
    _min?: RegionMinOrderByAggregateInput
    _sum?: RegionSumOrderByAggregateInput
  }

  export type RegionScalarWhereWithAggregatesInput = {
    AND?: RegionScalarWhereWithAggregatesInput | RegionScalarWhereWithAggregatesInput[]
    OR?: RegionScalarWhereWithAggregatesInput[]
    NOT?: RegionScalarWhereWithAggregatesInput | RegionScalarWhereWithAggregatesInput[]
    id?: DecimalWithAggregatesFilter<"Region"> | Decimal | DecimalJsLike | number | string
    name_thai?: StringNullableWithAggregatesFilter<"Region"> | string | null
    name_en?: StringNullableWithAggregatesFilter<"Region"> | string | null
  }

  export type TambonsWhereInput = {
    AND?: TambonsWhereInput | TambonsWhereInput[]
    OR?: TambonsWhereInput[]
    NOT?: TambonsWhereInput | TambonsWhereInput[]
    id?: DecimalFilter<"Tambons"> | Decimal | DecimalJsLike | number | string
    zip_code?: DecimalNullableFilter<"Tambons"> | Decimal | DecimalJsLike | number | string | null
    name_th?: StringNullableFilter<"Tambons"> | string | null
    name_en?: StringNullableFilter<"Tambons"> | string | null
    amphure_id?: DecimalNullableFilter<"Tambons"> | Decimal | DecimalJsLike | number | string | null
  }

  export type TambonsOrderByWithRelationInput = {
    id?: SortOrder
    zip_code?: SortOrderInput | SortOrder
    name_th?: SortOrderInput | SortOrder
    name_en?: SortOrderInput | SortOrder
    amphure_id?: SortOrderInput | SortOrder
  }

  export type TambonsWhereUniqueInput = Prisma.AtLeast<{
    id?: Decimal | DecimalJsLike | number | string
    AND?: TambonsWhereInput | TambonsWhereInput[]
    OR?: TambonsWhereInput[]
    NOT?: TambonsWhereInput | TambonsWhereInput[]
    zip_code?: DecimalNullableFilter<"Tambons"> | Decimal | DecimalJsLike | number | string | null
    name_th?: StringNullableFilter<"Tambons"> | string | null
    name_en?: StringNullableFilter<"Tambons"> | string | null
    amphure_id?: DecimalNullableFilter<"Tambons"> | Decimal | DecimalJsLike | number | string | null
  }, "id">

  export type TambonsOrderByWithAggregationInput = {
    id?: SortOrder
    zip_code?: SortOrderInput | SortOrder
    name_th?: SortOrderInput | SortOrder
    name_en?: SortOrderInput | SortOrder
    amphure_id?: SortOrderInput | SortOrder
    _count?: TambonsCountOrderByAggregateInput
    _avg?: TambonsAvgOrderByAggregateInput
    _max?: TambonsMaxOrderByAggregateInput
    _min?: TambonsMinOrderByAggregateInput
    _sum?: TambonsSumOrderByAggregateInput
  }

  export type TambonsScalarWhereWithAggregatesInput = {
    AND?: TambonsScalarWhereWithAggregatesInput | TambonsScalarWhereWithAggregatesInput[]
    OR?: TambonsScalarWhereWithAggregatesInput[]
    NOT?: TambonsScalarWhereWithAggregatesInput | TambonsScalarWhereWithAggregatesInput[]
    id?: DecimalWithAggregatesFilter<"Tambons"> | Decimal | DecimalJsLike | number | string
    zip_code?: DecimalNullableWithAggregatesFilter<"Tambons"> | Decimal | DecimalJsLike | number | string | null
    name_th?: StringNullableWithAggregatesFilter<"Tambons"> | string | null
    name_en?: StringNullableWithAggregatesFilter<"Tambons"> | string | null
    amphure_id?: DecimalNullableWithAggregatesFilter<"Tambons"> | Decimal | DecimalJsLike | number | string | null
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: DecimalFilter<"Users"> | Decimal | DecimalJsLike | number | string
    email?: StringFilter<"Users"> | string
    username?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    name?: StringNullableFilter<"Users"> | string | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: Decimal | DecimalJsLike | number | string
    email?: string
    username?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    password?: StringFilter<"Users"> | string
    name?: StringNullableFilter<"Users"> | string | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
  }, "id" | "email" | "username">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: DecimalWithAggregatesFilter<"Users"> | Decimal | DecimalJsLike | number | string
    email?: StringWithAggregatesFilter<"Users"> | string
    username?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    name?: StringNullableWithAggregatesFilter<"Users"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type AmphuresCreateInput = {
    id: Decimal | DecimalJsLike | number | string
    name_th?: string | null
    name_en?: string | null
    Provinces?: ProvincesCreateNestedOneWithoutAmphuresInput
  }

  export type AmphuresUncheckedCreateInput = {
    id: Decimal | DecimalJsLike | number | string
    name_th?: string | null
    name_en?: string | null
    province_id?: Decimal | DecimalJsLike | number | string | null
  }

  export type AmphuresUpdateInput = {
    id?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    name_th?: NullableStringFieldUpdateOperationsInput | string | null
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    Provinces?: ProvincesUpdateOneWithoutAmphuresNestedInput
  }

  export type AmphuresUncheckedUpdateInput = {
    id?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    name_th?: NullableStringFieldUpdateOperationsInput | string | null
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    province_id?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type AmphuresCreateManyInput = {
    id: Decimal | DecimalJsLike | number | string
    name_th?: string | null
    name_en?: string | null
    province_id?: Decimal | DecimalJsLike | number | string | null
  }

  export type AmphuresUpdateManyMutationInput = {
    id?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    name_th?: NullableStringFieldUpdateOperationsInput | string | null
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AmphuresUncheckedUpdateManyInput = {
    id?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    name_th?: NullableStringFieldUpdateOperationsInput | string | null
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    province_id?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type ProvincesCreateInput = {
    id: Decimal | DecimalJsLike | number | string
    name_th?: string | null
    name_en?: string | null
    Amphures?: AmphuresCreateNestedManyWithoutProvincesInput
    Region?: RegionCreateNestedOneWithoutProvincesInput
  }

  export type ProvincesUncheckedCreateInput = {
    id: Decimal | DecimalJsLike | number | string
    name_th?: string | null
    name_en?: string | null
    geography_id?: Decimal | DecimalJsLike | number | string | null
    Amphures?: AmphuresUncheckedCreateNestedManyWithoutProvincesInput
  }

  export type ProvincesUpdateInput = {
    id?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    name_th?: NullableStringFieldUpdateOperationsInput | string | null
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    Amphures?: AmphuresUpdateManyWithoutProvincesNestedInput
    Region?: RegionUpdateOneWithoutProvincesNestedInput
  }

  export type ProvincesUncheckedUpdateInput = {
    id?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    name_th?: NullableStringFieldUpdateOperationsInput | string | null
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    geography_id?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Amphures?: AmphuresUncheckedUpdateManyWithoutProvincesNestedInput
  }

  export type ProvincesCreateManyInput = {
    id: Decimal | DecimalJsLike | number | string
    name_th?: string | null
    name_en?: string | null
    geography_id?: Decimal | DecimalJsLike | number | string | null
  }

  export type ProvincesUpdateManyMutationInput = {
    id?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    name_th?: NullableStringFieldUpdateOperationsInput | string | null
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProvincesUncheckedUpdateManyInput = {
    id?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    name_th?: NullableStringFieldUpdateOperationsInput | string | null
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    geography_id?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type RegionCreateInput = {
    id: Decimal | DecimalJsLike | number | string
    name_thai?: string | null
    name_en?: string | null
    Provinces?: ProvincesCreateNestedManyWithoutRegionInput
  }

  export type RegionUncheckedCreateInput = {
    id: Decimal | DecimalJsLike | number | string
    name_thai?: string | null
    name_en?: string | null
    Provinces?: ProvincesUncheckedCreateNestedManyWithoutRegionInput
  }

  export type RegionUpdateInput = {
    id?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    name_thai?: NullableStringFieldUpdateOperationsInput | string | null
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    Provinces?: ProvincesUpdateManyWithoutRegionNestedInput
  }

  export type RegionUncheckedUpdateInput = {
    id?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    name_thai?: NullableStringFieldUpdateOperationsInput | string | null
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    Provinces?: ProvincesUncheckedUpdateManyWithoutRegionNestedInput
  }

  export type RegionCreateManyInput = {
    id: Decimal | DecimalJsLike | number | string
    name_thai?: string | null
    name_en?: string | null
  }

  export type RegionUpdateManyMutationInput = {
    id?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    name_thai?: NullableStringFieldUpdateOperationsInput | string | null
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RegionUncheckedUpdateManyInput = {
    id?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    name_thai?: NullableStringFieldUpdateOperationsInput | string | null
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TambonsCreateInput = {
    id: Decimal | DecimalJsLike | number | string
    zip_code?: Decimal | DecimalJsLike | number | string | null
    name_th?: string | null
    name_en?: string | null
    amphure_id?: Decimal | DecimalJsLike | number | string | null
  }

  export type TambonsUncheckedCreateInput = {
    id: Decimal | DecimalJsLike | number | string
    zip_code?: Decimal | DecimalJsLike | number | string | null
    name_th?: string | null
    name_en?: string | null
    amphure_id?: Decimal | DecimalJsLike | number | string | null
  }

  export type TambonsUpdateInput = {
    id?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    zip_code?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    name_th?: NullableStringFieldUpdateOperationsInput | string | null
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    amphure_id?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type TambonsUncheckedUpdateInput = {
    id?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    zip_code?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    name_th?: NullableStringFieldUpdateOperationsInput | string | null
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    amphure_id?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type TambonsCreateManyInput = {
    id: Decimal | DecimalJsLike | number | string
    zip_code?: Decimal | DecimalJsLike | number | string | null
    name_th?: string | null
    name_en?: string | null
    amphure_id?: Decimal | DecimalJsLike | number | string | null
  }

  export type TambonsUpdateManyMutationInput = {
    id?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    zip_code?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    name_th?: NullableStringFieldUpdateOperationsInput | string | null
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    amphure_id?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type TambonsUncheckedUpdateManyInput = {
    id?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    zip_code?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    name_th?: NullableStringFieldUpdateOperationsInput | string | null
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    amphure_id?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type UsersCreateInput = {
    id: Decimal | DecimalJsLike | number | string
    email: string
    username: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type UsersUncheckedCreateInput = {
    id: Decimal | DecimalJsLike | number | string
    email: string
    username: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type UsersUpdateInput = {
    id?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateInput = {
    id?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateManyInput = {
    id: Decimal | DecimalJsLike | number | string
    email: string
    username: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    id?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type ProvincesNullableScalarRelationFilter = {
    is?: ProvincesWhereInput | null
    isNot?: ProvincesWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AmphuresCountOrderByAggregateInput = {
    id?: SortOrder
    name_th?: SortOrder
    name_en?: SortOrder
    province_id?: SortOrder
  }

  export type AmphuresAvgOrderByAggregateInput = {
    id?: SortOrder
    province_id?: SortOrder
  }

  export type AmphuresMaxOrderByAggregateInput = {
    id?: SortOrder
    name_th?: SortOrder
    name_en?: SortOrder
    province_id?: SortOrder
  }

  export type AmphuresMinOrderByAggregateInput = {
    id?: SortOrder
    name_th?: SortOrder
    name_en?: SortOrder
    province_id?: SortOrder
  }

  export type AmphuresSumOrderByAggregateInput = {
    id?: SortOrder
    province_id?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type AmphuresListRelationFilter = {
    every?: AmphuresWhereInput
    some?: AmphuresWhereInput
    none?: AmphuresWhereInput
  }

  export type RegionNullableScalarRelationFilter = {
    is?: RegionWhereInput | null
    isNot?: RegionWhereInput | null
  }

  export type AmphuresOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProvincesCountOrderByAggregateInput = {
    id?: SortOrder
    name_th?: SortOrder
    name_en?: SortOrder
    geography_id?: SortOrder
  }

  export type ProvincesAvgOrderByAggregateInput = {
    id?: SortOrder
    geography_id?: SortOrder
  }

  export type ProvincesMaxOrderByAggregateInput = {
    id?: SortOrder
    name_th?: SortOrder
    name_en?: SortOrder
    geography_id?: SortOrder
  }

  export type ProvincesMinOrderByAggregateInput = {
    id?: SortOrder
    name_th?: SortOrder
    name_en?: SortOrder
    geography_id?: SortOrder
  }

  export type ProvincesSumOrderByAggregateInput = {
    id?: SortOrder
    geography_id?: SortOrder
  }

  export type ProvincesListRelationFilter = {
    every?: ProvincesWhereInput
    some?: ProvincesWhereInput
    none?: ProvincesWhereInput
  }

  export type ProvincesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegionCountOrderByAggregateInput = {
    id?: SortOrder
    name_thai?: SortOrder
    name_en?: SortOrder
  }

  export type RegionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RegionMaxOrderByAggregateInput = {
    id?: SortOrder
    name_thai?: SortOrder
    name_en?: SortOrder
  }

  export type RegionMinOrderByAggregateInput = {
    id?: SortOrder
    name_thai?: SortOrder
    name_en?: SortOrder
  }

  export type RegionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TambonsCountOrderByAggregateInput = {
    id?: SortOrder
    zip_code?: SortOrder
    name_th?: SortOrder
    name_en?: SortOrder
    amphure_id?: SortOrder
  }

  export type TambonsAvgOrderByAggregateInput = {
    id?: SortOrder
    zip_code?: SortOrder
    amphure_id?: SortOrder
  }

  export type TambonsMaxOrderByAggregateInput = {
    id?: SortOrder
    zip_code?: SortOrder
    name_th?: SortOrder
    name_en?: SortOrder
    amphure_id?: SortOrder
  }

  export type TambonsMinOrderByAggregateInput = {
    id?: SortOrder
    zip_code?: SortOrder
    name_th?: SortOrder
    name_en?: SortOrder
    amphure_id?: SortOrder
  }

  export type TambonsSumOrderByAggregateInput = {
    id?: SortOrder
    zip_code?: SortOrder
    amphure_id?: SortOrder
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ProvincesCreateNestedOneWithoutAmphuresInput = {
    create?: XOR<ProvincesCreateWithoutAmphuresInput, ProvincesUncheckedCreateWithoutAmphuresInput>
    connectOrCreate?: ProvincesCreateOrConnectWithoutAmphuresInput
    connect?: ProvincesWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProvincesUpdateOneWithoutAmphuresNestedInput = {
    create?: XOR<ProvincesCreateWithoutAmphuresInput, ProvincesUncheckedCreateWithoutAmphuresInput>
    connectOrCreate?: ProvincesCreateOrConnectWithoutAmphuresInput
    upsert?: ProvincesUpsertWithoutAmphuresInput
    disconnect?: ProvincesWhereInput | boolean
    delete?: ProvincesWhereInput | boolean
    connect?: ProvincesWhereUniqueInput
    update?: XOR<XOR<ProvincesUpdateToOneWithWhereWithoutAmphuresInput, ProvincesUpdateWithoutAmphuresInput>, ProvincesUncheckedUpdateWithoutAmphuresInput>
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type AmphuresCreateNestedManyWithoutProvincesInput = {
    create?: XOR<AmphuresCreateWithoutProvincesInput, AmphuresUncheckedCreateWithoutProvincesInput> | AmphuresCreateWithoutProvincesInput[] | AmphuresUncheckedCreateWithoutProvincesInput[]
    connectOrCreate?: AmphuresCreateOrConnectWithoutProvincesInput | AmphuresCreateOrConnectWithoutProvincesInput[]
    createMany?: AmphuresCreateManyProvincesInputEnvelope
    connect?: AmphuresWhereUniqueInput | AmphuresWhereUniqueInput[]
  }

  export type RegionCreateNestedOneWithoutProvincesInput = {
    create?: XOR<RegionCreateWithoutProvincesInput, RegionUncheckedCreateWithoutProvincesInput>
    connectOrCreate?: RegionCreateOrConnectWithoutProvincesInput
    connect?: RegionWhereUniqueInput
  }

  export type AmphuresUncheckedCreateNestedManyWithoutProvincesInput = {
    create?: XOR<AmphuresCreateWithoutProvincesInput, AmphuresUncheckedCreateWithoutProvincesInput> | AmphuresCreateWithoutProvincesInput[] | AmphuresUncheckedCreateWithoutProvincesInput[]
    connectOrCreate?: AmphuresCreateOrConnectWithoutProvincesInput | AmphuresCreateOrConnectWithoutProvincesInput[]
    createMany?: AmphuresCreateManyProvincesInputEnvelope
    connect?: AmphuresWhereUniqueInput | AmphuresWhereUniqueInput[]
  }

  export type AmphuresUpdateManyWithoutProvincesNestedInput = {
    create?: XOR<AmphuresCreateWithoutProvincesInput, AmphuresUncheckedCreateWithoutProvincesInput> | AmphuresCreateWithoutProvincesInput[] | AmphuresUncheckedCreateWithoutProvincesInput[]
    connectOrCreate?: AmphuresCreateOrConnectWithoutProvincesInput | AmphuresCreateOrConnectWithoutProvincesInput[]
    upsert?: AmphuresUpsertWithWhereUniqueWithoutProvincesInput | AmphuresUpsertWithWhereUniqueWithoutProvincesInput[]
    createMany?: AmphuresCreateManyProvincesInputEnvelope
    set?: AmphuresWhereUniqueInput | AmphuresWhereUniqueInput[]
    disconnect?: AmphuresWhereUniqueInput | AmphuresWhereUniqueInput[]
    delete?: AmphuresWhereUniqueInput | AmphuresWhereUniqueInput[]
    connect?: AmphuresWhereUniqueInput | AmphuresWhereUniqueInput[]
    update?: AmphuresUpdateWithWhereUniqueWithoutProvincesInput | AmphuresUpdateWithWhereUniqueWithoutProvincesInput[]
    updateMany?: AmphuresUpdateManyWithWhereWithoutProvincesInput | AmphuresUpdateManyWithWhereWithoutProvincesInput[]
    deleteMany?: AmphuresScalarWhereInput | AmphuresScalarWhereInput[]
  }

  export type RegionUpdateOneWithoutProvincesNestedInput = {
    create?: XOR<RegionCreateWithoutProvincesInput, RegionUncheckedCreateWithoutProvincesInput>
    connectOrCreate?: RegionCreateOrConnectWithoutProvincesInput
    upsert?: RegionUpsertWithoutProvincesInput
    disconnect?: RegionWhereInput | boolean
    delete?: RegionWhereInput | boolean
    connect?: RegionWhereUniqueInput
    update?: XOR<XOR<RegionUpdateToOneWithWhereWithoutProvincesInput, RegionUpdateWithoutProvincesInput>, RegionUncheckedUpdateWithoutProvincesInput>
  }

  export type AmphuresUncheckedUpdateManyWithoutProvincesNestedInput = {
    create?: XOR<AmphuresCreateWithoutProvincesInput, AmphuresUncheckedCreateWithoutProvincesInput> | AmphuresCreateWithoutProvincesInput[] | AmphuresUncheckedCreateWithoutProvincesInput[]
    connectOrCreate?: AmphuresCreateOrConnectWithoutProvincesInput | AmphuresCreateOrConnectWithoutProvincesInput[]
    upsert?: AmphuresUpsertWithWhereUniqueWithoutProvincesInput | AmphuresUpsertWithWhereUniqueWithoutProvincesInput[]
    createMany?: AmphuresCreateManyProvincesInputEnvelope
    set?: AmphuresWhereUniqueInput | AmphuresWhereUniqueInput[]
    disconnect?: AmphuresWhereUniqueInput | AmphuresWhereUniqueInput[]
    delete?: AmphuresWhereUniqueInput | AmphuresWhereUniqueInput[]
    connect?: AmphuresWhereUniqueInput | AmphuresWhereUniqueInput[]
    update?: AmphuresUpdateWithWhereUniqueWithoutProvincesInput | AmphuresUpdateWithWhereUniqueWithoutProvincesInput[]
    updateMany?: AmphuresUpdateManyWithWhereWithoutProvincesInput | AmphuresUpdateManyWithWhereWithoutProvincesInput[]
    deleteMany?: AmphuresScalarWhereInput | AmphuresScalarWhereInput[]
  }

  export type ProvincesCreateNestedManyWithoutRegionInput = {
    create?: XOR<ProvincesCreateWithoutRegionInput, ProvincesUncheckedCreateWithoutRegionInput> | ProvincesCreateWithoutRegionInput[] | ProvincesUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: ProvincesCreateOrConnectWithoutRegionInput | ProvincesCreateOrConnectWithoutRegionInput[]
    createMany?: ProvincesCreateManyRegionInputEnvelope
    connect?: ProvincesWhereUniqueInput | ProvincesWhereUniqueInput[]
  }

  export type ProvincesUncheckedCreateNestedManyWithoutRegionInput = {
    create?: XOR<ProvincesCreateWithoutRegionInput, ProvincesUncheckedCreateWithoutRegionInput> | ProvincesCreateWithoutRegionInput[] | ProvincesUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: ProvincesCreateOrConnectWithoutRegionInput | ProvincesCreateOrConnectWithoutRegionInput[]
    createMany?: ProvincesCreateManyRegionInputEnvelope
    connect?: ProvincesWhereUniqueInput | ProvincesWhereUniqueInput[]
  }

  export type ProvincesUpdateManyWithoutRegionNestedInput = {
    create?: XOR<ProvincesCreateWithoutRegionInput, ProvincesUncheckedCreateWithoutRegionInput> | ProvincesCreateWithoutRegionInput[] | ProvincesUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: ProvincesCreateOrConnectWithoutRegionInput | ProvincesCreateOrConnectWithoutRegionInput[]
    upsert?: ProvincesUpsertWithWhereUniqueWithoutRegionInput | ProvincesUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: ProvincesCreateManyRegionInputEnvelope
    set?: ProvincesWhereUniqueInput | ProvincesWhereUniqueInput[]
    disconnect?: ProvincesWhereUniqueInput | ProvincesWhereUniqueInput[]
    delete?: ProvincesWhereUniqueInput | ProvincesWhereUniqueInput[]
    connect?: ProvincesWhereUniqueInput | ProvincesWhereUniqueInput[]
    update?: ProvincesUpdateWithWhereUniqueWithoutRegionInput | ProvincesUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: ProvincesUpdateManyWithWhereWithoutRegionInput | ProvincesUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: ProvincesScalarWhereInput | ProvincesScalarWhereInput[]
  }

  export type ProvincesUncheckedUpdateManyWithoutRegionNestedInput = {
    create?: XOR<ProvincesCreateWithoutRegionInput, ProvincesUncheckedCreateWithoutRegionInput> | ProvincesCreateWithoutRegionInput[] | ProvincesUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: ProvincesCreateOrConnectWithoutRegionInput | ProvincesCreateOrConnectWithoutRegionInput[]
    upsert?: ProvincesUpsertWithWhereUniqueWithoutRegionInput | ProvincesUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: ProvincesCreateManyRegionInputEnvelope
    set?: ProvincesWhereUniqueInput | ProvincesWhereUniqueInput[]
    disconnect?: ProvincesWhereUniqueInput | ProvincesWhereUniqueInput[]
    delete?: ProvincesWhereUniqueInput | ProvincesWhereUniqueInput[]
    connect?: ProvincesWhereUniqueInput | ProvincesWhereUniqueInput[]
    update?: ProvincesUpdateWithWhereUniqueWithoutRegionInput | ProvincesUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: ProvincesUpdateManyWithWhereWithoutRegionInput | ProvincesUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: ProvincesScalarWhereInput | ProvincesScalarWhereInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ProvincesCreateWithoutAmphuresInput = {
    id: Decimal | DecimalJsLike | number | string
    name_th?: string | null
    name_en?: string | null
    Region?: RegionCreateNestedOneWithoutProvincesInput
  }

  export type ProvincesUncheckedCreateWithoutAmphuresInput = {
    id: Decimal | DecimalJsLike | number | string
    name_th?: string | null
    name_en?: string | null
    geography_id?: Decimal | DecimalJsLike | number | string | null
  }

  export type ProvincesCreateOrConnectWithoutAmphuresInput = {
    where: ProvincesWhereUniqueInput
    create: XOR<ProvincesCreateWithoutAmphuresInput, ProvincesUncheckedCreateWithoutAmphuresInput>
  }

  export type ProvincesUpsertWithoutAmphuresInput = {
    update: XOR<ProvincesUpdateWithoutAmphuresInput, ProvincesUncheckedUpdateWithoutAmphuresInput>
    create: XOR<ProvincesCreateWithoutAmphuresInput, ProvincesUncheckedCreateWithoutAmphuresInput>
    where?: ProvincesWhereInput
  }

  export type ProvincesUpdateToOneWithWhereWithoutAmphuresInput = {
    where?: ProvincesWhereInput
    data: XOR<ProvincesUpdateWithoutAmphuresInput, ProvincesUncheckedUpdateWithoutAmphuresInput>
  }

  export type ProvincesUpdateWithoutAmphuresInput = {
    id?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    name_th?: NullableStringFieldUpdateOperationsInput | string | null
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    Region?: RegionUpdateOneWithoutProvincesNestedInput
  }

  export type ProvincesUncheckedUpdateWithoutAmphuresInput = {
    id?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    name_th?: NullableStringFieldUpdateOperationsInput | string | null
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    geography_id?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type AmphuresCreateWithoutProvincesInput = {
    id: Decimal | DecimalJsLike | number | string
    name_th?: string | null
    name_en?: string | null
  }

  export type AmphuresUncheckedCreateWithoutProvincesInput = {
    id: Decimal | DecimalJsLike | number | string
    name_th?: string | null
    name_en?: string | null
  }

  export type AmphuresCreateOrConnectWithoutProvincesInput = {
    where: AmphuresWhereUniqueInput
    create: XOR<AmphuresCreateWithoutProvincesInput, AmphuresUncheckedCreateWithoutProvincesInput>
  }

  export type AmphuresCreateManyProvincesInputEnvelope = {
    data: AmphuresCreateManyProvincesInput | AmphuresCreateManyProvincesInput[]
    skipDuplicates?: boolean
  }

  export type RegionCreateWithoutProvincesInput = {
    id: Decimal | DecimalJsLike | number | string
    name_thai?: string | null
    name_en?: string | null
  }

  export type RegionUncheckedCreateWithoutProvincesInput = {
    id: Decimal | DecimalJsLike | number | string
    name_thai?: string | null
    name_en?: string | null
  }

  export type RegionCreateOrConnectWithoutProvincesInput = {
    where: RegionWhereUniqueInput
    create: XOR<RegionCreateWithoutProvincesInput, RegionUncheckedCreateWithoutProvincesInput>
  }

  export type AmphuresUpsertWithWhereUniqueWithoutProvincesInput = {
    where: AmphuresWhereUniqueInput
    update: XOR<AmphuresUpdateWithoutProvincesInput, AmphuresUncheckedUpdateWithoutProvincesInput>
    create: XOR<AmphuresCreateWithoutProvincesInput, AmphuresUncheckedCreateWithoutProvincesInput>
  }

  export type AmphuresUpdateWithWhereUniqueWithoutProvincesInput = {
    where: AmphuresWhereUniqueInput
    data: XOR<AmphuresUpdateWithoutProvincesInput, AmphuresUncheckedUpdateWithoutProvincesInput>
  }

  export type AmphuresUpdateManyWithWhereWithoutProvincesInput = {
    where: AmphuresScalarWhereInput
    data: XOR<AmphuresUpdateManyMutationInput, AmphuresUncheckedUpdateManyWithoutProvincesInput>
  }

  export type AmphuresScalarWhereInput = {
    AND?: AmphuresScalarWhereInput | AmphuresScalarWhereInput[]
    OR?: AmphuresScalarWhereInput[]
    NOT?: AmphuresScalarWhereInput | AmphuresScalarWhereInput[]
    id?: DecimalFilter<"Amphures"> | Decimal | DecimalJsLike | number | string
    name_th?: StringNullableFilter<"Amphures"> | string | null
    name_en?: StringNullableFilter<"Amphures"> | string | null
    province_id?: DecimalNullableFilter<"Amphures"> | Decimal | DecimalJsLike | number | string | null
  }

  export type RegionUpsertWithoutProvincesInput = {
    update: XOR<RegionUpdateWithoutProvincesInput, RegionUncheckedUpdateWithoutProvincesInput>
    create: XOR<RegionCreateWithoutProvincesInput, RegionUncheckedCreateWithoutProvincesInput>
    where?: RegionWhereInput
  }

  export type RegionUpdateToOneWithWhereWithoutProvincesInput = {
    where?: RegionWhereInput
    data: XOR<RegionUpdateWithoutProvincesInput, RegionUncheckedUpdateWithoutProvincesInput>
  }

  export type RegionUpdateWithoutProvincesInput = {
    id?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    name_thai?: NullableStringFieldUpdateOperationsInput | string | null
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RegionUncheckedUpdateWithoutProvincesInput = {
    id?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    name_thai?: NullableStringFieldUpdateOperationsInput | string | null
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProvincesCreateWithoutRegionInput = {
    id: Decimal | DecimalJsLike | number | string
    name_th?: string | null
    name_en?: string | null
    Amphures?: AmphuresCreateNestedManyWithoutProvincesInput
  }

  export type ProvincesUncheckedCreateWithoutRegionInput = {
    id: Decimal | DecimalJsLike | number | string
    name_th?: string | null
    name_en?: string | null
    Amphures?: AmphuresUncheckedCreateNestedManyWithoutProvincesInput
  }

  export type ProvincesCreateOrConnectWithoutRegionInput = {
    where: ProvincesWhereUniqueInput
    create: XOR<ProvincesCreateWithoutRegionInput, ProvincesUncheckedCreateWithoutRegionInput>
  }

  export type ProvincesCreateManyRegionInputEnvelope = {
    data: ProvincesCreateManyRegionInput | ProvincesCreateManyRegionInput[]
    skipDuplicates?: boolean
  }

  export type ProvincesUpsertWithWhereUniqueWithoutRegionInput = {
    where: ProvincesWhereUniqueInput
    update: XOR<ProvincesUpdateWithoutRegionInput, ProvincesUncheckedUpdateWithoutRegionInput>
    create: XOR<ProvincesCreateWithoutRegionInput, ProvincesUncheckedCreateWithoutRegionInput>
  }

  export type ProvincesUpdateWithWhereUniqueWithoutRegionInput = {
    where: ProvincesWhereUniqueInput
    data: XOR<ProvincesUpdateWithoutRegionInput, ProvincesUncheckedUpdateWithoutRegionInput>
  }

  export type ProvincesUpdateManyWithWhereWithoutRegionInput = {
    where: ProvincesScalarWhereInput
    data: XOR<ProvincesUpdateManyMutationInput, ProvincesUncheckedUpdateManyWithoutRegionInput>
  }

  export type ProvincesScalarWhereInput = {
    AND?: ProvincesScalarWhereInput | ProvincesScalarWhereInput[]
    OR?: ProvincesScalarWhereInput[]
    NOT?: ProvincesScalarWhereInput | ProvincesScalarWhereInput[]
    id?: DecimalFilter<"Provinces"> | Decimal | DecimalJsLike | number | string
    name_th?: StringNullableFilter<"Provinces"> | string | null
    name_en?: StringNullableFilter<"Provinces"> | string | null
    geography_id?: DecimalNullableFilter<"Provinces"> | Decimal | DecimalJsLike | number | string | null
  }

  export type AmphuresCreateManyProvincesInput = {
    id: Decimal | DecimalJsLike | number | string
    name_th?: string | null
    name_en?: string | null
  }

  export type AmphuresUpdateWithoutProvincesInput = {
    id?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    name_th?: NullableStringFieldUpdateOperationsInput | string | null
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AmphuresUncheckedUpdateWithoutProvincesInput = {
    id?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    name_th?: NullableStringFieldUpdateOperationsInput | string | null
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AmphuresUncheckedUpdateManyWithoutProvincesInput = {
    id?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    name_th?: NullableStringFieldUpdateOperationsInput | string | null
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProvincesCreateManyRegionInput = {
    id: Decimal | DecimalJsLike | number | string
    name_th?: string | null
    name_en?: string | null
  }

  export type ProvincesUpdateWithoutRegionInput = {
    id?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    name_th?: NullableStringFieldUpdateOperationsInput | string | null
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    Amphures?: AmphuresUpdateManyWithoutProvincesNestedInput
  }

  export type ProvincesUncheckedUpdateWithoutRegionInput = {
    id?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    name_th?: NullableStringFieldUpdateOperationsInput | string | null
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
    Amphures?: AmphuresUncheckedUpdateManyWithoutProvincesNestedInput
  }

  export type ProvincesUncheckedUpdateManyWithoutRegionInput = {
    id?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    name_th?: NullableStringFieldUpdateOperationsInput | string | null
    name_en?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}