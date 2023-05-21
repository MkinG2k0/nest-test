
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = {
  id: number
  email: string
  name: string | null
}

/**
 * Model Tests
 * 
 */
export type Tests = {
  id: number
}

/**
 * Model Test
 * 
 */
export type Test = {
  id: number
  testsId: number | null
}

/**
 * Model ItemTest
 * 
 */
export type ItemTest = {
  id: number
  title: string
  testId: number | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.tests`: Exposes CRUD operations for the **Tests** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tests
    * const tests = await prisma.tests.findMany()
    * ```
    */
  get tests(): Prisma.TestsDelegate<GlobalReject>;

  /**
   * `prisma.test`: Exposes CRUD operations for the **Test** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tests
    * const tests = await prisma.test.findMany()
    * ```
    */
  get test(): Prisma.TestDelegate<GlobalReject>;

  /**
   * `prisma.itemTest`: Exposes CRUD operations for the **ItemTest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemTests
    * const itemTests = await prisma.itemTest.findMany()
    * ```
    */
  get itemTest(): Prisma.ItemTestDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 4.14.1
   * Query Engine version: d9a4c5988f480fa576d43970d5a23641aa77bc9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Tests: 'Tests',
    Test: 'Test',
    ItemTest: 'ItemTest'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TestsCountOutputType
   */


  export type TestsCountOutputType = {
    data: number
  }

  export type TestsCountOutputTypeSelect = {
    data?: boolean
  }

  export type TestsCountOutputTypeGetPayload<S extends boolean | null | undefined | TestsCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TestsCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (TestsCountOutputTypeArgs)
    ? TestsCountOutputType 
    : S extends { select: any } & (TestsCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TestsCountOutputType ? TestsCountOutputType[P] : never
  } 
      : TestsCountOutputType




  // Custom InputTypes

  /**
   * TestsCountOutputType without action
   */
  export type TestsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TestsCountOutputType
     */
    select?: TestsCountOutputTypeSelect | null
  }



  /**
   * Count Type TestCountOutputType
   */


  export type TestCountOutputType = {
    data: number
  }

  export type TestCountOutputTypeSelect = {
    data?: boolean
  }

  export type TestCountOutputTypeGetPayload<S extends boolean | null | undefined | TestCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TestCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (TestCountOutputTypeArgs)
    ? TestCountOutputType 
    : S extends { select: any } & (TestCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TestCountOutputType ? TestCountOutputType[P] : never
  } 
      : TestCountOutputType




  // Custom InputTypes

  /**
   * TestCountOutputType without action
   */
  export type TestCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TestCountOutputType
     */
    select?: TestCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
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
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    email?: boolean
    name?: boolean
  }


  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
  }



  /**
   * Model Tests
   */


  export type AggregateTests = {
    _count: TestsCountAggregateOutputType | null
    _avg: TestsAvgAggregateOutputType | null
    _sum: TestsSumAggregateOutputType | null
    _min: TestsMinAggregateOutputType | null
    _max: TestsMaxAggregateOutputType | null
  }

  export type TestsAvgAggregateOutputType = {
    id: number | null
  }

  export type TestsSumAggregateOutputType = {
    id: number | null
  }

  export type TestsMinAggregateOutputType = {
    id: number | null
  }

  export type TestsMaxAggregateOutputType = {
    id: number | null
  }

  export type TestsCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type TestsAvgAggregateInputType = {
    id?: true
  }

  export type TestsSumAggregateInputType = {
    id?: true
  }

  export type TestsMinAggregateInputType = {
    id?: true
  }

  export type TestsMaxAggregateInputType = {
    id?: true
  }

  export type TestsCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type TestsAggregateArgs = {
    /**
     * Filter which Tests to aggregate.
     */
    where?: TestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: Enumerable<TestsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tests
    **/
    _count?: true | TestsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestsMaxAggregateInputType
  }

  export type GetTestsAggregateType<T extends TestsAggregateArgs> = {
        [P in keyof T & keyof AggregateTests]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTests[P]>
      : GetScalarType<T[P], AggregateTests[P]>
  }




  export type TestsGroupByArgs = {
    where?: TestsWhereInput
    orderBy?: Enumerable<TestsOrderByWithAggregationInput>
    by: TestsScalarFieldEnum[]
    having?: TestsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestsCountAggregateInputType | true
    _avg?: TestsAvgAggregateInputType
    _sum?: TestsSumAggregateInputType
    _min?: TestsMinAggregateInputType
    _max?: TestsMaxAggregateInputType
  }


  export type TestsGroupByOutputType = {
    id: number
    _count: TestsCountAggregateOutputType | null
    _avg: TestsAvgAggregateOutputType | null
    _sum: TestsSumAggregateOutputType | null
    _min: TestsMinAggregateOutputType | null
    _max: TestsMaxAggregateOutputType | null
  }

  type GetTestsGroupByPayload<T extends TestsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TestsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestsGroupByOutputType[P]>
            : GetScalarType<T[P], TestsGroupByOutputType[P]>
        }
      >
    >


  export type TestsSelect = {
    id?: boolean
    data?: boolean | Tests$dataArgs
    _count?: boolean | TestsCountOutputTypeArgs
  }


  export type TestsInclude = {
    data?: boolean | Tests$dataArgs
    _count?: boolean | TestsCountOutputTypeArgs
  }

  export type TestsGetPayload<S extends boolean | null | undefined | TestsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Tests :
    S extends undefined ? never :
    S extends { include: any } & (TestsArgs | TestsFindManyArgs)
    ? Tests  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'data' ? Array < TestGetPayload<S['include'][P]>>  :
        P extends '_count' ? TestsCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TestsArgs | TestsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'data' ? Array < TestGetPayload<S['select'][P]>>  :
        P extends '_count' ? TestsCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Tests ? Tests[P] : never
  } 
      : Tests


  type TestsCountArgs = 
    Omit<TestsFindManyArgs, 'select' | 'include'> & {
      select?: TestsCountAggregateInputType | true
    }

  export interface TestsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Tests that matches the filter.
     * @param {TestsFindUniqueArgs} args - Arguments to find a Tests
     * @example
     * // Get one Tests
     * const tests = await prisma.tests.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TestsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TestsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Tests'> extends True ? Prisma__TestsClient<TestsGetPayload<T>> : Prisma__TestsClient<TestsGetPayload<T> | null, null>

    /**
     * Find one Tests that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TestsFindUniqueOrThrowArgs} args - Arguments to find a Tests
     * @example
     * // Get one Tests
     * const tests = await prisma.tests.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TestsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TestsFindUniqueOrThrowArgs>
    ): Prisma__TestsClient<TestsGetPayload<T>>

    /**
     * Find the first Tests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestsFindFirstArgs} args - Arguments to find a Tests
     * @example
     * // Get one Tests
     * const tests = await prisma.tests.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TestsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TestsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Tests'> extends True ? Prisma__TestsClient<TestsGetPayload<T>> : Prisma__TestsClient<TestsGetPayload<T> | null, null>

    /**
     * Find the first Tests that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestsFindFirstOrThrowArgs} args - Arguments to find a Tests
     * @example
     * // Get one Tests
     * const tests = await prisma.tests.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TestsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TestsFindFirstOrThrowArgs>
    ): Prisma__TestsClient<TestsGetPayload<T>>

    /**
     * Find zero or more Tests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tests
     * const tests = await prisma.tests.findMany()
     * 
     * // Get first 10 Tests
     * const tests = await prisma.tests.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testsWithIdOnly = await prisma.tests.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TestsFindManyArgs>(
      args?: SelectSubset<T, TestsFindManyArgs>
    ): Prisma.PrismaPromise<Array<TestsGetPayload<T>>>

    /**
     * Create a Tests.
     * @param {TestsCreateArgs} args - Arguments to create a Tests.
     * @example
     * // Create one Tests
     * const Tests = await prisma.tests.create({
     *   data: {
     *     // ... data to create a Tests
     *   }
     * })
     * 
    **/
    create<T extends TestsCreateArgs>(
      args: SelectSubset<T, TestsCreateArgs>
    ): Prisma__TestsClient<TestsGetPayload<T>>

    /**
     * Delete a Tests.
     * @param {TestsDeleteArgs} args - Arguments to delete one Tests.
     * @example
     * // Delete one Tests
     * const Tests = await prisma.tests.delete({
     *   where: {
     *     // ... filter to delete one Tests
     *   }
     * })
     * 
    **/
    delete<T extends TestsDeleteArgs>(
      args: SelectSubset<T, TestsDeleteArgs>
    ): Prisma__TestsClient<TestsGetPayload<T>>

    /**
     * Update one Tests.
     * @param {TestsUpdateArgs} args - Arguments to update one Tests.
     * @example
     * // Update one Tests
     * const tests = await prisma.tests.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TestsUpdateArgs>(
      args: SelectSubset<T, TestsUpdateArgs>
    ): Prisma__TestsClient<TestsGetPayload<T>>

    /**
     * Delete zero or more Tests.
     * @param {TestsDeleteManyArgs} args - Arguments to filter Tests to delete.
     * @example
     * // Delete a few Tests
     * const { count } = await prisma.tests.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TestsDeleteManyArgs>(
      args?: SelectSubset<T, TestsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tests
     * const tests = await prisma.tests.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TestsUpdateManyArgs>(
      args: SelectSubset<T, TestsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tests.
     * @param {TestsUpsertArgs} args - Arguments to update or create a Tests.
     * @example
     * // Update or create a Tests
     * const tests = await prisma.tests.upsert({
     *   create: {
     *     // ... data to create a Tests
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tests we want to update
     *   }
     * })
    **/
    upsert<T extends TestsUpsertArgs>(
      args: SelectSubset<T, TestsUpsertArgs>
    ): Prisma__TestsClient<TestsGetPayload<T>>

    /**
     * Count the number of Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestsCountArgs} args - Arguments to filter Tests to count.
     * @example
     * // Count the number of Tests
     * const count = await prisma.tests.count({
     *   where: {
     *     // ... the filter for the Tests we want to count
     *   }
     * })
    **/
    count<T extends TestsCountArgs>(
      args?: Subset<T, TestsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestsAggregateArgs>(args: Subset<T, TestsAggregateArgs>): Prisma.PrismaPromise<GetTestsAggregateType<T>>

    /**
     * Group by Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestsGroupByArgs} args - Group by arguments.
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
      T extends TestsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestsGroupByArgs['orderBy'] }
        : { orderBy?: TestsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TestsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Tests.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TestsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    data<T extends Tests$dataArgs= {}>(args?: Subset<T, Tests$dataArgs>): Prisma.PrismaPromise<Array<TestGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Tests base type for findUnique actions
   */
  export type TestsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Tests
     */
    select?: TestsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestsInclude | null
    /**
     * Filter, which Tests to fetch.
     */
    where: TestsWhereUniqueInput
  }

  /**
   * Tests findUnique
   */
  export interface TestsFindUniqueArgs extends TestsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Tests findUniqueOrThrow
   */
  export type TestsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Tests
     */
    select?: TestsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestsInclude | null
    /**
     * Filter, which Tests to fetch.
     */
    where: TestsWhereUniqueInput
  }


  /**
   * Tests base type for findFirst actions
   */
  export type TestsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Tests
     */
    select?: TestsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestsInclude | null
    /**
     * Filter, which Tests to fetch.
     */
    where?: TestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: Enumerable<TestsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
     */
    cursor?: TestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: Enumerable<TestsScalarFieldEnum>
  }

  /**
   * Tests findFirst
   */
  export interface TestsFindFirstArgs extends TestsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Tests findFirstOrThrow
   */
  export type TestsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Tests
     */
    select?: TestsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestsInclude | null
    /**
     * Filter, which Tests to fetch.
     */
    where?: TestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: Enumerable<TestsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
     */
    cursor?: TestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: Enumerable<TestsScalarFieldEnum>
  }


  /**
   * Tests findMany
   */
  export type TestsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Tests
     */
    select?: TestsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestsInclude | null
    /**
     * Filter, which Tests to fetch.
     */
    where?: TestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: Enumerable<TestsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tests.
     */
    cursor?: TestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    distinct?: Enumerable<TestsScalarFieldEnum>
  }


  /**
   * Tests create
   */
  export type TestsCreateArgs = {
    /**
     * Select specific fields to fetch from the Tests
     */
    select?: TestsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestsInclude | null
    /**
     * The data needed to create a Tests.
     */
    data: XOR<TestsCreateInput, TestsUncheckedCreateInput>
  }


  /**
   * Tests update
   */
  export type TestsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Tests
     */
    select?: TestsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestsInclude | null
    /**
     * The data needed to update a Tests.
     */
    data: XOR<TestsUpdateInput, TestsUncheckedUpdateInput>
    /**
     * Choose, which Tests to update.
     */
    where: TestsWhereUniqueInput
  }


  /**
   * Tests updateMany
   */
  export type TestsUpdateManyArgs = {
    /**
     * The data used to update Tests.
     */
    data: XOR<TestsUpdateManyMutationInput, TestsUncheckedUpdateManyInput>
    /**
     * Filter which Tests to update
     */
    where?: TestsWhereInput
  }


  /**
   * Tests upsert
   */
  export type TestsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Tests
     */
    select?: TestsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestsInclude | null
    /**
     * The filter to search for the Tests to update in case it exists.
     */
    where: TestsWhereUniqueInput
    /**
     * In case the Tests found by the `where` argument doesn't exist, create a new Tests with this data.
     */
    create: XOR<TestsCreateInput, TestsUncheckedCreateInput>
    /**
     * In case the Tests was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestsUpdateInput, TestsUncheckedUpdateInput>
  }


  /**
   * Tests delete
   */
  export type TestsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Tests
     */
    select?: TestsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestsInclude | null
    /**
     * Filter which Tests to delete.
     */
    where: TestsWhereUniqueInput
  }


  /**
   * Tests deleteMany
   */
  export type TestsDeleteManyArgs = {
    /**
     * Filter which Tests to delete
     */
    where?: TestsWhereInput
  }


  /**
   * Tests.data
   */
  export type Tests$dataArgs = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude | null
    where?: TestWhereInput
    orderBy?: Enumerable<TestOrderByWithRelationInput>
    cursor?: TestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TestScalarFieldEnum>
  }


  /**
   * Tests without action
   */
  export type TestsArgs = {
    /**
     * Select specific fields to fetch from the Tests
     */
    select?: TestsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestsInclude | null
  }



  /**
   * Model Test
   */


  export type AggregateTest = {
    _count: TestCountAggregateOutputType | null
    _avg: TestAvgAggregateOutputType | null
    _sum: TestSumAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  export type TestAvgAggregateOutputType = {
    id: number | null
    testsId: number | null
  }

  export type TestSumAggregateOutputType = {
    id: number | null
    testsId: number | null
  }

  export type TestMinAggregateOutputType = {
    id: number | null
    testsId: number | null
  }

  export type TestMaxAggregateOutputType = {
    id: number | null
    testsId: number | null
  }

  export type TestCountAggregateOutputType = {
    id: number
    testsId: number
    _all: number
  }


  export type TestAvgAggregateInputType = {
    id?: true
    testsId?: true
  }

  export type TestSumAggregateInputType = {
    id?: true
    testsId?: true
  }

  export type TestMinAggregateInputType = {
    id?: true
    testsId?: true
  }

  export type TestMaxAggregateInputType = {
    id?: true
    testsId?: true
  }

  export type TestCountAggregateInputType = {
    id?: true
    testsId?: true
    _all?: true
  }

  export type TestAggregateArgs = {
    /**
     * Filter which Test to aggregate.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: Enumerable<TestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tests
    **/
    _count?: true | TestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestMaxAggregateInputType
  }

  export type GetTestAggregateType<T extends TestAggregateArgs> = {
        [P in keyof T & keyof AggregateTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest[P]>
      : GetScalarType<T[P], AggregateTest[P]>
  }




  export type TestGroupByArgs = {
    where?: TestWhereInput
    orderBy?: Enumerable<TestOrderByWithAggregationInput>
    by: TestScalarFieldEnum[]
    having?: TestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestCountAggregateInputType | true
    _avg?: TestAvgAggregateInputType
    _sum?: TestSumAggregateInputType
    _min?: TestMinAggregateInputType
    _max?: TestMaxAggregateInputType
  }


  export type TestGroupByOutputType = {
    id: number
    testsId: number | null
    _count: TestCountAggregateOutputType | null
    _avg: TestAvgAggregateOutputType | null
    _sum: TestSumAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  type GetTestGroupByPayload<T extends TestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestGroupByOutputType[P]>
            : GetScalarType<T[P], TestGroupByOutputType[P]>
        }
      >
    >


  export type TestSelect = {
    id?: boolean
    testsId?: boolean
    data?: boolean | Test$dataArgs
    Tests?: boolean | TestsArgs
    _count?: boolean | TestCountOutputTypeArgs
  }


  export type TestInclude = {
    data?: boolean | Test$dataArgs
    Tests?: boolean | TestsArgs
    _count?: boolean | TestCountOutputTypeArgs
  }

  export type TestGetPayload<S extends boolean | null | undefined | TestArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Test :
    S extends undefined ? never :
    S extends { include: any } & (TestArgs | TestFindManyArgs)
    ? Test  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'data' ? Array < ItemTestGetPayload<S['include'][P]>>  :
        P extends 'Tests' ? TestsGetPayload<S['include'][P]> | null :
        P extends '_count' ? TestCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TestArgs | TestFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'data' ? Array < ItemTestGetPayload<S['select'][P]>>  :
        P extends 'Tests' ? TestsGetPayload<S['select'][P]> | null :
        P extends '_count' ? TestCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Test ? Test[P] : never
  } 
      : Test


  type TestCountArgs = 
    Omit<TestFindManyArgs, 'select' | 'include'> & {
      select?: TestCountAggregateInputType | true
    }

  export interface TestDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Test that matches the filter.
     * @param {TestFindUniqueArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TestFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TestFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Test'> extends True ? Prisma__TestClient<TestGetPayload<T>> : Prisma__TestClient<TestGetPayload<T> | null, null>

    /**
     * Find one Test that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TestFindUniqueOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TestFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TestFindUniqueOrThrowArgs>
    ): Prisma__TestClient<TestGetPayload<T>>

    /**
     * Find the first Test that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindFirstArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TestFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TestFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Test'> extends True ? Prisma__TestClient<TestGetPayload<T>> : Prisma__TestClient<TestGetPayload<T> | null, null>

    /**
     * Find the first Test that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindFirstOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TestFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TestFindFirstOrThrowArgs>
    ): Prisma__TestClient<TestGetPayload<T>>

    /**
     * Find zero or more Tests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tests
     * const tests = await prisma.test.findMany()
     * 
     * // Get first 10 Tests
     * const tests = await prisma.test.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testWithIdOnly = await prisma.test.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TestFindManyArgs>(
      args?: SelectSubset<T, TestFindManyArgs>
    ): Prisma.PrismaPromise<Array<TestGetPayload<T>>>

    /**
     * Create a Test.
     * @param {TestCreateArgs} args - Arguments to create a Test.
     * @example
     * // Create one Test
     * const Test = await prisma.test.create({
     *   data: {
     *     // ... data to create a Test
     *   }
     * })
     * 
    **/
    create<T extends TestCreateArgs>(
      args: SelectSubset<T, TestCreateArgs>
    ): Prisma__TestClient<TestGetPayload<T>>

    /**
     * Delete a Test.
     * @param {TestDeleteArgs} args - Arguments to delete one Test.
     * @example
     * // Delete one Test
     * const Test = await prisma.test.delete({
     *   where: {
     *     // ... filter to delete one Test
     *   }
     * })
     * 
    **/
    delete<T extends TestDeleteArgs>(
      args: SelectSubset<T, TestDeleteArgs>
    ): Prisma__TestClient<TestGetPayload<T>>

    /**
     * Update one Test.
     * @param {TestUpdateArgs} args - Arguments to update one Test.
     * @example
     * // Update one Test
     * const test = await prisma.test.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TestUpdateArgs>(
      args: SelectSubset<T, TestUpdateArgs>
    ): Prisma__TestClient<TestGetPayload<T>>

    /**
     * Delete zero or more Tests.
     * @param {TestDeleteManyArgs} args - Arguments to filter Tests to delete.
     * @example
     * // Delete a few Tests
     * const { count } = await prisma.test.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TestDeleteManyArgs>(
      args?: SelectSubset<T, TestDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tests
     * const test = await prisma.test.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TestUpdateManyArgs>(
      args: SelectSubset<T, TestUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Test.
     * @param {TestUpsertArgs} args - Arguments to update or create a Test.
     * @example
     * // Update or create a Test
     * const test = await prisma.test.upsert({
     *   create: {
     *     // ... data to create a Test
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test we want to update
     *   }
     * })
    **/
    upsert<T extends TestUpsertArgs>(
      args: SelectSubset<T, TestUpsertArgs>
    ): Prisma__TestClient<TestGetPayload<T>>

    /**
     * Count the number of Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCountArgs} args - Arguments to filter Tests to count.
     * @example
     * // Count the number of Tests
     * const count = await prisma.test.count({
     *   where: {
     *     // ... the filter for the Tests we want to count
     *   }
     * })
    **/
    count<T extends TestCountArgs>(
      args?: Subset<T, TestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestAggregateArgs>(args: Subset<T, TestAggregateArgs>): Prisma.PrismaPromise<GetTestAggregateType<T>>

    /**
     * Group by Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestGroupByArgs} args - Group by arguments.
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
      T extends TestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestGroupByArgs['orderBy'] }
        : { orderBy?: TestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Test.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TestClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    data<T extends Test$dataArgs= {}>(args?: Subset<T, Test$dataArgs>): Prisma.PrismaPromise<Array<ItemTestGetPayload<T>>| Null>;

    Tests<T extends TestsArgs= {}>(args?: Subset<T, TestsArgs>): Prisma__TestsClient<TestsGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Test base type for findUnique actions
   */
  export type TestFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude | null
    /**
     * Filter, which Test to fetch.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test findUnique
   */
  export interface TestFindUniqueArgs extends TestFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Test findUniqueOrThrow
   */
  export type TestFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude | null
    /**
     * Filter, which Test to fetch.
     */
    where: TestWhereUniqueInput
  }


  /**
   * Test base type for findFirst actions
   */
  export type TestFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude | null
    /**
     * Filter, which Test to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: Enumerable<TestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: Enumerable<TestScalarFieldEnum>
  }

  /**
   * Test findFirst
   */
  export interface TestFindFirstArgs extends TestFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Test findFirstOrThrow
   */
  export type TestFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude | null
    /**
     * Filter, which Test to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: Enumerable<TestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: Enumerable<TestScalarFieldEnum>
  }


  /**
   * Test findMany
   */
  export type TestFindManyArgs = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude | null
    /**
     * Filter, which Tests to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: Enumerable<TestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    distinct?: Enumerable<TestScalarFieldEnum>
  }


  /**
   * Test create
   */
  export type TestCreateArgs = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude | null
    /**
     * The data needed to create a Test.
     */
    data: XOR<TestCreateInput, TestUncheckedCreateInput>
  }


  /**
   * Test update
   */
  export type TestUpdateArgs = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude | null
    /**
     * The data needed to update a Test.
     */
    data: XOR<TestUpdateInput, TestUncheckedUpdateInput>
    /**
     * Choose, which Test to update.
     */
    where: TestWhereUniqueInput
  }


  /**
   * Test updateMany
   */
  export type TestUpdateManyArgs = {
    /**
     * The data used to update Tests.
     */
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyInput>
    /**
     * Filter which Tests to update
     */
    where?: TestWhereInput
  }


  /**
   * Test upsert
   */
  export type TestUpsertArgs = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude | null
    /**
     * The filter to search for the Test to update in case it exists.
     */
    where: TestWhereUniqueInput
    /**
     * In case the Test found by the `where` argument doesn't exist, create a new Test with this data.
     */
    create: XOR<TestCreateInput, TestUncheckedCreateInput>
    /**
     * In case the Test was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestUpdateInput, TestUncheckedUpdateInput>
  }


  /**
   * Test delete
   */
  export type TestDeleteArgs = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude | null
    /**
     * Filter which Test to delete.
     */
    where: TestWhereUniqueInput
  }


  /**
   * Test deleteMany
   */
  export type TestDeleteManyArgs = {
    /**
     * Filter which Tests to delete
     */
    where?: TestWhereInput
  }


  /**
   * Test.data
   */
  export type Test$dataArgs = {
    /**
     * Select specific fields to fetch from the ItemTest
     */
    select?: ItemTestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemTestInclude | null
    where?: ItemTestWhereInput
    orderBy?: Enumerable<ItemTestOrderByWithRelationInput>
    cursor?: ItemTestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ItemTestScalarFieldEnum>
  }


  /**
   * Test without action
   */
  export type TestArgs = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude | null
  }



  /**
   * Model ItemTest
   */


  export type AggregateItemTest = {
    _count: ItemTestCountAggregateOutputType | null
    _avg: ItemTestAvgAggregateOutputType | null
    _sum: ItemTestSumAggregateOutputType | null
    _min: ItemTestMinAggregateOutputType | null
    _max: ItemTestMaxAggregateOutputType | null
  }

  export type ItemTestAvgAggregateOutputType = {
    id: number | null
    testId: number | null
  }

  export type ItemTestSumAggregateOutputType = {
    id: number | null
    testId: number | null
  }

  export type ItemTestMinAggregateOutputType = {
    id: number | null
    title: string | null
    testId: number | null
  }

  export type ItemTestMaxAggregateOutputType = {
    id: number | null
    title: string | null
    testId: number | null
  }

  export type ItemTestCountAggregateOutputType = {
    id: number
    title: number
    testId: number
    _all: number
  }


  export type ItemTestAvgAggregateInputType = {
    id?: true
    testId?: true
  }

  export type ItemTestSumAggregateInputType = {
    id?: true
    testId?: true
  }

  export type ItemTestMinAggregateInputType = {
    id?: true
    title?: true
    testId?: true
  }

  export type ItemTestMaxAggregateInputType = {
    id?: true
    title?: true
    testId?: true
  }

  export type ItemTestCountAggregateInputType = {
    id?: true
    title?: true
    testId?: true
    _all?: true
  }

  export type ItemTestAggregateArgs = {
    /**
     * Filter which ItemTest to aggregate.
     */
    where?: ItemTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemTests to fetch.
     */
    orderBy?: Enumerable<ItemTestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemTests
    **/
    _count?: true | ItemTestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemTestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemTestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemTestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemTestMaxAggregateInputType
  }

  export type GetItemTestAggregateType<T extends ItemTestAggregateArgs> = {
        [P in keyof T & keyof AggregateItemTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemTest[P]>
      : GetScalarType<T[P], AggregateItemTest[P]>
  }




  export type ItemTestGroupByArgs = {
    where?: ItemTestWhereInput
    orderBy?: Enumerable<ItemTestOrderByWithAggregationInput>
    by: ItemTestScalarFieldEnum[]
    having?: ItemTestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemTestCountAggregateInputType | true
    _avg?: ItemTestAvgAggregateInputType
    _sum?: ItemTestSumAggregateInputType
    _min?: ItemTestMinAggregateInputType
    _max?: ItemTestMaxAggregateInputType
  }


  export type ItemTestGroupByOutputType = {
    id: number
    title: string
    testId: number | null
    _count: ItemTestCountAggregateOutputType | null
    _avg: ItemTestAvgAggregateOutputType | null
    _sum: ItemTestSumAggregateOutputType | null
    _min: ItemTestMinAggregateOutputType | null
    _max: ItemTestMaxAggregateOutputType | null
  }

  type GetItemTestGroupByPayload<T extends ItemTestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ItemTestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemTestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemTestGroupByOutputType[P]>
            : GetScalarType<T[P], ItemTestGroupByOutputType[P]>
        }
      >
    >


  export type ItemTestSelect = {
    id?: boolean
    title?: boolean
    testId?: boolean
    Test?: boolean | TestArgs
  }


  export type ItemTestInclude = {
    Test?: boolean | TestArgs
  }

  export type ItemTestGetPayload<S extends boolean | null | undefined | ItemTestArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ItemTest :
    S extends undefined ? never :
    S extends { include: any } & (ItemTestArgs | ItemTestFindManyArgs)
    ? ItemTest  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Test' ? TestGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (ItemTestArgs | ItemTestFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Test' ? TestGetPayload<S['select'][P]> | null :  P extends keyof ItemTest ? ItemTest[P] : never
  } 
      : ItemTest


  type ItemTestCountArgs = 
    Omit<ItemTestFindManyArgs, 'select' | 'include'> & {
      select?: ItemTestCountAggregateInputType | true
    }

  export interface ItemTestDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one ItemTest that matches the filter.
     * @param {ItemTestFindUniqueArgs} args - Arguments to find a ItemTest
     * @example
     * // Get one ItemTest
     * const itemTest = await prisma.itemTest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ItemTestFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ItemTestFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ItemTest'> extends True ? Prisma__ItemTestClient<ItemTestGetPayload<T>> : Prisma__ItemTestClient<ItemTestGetPayload<T> | null, null>

    /**
     * Find one ItemTest that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ItemTestFindUniqueOrThrowArgs} args - Arguments to find a ItemTest
     * @example
     * // Get one ItemTest
     * const itemTest = await prisma.itemTest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ItemTestFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ItemTestFindUniqueOrThrowArgs>
    ): Prisma__ItemTestClient<ItemTestGetPayload<T>>

    /**
     * Find the first ItemTest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemTestFindFirstArgs} args - Arguments to find a ItemTest
     * @example
     * // Get one ItemTest
     * const itemTest = await prisma.itemTest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ItemTestFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ItemTestFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ItemTest'> extends True ? Prisma__ItemTestClient<ItemTestGetPayload<T>> : Prisma__ItemTestClient<ItemTestGetPayload<T> | null, null>

    /**
     * Find the first ItemTest that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemTestFindFirstOrThrowArgs} args - Arguments to find a ItemTest
     * @example
     * // Get one ItemTest
     * const itemTest = await prisma.itemTest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ItemTestFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ItemTestFindFirstOrThrowArgs>
    ): Prisma__ItemTestClient<ItemTestGetPayload<T>>

    /**
     * Find zero or more ItemTests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemTestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemTests
     * const itemTests = await prisma.itemTest.findMany()
     * 
     * // Get first 10 ItemTests
     * const itemTests = await prisma.itemTest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemTestWithIdOnly = await prisma.itemTest.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ItemTestFindManyArgs>(
      args?: SelectSubset<T, ItemTestFindManyArgs>
    ): Prisma.PrismaPromise<Array<ItemTestGetPayload<T>>>

    /**
     * Create a ItemTest.
     * @param {ItemTestCreateArgs} args - Arguments to create a ItemTest.
     * @example
     * // Create one ItemTest
     * const ItemTest = await prisma.itemTest.create({
     *   data: {
     *     // ... data to create a ItemTest
     *   }
     * })
     * 
    **/
    create<T extends ItemTestCreateArgs>(
      args: SelectSubset<T, ItemTestCreateArgs>
    ): Prisma__ItemTestClient<ItemTestGetPayload<T>>

    /**
     * Delete a ItemTest.
     * @param {ItemTestDeleteArgs} args - Arguments to delete one ItemTest.
     * @example
     * // Delete one ItemTest
     * const ItemTest = await prisma.itemTest.delete({
     *   where: {
     *     // ... filter to delete one ItemTest
     *   }
     * })
     * 
    **/
    delete<T extends ItemTestDeleteArgs>(
      args: SelectSubset<T, ItemTestDeleteArgs>
    ): Prisma__ItemTestClient<ItemTestGetPayload<T>>

    /**
     * Update one ItemTest.
     * @param {ItemTestUpdateArgs} args - Arguments to update one ItemTest.
     * @example
     * // Update one ItemTest
     * const itemTest = await prisma.itemTest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ItemTestUpdateArgs>(
      args: SelectSubset<T, ItemTestUpdateArgs>
    ): Prisma__ItemTestClient<ItemTestGetPayload<T>>

    /**
     * Delete zero or more ItemTests.
     * @param {ItemTestDeleteManyArgs} args - Arguments to filter ItemTests to delete.
     * @example
     * // Delete a few ItemTests
     * const { count } = await prisma.itemTest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ItemTestDeleteManyArgs>(
      args?: SelectSubset<T, ItemTestDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemTestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemTests
     * const itemTest = await prisma.itemTest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ItemTestUpdateManyArgs>(
      args: SelectSubset<T, ItemTestUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ItemTest.
     * @param {ItemTestUpsertArgs} args - Arguments to update or create a ItemTest.
     * @example
     * // Update or create a ItemTest
     * const itemTest = await prisma.itemTest.upsert({
     *   create: {
     *     // ... data to create a ItemTest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemTest we want to update
     *   }
     * })
    **/
    upsert<T extends ItemTestUpsertArgs>(
      args: SelectSubset<T, ItemTestUpsertArgs>
    ): Prisma__ItemTestClient<ItemTestGetPayload<T>>

    /**
     * Count the number of ItemTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemTestCountArgs} args - Arguments to filter ItemTests to count.
     * @example
     * // Count the number of ItemTests
     * const count = await prisma.itemTest.count({
     *   where: {
     *     // ... the filter for the ItemTests we want to count
     *   }
     * })
    **/
    count<T extends ItemTestCountArgs>(
      args?: Subset<T, ItemTestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemTestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemTestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemTestAggregateArgs>(args: Subset<T, ItemTestAggregateArgs>): Prisma.PrismaPromise<GetItemTestAggregateType<T>>

    /**
     * Group by ItemTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemTestGroupByArgs} args - Group by arguments.
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
      T extends ItemTestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemTestGroupByArgs['orderBy'] }
        : { orderBy?: ItemTestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ItemTestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemTest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ItemTestClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Test<T extends TestArgs= {}>(args?: Subset<T, TestArgs>): Prisma__TestClient<TestGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ItemTest base type for findUnique actions
   */
  export type ItemTestFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ItemTest
     */
    select?: ItemTestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemTestInclude | null
    /**
     * Filter, which ItemTest to fetch.
     */
    where: ItemTestWhereUniqueInput
  }

  /**
   * ItemTest findUnique
   */
  export interface ItemTestFindUniqueArgs extends ItemTestFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ItemTest findUniqueOrThrow
   */
  export type ItemTestFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ItemTest
     */
    select?: ItemTestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemTestInclude | null
    /**
     * Filter, which ItemTest to fetch.
     */
    where: ItemTestWhereUniqueInput
  }


  /**
   * ItemTest base type for findFirst actions
   */
  export type ItemTestFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ItemTest
     */
    select?: ItemTestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemTestInclude | null
    /**
     * Filter, which ItemTest to fetch.
     */
    where?: ItemTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemTests to fetch.
     */
    orderBy?: Enumerable<ItemTestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemTests.
     */
    cursor?: ItemTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemTests.
     */
    distinct?: Enumerable<ItemTestScalarFieldEnum>
  }

  /**
   * ItemTest findFirst
   */
  export interface ItemTestFindFirstArgs extends ItemTestFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ItemTest findFirstOrThrow
   */
  export type ItemTestFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ItemTest
     */
    select?: ItemTestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemTestInclude | null
    /**
     * Filter, which ItemTest to fetch.
     */
    where?: ItemTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemTests to fetch.
     */
    orderBy?: Enumerable<ItemTestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemTests.
     */
    cursor?: ItemTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemTests.
     */
    distinct?: Enumerable<ItemTestScalarFieldEnum>
  }


  /**
   * ItemTest findMany
   */
  export type ItemTestFindManyArgs = {
    /**
     * Select specific fields to fetch from the ItemTest
     */
    select?: ItemTestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemTestInclude | null
    /**
     * Filter, which ItemTests to fetch.
     */
    where?: ItemTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemTests to fetch.
     */
    orderBy?: Enumerable<ItemTestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemTests.
     */
    cursor?: ItemTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemTests.
     */
    skip?: number
    distinct?: Enumerable<ItemTestScalarFieldEnum>
  }


  /**
   * ItemTest create
   */
  export type ItemTestCreateArgs = {
    /**
     * Select specific fields to fetch from the ItemTest
     */
    select?: ItemTestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemTestInclude | null
    /**
     * The data needed to create a ItemTest.
     */
    data: XOR<ItemTestCreateInput, ItemTestUncheckedCreateInput>
  }


  /**
   * ItemTest update
   */
  export type ItemTestUpdateArgs = {
    /**
     * Select specific fields to fetch from the ItemTest
     */
    select?: ItemTestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemTestInclude | null
    /**
     * The data needed to update a ItemTest.
     */
    data: XOR<ItemTestUpdateInput, ItemTestUncheckedUpdateInput>
    /**
     * Choose, which ItemTest to update.
     */
    where: ItemTestWhereUniqueInput
  }


  /**
   * ItemTest updateMany
   */
  export type ItemTestUpdateManyArgs = {
    /**
     * The data used to update ItemTests.
     */
    data: XOR<ItemTestUpdateManyMutationInput, ItemTestUncheckedUpdateManyInput>
    /**
     * Filter which ItemTests to update
     */
    where?: ItemTestWhereInput
  }


  /**
   * ItemTest upsert
   */
  export type ItemTestUpsertArgs = {
    /**
     * Select specific fields to fetch from the ItemTest
     */
    select?: ItemTestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemTestInclude | null
    /**
     * The filter to search for the ItemTest to update in case it exists.
     */
    where: ItemTestWhereUniqueInput
    /**
     * In case the ItemTest found by the `where` argument doesn't exist, create a new ItemTest with this data.
     */
    create: XOR<ItemTestCreateInput, ItemTestUncheckedCreateInput>
    /**
     * In case the ItemTest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemTestUpdateInput, ItemTestUncheckedUpdateInput>
  }


  /**
   * ItemTest delete
   */
  export type ItemTestDeleteArgs = {
    /**
     * Select specific fields to fetch from the ItemTest
     */
    select?: ItemTestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemTestInclude | null
    /**
     * Filter which ItemTest to delete.
     */
    where: ItemTestWhereUniqueInput
  }


  /**
   * ItemTest deleteMany
   */
  export type ItemTestDeleteManyArgs = {
    /**
     * Filter which ItemTests to delete
     */
    where?: ItemTestWhereInput
  }


  /**
   * ItemTest without action
   */
  export type ItemTestArgs = {
    /**
     * Select specific fields to fetch from the ItemTest
     */
    select?: ItemTestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemTestInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const ItemTestScalarFieldEnum: {
    id: 'id',
    title: 'title',
    testId: 'testId'
  };

  export type ItemTestScalarFieldEnum = (typeof ItemTestScalarFieldEnum)[keyof typeof ItemTestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TestScalarFieldEnum: {
    id: 'id',
    testsId: 'testsId'
  };

  export type TestScalarFieldEnum = (typeof TestScalarFieldEnum)[keyof typeof TestScalarFieldEnum]


  export const TestsScalarFieldEnum: {
    id: 'id'
  };

  export type TestsScalarFieldEnum = (typeof TestsScalarFieldEnum)[keyof typeof TestsScalarFieldEnum]


  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    email?: StringFilter | string
    name?: StringNullableFilter | string | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type UserWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    email?: StringWithAggregatesFilter | string
    name?: StringNullableWithAggregatesFilter | string | null
  }

  export type TestsWhereInput = {
    AND?: Enumerable<TestsWhereInput>
    OR?: Enumerable<TestsWhereInput>
    NOT?: Enumerable<TestsWhereInput>
    id?: IntFilter | number
    data?: TestListRelationFilter
  }

  export type TestsOrderByWithRelationInput = {
    id?: SortOrder
    data?: TestOrderByRelationAggregateInput
  }

  export type TestsWhereUniqueInput = {
    id?: number
  }

  export type TestsOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: TestsCountOrderByAggregateInput
    _avg?: TestsAvgOrderByAggregateInput
    _max?: TestsMaxOrderByAggregateInput
    _min?: TestsMinOrderByAggregateInput
    _sum?: TestsSumOrderByAggregateInput
  }

  export type TestsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TestsScalarWhereWithAggregatesInput>
    OR?: Enumerable<TestsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TestsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
  }

  export type TestWhereInput = {
    AND?: Enumerable<TestWhereInput>
    OR?: Enumerable<TestWhereInput>
    NOT?: Enumerable<TestWhereInput>
    id?: IntFilter | number
    testsId?: IntNullableFilter | number | null
    data?: ItemTestListRelationFilter
    Tests?: XOR<TestsRelationFilter, TestsWhereInput> | null
  }

  export type TestOrderByWithRelationInput = {
    id?: SortOrder
    testsId?: SortOrder
    data?: ItemTestOrderByRelationAggregateInput
    Tests?: TestsOrderByWithRelationInput
  }

  export type TestWhereUniqueInput = {
    id?: number
  }

  export type TestOrderByWithAggregationInput = {
    id?: SortOrder
    testsId?: SortOrder
    _count?: TestCountOrderByAggregateInput
    _avg?: TestAvgOrderByAggregateInput
    _max?: TestMaxOrderByAggregateInput
    _min?: TestMinOrderByAggregateInput
    _sum?: TestSumOrderByAggregateInput
  }

  export type TestScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TestScalarWhereWithAggregatesInput>
    OR?: Enumerable<TestScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TestScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    testsId?: IntNullableWithAggregatesFilter | number | null
  }

  export type ItemTestWhereInput = {
    AND?: Enumerable<ItemTestWhereInput>
    OR?: Enumerable<ItemTestWhereInput>
    NOT?: Enumerable<ItemTestWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    testId?: IntNullableFilter | number | null
    Test?: XOR<TestRelationFilter, TestWhereInput> | null
  }

  export type ItemTestOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    testId?: SortOrder
    Test?: TestOrderByWithRelationInput
  }

  export type ItemTestWhereUniqueInput = {
    id?: number
  }

  export type ItemTestOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    testId?: SortOrder
    _count?: ItemTestCountOrderByAggregateInput
    _avg?: ItemTestAvgOrderByAggregateInput
    _max?: ItemTestMaxOrderByAggregateInput
    _min?: ItemTestMinOrderByAggregateInput
    _sum?: ItemTestSumOrderByAggregateInput
  }

  export type ItemTestScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ItemTestScalarWhereWithAggregatesInput>
    OR?: Enumerable<ItemTestScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ItemTestScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    testId?: IntNullableWithAggregatesFilter | number | null
  }

  export type UserCreateInput = {
    email: string
    name?: string | null
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name?: string | null
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TestsCreateInput = {
    data?: TestCreateNestedManyWithoutTestsInput
  }

  export type TestsUncheckedCreateInput = {
    id?: number
    data?: TestUncheckedCreateNestedManyWithoutTestsInput
  }

  export type TestsUpdateInput = {
    data?: TestUpdateManyWithoutTestsNestedInput
  }

  export type TestsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: TestUncheckedUpdateManyWithoutTestsNestedInput
  }

  export type TestsUpdateManyMutationInput = {

  }

  export type TestsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type TestCreateInput = {
    data?: ItemTestCreateNestedManyWithoutTestInput
    Tests?: TestsCreateNestedOneWithoutDataInput
  }

  export type TestUncheckedCreateInput = {
    id?: number
    testsId?: number | null
    data?: ItemTestUncheckedCreateNestedManyWithoutTestInput
  }

  export type TestUpdateInput = {
    data?: ItemTestUpdateManyWithoutTestNestedInput
    Tests?: TestsUpdateOneWithoutDataNestedInput
  }

  export type TestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    testsId?: NullableIntFieldUpdateOperationsInput | number | null
    data?: ItemTestUncheckedUpdateManyWithoutTestNestedInput
  }

  export type TestUpdateManyMutationInput = {

  }

  export type TestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    testsId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ItemTestCreateInput = {
    title: string
    Test?: TestCreateNestedOneWithoutDataInput
  }

  export type ItemTestUncheckedCreateInput = {
    id?: number
    title: string
    testId?: number | null
  }

  export type ItemTestUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    Test?: TestUpdateOneWithoutDataNestedInput
  }

  export type ItemTestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    testId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ItemTestUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type ItemTestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    testId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type TestListRelationFilter = {
    every?: TestWhereInput
    some?: TestWhereInput
    none?: TestWhereInput
  }

  export type TestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TestsCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TestsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TestsMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TestsMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TestsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type ItemTestListRelationFilter = {
    every?: ItemTestWhereInput
    some?: ItemTestWhereInput
    none?: ItemTestWhereInput
  }

  export type TestsRelationFilter = {
    is?: TestsWhereInput | null
    isNot?: TestsWhereInput | null
  }

  export type ItemTestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TestCountOrderByAggregateInput = {
    id?: SortOrder
    testsId?: SortOrder
  }

  export type TestAvgOrderByAggregateInput = {
    id?: SortOrder
    testsId?: SortOrder
  }

  export type TestMaxOrderByAggregateInput = {
    id?: SortOrder
    testsId?: SortOrder
  }

  export type TestMinOrderByAggregateInput = {
    id?: SortOrder
    testsId?: SortOrder
  }

  export type TestSumOrderByAggregateInput = {
    id?: SortOrder
    testsId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type TestRelationFilter = {
    is?: TestWhereInput | null
    isNot?: TestWhereInput | null
  }

  export type ItemTestCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    testId?: SortOrder
  }

  export type ItemTestAvgOrderByAggregateInput = {
    id?: SortOrder
    testId?: SortOrder
  }

  export type ItemTestMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    testId?: SortOrder
  }

  export type ItemTestMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    testId?: SortOrder
  }

  export type ItemTestSumOrderByAggregateInput = {
    id?: SortOrder
    testId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TestCreateNestedManyWithoutTestsInput = {
    create?: XOR<Enumerable<TestCreateWithoutTestsInput>, Enumerable<TestUncheckedCreateWithoutTestsInput>>
    connectOrCreate?: Enumerable<TestCreateOrConnectWithoutTestsInput>
    connect?: Enumerable<TestWhereUniqueInput>
  }

  export type TestUncheckedCreateNestedManyWithoutTestsInput = {
    create?: XOR<Enumerable<TestCreateWithoutTestsInput>, Enumerable<TestUncheckedCreateWithoutTestsInput>>
    connectOrCreate?: Enumerable<TestCreateOrConnectWithoutTestsInput>
    connect?: Enumerable<TestWhereUniqueInput>
  }

  export type TestUpdateManyWithoutTestsNestedInput = {
    create?: XOR<Enumerable<TestCreateWithoutTestsInput>, Enumerable<TestUncheckedCreateWithoutTestsInput>>
    connectOrCreate?: Enumerable<TestCreateOrConnectWithoutTestsInput>
    upsert?: Enumerable<TestUpsertWithWhereUniqueWithoutTestsInput>
    set?: Enumerable<TestWhereUniqueInput>
    disconnect?: Enumerable<TestWhereUniqueInput>
    delete?: Enumerable<TestWhereUniqueInput>
    connect?: Enumerable<TestWhereUniqueInput>
    update?: Enumerable<TestUpdateWithWhereUniqueWithoutTestsInput>
    updateMany?: Enumerable<TestUpdateManyWithWhereWithoutTestsInput>
    deleteMany?: Enumerable<TestScalarWhereInput>
  }

  export type TestUncheckedUpdateManyWithoutTestsNestedInput = {
    create?: XOR<Enumerable<TestCreateWithoutTestsInput>, Enumerable<TestUncheckedCreateWithoutTestsInput>>
    connectOrCreate?: Enumerable<TestCreateOrConnectWithoutTestsInput>
    upsert?: Enumerable<TestUpsertWithWhereUniqueWithoutTestsInput>
    set?: Enumerable<TestWhereUniqueInput>
    disconnect?: Enumerable<TestWhereUniqueInput>
    delete?: Enumerable<TestWhereUniqueInput>
    connect?: Enumerable<TestWhereUniqueInput>
    update?: Enumerable<TestUpdateWithWhereUniqueWithoutTestsInput>
    updateMany?: Enumerable<TestUpdateManyWithWhereWithoutTestsInput>
    deleteMany?: Enumerable<TestScalarWhereInput>
  }

  export type ItemTestCreateNestedManyWithoutTestInput = {
    create?: XOR<Enumerable<ItemTestCreateWithoutTestInput>, Enumerable<ItemTestUncheckedCreateWithoutTestInput>>
    connectOrCreate?: Enumerable<ItemTestCreateOrConnectWithoutTestInput>
    connect?: Enumerable<ItemTestWhereUniqueInput>
  }

  export type TestsCreateNestedOneWithoutDataInput = {
    create?: XOR<TestsCreateWithoutDataInput, TestsUncheckedCreateWithoutDataInput>
    connectOrCreate?: TestsCreateOrConnectWithoutDataInput
    connect?: TestsWhereUniqueInput
  }

  export type ItemTestUncheckedCreateNestedManyWithoutTestInput = {
    create?: XOR<Enumerable<ItemTestCreateWithoutTestInput>, Enumerable<ItemTestUncheckedCreateWithoutTestInput>>
    connectOrCreate?: Enumerable<ItemTestCreateOrConnectWithoutTestInput>
    connect?: Enumerable<ItemTestWhereUniqueInput>
  }

  export type ItemTestUpdateManyWithoutTestNestedInput = {
    create?: XOR<Enumerable<ItemTestCreateWithoutTestInput>, Enumerable<ItemTestUncheckedCreateWithoutTestInput>>
    connectOrCreate?: Enumerable<ItemTestCreateOrConnectWithoutTestInput>
    upsert?: Enumerable<ItemTestUpsertWithWhereUniqueWithoutTestInput>
    set?: Enumerable<ItemTestWhereUniqueInput>
    disconnect?: Enumerable<ItemTestWhereUniqueInput>
    delete?: Enumerable<ItemTestWhereUniqueInput>
    connect?: Enumerable<ItemTestWhereUniqueInput>
    update?: Enumerable<ItemTestUpdateWithWhereUniqueWithoutTestInput>
    updateMany?: Enumerable<ItemTestUpdateManyWithWhereWithoutTestInput>
    deleteMany?: Enumerable<ItemTestScalarWhereInput>
  }

  export type TestsUpdateOneWithoutDataNestedInput = {
    create?: XOR<TestsCreateWithoutDataInput, TestsUncheckedCreateWithoutDataInput>
    connectOrCreate?: TestsCreateOrConnectWithoutDataInput
    upsert?: TestsUpsertWithoutDataInput
    disconnect?: boolean
    delete?: boolean
    connect?: TestsWhereUniqueInput
    update?: XOR<TestsUpdateWithoutDataInput, TestsUncheckedUpdateWithoutDataInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ItemTestUncheckedUpdateManyWithoutTestNestedInput = {
    create?: XOR<Enumerable<ItemTestCreateWithoutTestInput>, Enumerable<ItemTestUncheckedCreateWithoutTestInput>>
    connectOrCreate?: Enumerable<ItemTestCreateOrConnectWithoutTestInput>
    upsert?: Enumerable<ItemTestUpsertWithWhereUniqueWithoutTestInput>
    set?: Enumerable<ItemTestWhereUniqueInput>
    disconnect?: Enumerable<ItemTestWhereUniqueInput>
    delete?: Enumerable<ItemTestWhereUniqueInput>
    connect?: Enumerable<ItemTestWhereUniqueInput>
    update?: Enumerable<ItemTestUpdateWithWhereUniqueWithoutTestInput>
    updateMany?: Enumerable<ItemTestUpdateManyWithWhereWithoutTestInput>
    deleteMany?: Enumerable<ItemTestScalarWhereInput>
  }

  export type TestCreateNestedOneWithoutDataInput = {
    create?: XOR<TestCreateWithoutDataInput, TestUncheckedCreateWithoutDataInput>
    connectOrCreate?: TestCreateOrConnectWithoutDataInput
    connect?: TestWhereUniqueInput
  }

  export type TestUpdateOneWithoutDataNestedInput = {
    create?: XOR<TestCreateWithoutDataInput, TestUncheckedCreateWithoutDataInput>
    connectOrCreate?: TestCreateOrConnectWithoutDataInput
    upsert?: TestUpsertWithoutDataInput
    disconnect?: boolean
    delete?: boolean
    connect?: TestWhereUniqueInput
    update?: XOR<TestUpdateWithoutDataInput, TestUncheckedUpdateWithoutDataInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type TestCreateWithoutTestsInput = {
    data?: ItemTestCreateNestedManyWithoutTestInput
  }

  export type TestUncheckedCreateWithoutTestsInput = {
    id?: number
    data?: ItemTestUncheckedCreateNestedManyWithoutTestInput
  }

  export type TestCreateOrConnectWithoutTestsInput = {
    where: TestWhereUniqueInput
    create: XOR<TestCreateWithoutTestsInput, TestUncheckedCreateWithoutTestsInput>
  }

  export type TestUpsertWithWhereUniqueWithoutTestsInput = {
    where: TestWhereUniqueInput
    update: XOR<TestUpdateWithoutTestsInput, TestUncheckedUpdateWithoutTestsInput>
    create: XOR<TestCreateWithoutTestsInput, TestUncheckedCreateWithoutTestsInput>
  }

  export type TestUpdateWithWhereUniqueWithoutTestsInput = {
    where: TestWhereUniqueInput
    data: XOR<TestUpdateWithoutTestsInput, TestUncheckedUpdateWithoutTestsInput>
  }

  export type TestUpdateManyWithWhereWithoutTestsInput = {
    where: TestScalarWhereInput
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyWithoutDataInput>
  }

  export type TestScalarWhereInput = {
    AND?: Enumerable<TestScalarWhereInput>
    OR?: Enumerable<TestScalarWhereInput>
    NOT?: Enumerable<TestScalarWhereInput>
    id?: IntFilter | number
    testsId?: IntNullableFilter | number | null
  }

  export type ItemTestCreateWithoutTestInput = {
    title: string
  }

  export type ItemTestUncheckedCreateWithoutTestInput = {
    id?: number
    title: string
  }

  export type ItemTestCreateOrConnectWithoutTestInput = {
    where: ItemTestWhereUniqueInput
    create: XOR<ItemTestCreateWithoutTestInput, ItemTestUncheckedCreateWithoutTestInput>
  }

  export type TestsCreateWithoutDataInput = {

  }

  export type TestsUncheckedCreateWithoutDataInput = {
    id?: number
  }

  export type TestsCreateOrConnectWithoutDataInput = {
    where: TestsWhereUniqueInput
    create: XOR<TestsCreateWithoutDataInput, TestsUncheckedCreateWithoutDataInput>
  }

  export type ItemTestUpsertWithWhereUniqueWithoutTestInput = {
    where: ItemTestWhereUniqueInput
    update: XOR<ItemTestUpdateWithoutTestInput, ItemTestUncheckedUpdateWithoutTestInput>
    create: XOR<ItemTestCreateWithoutTestInput, ItemTestUncheckedCreateWithoutTestInput>
  }

  export type ItemTestUpdateWithWhereUniqueWithoutTestInput = {
    where: ItemTestWhereUniqueInput
    data: XOR<ItemTestUpdateWithoutTestInput, ItemTestUncheckedUpdateWithoutTestInput>
  }

  export type ItemTestUpdateManyWithWhereWithoutTestInput = {
    where: ItemTestScalarWhereInput
    data: XOR<ItemTestUpdateManyMutationInput, ItemTestUncheckedUpdateManyWithoutDataInput>
  }

  export type ItemTestScalarWhereInput = {
    AND?: Enumerable<ItemTestScalarWhereInput>
    OR?: Enumerable<ItemTestScalarWhereInput>
    NOT?: Enumerable<ItemTestScalarWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    testId?: IntNullableFilter | number | null
  }

  export type TestsUpsertWithoutDataInput = {
    update: XOR<TestsUpdateWithoutDataInput, TestsUncheckedUpdateWithoutDataInput>
    create: XOR<TestsCreateWithoutDataInput, TestsUncheckedCreateWithoutDataInput>
  }

  export type TestsUpdateWithoutDataInput = {

  }

  export type TestsUncheckedUpdateWithoutDataInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type TestCreateWithoutDataInput = {
    Tests?: TestsCreateNestedOneWithoutDataInput
  }

  export type TestUncheckedCreateWithoutDataInput = {
    id?: number
    testsId?: number | null
  }

  export type TestCreateOrConnectWithoutDataInput = {
    where: TestWhereUniqueInput
    create: XOR<TestCreateWithoutDataInput, TestUncheckedCreateWithoutDataInput>
  }

  export type TestUpsertWithoutDataInput = {
    update: XOR<TestUpdateWithoutDataInput, TestUncheckedUpdateWithoutDataInput>
    create: XOR<TestCreateWithoutDataInput, TestUncheckedCreateWithoutDataInput>
  }

  export type TestUpdateWithoutDataInput = {
    Tests?: TestsUpdateOneWithoutDataNestedInput
  }

  export type TestUncheckedUpdateWithoutDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    testsId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TestUpdateWithoutTestsInput = {
    data?: ItemTestUpdateManyWithoutTestNestedInput
  }

  export type TestUncheckedUpdateWithoutTestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: ItemTestUncheckedUpdateManyWithoutTestNestedInput
  }

  export type TestUncheckedUpdateManyWithoutDataInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type ItemTestUpdateWithoutTestInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type ItemTestUncheckedUpdateWithoutTestInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type ItemTestUncheckedUpdateManyWithoutDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
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