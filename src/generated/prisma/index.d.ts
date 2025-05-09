
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
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Students
 * 
 */
export type Students = $Result.DefaultSelection<Prisma.$StudentsPayload>
/**
 * Model Courses
 * 
 */
export type Courses = $Result.DefaultSelection<Prisma.$CoursesPayload>
/**
 * Model Events
 * 
 */
export type Events = $Result.DefaultSelection<Prisma.$EventsPayload>
/**
 * Model Enrollments
 * 
 */
export type Enrollments = $Result.DefaultSelection<Prisma.$EnrollmentsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  admin: 'admin',
  super_admin: 'super_admin'
};

export type Role = (typeof Role)[keyof typeof Role]


export const CourseLevel: {
  NIVEL_1_JESUS_ESTA_VIVO: 'NIVEL_1_JESUS_ESTA_VIVO',
  NIVEL_2_JESUS_NOS_CAPACITA: 'NIVEL_2_JESUS_NOS_CAPACITA',
  NIVEL_3_JESUS_NOS_ENVIA: 'NIVEL_3_JESUS_NOS_ENVIA'
};

export type CourseLevel = (typeof CourseLevel)[keyof typeof CourseLevel]


export const EventStatus: {
  upcoming: 'upcoming',
  ongoing: 'ongoing',
  completed: 'completed',
  cancelled: 'cancelled'
};

export type EventStatus = (typeof EventStatus)[keyof typeof EventStatus]


export const Attendance: {
  present: 'present',
  absent: 'absent'
};

export type Attendance = (typeof Attendance)[keyof typeof Attendance]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type CourseLevel = $Enums.CourseLevel

export const CourseLevel: typeof $Enums.CourseLevel

export type EventStatus = $Enums.EventStatus

export const EventStatus: typeof $Enums.EventStatus

export type Attendance = $Enums.Attendance

export const Attendance: typeof $Enums.Attendance

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
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
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.students`: Exposes CRUD operations for the **Students** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.students.findMany()
    * ```
    */
  get students(): Prisma.StudentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.courses`: Exposes CRUD operations for the **Courses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.courses.findMany()
    * ```
    */
  get courses(): Prisma.CoursesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.events`: Exposes CRUD operations for the **Events** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.events.findMany()
    * ```
    */
  get events(): Prisma.EventsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enrollments`: Exposes CRUD operations for the **Enrollments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enrollments
    * const enrollments = await prisma.enrollments.findMany()
    * ```
    */
  get enrollments(): Prisma.EnrollmentsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Users: 'Users',
    Students: 'Students',
    Courses: 'Courses',
    Events: 'Events',
    Enrollments: 'Enrollments'
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
      modelProps: "users" | "students" | "courses" | "events" | "enrollments"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      Students: {
        payload: Prisma.$StudentsPayload<ExtArgs>
        fields: Prisma.StudentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload>
          }
          findFirst: {
            args: Prisma.StudentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload>
          }
          findMany: {
            args: Prisma.StudentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload>[]
          }
          create: {
            args: Prisma.StudentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload>
          }
          createMany: {
            args: Prisma.StudentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload>[]
          }
          delete: {
            args: Prisma.StudentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload>
          }
          update: {
            args: Prisma.StudentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload>
          }
          deleteMany: {
            args: Prisma.StudentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload>[]
          }
          upsert: {
            args: Prisma.StudentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload>
          }
          aggregate: {
            args: Prisma.StudentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudents>
          }
          groupBy: {
            args: Prisma.StudentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentsCountArgs<ExtArgs>
            result: $Utils.Optional<StudentsCountAggregateOutputType> | number
          }
        }
      }
      Courses: {
        payload: Prisma.$CoursesPayload<ExtArgs>
        fields: Prisma.CoursesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoursesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoursesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>
          }
          findFirst: {
            args: Prisma.CoursesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoursesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>
          }
          findMany: {
            args: Prisma.CoursesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>[]
          }
          create: {
            args: Prisma.CoursesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>
          }
          createMany: {
            args: Prisma.CoursesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoursesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>[]
          }
          delete: {
            args: Prisma.CoursesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>
          }
          update: {
            args: Prisma.CoursesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>
          }
          deleteMany: {
            args: Prisma.CoursesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoursesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CoursesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>[]
          }
          upsert: {
            args: Prisma.CoursesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>
          }
          aggregate: {
            args: Prisma.CoursesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourses>
          }
          groupBy: {
            args: Prisma.CoursesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoursesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoursesCountArgs<ExtArgs>
            result: $Utils.Optional<CoursesCountAggregateOutputType> | number
          }
        }
      }
      Events: {
        payload: Prisma.$EventsPayload<ExtArgs>
        fields: Prisma.EventsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          findFirst: {
            args: Prisma.EventsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          findMany: {
            args: Prisma.EventsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>[]
          }
          create: {
            args: Prisma.EventsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          createMany: {
            args: Prisma.EventsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>[]
          }
          delete: {
            args: Prisma.EventsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          update: {
            args: Prisma.EventsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          deleteMany: {
            args: Prisma.EventsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>[]
          }
          upsert: {
            args: Prisma.EventsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          aggregate: {
            args: Prisma.EventsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvents>
          }
          groupBy: {
            args: Prisma.EventsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventsGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventsCountArgs<ExtArgs>
            result: $Utils.Optional<EventsCountAggregateOutputType> | number
          }
        }
      }
      Enrollments: {
        payload: Prisma.$EnrollmentsPayload<ExtArgs>
        fields: Prisma.EnrollmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnrollmentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnrollmentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentsPayload>
          }
          findFirst: {
            args: Prisma.EnrollmentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnrollmentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentsPayload>
          }
          findMany: {
            args: Prisma.EnrollmentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentsPayload>[]
          }
          create: {
            args: Prisma.EnrollmentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentsPayload>
          }
          createMany: {
            args: Prisma.EnrollmentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnrollmentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentsPayload>[]
          }
          delete: {
            args: Prisma.EnrollmentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentsPayload>
          }
          update: {
            args: Prisma.EnrollmentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentsPayload>
          }
          deleteMany: {
            args: Prisma.EnrollmentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnrollmentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnrollmentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentsPayload>[]
          }
          upsert: {
            args: Prisma.EnrollmentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentsPayload>
          }
          aggregate: {
            args: Prisma.EnrollmentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnrollments>
          }
          groupBy: {
            args: Prisma.EnrollmentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnrollmentsCountArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentsCountAggregateOutputType> | number
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
    users?: UsersOmit
    students?: StudentsOmit
    courses?: CoursesOmit
    events?: EventsOmit
    enrollments?: EnrollmentsOmit
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
   * Count Type StudentsCountOutputType
   */

  export type StudentsCountOutputType = {
    Enrollments: number
  }

  export type StudentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Enrollments?: boolean | StudentsCountOutputTypeCountEnrollmentsArgs
  }

  // Custom InputTypes
  /**
   * StudentsCountOutputType without action
   */
  export type StudentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentsCountOutputType
     */
    select?: StudentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentsCountOutputType without action
   */
  export type StudentsCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentsWhereInput
  }


  /**
   * Count Type CoursesCountOutputType
   */

  export type CoursesCountOutputType = {
    Events: number
  }

  export type CoursesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Events?: boolean | CoursesCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * CoursesCountOutputType without action
   */
  export type CoursesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursesCountOutputType
     */
    select?: CoursesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CoursesCountOutputType without action
   */
  export type CoursesCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventsWhereInput
  }


  /**
   * Count Type EventsCountOutputType
   */

  export type EventsCountOutputType = {
    Enrollments: number
  }

  export type EventsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Enrollments?: boolean | EventsCountOutputTypeCountEnrollmentsArgs
  }

  // Custom InputTypes
  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventsCountOutputType
     */
    select?: EventsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentsWhereInput
  }


  /**
   * Models
   */

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
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password_hash: string | null
    role: $Enums.Role | null
    created_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password_hash: string | null
    role: $Enums.Role | null
    created_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password_hash: number
    role: number
    created_at: number
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
    name?: true
    email?: true
    password_hash?: true
    role?: true
    created_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    role?: true
    created_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    role?: true
    created_at?: true
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
    id: number
    name: string
    email: string
    password_hash: string
    role: $Enums.Role
    created_at: Date
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
    name?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    created_at?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password_hash" | "role" | "created_at", ExtArgs["result"]["users"]>

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password_hash: string
      role: $Enums.Role
      created_at: Date
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
    readonly id: FieldRef<"Users", 'Int'>
    readonly name: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password_hash: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'Role'>
    readonly created_at: FieldRef<"Users", 'DateTime'>
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
   * Model Students
   */

  export type AggregateStudents = {
    _count: StudentsCountAggregateOutputType | null
    _avg: StudentsAvgAggregateOutputType | null
    _sum: StudentsSumAggregateOutputType | null
    _min: StudentsMinAggregateOutputType | null
    _max: StudentsMaxAggregateOutputType | null
  }

  export type StudentsAvgAggregateOutputType = {
    id: number | null
  }

  export type StudentsSumAggregateOutputType = {
    id: number | null
  }

  export type StudentsMinAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    phone: string | null
    gender: string | null
    dirección: string | null
    parroquia: string | null
    asuntos_médicos: string | null
    created_at: Date | null
  }

  export type StudentsMaxAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    phone: string | null
    gender: string | null
    dirección: string | null
    parroquia: string | null
    asuntos_médicos: string | null
    created_at: Date | null
  }

  export type StudentsCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    email: number
    phone: number
    gender: number
    dirección: number
    parroquia: number
    asuntos_médicos: number
    created_at: number
    _all: number
  }


  export type StudentsAvgAggregateInputType = {
    id?: true
  }

  export type StudentsSumAggregateInputType = {
    id?: true
  }

  export type StudentsMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    phone?: true
    gender?: true
    dirección?: true
    parroquia?: true
    asuntos_médicos?: true
    created_at?: true
  }

  export type StudentsMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    phone?: true
    gender?: true
    dirección?: true
    parroquia?: true
    asuntos_médicos?: true
    created_at?: true
  }

  export type StudentsCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    phone?: true
    gender?: true
    dirección?: true
    parroquia?: true
    asuntos_médicos?: true
    created_at?: true
    _all?: true
  }

  export type StudentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to aggregate.
     */
    where?: StudentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentsOrderByWithRelationInput | StudentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentsMaxAggregateInputType
  }

  export type GetStudentsAggregateType<T extends StudentsAggregateArgs> = {
        [P in keyof T & keyof AggregateStudents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudents[P]>
      : GetScalarType<T[P], AggregateStudents[P]>
  }




  export type StudentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentsWhereInput
    orderBy?: StudentsOrderByWithAggregationInput | StudentsOrderByWithAggregationInput[]
    by: StudentsScalarFieldEnum[] | StudentsScalarFieldEnum
    having?: StudentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentsCountAggregateInputType | true
    _avg?: StudentsAvgAggregateInputType
    _sum?: StudentsSumAggregateInputType
    _min?: StudentsMinAggregateInputType
    _max?: StudentsMaxAggregateInputType
  }

  export type StudentsGroupByOutputType = {
    id: number
    first_name: string
    last_name: string
    email: string | null
    phone: string
    gender: string
    dirección: string
    parroquia: string
    asuntos_médicos: string
    created_at: Date
    _count: StudentsCountAggregateOutputType | null
    _avg: StudentsAvgAggregateOutputType | null
    _sum: StudentsSumAggregateOutputType | null
    _min: StudentsMinAggregateOutputType | null
    _max: StudentsMaxAggregateOutputType | null
  }

  type GetStudentsGroupByPayload<T extends StudentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentsGroupByOutputType[P]>
            : GetScalarType<T[P], StudentsGroupByOutputType[P]>
        }
      >
    >


  export type StudentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone?: boolean
    gender?: boolean
    dirección?: boolean
    parroquia?: boolean
    asuntos_médicos?: boolean
    created_at?: boolean
    Enrollments?: boolean | Students$EnrollmentsArgs<ExtArgs>
    _count?: boolean | StudentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["students"]>

  export type StudentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone?: boolean
    gender?: boolean
    dirección?: boolean
    parroquia?: boolean
    asuntos_médicos?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["students"]>

  export type StudentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone?: boolean
    gender?: boolean
    dirección?: boolean
    parroquia?: boolean
    asuntos_médicos?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["students"]>

  export type StudentsSelectScalar = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone?: boolean
    gender?: boolean
    dirección?: boolean
    parroquia?: boolean
    asuntos_médicos?: boolean
    created_at?: boolean
  }

  export type StudentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "last_name" | "email" | "phone" | "gender" | "dirección" | "parroquia" | "asuntos_médicos" | "created_at", ExtArgs["result"]["students"]>
  export type StudentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Enrollments?: boolean | Students$EnrollmentsArgs<ExtArgs>
    _count?: boolean | StudentsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StudentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StudentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Students"
    objects: {
      Enrollments: Prisma.$EnrollmentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      first_name: string
      last_name: string
      email: string | null
      phone: string
      gender: string
      dirección: string
      parroquia: string
      asuntos_médicos: string
      created_at: Date
    }, ExtArgs["result"]["students"]>
    composites: {}
  }

  type StudentsGetPayload<S extends boolean | null | undefined | StudentsDefaultArgs> = $Result.GetResult<Prisma.$StudentsPayload, S>

  type StudentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentsCountAggregateInputType | true
    }

  export interface StudentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Students'], meta: { name: 'Students' } }
    /**
     * Find zero or one Students that matches the filter.
     * @param {StudentsFindUniqueArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentsFindUniqueArgs>(args: SelectSubset<T, StudentsFindUniqueArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Students that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentsFindUniqueOrThrowArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentsFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentsFindFirstArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentsFindFirstArgs>(args?: SelectSubset<T, StudentsFindFirstArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Students that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentsFindFirstOrThrowArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentsFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.students.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.students.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentsWithIdOnly = await prisma.students.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentsFindManyArgs>(args?: SelectSubset<T, StudentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Students.
     * @param {StudentsCreateArgs} args - Arguments to create a Students.
     * @example
     * // Create one Students
     * const Students = await prisma.students.create({
     *   data: {
     *     // ... data to create a Students
     *   }
     * })
     * 
     */
    create<T extends StudentsCreateArgs>(args: SelectSubset<T, StudentsCreateArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentsCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const students = await prisma.students.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentsCreateManyArgs>(args?: SelectSubset<T, StudentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentsCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const students = await prisma.students.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentsWithIdOnly = await prisma.students.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentsCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Students.
     * @param {StudentsDeleteArgs} args - Arguments to delete one Students.
     * @example
     * // Delete one Students
     * const Students = await prisma.students.delete({
     *   where: {
     *     // ... filter to delete one Students
     *   }
     * })
     * 
     */
    delete<T extends StudentsDeleteArgs>(args: SelectSubset<T, StudentsDeleteArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Students.
     * @param {StudentsUpdateArgs} args - Arguments to update one Students.
     * @example
     * // Update one Students
     * const students = await prisma.students.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentsUpdateArgs>(args: SelectSubset<T, StudentsUpdateArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentsDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.students.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentsDeleteManyArgs>(args?: SelectSubset<T, StudentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const students = await prisma.students.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentsUpdateManyArgs>(args: SelectSubset<T, StudentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentsUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const students = await prisma.students.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentsWithIdOnly = await prisma.students.updateManyAndReturn({
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
    updateManyAndReturn<T extends StudentsUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Students.
     * @param {StudentsUpsertArgs} args - Arguments to update or create a Students.
     * @example
     * // Update or create a Students
     * const students = await prisma.students.upsert({
     *   create: {
     *     // ... data to create a Students
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Students we want to update
     *   }
     * })
     */
    upsert<T extends StudentsUpsertArgs>(args: SelectSubset<T, StudentsUpsertArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentsCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.students.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentsCountArgs>(
      args?: Subset<T, StudentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentsAggregateArgs>(args: Subset<T, StudentsAggregateArgs>): Prisma.PrismaPromise<GetStudentsAggregateType<T>>

    /**
     * Group by Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentsGroupByArgs} args - Group by arguments.
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
      T extends StudentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentsGroupByArgs['orderBy'] }
        : { orderBy?: StudentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Students model
   */
  readonly fields: StudentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Students.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Enrollments<T extends Students$EnrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, Students$EnrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Students model
   */
  interface StudentsFieldRefs {
    readonly id: FieldRef<"Students", 'Int'>
    readonly first_name: FieldRef<"Students", 'String'>
    readonly last_name: FieldRef<"Students", 'String'>
    readonly email: FieldRef<"Students", 'String'>
    readonly phone: FieldRef<"Students", 'String'>
    readonly gender: FieldRef<"Students", 'String'>
    readonly dirección: FieldRef<"Students", 'String'>
    readonly parroquia: FieldRef<"Students", 'String'>
    readonly asuntos_médicos: FieldRef<"Students", 'String'>
    readonly created_at: FieldRef<"Students", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Students findUnique
   */
  export type StudentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where: StudentsWhereUniqueInput
  }

  /**
   * Students findUniqueOrThrow
   */
  export type StudentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where: StudentsWhereUniqueInput
  }

  /**
   * Students findFirst
   */
  export type StudentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentsOrderByWithRelationInput | StudentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentsScalarFieldEnum | StudentsScalarFieldEnum[]
  }

  /**
   * Students findFirstOrThrow
   */
  export type StudentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentsOrderByWithRelationInput | StudentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentsScalarFieldEnum | StudentsScalarFieldEnum[]
  }

  /**
   * Students findMany
   */
  export type StudentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentsOrderByWithRelationInput | StudentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentsScalarFieldEnum | StudentsScalarFieldEnum[]
  }

  /**
   * Students create
   */
  export type StudentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Students.
     */
    data: XOR<StudentsCreateInput, StudentsUncheckedCreateInput>
  }

  /**
   * Students createMany
   */
  export type StudentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentsCreateManyInput | StudentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Students createManyAndReturn
   */
  export type StudentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentsCreateManyInput | StudentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Students update
   */
  export type StudentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Students.
     */
    data: XOR<StudentsUpdateInput, StudentsUncheckedUpdateInput>
    /**
     * Choose, which Students to update.
     */
    where: StudentsWhereUniqueInput
  }

  /**
   * Students updateMany
   */
  export type StudentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentsUpdateManyMutationInput, StudentsUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentsWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Students updateManyAndReturn
   */
  export type StudentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentsUpdateManyMutationInput, StudentsUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentsWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Students upsert
   */
  export type StudentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Students to update in case it exists.
     */
    where: StudentsWhereUniqueInput
    /**
     * In case the Students found by the `where` argument doesn't exist, create a new Students with this data.
     */
    create: XOR<StudentsCreateInput, StudentsUncheckedCreateInput>
    /**
     * In case the Students was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentsUpdateInput, StudentsUncheckedUpdateInput>
  }

  /**
   * Students delete
   */
  export type StudentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
    /**
     * Filter which Students to delete.
     */
    where: StudentsWhereUniqueInput
  }

  /**
   * Students deleteMany
   */
  export type StudentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentsWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Students.Enrollments
   */
  export type Students$EnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollments
     */
    select?: EnrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollments
     */
    omit?: EnrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentsInclude<ExtArgs> | null
    where?: EnrollmentsWhereInput
    orderBy?: EnrollmentsOrderByWithRelationInput | EnrollmentsOrderByWithRelationInput[]
    cursor?: EnrollmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentsScalarFieldEnum | EnrollmentsScalarFieldEnum[]
  }

  /**
   * Students without action
   */
  export type StudentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
  }


  /**
   * Model Courses
   */

  export type AggregateCourses = {
    _count: CoursesCountAggregateOutputType | null
    _avg: CoursesAvgAggregateOutputType | null
    _sum: CoursesSumAggregateOutputType | null
    _min: CoursesMinAggregateOutputType | null
    _max: CoursesMaxAggregateOutputType | null
  }

  export type CoursesAvgAggregateOutputType = {
    id: number | null
  }

  export type CoursesSumAggregateOutputType = {
    id: number | null
  }

  export type CoursesMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    level: $Enums.CourseLevel | null
  }

  export type CoursesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    level: $Enums.CourseLevel | null
  }

  export type CoursesCountAggregateOutputType = {
    id: number
    name: number
    description: number
    level: number
    _all: number
  }


  export type CoursesAvgAggregateInputType = {
    id?: true
  }

  export type CoursesSumAggregateInputType = {
    id?: true
  }

  export type CoursesMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    level?: true
  }

  export type CoursesMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    level?: true
  }

  export type CoursesCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    level?: true
    _all?: true
  }

  export type CoursesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to aggregate.
     */
    where?: CoursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CoursesOrderByWithRelationInput | CoursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CoursesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoursesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoursesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoursesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoursesMaxAggregateInputType
  }

  export type GetCoursesAggregateType<T extends CoursesAggregateArgs> = {
        [P in keyof T & keyof AggregateCourses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourses[P]>
      : GetScalarType<T[P], AggregateCourses[P]>
  }




  export type CoursesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoursesWhereInput
    orderBy?: CoursesOrderByWithAggregationInput | CoursesOrderByWithAggregationInput[]
    by: CoursesScalarFieldEnum[] | CoursesScalarFieldEnum
    having?: CoursesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoursesCountAggregateInputType | true
    _avg?: CoursesAvgAggregateInputType
    _sum?: CoursesSumAggregateInputType
    _min?: CoursesMinAggregateInputType
    _max?: CoursesMaxAggregateInputType
  }

  export type CoursesGroupByOutputType = {
    id: number
    name: string
    description: string
    level: $Enums.CourseLevel
    _count: CoursesCountAggregateOutputType | null
    _avg: CoursesAvgAggregateOutputType | null
    _sum: CoursesSumAggregateOutputType | null
    _min: CoursesMinAggregateOutputType | null
    _max: CoursesMaxAggregateOutputType | null
  }

  type GetCoursesGroupByPayload<T extends CoursesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoursesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoursesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoursesGroupByOutputType[P]>
            : GetScalarType<T[P], CoursesGroupByOutputType[P]>
        }
      >
    >


  export type CoursesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    level?: boolean
    Events?: boolean | Courses$EventsArgs<ExtArgs>
    _count?: boolean | CoursesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courses"]>

  export type CoursesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    level?: boolean
  }, ExtArgs["result"]["courses"]>

  export type CoursesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    level?: boolean
  }, ExtArgs["result"]["courses"]>

  export type CoursesSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    level?: boolean
  }

  export type CoursesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "level", ExtArgs["result"]["courses"]>
  export type CoursesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Events?: boolean | Courses$EventsArgs<ExtArgs>
    _count?: boolean | CoursesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CoursesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CoursesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CoursesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Courses"
    objects: {
      Events: Prisma.$EventsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      level: $Enums.CourseLevel
    }, ExtArgs["result"]["courses"]>
    composites: {}
  }

  type CoursesGetPayload<S extends boolean | null | undefined | CoursesDefaultArgs> = $Result.GetResult<Prisma.$CoursesPayload, S>

  type CoursesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoursesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoursesCountAggregateInputType | true
    }

  export interface CoursesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Courses'], meta: { name: 'Courses' } }
    /**
     * Find zero or one Courses that matches the filter.
     * @param {CoursesFindUniqueArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoursesFindUniqueArgs>(args: SelectSubset<T, CoursesFindUniqueArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Courses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoursesFindUniqueOrThrowArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoursesFindUniqueOrThrowArgs>(args: SelectSubset<T, CoursesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesFindFirstArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoursesFindFirstArgs>(args?: SelectSubset<T, CoursesFindFirstArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Courses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesFindFirstOrThrowArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoursesFindFirstOrThrowArgs>(args?: SelectSubset<T, CoursesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.courses.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.courses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coursesWithIdOnly = await prisma.courses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoursesFindManyArgs>(args?: SelectSubset<T, CoursesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Courses.
     * @param {CoursesCreateArgs} args - Arguments to create a Courses.
     * @example
     * // Create one Courses
     * const Courses = await prisma.courses.create({
     *   data: {
     *     // ... data to create a Courses
     *   }
     * })
     * 
     */
    create<T extends CoursesCreateArgs>(args: SelectSubset<T, CoursesCreateArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CoursesCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const courses = await prisma.courses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoursesCreateManyArgs>(args?: SelectSubset<T, CoursesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CoursesCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const courses = await prisma.courses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const coursesWithIdOnly = await prisma.courses.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoursesCreateManyAndReturnArgs>(args?: SelectSubset<T, CoursesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Courses.
     * @param {CoursesDeleteArgs} args - Arguments to delete one Courses.
     * @example
     * // Delete one Courses
     * const Courses = await prisma.courses.delete({
     *   where: {
     *     // ... filter to delete one Courses
     *   }
     * })
     * 
     */
    delete<T extends CoursesDeleteArgs>(args: SelectSubset<T, CoursesDeleteArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Courses.
     * @param {CoursesUpdateArgs} args - Arguments to update one Courses.
     * @example
     * // Update one Courses
     * const courses = await prisma.courses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoursesUpdateArgs>(args: SelectSubset<T, CoursesUpdateArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CoursesDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.courses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoursesDeleteManyArgs>(args?: SelectSubset<T, CoursesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const courses = await prisma.courses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoursesUpdateManyArgs>(args: SelectSubset<T, CoursesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CoursesUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const courses = await prisma.courses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const coursesWithIdOnly = await prisma.courses.updateManyAndReturn({
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
    updateManyAndReturn<T extends CoursesUpdateManyAndReturnArgs>(args: SelectSubset<T, CoursesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Courses.
     * @param {CoursesUpsertArgs} args - Arguments to update or create a Courses.
     * @example
     * // Update or create a Courses
     * const courses = await prisma.courses.upsert({
     *   create: {
     *     // ... data to create a Courses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Courses we want to update
     *   }
     * })
     */
    upsert<T extends CoursesUpsertArgs>(args: SelectSubset<T, CoursesUpsertArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.courses.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CoursesCountArgs>(
      args?: Subset<T, CoursesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoursesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CoursesAggregateArgs>(args: Subset<T, CoursesAggregateArgs>): Prisma.PrismaPromise<GetCoursesAggregateType<T>>

    /**
     * Group by Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesGroupByArgs} args - Group by arguments.
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
      T extends CoursesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoursesGroupByArgs['orderBy'] }
        : { orderBy?: CoursesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CoursesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoursesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Courses model
   */
  readonly fields: CoursesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Courses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoursesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Events<T extends Courses$EventsArgs<ExtArgs> = {}>(args?: Subset<T, Courses$EventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Courses model
   */
  interface CoursesFieldRefs {
    readonly id: FieldRef<"Courses", 'Int'>
    readonly name: FieldRef<"Courses", 'String'>
    readonly description: FieldRef<"Courses", 'String'>
    readonly level: FieldRef<"Courses", 'CourseLevel'>
  }
    

  // Custom InputTypes
  /**
   * Courses findUnique
   */
  export type CoursesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where: CoursesWhereUniqueInput
  }

  /**
   * Courses findUniqueOrThrow
   */
  export type CoursesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where: CoursesWhereUniqueInput
  }

  /**
   * Courses findFirst
   */
  export type CoursesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CoursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CoursesOrderByWithRelationInput | CoursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CoursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CoursesScalarFieldEnum | CoursesScalarFieldEnum[]
  }

  /**
   * Courses findFirstOrThrow
   */
  export type CoursesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CoursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CoursesOrderByWithRelationInput | CoursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CoursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CoursesScalarFieldEnum | CoursesScalarFieldEnum[]
  }

  /**
   * Courses findMany
   */
  export type CoursesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CoursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CoursesOrderByWithRelationInput | CoursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CoursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CoursesScalarFieldEnum | CoursesScalarFieldEnum[]
  }

  /**
   * Courses create
   */
  export type CoursesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * The data needed to create a Courses.
     */
    data: XOR<CoursesCreateInput, CoursesUncheckedCreateInput>
  }

  /**
   * Courses createMany
   */
  export type CoursesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CoursesCreateManyInput | CoursesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Courses createManyAndReturn
   */
  export type CoursesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CoursesCreateManyInput | CoursesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Courses update
   */
  export type CoursesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * The data needed to update a Courses.
     */
    data: XOR<CoursesUpdateInput, CoursesUncheckedUpdateInput>
    /**
     * Choose, which Courses to update.
     */
    where: CoursesWhereUniqueInput
  }

  /**
   * Courses updateMany
   */
  export type CoursesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CoursesUpdateManyMutationInput, CoursesUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CoursesWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Courses updateManyAndReturn
   */
  export type CoursesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CoursesUpdateManyMutationInput, CoursesUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CoursesWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Courses upsert
   */
  export type CoursesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * The filter to search for the Courses to update in case it exists.
     */
    where: CoursesWhereUniqueInput
    /**
     * In case the Courses found by the `where` argument doesn't exist, create a new Courses with this data.
     */
    create: XOR<CoursesCreateInput, CoursesUncheckedCreateInput>
    /**
     * In case the Courses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoursesUpdateInput, CoursesUncheckedUpdateInput>
  }

  /**
   * Courses delete
   */
  export type CoursesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * Filter which Courses to delete.
     */
    where: CoursesWhereUniqueInput
  }

  /**
   * Courses deleteMany
   */
  export type CoursesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CoursesWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Courses.Events
   */
  export type Courses$EventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    where?: EventsWhereInput
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    cursor?: EventsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * Courses without action
   */
  export type CoursesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
  }


  /**
   * Model Events
   */

  export type AggregateEvents = {
    _count: EventsCountAggregateOutputType | null
    _avg: EventsAvgAggregateOutputType | null
    _sum: EventsSumAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  export type EventsAvgAggregateOutputType = {
    id: number | null
    course_id: number | null
    price: number | null
  }

  export type EventsSumAggregateOutputType = {
    id: number | null
    course_id: number | null
    price: number | null
  }

  export type EventsMinAggregateOutputType = {
    id: number | null
    name: string | null
    course_id: number | null
    price: number | null
    start_date: Date | null
    end_date: Date | null
    location: string | null
    status: $Enums.EventStatus | null
    created_at: Date | null
  }

  export type EventsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    course_id: number | null
    price: number | null
    start_date: Date | null
    end_date: Date | null
    location: string | null
    status: $Enums.EventStatus | null
    created_at: Date | null
  }

  export type EventsCountAggregateOutputType = {
    id: number
    name: number
    course_id: number
    price: number
    start_date: number
    end_date: number
    location: number
    status: number
    created_at: number
    _all: number
  }


  export type EventsAvgAggregateInputType = {
    id?: true
    course_id?: true
    price?: true
  }

  export type EventsSumAggregateInputType = {
    id?: true
    course_id?: true
    price?: true
  }

  export type EventsMinAggregateInputType = {
    id?: true
    name?: true
    course_id?: true
    price?: true
    start_date?: true
    end_date?: true
    location?: true
    status?: true
    created_at?: true
  }

  export type EventsMaxAggregateInputType = {
    id?: true
    name?: true
    course_id?: true
    price?: true
    start_date?: true
    end_date?: true
    location?: true
    status?: true
    created_at?: true
  }

  export type EventsCountAggregateInputType = {
    id?: true
    name?: true
    course_id?: true
    price?: true
    start_date?: true
    end_date?: true
    location?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type EventsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to aggregate.
     */
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventsMaxAggregateInputType
  }

  export type GetEventsAggregateType<T extends EventsAggregateArgs> = {
        [P in keyof T & keyof AggregateEvents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvents[P]>
      : GetScalarType<T[P], AggregateEvents[P]>
  }




  export type EventsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventsWhereInput
    orderBy?: EventsOrderByWithAggregationInput | EventsOrderByWithAggregationInput[]
    by: EventsScalarFieldEnum[] | EventsScalarFieldEnum
    having?: EventsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventsCountAggregateInputType | true
    _avg?: EventsAvgAggregateInputType
    _sum?: EventsSumAggregateInputType
    _min?: EventsMinAggregateInputType
    _max?: EventsMaxAggregateInputType
  }

  export type EventsGroupByOutputType = {
    id: number
    name: string
    course_id: number
    price: number
    start_date: Date
    end_date: Date
    location: string
    status: $Enums.EventStatus
    created_at: Date
    _count: EventsCountAggregateOutputType | null
    _avg: EventsAvgAggregateOutputType | null
    _sum: EventsSumAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  type GetEventsGroupByPayload<T extends EventsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventsGroupByOutputType[P]>
            : GetScalarType<T[P], EventsGroupByOutputType[P]>
        }
      >
    >


  export type EventsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    course_id?: boolean
    price?: boolean
    start_date?: boolean
    end_date?: boolean
    location?: boolean
    status?: boolean
    created_at?: boolean
    course?: boolean | CoursesDefaultArgs<ExtArgs>
    Enrollments?: boolean | Events$EnrollmentsArgs<ExtArgs>
    _count?: boolean | EventsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["events"]>

  export type EventsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    course_id?: boolean
    price?: boolean
    start_date?: boolean
    end_date?: boolean
    location?: boolean
    status?: boolean
    created_at?: boolean
    course?: boolean | CoursesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["events"]>

  export type EventsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    course_id?: boolean
    price?: boolean
    start_date?: boolean
    end_date?: boolean
    location?: boolean
    status?: boolean
    created_at?: boolean
    course?: boolean | CoursesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["events"]>

  export type EventsSelectScalar = {
    id?: boolean
    name?: boolean
    course_id?: boolean
    price?: boolean
    start_date?: boolean
    end_date?: boolean
    location?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type EventsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "course_id" | "price" | "start_date" | "end_date" | "location" | "status" | "created_at", ExtArgs["result"]["events"]>
  export type EventsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CoursesDefaultArgs<ExtArgs>
    Enrollments?: boolean | Events$EnrollmentsArgs<ExtArgs>
    _count?: boolean | EventsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CoursesDefaultArgs<ExtArgs>
  }
  export type EventsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CoursesDefaultArgs<ExtArgs>
  }

  export type $EventsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Events"
    objects: {
      course: Prisma.$CoursesPayload<ExtArgs>
      Enrollments: Prisma.$EnrollmentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      course_id: number
      price: number
      start_date: Date
      end_date: Date
      location: string
      status: $Enums.EventStatus
      created_at: Date
    }, ExtArgs["result"]["events"]>
    composites: {}
  }

  type EventsGetPayload<S extends boolean | null | undefined | EventsDefaultArgs> = $Result.GetResult<Prisma.$EventsPayload, S>

  type EventsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventsCountAggregateInputType | true
    }

  export interface EventsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Events'], meta: { name: 'Events' } }
    /**
     * Find zero or one Events that matches the filter.
     * @param {EventsFindUniqueArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventsFindUniqueArgs>(args: SelectSubset<T, EventsFindUniqueArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Events that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventsFindUniqueOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventsFindUniqueOrThrowArgs>(args: SelectSubset<T, EventsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsFindFirstArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventsFindFirstArgs>(args?: SelectSubset<T, EventsFindFirstArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Events that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsFindFirstOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventsFindFirstOrThrowArgs>(args?: SelectSubset<T, EventsFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.events.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.events.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventsWithIdOnly = await prisma.events.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventsFindManyArgs>(args?: SelectSubset<T, EventsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Events.
     * @param {EventsCreateArgs} args - Arguments to create a Events.
     * @example
     * // Create one Events
     * const Events = await prisma.events.create({
     *   data: {
     *     // ... data to create a Events
     *   }
     * })
     * 
     */
    create<T extends EventsCreateArgs>(args: SelectSubset<T, EventsCreateArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventsCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const events = await prisma.events.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventsCreateManyArgs>(args?: SelectSubset<T, EventsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventsCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const events = await prisma.events.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventsWithIdOnly = await prisma.events.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventsCreateManyAndReturnArgs>(args?: SelectSubset<T, EventsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Events.
     * @param {EventsDeleteArgs} args - Arguments to delete one Events.
     * @example
     * // Delete one Events
     * const Events = await prisma.events.delete({
     *   where: {
     *     // ... filter to delete one Events
     *   }
     * })
     * 
     */
    delete<T extends EventsDeleteArgs>(args: SelectSubset<T, EventsDeleteArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Events.
     * @param {EventsUpdateArgs} args - Arguments to update one Events.
     * @example
     * // Update one Events
     * const events = await prisma.events.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventsUpdateArgs>(args: SelectSubset<T, EventsUpdateArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventsDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.events.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventsDeleteManyArgs>(args?: SelectSubset<T, EventsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const events = await prisma.events.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventsUpdateManyArgs>(args: SelectSubset<T, EventsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventsUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const events = await prisma.events.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventsWithIdOnly = await prisma.events.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventsUpdateManyAndReturnArgs>(args: SelectSubset<T, EventsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Events.
     * @param {EventsUpsertArgs} args - Arguments to update or create a Events.
     * @example
     * // Update or create a Events
     * const events = await prisma.events.upsert({
     *   create: {
     *     // ... data to create a Events
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Events we want to update
     *   }
     * })
     */
    upsert<T extends EventsUpsertArgs>(args: SelectSubset<T, EventsUpsertArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.events.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventsCountArgs>(
      args?: Subset<T, EventsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventsAggregateArgs>(args: Subset<T, EventsAggregateArgs>): Prisma.PrismaPromise<GetEventsAggregateType<T>>

    /**
     * Group by Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsGroupByArgs} args - Group by arguments.
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
      T extends EventsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventsGroupByArgs['orderBy'] }
        : { orderBy?: EventsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Events model
   */
  readonly fields: EventsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Events.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CoursesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CoursesDefaultArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Enrollments<T extends Events$EnrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, Events$EnrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Events model
   */
  interface EventsFieldRefs {
    readonly id: FieldRef<"Events", 'Int'>
    readonly name: FieldRef<"Events", 'String'>
    readonly course_id: FieldRef<"Events", 'Int'>
    readonly price: FieldRef<"Events", 'Int'>
    readonly start_date: FieldRef<"Events", 'DateTime'>
    readonly end_date: FieldRef<"Events", 'DateTime'>
    readonly location: FieldRef<"Events", 'String'>
    readonly status: FieldRef<"Events", 'EventStatus'>
    readonly created_at: FieldRef<"Events", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Events findUnique
   */
  export type EventsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where: EventsWhereUniqueInput
  }

  /**
   * Events findUniqueOrThrow
   */
  export type EventsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where: EventsWhereUniqueInput
  }

  /**
   * Events findFirst
   */
  export type EventsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * Events findFirstOrThrow
   */
  export type EventsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * Events findMany
   */
  export type EventsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * Events create
   */
  export type EventsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * The data needed to create a Events.
     */
    data: XOR<EventsCreateInput, EventsUncheckedCreateInput>
  }

  /**
   * Events createMany
   */
  export type EventsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventsCreateManyInput | EventsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Events createManyAndReturn
   */
  export type EventsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventsCreateManyInput | EventsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Events update
   */
  export type EventsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * The data needed to update a Events.
     */
    data: XOR<EventsUpdateInput, EventsUncheckedUpdateInput>
    /**
     * Choose, which Events to update.
     */
    where: EventsWhereUniqueInput
  }

  /**
   * Events updateMany
   */
  export type EventsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventsUpdateManyMutationInput, EventsUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventsWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Events updateManyAndReturn
   */
  export type EventsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventsUpdateManyMutationInput, EventsUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventsWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Events upsert
   */
  export type EventsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * The filter to search for the Events to update in case it exists.
     */
    where: EventsWhereUniqueInput
    /**
     * In case the Events found by the `where` argument doesn't exist, create a new Events with this data.
     */
    create: XOR<EventsCreateInput, EventsUncheckedCreateInput>
    /**
     * In case the Events was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventsUpdateInput, EventsUncheckedUpdateInput>
  }

  /**
   * Events delete
   */
  export type EventsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter which Events to delete.
     */
    where: EventsWhereUniqueInput
  }

  /**
   * Events deleteMany
   */
  export type EventsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventsWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Events.Enrollments
   */
  export type Events$EnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollments
     */
    select?: EnrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollments
     */
    omit?: EnrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentsInclude<ExtArgs> | null
    where?: EnrollmentsWhereInput
    orderBy?: EnrollmentsOrderByWithRelationInput | EnrollmentsOrderByWithRelationInput[]
    cursor?: EnrollmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentsScalarFieldEnum | EnrollmentsScalarFieldEnum[]
  }

  /**
   * Events without action
   */
  export type EventsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
  }


  /**
   * Model Enrollments
   */

  export type AggregateEnrollments = {
    _count: EnrollmentsCountAggregateOutputType | null
    _avg: EnrollmentsAvgAggregateOutputType | null
    _sum: EnrollmentsSumAggregateOutputType | null
    _min: EnrollmentsMinAggregateOutputType | null
    _max: EnrollmentsMaxAggregateOutputType | null
  }

  export type EnrollmentsAvgAggregateOutputType = {
    student_id: number | null
    event_id: number | null
  }

  export type EnrollmentsSumAggregateOutputType = {
    student_id: number | null
    event_id: number | null
  }

  export type EnrollmentsMinAggregateOutputType = {
    id: string | null
    student_id: number | null
    event_id: number | null
    enrolled_at: Date | null
    notes: string | null
    attendance: $Enums.Attendance | null
  }

  export type EnrollmentsMaxAggregateOutputType = {
    id: string | null
    student_id: number | null
    event_id: number | null
    enrolled_at: Date | null
    notes: string | null
    attendance: $Enums.Attendance | null
  }

  export type EnrollmentsCountAggregateOutputType = {
    id: number
    student_id: number
    event_id: number
    enrolled_at: number
    notes: number
    attendance: number
    _all: number
  }


  export type EnrollmentsAvgAggregateInputType = {
    student_id?: true
    event_id?: true
  }

  export type EnrollmentsSumAggregateInputType = {
    student_id?: true
    event_id?: true
  }

  export type EnrollmentsMinAggregateInputType = {
    id?: true
    student_id?: true
    event_id?: true
    enrolled_at?: true
    notes?: true
    attendance?: true
  }

  export type EnrollmentsMaxAggregateInputType = {
    id?: true
    student_id?: true
    event_id?: true
    enrolled_at?: true
    notes?: true
    attendance?: true
  }

  export type EnrollmentsCountAggregateInputType = {
    id?: true
    student_id?: true
    event_id?: true
    enrolled_at?: true
    notes?: true
    attendance?: true
    _all?: true
  }

  export type EnrollmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollments to aggregate.
     */
    where?: EnrollmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentsOrderByWithRelationInput | EnrollmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnrollmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enrollments
    **/
    _count?: true | EnrollmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnrollmentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnrollmentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnrollmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnrollmentsMaxAggregateInputType
  }

  export type GetEnrollmentsAggregateType<T extends EnrollmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateEnrollments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnrollments[P]>
      : GetScalarType<T[P], AggregateEnrollments[P]>
  }




  export type EnrollmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentsWhereInput
    orderBy?: EnrollmentsOrderByWithAggregationInput | EnrollmentsOrderByWithAggregationInput[]
    by: EnrollmentsScalarFieldEnum[] | EnrollmentsScalarFieldEnum
    having?: EnrollmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnrollmentsCountAggregateInputType | true
    _avg?: EnrollmentsAvgAggregateInputType
    _sum?: EnrollmentsSumAggregateInputType
    _min?: EnrollmentsMinAggregateInputType
    _max?: EnrollmentsMaxAggregateInputType
  }

  export type EnrollmentsGroupByOutputType = {
    id: string
    student_id: number
    event_id: number
    enrolled_at: Date
    notes: string | null
    attendance: $Enums.Attendance | null
    _count: EnrollmentsCountAggregateOutputType | null
    _avg: EnrollmentsAvgAggregateOutputType | null
    _sum: EnrollmentsSumAggregateOutputType | null
    _min: EnrollmentsMinAggregateOutputType | null
    _max: EnrollmentsMaxAggregateOutputType | null
  }

  type GetEnrollmentsGroupByPayload<T extends EnrollmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnrollmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnrollmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnrollmentsGroupByOutputType[P]>
            : GetScalarType<T[P], EnrollmentsGroupByOutputType[P]>
        }
      >
    >


  export type EnrollmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    event_id?: boolean
    enrolled_at?: boolean
    notes?: boolean
    attendance?: boolean
    student?: boolean | StudentsDefaultArgs<ExtArgs>
    event?: boolean | EventsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollments"]>

  export type EnrollmentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    event_id?: boolean
    enrolled_at?: boolean
    notes?: boolean
    attendance?: boolean
    student?: boolean | StudentsDefaultArgs<ExtArgs>
    event?: boolean | EventsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollments"]>

  export type EnrollmentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    event_id?: boolean
    enrolled_at?: boolean
    notes?: boolean
    attendance?: boolean
    student?: boolean | StudentsDefaultArgs<ExtArgs>
    event?: boolean | EventsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollments"]>

  export type EnrollmentsSelectScalar = {
    id?: boolean
    student_id?: boolean
    event_id?: boolean
    enrolled_at?: boolean
    notes?: boolean
    attendance?: boolean
  }

  export type EnrollmentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "student_id" | "event_id" | "enrolled_at" | "notes" | "attendance", ExtArgs["result"]["enrollments"]>
  export type EnrollmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentsDefaultArgs<ExtArgs>
    event?: boolean | EventsDefaultArgs<ExtArgs>
  }
  export type EnrollmentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentsDefaultArgs<ExtArgs>
    event?: boolean | EventsDefaultArgs<ExtArgs>
  }
  export type EnrollmentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentsDefaultArgs<ExtArgs>
    event?: boolean | EventsDefaultArgs<ExtArgs>
  }

  export type $EnrollmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Enrollments"
    objects: {
      student: Prisma.$StudentsPayload<ExtArgs>
      event: Prisma.$EventsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      student_id: number
      event_id: number
      enrolled_at: Date
      notes: string | null
      attendance: $Enums.Attendance | null
    }, ExtArgs["result"]["enrollments"]>
    composites: {}
  }

  type EnrollmentsGetPayload<S extends boolean | null | undefined | EnrollmentsDefaultArgs> = $Result.GetResult<Prisma.$EnrollmentsPayload, S>

  type EnrollmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnrollmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnrollmentsCountAggregateInputType | true
    }

  export interface EnrollmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Enrollments'], meta: { name: 'Enrollments' } }
    /**
     * Find zero or one Enrollments that matches the filter.
     * @param {EnrollmentsFindUniqueArgs} args - Arguments to find a Enrollments
     * @example
     * // Get one Enrollments
     * const enrollments = await prisma.enrollments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnrollmentsFindUniqueArgs>(args: SelectSubset<T, EnrollmentsFindUniqueArgs<ExtArgs>>): Prisma__EnrollmentsClient<$Result.GetResult<Prisma.$EnrollmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Enrollments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnrollmentsFindUniqueOrThrowArgs} args - Arguments to find a Enrollments
     * @example
     * // Get one Enrollments
     * const enrollments = await prisma.enrollments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnrollmentsFindUniqueOrThrowArgs>(args: SelectSubset<T, EnrollmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnrollmentsClient<$Result.GetResult<Prisma.$EnrollmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentsFindFirstArgs} args - Arguments to find a Enrollments
     * @example
     * // Get one Enrollments
     * const enrollments = await prisma.enrollments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnrollmentsFindFirstArgs>(args?: SelectSubset<T, EnrollmentsFindFirstArgs<ExtArgs>>): Prisma__EnrollmentsClient<$Result.GetResult<Prisma.$EnrollmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentsFindFirstOrThrowArgs} args - Arguments to find a Enrollments
     * @example
     * // Get one Enrollments
     * const enrollments = await prisma.enrollments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnrollmentsFindFirstOrThrowArgs>(args?: SelectSubset<T, EnrollmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnrollmentsClient<$Result.GetResult<Prisma.$EnrollmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enrollments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enrollments
     * const enrollments = await prisma.enrollments.findMany()
     * 
     * // Get first 10 Enrollments
     * const enrollments = await prisma.enrollments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enrollmentsWithIdOnly = await prisma.enrollments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnrollmentsFindManyArgs>(args?: SelectSubset<T, EnrollmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Enrollments.
     * @param {EnrollmentsCreateArgs} args - Arguments to create a Enrollments.
     * @example
     * // Create one Enrollments
     * const Enrollments = await prisma.enrollments.create({
     *   data: {
     *     // ... data to create a Enrollments
     *   }
     * })
     * 
     */
    create<T extends EnrollmentsCreateArgs>(args: SelectSubset<T, EnrollmentsCreateArgs<ExtArgs>>): Prisma__EnrollmentsClient<$Result.GetResult<Prisma.$EnrollmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enrollments.
     * @param {EnrollmentsCreateManyArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollments = await prisma.enrollments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnrollmentsCreateManyArgs>(args?: SelectSubset<T, EnrollmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Enrollments and returns the data saved in the database.
     * @param {EnrollmentsCreateManyAndReturnArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollments = await prisma.enrollments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Enrollments and only return the `id`
     * const enrollmentsWithIdOnly = await prisma.enrollments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnrollmentsCreateManyAndReturnArgs>(args?: SelectSubset<T, EnrollmentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Enrollments.
     * @param {EnrollmentsDeleteArgs} args - Arguments to delete one Enrollments.
     * @example
     * // Delete one Enrollments
     * const Enrollments = await prisma.enrollments.delete({
     *   where: {
     *     // ... filter to delete one Enrollments
     *   }
     * })
     * 
     */
    delete<T extends EnrollmentsDeleteArgs>(args: SelectSubset<T, EnrollmentsDeleteArgs<ExtArgs>>): Prisma__EnrollmentsClient<$Result.GetResult<Prisma.$EnrollmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Enrollments.
     * @param {EnrollmentsUpdateArgs} args - Arguments to update one Enrollments.
     * @example
     * // Update one Enrollments
     * const enrollments = await prisma.enrollments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnrollmentsUpdateArgs>(args: SelectSubset<T, EnrollmentsUpdateArgs<ExtArgs>>): Prisma__EnrollmentsClient<$Result.GetResult<Prisma.$EnrollmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enrollments.
     * @param {EnrollmentsDeleteManyArgs} args - Arguments to filter Enrollments to delete.
     * @example
     * // Delete a few Enrollments
     * const { count } = await prisma.enrollments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnrollmentsDeleteManyArgs>(args?: SelectSubset<T, EnrollmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enrollments
     * const enrollments = await prisma.enrollments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnrollmentsUpdateManyArgs>(args: SelectSubset<T, EnrollmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments and returns the data updated in the database.
     * @param {EnrollmentsUpdateManyAndReturnArgs} args - Arguments to update many Enrollments.
     * @example
     * // Update many Enrollments
     * const enrollments = await prisma.enrollments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Enrollments and only return the `id`
     * const enrollmentsWithIdOnly = await prisma.enrollments.updateManyAndReturn({
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
    updateManyAndReturn<T extends EnrollmentsUpdateManyAndReturnArgs>(args: SelectSubset<T, EnrollmentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Enrollments.
     * @param {EnrollmentsUpsertArgs} args - Arguments to update or create a Enrollments.
     * @example
     * // Update or create a Enrollments
     * const enrollments = await prisma.enrollments.upsert({
     *   create: {
     *     // ... data to create a Enrollments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enrollments we want to update
     *   }
     * })
     */
    upsert<T extends EnrollmentsUpsertArgs>(args: SelectSubset<T, EnrollmentsUpsertArgs<ExtArgs>>): Prisma__EnrollmentsClient<$Result.GetResult<Prisma.$EnrollmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentsCountArgs} args - Arguments to filter Enrollments to count.
     * @example
     * // Count the number of Enrollments
     * const count = await prisma.enrollments.count({
     *   where: {
     *     // ... the filter for the Enrollments we want to count
     *   }
     * })
    **/
    count<T extends EnrollmentsCountArgs>(
      args?: Subset<T, EnrollmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnrollmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnrollmentsAggregateArgs>(args: Subset<T, EnrollmentsAggregateArgs>): Prisma.PrismaPromise<GetEnrollmentsAggregateType<T>>

    /**
     * Group by Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentsGroupByArgs} args - Group by arguments.
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
      T extends EnrollmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnrollmentsGroupByArgs['orderBy'] }
        : { orderBy?: EnrollmentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EnrollmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrollmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Enrollments model
   */
  readonly fields: EnrollmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Enrollments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnrollmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentsDefaultArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    event<T extends EventsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventsDefaultArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Enrollments model
   */
  interface EnrollmentsFieldRefs {
    readonly id: FieldRef<"Enrollments", 'String'>
    readonly student_id: FieldRef<"Enrollments", 'Int'>
    readonly event_id: FieldRef<"Enrollments", 'Int'>
    readonly enrolled_at: FieldRef<"Enrollments", 'DateTime'>
    readonly notes: FieldRef<"Enrollments", 'String'>
    readonly attendance: FieldRef<"Enrollments", 'Attendance'>
  }
    

  // Custom InputTypes
  /**
   * Enrollments findUnique
   */
  export type EnrollmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollments
     */
    select?: EnrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollments
     */
    omit?: EnrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentsInclude<ExtArgs> | null
    /**
     * Filter, which Enrollments to fetch.
     */
    where: EnrollmentsWhereUniqueInput
  }

  /**
   * Enrollments findUniqueOrThrow
   */
  export type EnrollmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollments
     */
    select?: EnrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollments
     */
    omit?: EnrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentsInclude<ExtArgs> | null
    /**
     * Filter, which Enrollments to fetch.
     */
    where: EnrollmentsWhereUniqueInput
  }

  /**
   * Enrollments findFirst
   */
  export type EnrollmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollments
     */
    select?: EnrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollments
     */
    omit?: EnrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentsInclude<ExtArgs> | null
    /**
     * Filter, which Enrollments to fetch.
     */
    where?: EnrollmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentsOrderByWithRelationInput | EnrollmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentsScalarFieldEnum | EnrollmentsScalarFieldEnum[]
  }

  /**
   * Enrollments findFirstOrThrow
   */
  export type EnrollmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollments
     */
    select?: EnrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollments
     */
    omit?: EnrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentsInclude<ExtArgs> | null
    /**
     * Filter, which Enrollments to fetch.
     */
    where?: EnrollmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentsOrderByWithRelationInput | EnrollmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentsScalarFieldEnum | EnrollmentsScalarFieldEnum[]
  }

  /**
   * Enrollments findMany
   */
  export type EnrollmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollments
     */
    select?: EnrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollments
     */
    omit?: EnrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentsInclude<ExtArgs> | null
    /**
     * Filter, which Enrollments to fetch.
     */
    where?: EnrollmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentsOrderByWithRelationInput | EnrollmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enrollments.
     */
    cursor?: EnrollmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    distinct?: EnrollmentsScalarFieldEnum | EnrollmentsScalarFieldEnum[]
  }

  /**
   * Enrollments create
   */
  export type EnrollmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollments
     */
    select?: EnrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollments
     */
    omit?: EnrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Enrollments.
     */
    data: XOR<EnrollmentsCreateInput, EnrollmentsUncheckedCreateInput>
  }

  /**
   * Enrollments createMany
   */
  export type EnrollmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Enrollments.
     */
    data: EnrollmentsCreateManyInput | EnrollmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Enrollments createManyAndReturn
   */
  export type EnrollmentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollments
     */
    select?: EnrollmentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollments
     */
    omit?: EnrollmentsOmit<ExtArgs> | null
    /**
     * The data used to create many Enrollments.
     */
    data: EnrollmentsCreateManyInput | EnrollmentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enrollments update
   */
  export type EnrollmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollments
     */
    select?: EnrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollments
     */
    omit?: EnrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Enrollments.
     */
    data: XOR<EnrollmentsUpdateInput, EnrollmentsUncheckedUpdateInput>
    /**
     * Choose, which Enrollments to update.
     */
    where: EnrollmentsWhereUniqueInput
  }

  /**
   * Enrollments updateMany
   */
  export type EnrollmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Enrollments.
     */
    data: XOR<EnrollmentsUpdateManyMutationInput, EnrollmentsUncheckedUpdateManyInput>
    /**
     * Filter which Enrollments to update
     */
    where?: EnrollmentsWhereInput
    /**
     * Limit how many Enrollments to update.
     */
    limit?: number
  }

  /**
   * Enrollments updateManyAndReturn
   */
  export type EnrollmentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollments
     */
    select?: EnrollmentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollments
     */
    omit?: EnrollmentsOmit<ExtArgs> | null
    /**
     * The data used to update Enrollments.
     */
    data: XOR<EnrollmentsUpdateManyMutationInput, EnrollmentsUncheckedUpdateManyInput>
    /**
     * Filter which Enrollments to update
     */
    where?: EnrollmentsWhereInput
    /**
     * Limit how many Enrollments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enrollments upsert
   */
  export type EnrollmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollments
     */
    select?: EnrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollments
     */
    omit?: EnrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Enrollments to update in case it exists.
     */
    where: EnrollmentsWhereUniqueInput
    /**
     * In case the Enrollments found by the `where` argument doesn't exist, create a new Enrollments with this data.
     */
    create: XOR<EnrollmentsCreateInput, EnrollmentsUncheckedCreateInput>
    /**
     * In case the Enrollments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnrollmentsUpdateInput, EnrollmentsUncheckedUpdateInput>
  }

  /**
   * Enrollments delete
   */
  export type EnrollmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollments
     */
    select?: EnrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollments
     */
    omit?: EnrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentsInclude<ExtArgs> | null
    /**
     * Filter which Enrollments to delete.
     */
    where: EnrollmentsWhereUniqueInput
  }

  /**
   * Enrollments deleteMany
   */
  export type EnrollmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollments to delete
     */
    where?: EnrollmentsWhereInput
    /**
     * Limit how many Enrollments to delete.
     */
    limit?: number
  }

  /**
   * Enrollments without action
   */
  export type EnrollmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollments
     */
    select?: EnrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollments
     */
    omit?: EnrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentsInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password_hash: 'password_hash',
    role: 'role',
    created_at: 'created_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const StudentsScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    phone: 'phone',
    gender: 'gender',
    dirección: 'dirección',
    parroquia: 'parroquia',
    asuntos_médicos: 'asuntos_médicos',
    created_at: 'created_at'
  };

  export type StudentsScalarFieldEnum = (typeof StudentsScalarFieldEnum)[keyof typeof StudentsScalarFieldEnum]


  export const CoursesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    level: 'level'
  };

  export type CoursesScalarFieldEnum = (typeof CoursesScalarFieldEnum)[keyof typeof CoursesScalarFieldEnum]


  export const EventsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    course_id: 'course_id',
    price: 'price',
    start_date: 'start_date',
    end_date: 'end_date',
    location: 'location',
    status: 'status',
    created_at: 'created_at'
  };

  export type EventsScalarFieldEnum = (typeof EventsScalarFieldEnum)[keyof typeof EventsScalarFieldEnum]


  export const EnrollmentsScalarFieldEnum: {
    id: 'id',
    student_id: 'student_id',
    event_id: 'event_id',
    enrolled_at: 'enrolled_at',
    notes: 'notes',
    attendance: 'attendance'
  };

  export type EnrollmentsScalarFieldEnum = (typeof EnrollmentsScalarFieldEnum)[keyof typeof EnrollmentsScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'CourseLevel'
   */
  export type EnumCourseLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CourseLevel'>
    


  /**
   * Reference to a field of type 'CourseLevel[]'
   */
  export type ListEnumCourseLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CourseLevel[]'>
    


  /**
   * Reference to a field of type 'EventStatus'
   */
  export type EnumEventStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventStatus'>
    


  /**
   * Reference to a field of type 'EventStatus[]'
   */
  export type ListEnumEventStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventStatus[]'>
    


  /**
   * Reference to a field of type 'Attendance'
   */
  export type EnumAttendanceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Attendance'>
    


  /**
   * Reference to a field of type 'Attendance[]'
   */
  export type ListEnumAttendanceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Attendance[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password_hash?: StringFilter<"Users"> | string
    role?: EnumRoleFilter<"Users"> | $Enums.Role
    created_at?: DateTimeFilter<"Users"> | Date | string
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    password_hash?: StringFilter<"Users"> | string
    role?: EnumRoleFilter<"Users"> | $Enums.Role
    created_at?: DateTimeFilter<"Users"> | Date | string
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
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
    id?: IntWithAggregatesFilter<"Users"> | number
    name?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    password_hash?: StringWithAggregatesFilter<"Users"> | string
    role?: EnumRoleWithAggregatesFilter<"Users"> | $Enums.Role
    created_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type StudentsWhereInput = {
    AND?: StudentsWhereInput | StudentsWhereInput[]
    OR?: StudentsWhereInput[]
    NOT?: StudentsWhereInput | StudentsWhereInput[]
    id?: IntFilter<"Students"> | number
    first_name?: StringFilter<"Students"> | string
    last_name?: StringFilter<"Students"> | string
    email?: StringNullableFilter<"Students"> | string | null
    phone?: StringFilter<"Students"> | string
    gender?: StringFilter<"Students"> | string
    dirección?: StringFilter<"Students"> | string
    parroquia?: StringFilter<"Students"> | string
    asuntos_médicos?: StringFilter<"Students"> | string
    created_at?: DateTimeFilter<"Students"> | Date | string
    Enrollments?: EnrollmentsListRelationFilter
  }

  export type StudentsOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrder
    gender?: SortOrder
    dirección?: SortOrder
    parroquia?: SortOrder
    asuntos_médicos?: SortOrder
    created_at?: SortOrder
    Enrollments?: EnrollmentsOrderByRelationAggregateInput
  }

  export type StudentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: StudentsWhereInput | StudentsWhereInput[]
    OR?: StudentsWhereInput[]
    NOT?: StudentsWhereInput | StudentsWhereInput[]
    first_name?: StringFilter<"Students"> | string
    last_name?: StringFilter<"Students"> | string
    phone?: StringFilter<"Students"> | string
    gender?: StringFilter<"Students"> | string
    dirección?: StringFilter<"Students"> | string
    parroquia?: StringFilter<"Students"> | string
    asuntos_médicos?: StringFilter<"Students"> | string
    created_at?: DateTimeFilter<"Students"> | Date | string
    Enrollments?: EnrollmentsListRelationFilter
  }, "id" | "email">

  export type StudentsOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrder
    gender?: SortOrder
    dirección?: SortOrder
    parroquia?: SortOrder
    asuntos_médicos?: SortOrder
    created_at?: SortOrder
    _count?: StudentsCountOrderByAggregateInput
    _avg?: StudentsAvgOrderByAggregateInput
    _max?: StudentsMaxOrderByAggregateInput
    _min?: StudentsMinOrderByAggregateInput
    _sum?: StudentsSumOrderByAggregateInput
  }

  export type StudentsScalarWhereWithAggregatesInput = {
    AND?: StudentsScalarWhereWithAggregatesInput | StudentsScalarWhereWithAggregatesInput[]
    OR?: StudentsScalarWhereWithAggregatesInput[]
    NOT?: StudentsScalarWhereWithAggregatesInput | StudentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Students"> | number
    first_name?: StringWithAggregatesFilter<"Students"> | string
    last_name?: StringWithAggregatesFilter<"Students"> | string
    email?: StringNullableWithAggregatesFilter<"Students"> | string | null
    phone?: StringWithAggregatesFilter<"Students"> | string
    gender?: StringWithAggregatesFilter<"Students"> | string
    dirección?: StringWithAggregatesFilter<"Students"> | string
    parroquia?: StringWithAggregatesFilter<"Students"> | string
    asuntos_médicos?: StringWithAggregatesFilter<"Students"> | string
    created_at?: DateTimeWithAggregatesFilter<"Students"> | Date | string
  }

  export type CoursesWhereInput = {
    AND?: CoursesWhereInput | CoursesWhereInput[]
    OR?: CoursesWhereInput[]
    NOT?: CoursesWhereInput | CoursesWhereInput[]
    id?: IntFilter<"Courses"> | number
    name?: StringFilter<"Courses"> | string
    description?: StringFilter<"Courses"> | string
    level?: EnumCourseLevelFilter<"Courses"> | $Enums.CourseLevel
    Events?: EventsListRelationFilter
  }

  export type CoursesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    level?: SortOrder
    Events?: EventsOrderByRelationAggregateInput
  }

  export type CoursesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CoursesWhereInput | CoursesWhereInput[]
    OR?: CoursesWhereInput[]
    NOT?: CoursesWhereInput | CoursesWhereInput[]
    name?: StringFilter<"Courses"> | string
    description?: StringFilter<"Courses"> | string
    level?: EnumCourseLevelFilter<"Courses"> | $Enums.CourseLevel
    Events?: EventsListRelationFilter
  }, "id">

  export type CoursesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    level?: SortOrder
    _count?: CoursesCountOrderByAggregateInput
    _avg?: CoursesAvgOrderByAggregateInput
    _max?: CoursesMaxOrderByAggregateInput
    _min?: CoursesMinOrderByAggregateInput
    _sum?: CoursesSumOrderByAggregateInput
  }

  export type CoursesScalarWhereWithAggregatesInput = {
    AND?: CoursesScalarWhereWithAggregatesInput | CoursesScalarWhereWithAggregatesInput[]
    OR?: CoursesScalarWhereWithAggregatesInput[]
    NOT?: CoursesScalarWhereWithAggregatesInput | CoursesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Courses"> | number
    name?: StringWithAggregatesFilter<"Courses"> | string
    description?: StringWithAggregatesFilter<"Courses"> | string
    level?: EnumCourseLevelWithAggregatesFilter<"Courses"> | $Enums.CourseLevel
  }

  export type EventsWhereInput = {
    AND?: EventsWhereInput | EventsWhereInput[]
    OR?: EventsWhereInput[]
    NOT?: EventsWhereInput | EventsWhereInput[]
    id?: IntFilter<"Events"> | number
    name?: StringFilter<"Events"> | string
    course_id?: IntFilter<"Events"> | number
    price?: IntFilter<"Events"> | number
    start_date?: DateTimeFilter<"Events"> | Date | string
    end_date?: DateTimeFilter<"Events"> | Date | string
    location?: StringFilter<"Events"> | string
    status?: EnumEventStatusFilter<"Events"> | $Enums.EventStatus
    created_at?: DateTimeFilter<"Events"> | Date | string
    course?: XOR<CoursesScalarRelationFilter, CoursesWhereInput>
    Enrollments?: EnrollmentsListRelationFilter
  }

  export type EventsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    course_id?: SortOrder
    price?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    location?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    course?: CoursesOrderByWithRelationInput
    Enrollments?: EnrollmentsOrderByRelationAggregateInput
  }

  export type EventsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventsWhereInput | EventsWhereInput[]
    OR?: EventsWhereInput[]
    NOT?: EventsWhereInput | EventsWhereInput[]
    name?: StringFilter<"Events"> | string
    course_id?: IntFilter<"Events"> | number
    price?: IntFilter<"Events"> | number
    start_date?: DateTimeFilter<"Events"> | Date | string
    end_date?: DateTimeFilter<"Events"> | Date | string
    location?: StringFilter<"Events"> | string
    status?: EnumEventStatusFilter<"Events"> | $Enums.EventStatus
    created_at?: DateTimeFilter<"Events"> | Date | string
    course?: XOR<CoursesScalarRelationFilter, CoursesWhereInput>
    Enrollments?: EnrollmentsListRelationFilter
  }, "id">

  export type EventsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    course_id?: SortOrder
    price?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    location?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    _count?: EventsCountOrderByAggregateInput
    _avg?: EventsAvgOrderByAggregateInput
    _max?: EventsMaxOrderByAggregateInput
    _min?: EventsMinOrderByAggregateInput
    _sum?: EventsSumOrderByAggregateInput
  }

  export type EventsScalarWhereWithAggregatesInput = {
    AND?: EventsScalarWhereWithAggregatesInput | EventsScalarWhereWithAggregatesInput[]
    OR?: EventsScalarWhereWithAggregatesInput[]
    NOT?: EventsScalarWhereWithAggregatesInput | EventsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Events"> | number
    name?: StringWithAggregatesFilter<"Events"> | string
    course_id?: IntWithAggregatesFilter<"Events"> | number
    price?: IntWithAggregatesFilter<"Events"> | number
    start_date?: DateTimeWithAggregatesFilter<"Events"> | Date | string
    end_date?: DateTimeWithAggregatesFilter<"Events"> | Date | string
    location?: StringWithAggregatesFilter<"Events"> | string
    status?: EnumEventStatusWithAggregatesFilter<"Events"> | $Enums.EventStatus
    created_at?: DateTimeWithAggregatesFilter<"Events"> | Date | string
  }

  export type EnrollmentsWhereInput = {
    AND?: EnrollmentsWhereInput | EnrollmentsWhereInput[]
    OR?: EnrollmentsWhereInput[]
    NOT?: EnrollmentsWhereInput | EnrollmentsWhereInput[]
    id?: StringFilter<"Enrollments"> | string
    student_id?: IntFilter<"Enrollments"> | number
    event_id?: IntFilter<"Enrollments"> | number
    enrolled_at?: DateTimeFilter<"Enrollments"> | Date | string
    notes?: StringNullableFilter<"Enrollments"> | string | null
    attendance?: EnumAttendanceNullableFilter<"Enrollments"> | $Enums.Attendance | null
    student?: XOR<StudentsScalarRelationFilter, StudentsWhereInput>
    event?: XOR<EventsScalarRelationFilter, EventsWhereInput>
  }

  export type EnrollmentsOrderByWithRelationInput = {
    id?: SortOrder
    student_id?: SortOrder
    event_id?: SortOrder
    enrolled_at?: SortOrder
    notes?: SortOrderInput | SortOrder
    attendance?: SortOrderInput | SortOrder
    student?: StudentsOrderByWithRelationInput
    event?: EventsOrderByWithRelationInput
  }

  export type EnrollmentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EnrollmentsWhereInput | EnrollmentsWhereInput[]
    OR?: EnrollmentsWhereInput[]
    NOT?: EnrollmentsWhereInput | EnrollmentsWhereInput[]
    student_id?: IntFilter<"Enrollments"> | number
    event_id?: IntFilter<"Enrollments"> | number
    enrolled_at?: DateTimeFilter<"Enrollments"> | Date | string
    notes?: StringNullableFilter<"Enrollments"> | string | null
    attendance?: EnumAttendanceNullableFilter<"Enrollments"> | $Enums.Attendance | null
    student?: XOR<StudentsScalarRelationFilter, StudentsWhereInput>
    event?: XOR<EventsScalarRelationFilter, EventsWhereInput>
  }, "id">

  export type EnrollmentsOrderByWithAggregationInput = {
    id?: SortOrder
    student_id?: SortOrder
    event_id?: SortOrder
    enrolled_at?: SortOrder
    notes?: SortOrderInput | SortOrder
    attendance?: SortOrderInput | SortOrder
    _count?: EnrollmentsCountOrderByAggregateInput
    _avg?: EnrollmentsAvgOrderByAggregateInput
    _max?: EnrollmentsMaxOrderByAggregateInput
    _min?: EnrollmentsMinOrderByAggregateInput
    _sum?: EnrollmentsSumOrderByAggregateInput
  }

  export type EnrollmentsScalarWhereWithAggregatesInput = {
    AND?: EnrollmentsScalarWhereWithAggregatesInput | EnrollmentsScalarWhereWithAggregatesInput[]
    OR?: EnrollmentsScalarWhereWithAggregatesInput[]
    NOT?: EnrollmentsScalarWhereWithAggregatesInput | EnrollmentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Enrollments"> | string
    student_id?: IntWithAggregatesFilter<"Enrollments"> | number
    event_id?: IntWithAggregatesFilter<"Enrollments"> | number
    enrolled_at?: DateTimeWithAggregatesFilter<"Enrollments"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"Enrollments"> | string | null
    attendance?: EnumAttendanceNullableWithAggregatesFilter<"Enrollments"> | $Enums.Attendance | null
  }

  export type UsersCreateInput = {
    name: string
    email: string
    password_hash: string
    role: $Enums.Role
    created_at?: Date | string
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password_hash: string
    role: $Enums.Role
    created_at?: Date | string
  }

  export type UsersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateManyInput = {
    id?: number
    name: string
    email: string
    password_hash: string
    role: $Enums.Role
    created_at?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentsCreateInput = {
    first_name: string
    last_name: string
    email?: string | null
    phone: string
    gender: string
    dirección: string
    parroquia: string
    asuntos_médicos: string
    created_at?: Date | string
    Enrollments?: EnrollmentsCreateNestedManyWithoutStudentInput
  }

  export type StudentsUncheckedCreateInput = {
    id?: number
    first_name: string
    last_name: string
    email?: string | null
    phone: string
    gender: string
    dirección: string
    parroquia: string
    asuntos_médicos: string
    created_at?: Date | string
    Enrollments?: EnrollmentsUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentsUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dirección?: StringFieldUpdateOperationsInput | string
    parroquia?: StringFieldUpdateOperationsInput | string
    asuntos_médicos?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Enrollments?: EnrollmentsUpdateManyWithoutStudentNestedInput
  }

  export type StudentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dirección?: StringFieldUpdateOperationsInput | string
    parroquia?: StringFieldUpdateOperationsInput | string
    asuntos_médicos?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Enrollments?: EnrollmentsUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentsCreateManyInput = {
    id?: number
    first_name: string
    last_name: string
    email?: string | null
    phone: string
    gender: string
    dirección: string
    parroquia: string
    asuntos_médicos: string
    created_at?: Date | string
  }

  export type StudentsUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dirección?: StringFieldUpdateOperationsInput | string
    parroquia?: StringFieldUpdateOperationsInput | string
    asuntos_médicos?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dirección?: StringFieldUpdateOperationsInput | string
    parroquia?: StringFieldUpdateOperationsInput | string
    asuntos_médicos?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoursesCreateInput = {
    name: string
    description: string
    level: $Enums.CourseLevel
    Events?: EventsCreateNestedManyWithoutCourseInput
  }

  export type CoursesUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    level: $Enums.CourseLevel
    Events?: EventsUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CoursesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    level?: EnumCourseLevelFieldUpdateOperationsInput | $Enums.CourseLevel
    Events?: EventsUpdateManyWithoutCourseNestedInput
  }

  export type CoursesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    level?: EnumCourseLevelFieldUpdateOperationsInput | $Enums.CourseLevel
    Events?: EventsUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CoursesCreateManyInput = {
    id?: number
    name: string
    description: string
    level: $Enums.CourseLevel
  }

  export type CoursesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    level?: EnumCourseLevelFieldUpdateOperationsInput | $Enums.CourseLevel
  }

  export type CoursesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    level?: EnumCourseLevelFieldUpdateOperationsInput | $Enums.CourseLevel
  }

  export type EventsCreateInput = {
    name: string
    price: number
    start_date: Date | string
    end_date: Date | string
    location: string
    status: $Enums.EventStatus
    created_at?: Date | string
    course: CoursesCreateNestedOneWithoutEventsInput
    Enrollments?: EnrollmentsCreateNestedManyWithoutEventInput
  }

  export type EventsUncheckedCreateInput = {
    id?: number
    name: string
    course_id: number
    price: number
    start_date: Date | string
    end_date: Date | string
    location: string
    status: $Enums.EventStatus
    created_at?: Date | string
    Enrollments?: EnrollmentsUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CoursesUpdateOneRequiredWithoutEventsNestedInput
    Enrollments?: EnrollmentsUpdateManyWithoutEventNestedInput
  }

  export type EventsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    course_id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Enrollments?: EnrollmentsUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventsCreateManyInput = {
    id?: number
    name: string
    course_id: number
    price: number
    start_date: Date | string
    end_date: Date | string
    location: string
    status: $Enums.EventStatus
    created_at?: Date | string
  }

  export type EventsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    course_id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentsCreateInput = {
    id?: string
    enrolled_at: Date | string
    notes?: string | null
    attendance?: $Enums.Attendance | null
    student: StudentsCreateNestedOneWithoutEnrollmentsInput
    event: EventsCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentsUncheckedCreateInput = {
    id?: string
    student_id: number
    event_id: number
    enrolled_at: Date | string
    notes?: string | null
    attendance?: $Enums.Attendance | null
  }

  export type EnrollmentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    enrolled_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: NullableEnumAttendanceFieldUpdateOperationsInput | $Enums.Attendance | null
    student?: StudentsUpdateOneRequiredWithoutEnrollmentsNestedInput
    event?: EventsUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    enrolled_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: NullableEnumAttendanceFieldUpdateOperationsInput | $Enums.Attendance | null
  }

  export type EnrollmentsCreateManyInput = {
    id?: string
    student_id: number
    event_id: number
    enrolled_at: Date | string
    notes?: string | null
    attendance?: $Enums.Attendance | null
  }

  export type EnrollmentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    enrolled_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: NullableEnumAttendanceFieldUpdateOperationsInput | $Enums.Attendance | null
  }

  export type EnrollmentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    enrolled_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: NullableEnumAttendanceFieldUpdateOperationsInput | $Enums.Attendance | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type EnrollmentsListRelationFilter = {
    every?: EnrollmentsWhereInput
    some?: EnrollmentsWhereInput
    none?: EnrollmentsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EnrollmentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentsCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    gender?: SortOrder
    dirección?: SortOrder
    parroquia?: SortOrder
    asuntos_médicos?: SortOrder
    created_at?: SortOrder
  }

  export type StudentsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StudentsMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    gender?: SortOrder
    dirección?: SortOrder
    parroquia?: SortOrder
    asuntos_médicos?: SortOrder
    created_at?: SortOrder
  }

  export type StudentsMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    gender?: SortOrder
    dirección?: SortOrder
    parroquia?: SortOrder
    asuntos_médicos?: SortOrder
    created_at?: SortOrder
  }

  export type StudentsSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumCourseLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseLevel | EnumCourseLevelFieldRefInput<$PrismaModel>
    in?: $Enums.CourseLevel[] | ListEnumCourseLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseLevel[] | ListEnumCourseLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseLevelFilter<$PrismaModel> | $Enums.CourseLevel
  }

  export type EventsListRelationFilter = {
    every?: EventsWhereInput
    some?: EventsWhereInput
    none?: EventsWhereInput
  }

  export type EventsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CoursesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    level?: SortOrder
  }

  export type CoursesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CoursesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    level?: SortOrder
  }

  export type CoursesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    level?: SortOrder
  }

  export type CoursesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumCourseLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseLevel | EnumCourseLevelFieldRefInput<$PrismaModel>
    in?: $Enums.CourseLevel[] | ListEnumCourseLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseLevel[] | ListEnumCourseLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseLevelWithAggregatesFilter<$PrismaModel> | $Enums.CourseLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCourseLevelFilter<$PrismaModel>
    _max?: NestedEnumCourseLevelFilter<$PrismaModel>
  }

  export type EnumEventStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusFilter<$PrismaModel> | $Enums.EventStatus
  }

  export type CoursesScalarRelationFilter = {
    is?: CoursesWhereInput
    isNot?: CoursesWhereInput
  }

  export type EventsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    course_id?: SortOrder
    price?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    location?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type EventsAvgOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
    price?: SortOrder
  }

  export type EventsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    course_id?: SortOrder
    price?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    location?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type EventsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    course_id?: SortOrder
    price?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    location?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type EventsSumOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
    price?: SortOrder
  }

  export type EnumEventStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusWithAggregatesFilter<$PrismaModel> | $Enums.EventStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventStatusFilter<$PrismaModel>
    _max?: NestedEnumEventStatusFilter<$PrismaModel>
  }

  export type EnumAttendanceNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Attendance | EnumAttendanceFieldRefInput<$PrismaModel> | null
    in?: $Enums.Attendance[] | ListEnumAttendanceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Attendance[] | ListEnumAttendanceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAttendanceNullableFilter<$PrismaModel> | $Enums.Attendance | null
  }

  export type StudentsScalarRelationFilter = {
    is?: StudentsWhereInput
    isNot?: StudentsWhereInput
  }

  export type EventsScalarRelationFilter = {
    is?: EventsWhereInput
    isNot?: EventsWhereInput
  }

  export type EnrollmentsCountOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    event_id?: SortOrder
    enrolled_at?: SortOrder
    notes?: SortOrder
    attendance?: SortOrder
  }

  export type EnrollmentsAvgOrderByAggregateInput = {
    student_id?: SortOrder
    event_id?: SortOrder
  }

  export type EnrollmentsMaxOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    event_id?: SortOrder
    enrolled_at?: SortOrder
    notes?: SortOrder
    attendance?: SortOrder
  }

  export type EnrollmentsMinOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    event_id?: SortOrder
    enrolled_at?: SortOrder
    notes?: SortOrder
    attendance?: SortOrder
  }

  export type EnrollmentsSumOrderByAggregateInput = {
    student_id?: SortOrder
    event_id?: SortOrder
  }

  export type EnumAttendanceNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Attendance | EnumAttendanceFieldRefInput<$PrismaModel> | null
    in?: $Enums.Attendance[] | ListEnumAttendanceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Attendance[] | ListEnumAttendanceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAttendanceNullableWithAggregatesFilter<$PrismaModel> | $Enums.Attendance | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAttendanceNullableFilter<$PrismaModel>
    _max?: NestedEnumAttendanceNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnrollmentsCreateNestedManyWithoutStudentInput = {
    create?: XOR<EnrollmentsCreateWithoutStudentInput, EnrollmentsUncheckedCreateWithoutStudentInput> | EnrollmentsCreateWithoutStudentInput[] | EnrollmentsUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EnrollmentsCreateOrConnectWithoutStudentInput | EnrollmentsCreateOrConnectWithoutStudentInput[]
    createMany?: EnrollmentsCreateManyStudentInputEnvelope
    connect?: EnrollmentsWhereUniqueInput | EnrollmentsWhereUniqueInput[]
  }

  export type EnrollmentsUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<EnrollmentsCreateWithoutStudentInput, EnrollmentsUncheckedCreateWithoutStudentInput> | EnrollmentsCreateWithoutStudentInput[] | EnrollmentsUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EnrollmentsCreateOrConnectWithoutStudentInput | EnrollmentsCreateOrConnectWithoutStudentInput[]
    createMany?: EnrollmentsCreateManyStudentInputEnvelope
    connect?: EnrollmentsWhereUniqueInput | EnrollmentsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnrollmentsUpdateManyWithoutStudentNestedInput = {
    create?: XOR<EnrollmentsCreateWithoutStudentInput, EnrollmentsUncheckedCreateWithoutStudentInput> | EnrollmentsCreateWithoutStudentInput[] | EnrollmentsUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EnrollmentsCreateOrConnectWithoutStudentInput | EnrollmentsCreateOrConnectWithoutStudentInput[]
    upsert?: EnrollmentsUpsertWithWhereUniqueWithoutStudentInput | EnrollmentsUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: EnrollmentsCreateManyStudentInputEnvelope
    set?: EnrollmentsWhereUniqueInput | EnrollmentsWhereUniqueInput[]
    disconnect?: EnrollmentsWhereUniqueInput | EnrollmentsWhereUniqueInput[]
    delete?: EnrollmentsWhereUniqueInput | EnrollmentsWhereUniqueInput[]
    connect?: EnrollmentsWhereUniqueInput | EnrollmentsWhereUniqueInput[]
    update?: EnrollmentsUpdateWithWhereUniqueWithoutStudentInput | EnrollmentsUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: EnrollmentsUpdateManyWithWhereWithoutStudentInput | EnrollmentsUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: EnrollmentsScalarWhereInput | EnrollmentsScalarWhereInput[]
  }

  export type EnrollmentsUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<EnrollmentsCreateWithoutStudentInput, EnrollmentsUncheckedCreateWithoutStudentInput> | EnrollmentsCreateWithoutStudentInput[] | EnrollmentsUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EnrollmentsCreateOrConnectWithoutStudentInput | EnrollmentsCreateOrConnectWithoutStudentInput[]
    upsert?: EnrollmentsUpsertWithWhereUniqueWithoutStudentInput | EnrollmentsUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: EnrollmentsCreateManyStudentInputEnvelope
    set?: EnrollmentsWhereUniqueInput | EnrollmentsWhereUniqueInput[]
    disconnect?: EnrollmentsWhereUniqueInput | EnrollmentsWhereUniqueInput[]
    delete?: EnrollmentsWhereUniqueInput | EnrollmentsWhereUniqueInput[]
    connect?: EnrollmentsWhereUniqueInput | EnrollmentsWhereUniqueInput[]
    update?: EnrollmentsUpdateWithWhereUniqueWithoutStudentInput | EnrollmentsUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: EnrollmentsUpdateManyWithWhereWithoutStudentInput | EnrollmentsUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: EnrollmentsScalarWhereInput | EnrollmentsScalarWhereInput[]
  }

  export type EventsCreateNestedManyWithoutCourseInput = {
    create?: XOR<EventsCreateWithoutCourseInput, EventsUncheckedCreateWithoutCourseInput> | EventsCreateWithoutCourseInput[] | EventsUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EventsCreateOrConnectWithoutCourseInput | EventsCreateOrConnectWithoutCourseInput[]
    createMany?: EventsCreateManyCourseInputEnvelope
    connect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
  }

  export type EventsUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<EventsCreateWithoutCourseInput, EventsUncheckedCreateWithoutCourseInput> | EventsCreateWithoutCourseInput[] | EventsUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EventsCreateOrConnectWithoutCourseInput | EventsCreateOrConnectWithoutCourseInput[]
    createMany?: EventsCreateManyCourseInputEnvelope
    connect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
  }

  export type EnumCourseLevelFieldUpdateOperationsInput = {
    set?: $Enums.CourseLevel
  }

  export type EventsUpdateManyWithoutCourseNestedInput = {
    create?: XOR<EventsCreateWithoutCourseInput, EventsUncheckedCreateWithoutCourseInput> | EventsCreateWithoutCourseInput[] | EventsUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EventsCreateOrConnectWithoutCourseInput | EventsCreateOrConnectWithoutCourseInput[]
    upsert?: EventsUpsertWithWhereUniqueWithoutCourseInput | EventsUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: EventsCreateManyCourseInputEnvelope
    set?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    disconnect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    delete?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    connect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    update?: EventsUpdateWithWhereUniqueWithoutCourseInput | EventsUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: EventsUpdateManyWithWhereWithoutCourseInput | EventsUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: EventsScalarWhereInput | EventsScalarWhereInput[]
  }

  export type EventsUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<EventsCreateWithoutCourseInput, EventsUncheckedCreateWithoutCourseInput> | EventsCreateWithoutCourseInput[] | EventsUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EventsCreateOrConnectWithoutCourseInput | EventsCreateOrConnectWithoutCourseInput[]
    upsert?: EventsUpsertWithWhereUniqueWithoutCourseInput | EventsUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: EventsCreateManyCourseInputEnvelope
    set?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    disconnect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    delete?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    connect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    update?: EventsUpdateWithWhereUniqueWithoutCourseInput | EventsUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: EventsUpdateManyWithWhereWithoutCourseInput | EventsUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: EventsScalarWhereInput | EventsScalarWhereInput[]
  }

  export type CoursesCreateNestedOneWithoutEventsInput = {
    create?: XOR<CoursesCreateWithoutEventsInput, CoursesUncheckedCreateWithoutEventsInput>
    connectOrCreate?: CoursesCreateOrConnectWithoutEventsInput
    connect?: CoursesWhereUniqueInput
  }

  export type EnrollmentsCreateNestedManyWithoutEventInput = {
    create?: XOR<EnrollmentsCreateWithoutEventInput, EnrollmentsUncheckedCreateWithoutEventInput> | EnrollmentsCreateWithoutEventInput[] | EnrollmentsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EnrollmentsCreateOrConnectWithoutEventInput | EnrollmentsCreateOrConnectWithoutEventInput[]
    createMany?: EnrollmentsCreateManyEventInputEnvelope
    connect?: EnrollmentsWhereUniqueInput | EnrollmentsWhereUniqueInput[]
  }

  export type EnrollmentsUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EnrollmentsCreateWithoutEventInput, EnrollmentsUncheckedCreateWithoutEventInput> | EnrollmentsCreateWithoutEventInput[] | EnrollmentsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EnrollmentsCreateOrConnectWithoutEventInput | EnrollmentsCreateOrConnectWithoutEventInput[]
    createMany?: EnrollmentsCreateManyEventInputEnvelope
    connect?: EnrollmentsWhereUniqueInput | EnrollmentsWhereUniqueInput[]
  }

  export type EnumEventStatusFieldUpdateOperationsInput = {
    set?: $Enums.EventStatus
  }

  export type CoursesUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<CoursesCreateWithoutEventsInput, CoursesUncheckedCreateWithoutEventsInput>
    connectOrCreate?: CoursesCreateOrConnectWithoutEventsInput
    upsert?: CoursesUpsertWithoutEventsInput
    connect?: CoursesWhereUniqueInput
    update?: XOR<XOR<CoursesUpdateToOneWithWhereWithoutEventsInput, CoursesUpdateWithoutEventsInput>, CoursesUncheckedUpdateWithoutEventsInput>
  }

  export type EnrollmentsUpdateManyWithoutEventNestedInput = {
    create?: XOR<EnrollmentsCreateWithoutEventInput, EnrollmentsUncheckedCreateWithoutEventInput> | EnrollmentsCreateWithoutEventInput[] | EnrollmentsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EnrollmentsCreateOrConnectWithoutEventInput | EnrollmentsCreateOrConnectWithoutEventInput[]
    upsert?: EnrollmentsUpsertWithWhereUniqueWithoutEventInput | EnrollmentsUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EnrollmentsCreateManyEventInputEnvelope
    set?: EnrollmentsWhereUniqueInput | EnrollmentsWhereUniqueInput[]
    disconnect?: EnrollmentsWhereUniqueInput | EnrollmentsWhereUniqueInput[]
    delete?: EnrollmentsWhereUniqueInput | EnrollmentsWhereUniqueInput[]
    connect?: EnrollmentsWhereUniqueInput | EnrollmentsWhereUniqueInput[]
    update?: EnrollmentsUpdateWithWhereUniqueWithoutEventInput | EnrollmentsUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EnrollmentsUpdateManyWithWhereWithoutEventInput | EnrollmentsUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EnrollmentsScalarWhereInput | EnrollmentsScalarWhereInput[]
  }

  export type EnrollmentsUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EnrollmentsCreateWithoutEventInput, EnrollmentsUncheckedCreateWithoutEventInput> | EnrollmentsCreateWithoutEventInput[] | EnrollmentsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EnrollmentsCreateOrConnectWithoutEventInput | EnrollmentsCreateOrConnectWithoutEventInput[]
    upsert?: EnrollmentsUpsertWithWhereUniqueWithoutEventInput | EnrollmentsUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EnrollmentsCreateManyEventInputEnvelope
    set?: EnrollmentsWhereUniqueInput | EnrollmentsWhereUniqueInput[]
    disconnect?: EnrollmentsWhereUniqueInput | EnrollmentsWhereUniqueInput[]
    delete?: EnrollmentsWhereUniqueInput | EnrollmentsWhereUniqueInput[]
    connect?: EnrollmentsWhereUniqueInput | EnrollmentsWhereUniqueInput[]
    update?: EnrollmentsUpdateWithWhereUniqueWithoutEventInput | EnrollmentsUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EnrollmentsUpdateManyWithWhereWithoutEventInput | EnrollmentsUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EnrollmentsScalarWhereInput | EnrollmentsScalarWhereInput[]
  }

  export type StudentsCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<StudentsCreateWithoutEnrollmentsInput, StudentsUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: StudentsCreateOrConnectWithoutEnrollmentsInput
    connect?: StudentsWhereUniqueInput
  }

  export type EventsCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<EventsCreateWithoutEnrollmentsInput, EventsUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: EventsCreateOrConnectWithoutEnrollmentsInput
    connect?: EventsWhereUniqueInput
  }

  export type NullableEnumAttendanceFieldUpdateOperationsInput = {
    set?: $Enums.Attendance | null
  }

  export type StudentsUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<StudentsCreateWithoutEnrollmentsInput, StudentsUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: StudentsCreateOrConnectWithoutEnrollmentsInput
    upsert?: StudentsUpsertWithoutEnrollmentsInput
    connect?: StudentsWhereUniqueInput
    update?: XOR<XOR<StudentsUpdateToOneWithWhereWithoutEnrollmentsInput, StudentsUpdateWithoutEnrollmentsInput>, StudentsUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type EventsUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<EventsCreateWithoutEnrollmentsInput, EventsUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: EventsCreateOrConnectWithoutEnrollmentsInput
    upsert?: EventsUpsertWithoutEnrollmentsInput
    connect?: EventsWhereUniqueInput
    update?: XOR<XOR<EventsUpdateToOneWithWhereWithoutEnrollmentsInput, EventsUpdateWithoutEnrollmentsInput>, EventsUncheckedUpdateWithoutEnrollmentsInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedEnumCourseLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseLevel | EnumCourseLevelFieldRefInput<$PrismaModel>
    in?: $Enums.CourseLevel[] | ListEnumCourseLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseLevel[] | ListEnumCourseLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseLevelFilter<$PrismaModel> | $Enums.CourseLevel
  }

  export type NestedEnumCourseLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseLevel | EnumCourseLevelFieldRefInput<$PrismaModel>
    in?: $Enums.CourseLevel[] | ListEnumCourseLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseLevel[] | ListEnumCourseLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseLevelWithAggregatesFilter<$PrismaModel> | $Enums.CourseLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCourseLevelFilter<$PrismaModel>
    _max?: NestedEnumCourseLevelFilter<$PrismaModel>
  }

  export type NestedEnumEventStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusFilter<$PrismaModel> | $Enums.EventStatus
  }

  export type NestedEnumEventStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusWithAggregatesFilter<$PrismaModel> | $Enums.EventStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventStatusFilter<$PrismaModel>
    _max?: NestedEnumEventStatusFilter<$PrismaModel>
  }

  export type NestedEnumAttendanceNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Attendance | EnumAttendanceFieldRefInput<$PrismaModel> | null
    in?: $Enums.Attendance[] | ListEnumAttendanceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Attendance[] | ListEnumAttendanceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAttendanceNullableFilter<$PrismaModel> | $Enums.Attendance | null
  }

  export type NestedEnumAttendanceNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Attendance | EnumAttendanceFieldRefInput<$PrismaModel> | null
    in?: $Enums.Attendance[] | ListEnumAttendanceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Attendance[] | ListEnumAttendanceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAttendanceNullableWithAggregatesFilter<$PrismaModel> | $Enums.Attendance | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAttendanceNullableFilter<$PrismaModel>
    _max?: NestedEnumAttendanceNullableFilter<$PrismaModel>
  }

  export type EnrollmentsCreateWithoutStudentInput = {
    id?: string
    enrolled_at: Date | string
    notes?: string | null
    attendance?: $Enums.Attendance | null
    event: EventsCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentsUncheckedCreateWithoutStudentInput = {
    id?: string
    event_id: number
    enrolled_at: Date | string
    notes?: string | null
    attendance?: $Enums.Attendance | null
  }

  export type EnrollmentsCreateOrConnectWithoutStudentInput = {
    where: EnrollmentsWhereUniqueInput
    create: XOR<EnrollmentsCreateWithoutStudentInput, EnrollmentsUncheckedCreateWithoutStudentInput>
  }

  export type EnrollmentsCreateManyStudentInputEnvelope = {
    data: EnrollmentsCreateManyStudentInput | EnrollmentsCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type EnrollmentsUpsertWithWhereUniqueWithoutStudentInput = {
    where: EnrollmentsWhereUniqueInput
    update: XOR<EnrollmentsUpdateWithoutStudentInput, EnrollmentsUncheckedUpdateWithoutStudentInput>
    create: XOR<EnrollmentsCreateWithoutStudentInput, EnrollmentsUncheckedCreateWithoutStudentInput>
  }

  export type EnrollmentsUpdateWithWhereUniqueWithoutStudentInput = {
    where: EnrollmentsWhereUniqueInput
    data: XOR<EnrollmentsUpdateWithoutStudentInput, EnrollmentsUncheckedUpdateWithoutStudentInput>
  }

  export type EnrollmentsUpdateManyWithWhereWithoutStudentInput = {
    where: EnrollmentsScalarWhereInput
    data: XOR<EnrollmentsUpdateManyMutationInput, EnrollmentsUncheckedUpdateManyWithoutStudentInput>
  }

  export type EnrollmentsScalarWhereInput = {
    AND?: EnrollmentsScalarWhereInput | EnrollmentsScalarWhereInput[]
    OR?: EnrollmentsScalarWhereInput[]
    NOT?: EnrollmentsScalarWhereInput | EnrollmentsScalarWhereInput[]
    id?: StringFilter<"Enrollments"> | string
    student_id?: IntFilter<"Enrollments"> | number
    event_id?: IntFilter<"Enrollments"> | number
    enrolled_at?: DateTimeFilter<"Enrollments"> | Date | string
    notes?: StringNullableFilter<"Enrollments"> | string | null
    attendance?: EnumAttendanceNullableFilter<"Enrollments"> | $Enums.Attendance | null
  }

  export type EventsCreateWithoutCourseInput = {
    name: string
    price: number
    start_date: Date | string
    end_date: Date | string
    location: string
    status: $Enums.EventStatus
    created_at?: Date | string
    Enrollments?: EnrollmentsCreateNestedManyWithoutEventInput
  }

  export type EventsUncheckedCreateWithoutCourseInput = {
    id?: number
    name: string
    price: number
    start_date: Date | string
    end_date: Date | string
    location: string
    status: $Enums.EventStatus
    created_at?: Date | string
    Enrollments?: EnrollmentsUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventsCreateOrConnectWithoutCourseInput = {
    where: EventsWhereUniqueInput
    create: XOR<EventsCreateWithoutCourseInput, EventsUncheckedCreateWithoutCourseInput>
  }

  export type EventsCreateManyCourseInputEnvelope = {
    data: EventsCreateManyCourseInput | EventsCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type EventsUpsertWithWhereUniqueWithoutCourseInput = {
    where: EventsWhereUniqueInput
    update: XOR<EventsUpdateWithoutCourseInput, EventsUncheckedUpdateWithoutCourseInput>
    create: XOR<EventsCreateWithoutCourseInput, EventsUncheckedCreateWithoutCourseInput>
  }

  export type EventsUpdateWithWhereUniqueWithoutCourseInput = {
    where: EventsWhereUniqueInput
    data: XOR<EventsUpdateWithoutCourseInput, EventsUncheckedUpdateWithoutCourseInput>
  }

  export type EventsUpdateManyWithWhereWithoutCourseInput = {
    where: EventsScalarWhereInput
    data: XOR<EventsUpdateManyMutationInput, EventsUncheckedUpdateManyWithoutCourseInput>
  }

  export type EventsScalarWhereInput = {
    AND?: EventsScalarWhereInput | EventsScalarWhereInput[]
    OR?: EventsScalarWhereInput[]
    NOT?: EventsScalarWhereInput | EventsScalarWhereInput[]
    id?: IntFilter<"Events"> | number
    name?: StringFilter<"Events"> | string
    course_id?: IntFilter<"Events"> | number
    price?: IntFilter<"Events"> | number
    start_date?: DateTimeFilter<"Events"> | Date | string
    end_date?: DateTimeFilter<"Events"> | Date | string
    location?: StringFilter<"Events"> | string
    status?: EnumEventStatusFilter<"Events"> | $Enums.EventStatus
    created_at?: DateTimeFilter<"Events"> | Date | string
  }

  export type CoursesCreateWithoutEventsInput = {
    name: string
    description: string
    level: $Enums.CourseLevel
  }

  export type CoursesUncheckedCreateWithoutEventsInput = {
    id?: number
    name: string
    description: string
    level: $Enums.CourseLevel
  }

  export type CoursesCreateOrConnectWithoutEventsInput = {
    where: CoursesWhereUniqueInput
    create: XOR<CoursesCreateWithoutEventsInput, CoursesUncheckedCreateWithoutEventsInput>
  }

  export type EnrollmentsCreateWithoutEventInput = {
    id?: string
    enrolled_at: Date | string
    notes?: string | null
    attendance?: $Enums.Attendance | null
    student: StudentsCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentsUncheckedCreateWithoutEventInput = {
    id?: string
    student_id: number
    enrolled_at: Date | string
    notes?: string | null
    attendance?: $Enums.Attendance | null
  }

  export type EnrollmentsCreateOrConnectWithoutEventInput = {
    where: EnrollmentsWhereUniqueInput
    create: XOR<EnrollmentsCreateWithoutEventInput, EnrollmentsUncheckedCreateWithoutEventInput>
  }

  export type EnrollmentsCreateManyEventInputEnvelope = {
    data: EnrollmentsCreateManyEventInput | EnrollmentsCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type CoursesUpsertWithoutEventsInput = {
    update: XOR<CoursesUpdateWithoutEventsInput, CoursesUncheckedUpdateWithoutEventsInput>
    create: XOR<CoursesCreateWithoutEventsInput, CoursesUncheckedCreateWithoutEventsInput>
    where?: CoursesWhereInput
  }

  export type CoursesUpdateToOneWithWhereWithoutEventsInput = {
    where?: CoursesWhereInput
    data: XOR<CoursesUpdateWithoutEventsInput, CoursesUncheckedUpdateWithoutEventsInput>
  }

  export type CoursesUpdateWithoutEventsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    level?: EnumCourseLevelFieldUpdateOperationsInput | $Enums.CourseLevel
  }

  export type CoursesUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    level?: EnumCourseLevelFieldUpdateOperationsInput | $Enums.CourseLevel
  }

  export type EnrollmentsUpsertWithWhereUniqueWithoutEventInput = {
    where: EnrollmentsWhereUniqueInput
    update: XOR<EnrollmentsUpdateWithoutEventInput, EnrollmentsUncheckedUpdateWithoutEventInput>
    create: XOR<EnrollmentsCreateWithoutEventInput, EnrollmentsUncheckedCreateWithoutEventInput>
  }

  export type EnrollmentsUpdateWithWhereUniqueWithoutEventInput = {
    where: EnrollmentsWhereUniqueInput
    data: XOR<EnrollmentsUpdateWithoutEventInput, EnrollmentsUncheckedUpdateWithoutEventInput>
  }

  export type EnrollmentsUpdateManyWithWhereWithoutEventInput = {
    where: EnrollmentsScalarWhereInput
    data: XOR<EnrollmentsUpdateManyMutationInput, EnrollmentsUncheckedUpdateManyWithoutEventInput>
  }

  export type StudentsCreateWithoutEnrollmentsInput = {
    first_name: string
    last_name: string
    email?: string | null
    phone: string
    gender: string
    dirección: string
    parroquia: string
    asuntos_médicos: string
    created_at?: Date | string
  }

  export type StudentsUncheckedCreateWithoutEnrollmentsInput = {
    id?: number
    first_name: string
    last_name: string
    email?: string | null
    phone: string
    gender: string
    dirección: string
    parroquia: string
    asuntos_médicos: string
    created_at?: Date | string
  }

  export type StudentsCreateOrConnectWithoutEnrollmentsInput = {
    where: StudentsWhereUniqueInput
    create: XOR<StudentsCreateWithoutEnrollmentsInput, StudentsUncheckedCreateWithoutEnrollmentsInput>
  }

  export type EventsCreateWithoutEnrollmentsInput = {
    name: string
    price: number
    start_date: Date | string
    end_date: Date | string
    location: string
    status: $Enums.EventStatus
    created_at?: Date | string
    course: CoursesCreateNestedOneWithoutEventsInput
  }

  export type EventsUncheckedCreateWithoutEnrollmentsInput = {
    id?: number
    name: string
    course_id: number
    price: number
    start_date: Date | string
    end_date: Date | string
    location: string
    status: $Enums.EventStatus
    created_at?: Date | string
  }

  export type EventsCreateOrConnectWithoutEnrollmentsInput = {
    where: EventsWhereUniqueInput
    create: XOR<EventsCreateWithoutEnrollmentsInput, EventsUncheckedCreateWithoutEnrollmentsInput>
  }

  export type StudentsUpsertWithoutEnrollmentsInput = {
    update: XOR<StudentsUpdateWithoutEnrollmentsInput, StudentsUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<StudentsCreateWithoutEnrollmentsInput, StudentsUncheckedCreateWithoutEnrollmentsInput>
    where?: StudentsWhereInput
  }

  export type StudentsUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: StudentsWhereInput
    data: XOR<StudentsUpdateWithoutEnrollmentsInput, StudentsUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type StudentsUpdateWithoutEnrollmentsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dirección?: StringFieldUpdateOperationsInput | string
    parroquia?: StringFieldUpdateOperationsInput | string
    asuntos_médicos?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentsUncheckedUpdateWithoutEnrollmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dirección?: StringFieldUpdateOperationsInput | string
    parroquia?: StringFieldUpdateOperationsInput | string
    asuntos_médicos?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventsUpsertWithoutEnrollmentsInput = {
    update: XOR<EventsUpdateWithoutEnrollmentsInput, EventsUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<EventsCreateWithoutEnrollmentsInput, EventsUncheckedCreateWithoutEnrollmentsInput>
    where?: EventsWhereInput
  }

  export type EventsUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: EventsWhereInput
    data: XOR<EventsUpdateWithoutEnrollmentsInput, EventsUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type EventsUpdateWithoutEnrollmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CoursesUpdateOneRequiredWithoutEventsNestedInput
  }

  export type EventsUncheckedUpdateWithoutEnrollmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    course_id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentsCreateManyStudentInput = {
    id?: string
    event_id: number
    enrolled_at: Date | string
    notes?: string | null
    attendance?: $Enums.Attendance | null
  }

  export type EnrollmentsUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    enrolled_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: NullableEnumAttendanceFieldUpdateOperationsInput | $Enums.Attendance | null
    event?: EventsUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentsUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: IntFieldUpdateOperationsInput | number
    enrolled_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: NullableEnumAttendanceFieldUpdateOperationsInput | $Enums.Attendance | null
  }

  export type EnrollmentsUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: IntFieldUpdateOperationsInput | number
    enrolled_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: NullableEnumAttendanceFieldUpdateOperationsInput | $Enums.Attendance | null
  }

  export type EventsCreateManyCourseInput = {
    id?: number
    name: string
    price: number
    start_date: Date | string
    end_date: Date | string
    location: string
    status: $Enums.EventStatus
    created_at?: Date | string
  }

  export type EventsUpdateWithoutCourseInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Enrollments?: EnrollmentsUpdateManyWithoutEventNestedInput
  }

  export type EventsUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Enrollments?: EnrollmentsUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventsUncheckedUpdateManyWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentsCreateManyEventInput = {
    id?: string
    student_id: number
    enrolled_at: Date | string
    notes?: string | null
    attendance?: $Enums.Attendance | null
  }

  export type EnrollmentsUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    enrolled_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: NullableEnumAttendanceFieldUpdateOperationsInput | $Enums.Attendance | null
    student?: StudentsUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentsUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: IntFieldUpdateOperationsInput | number
    enrolled_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: NullableEnumAttendanceFieldUpdateOperationsInput | $Enums.Attendance | null
  }

  export type EnrollmentsUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: IntFieldUpdateOperationsInput | number
    enrolled_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: NullableEnumAttendanceFieldUpdateOperationsInput | $Enums.Attendance | null
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