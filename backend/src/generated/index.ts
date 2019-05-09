// Code generated by Prisma (prisma@1.32.2). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  blogPost: (where?: BlogPostWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  blogPost: (where: BlogPostWhereUniqueInput) => BlogPostNullablePromise;
  blogPosts: (args?: {
    where?: BlogPostWhereInput;
    orderBy?: BlogPostOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<BlogPost>;
  blogPostsConnection: (args?: {
    where?: BlogPostWhereInput;
    orderBy?: BlogPostOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => BlogPostConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createBlogPost: (data: BlogPostCreateInput) => BlogPostPromise;
  updateBlogPost: (args: {
    data: BlogPostUpdateInput;
    where: BlogPostWhereUniqueInput;
  }) => BlogPostPromise;
  updateManyBlogPosts: (args: {
    data: BlogPostUpdateManyMutationInput;
    where?: BlogPostWhereInput;
  }) => BatchPayloadPromise;
  upsertBlogPost: (args: {
    where: BlogPostWhereUniqueInput;
    create: BlogPostCreateInput;
    update: BlogPostUpdateInput;
  }) => BlogPostPromise;
  deleteBlogPost: (where: BlogPostWhereUniqueInput) => BlogPostPromise;
  deleteManyBlogPosts: (where?: BlogPostWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  blogPost: (
    where?: BlogPostSubscriptionWhereInput
  ) => BlogPostSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type Permission =
  | "ADMIN"
  | "USER"
  | "ITEMCREATE"
  | "ITEMUPDATE"
  | "ITEMDELETE"
  | "PERMISSIONUPDATE";

export type BlogPostOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "body_ASC"
  | "body_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC"
  | "resetToken_ASC"
  | "resetToken_DESC"
  | "resetTokenExpiry_ASC"
  | "resetTokenExpiry_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput;
  create: UserCreateInput;
}

export interface BlogPostCreateInput {
  id?: Maybe<ID_Input>;
  title: String;
  body: String;
  user: UserCreateOneInput;
}

export interface UserUpdateOneRequiredInput {
  create?: Maybe<UserCreateInput>;
  update?: Maybe<UserUpdateDataInput>;
  upsert?: Maybe<UserUpsertNestedInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export type BlogPostWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface BlogPostUpdateInput {
  title?: Maybe<String>;
  body?: Maybe<String>;
  user?: Maybe<UserUpdateOneRequiredInput>;
}

export interface UserUpdateInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
  resetToken?: Maybe<String>;
  resetTokenExpiry?: Maybe<Float>;
  permissions?: Maybe<UserUpdatepermissionsInput>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  email?: Maybe<String>;
}>;

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  email?: Maybe<String>;
  email_not?: Maybe<String>;
  email_in?: Maybe<String[] | String>;
  email_not_in?: Maybe<String[] | String>;
  email_lt?: Maybe<String>;
  email_lte?: Maybe<String>;
  email_gt?: Maybe<String>;
  email_gte?: Maybe<String>;
  email_contains?: Maybe<String>;
  email_not_contains?: Maybe<String>;
  email_starts_with?: Maybe<String>;
  email_not_starts_with?: Maybe<String>;
  email_ends_with?: Maybe<String>;
  email_not_ends_with?: Maybe<String>;
  password?: Maybe<String>;
  password_not?: Maybe<String>;
  password_in?: Maybe<String[] | String>;
  password_not_in?: Maybe<String[] | String>;
  password_lt?: Maybe<String>;
  password_lte?: Maybe<String>;
  password_gt?: Maybe<String>;
  password_gte?: Maybe<String>;
  password_contains?: Maybe<String>;
  password_not_contains?: Maybe<String>;
  password_starts_with?: Maybe<String>;
  password_not_starts_with?: Maybe<String>;
  password_ends_with?: Maybe<String>;
  password_not_ends_with?: Maybe<String>;
  resetToken?: Maybe<String>;
  resetToken_not?: Maybe<String>;
  resetToken_in?: Maybe<String[] | String>;
  resetToken_not_in?: Maybe<String[] | String>;
  resetToken_lt?: Maybe<String>;
  resetToken_lte?: Maybe<String>;
  resetToken_gt?: Maybe<String>;
  resetToken_gte?: Maybe<String>;
  resetToken_contains?: Maybe<String>;
  resetToken_not_contains?: Maybe<String>;
  resetToken_starts_with?: Maybe<String>;
  resetToken_not_starts_with?: Maybe<String>;
  resetToken_ends_with?: Maybe<String>;
  resetToken_not_ends_with?: Maybe<String>;
  resetTokenExpiry?: Maybe<Float>;
  resetTokenExpiry_not?: Maybe<Float>;
  resetTokenExpiry_in?: Maybe<Float[] | Float>;
  resetTokenExpiry_not_in?: Maybe<Float[] | Float>;
  resetTokenExpiry_lt?: Maybe<Float>;
  resetTokenExpiry_lte?: Maybe<Float>;
  resetTokenExpiry_gt?: Maybe<Float>;
  resetTokenExpiry_gte?: Maybe<Float>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface BlogPostUpdateManyMutationInput {
  title?: Maybe<String>;
  body?: Maybe<String>;
}

export interface UserCreateOneInput {
  create?: Maybe<UserCreateInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  email: String;
  password: String;
  resetToken?: Maybe<String>;
  resetTokenExpiry?: Maybe<Float>;
  permissions?: Maybe<UserCreatepermissionsInput>;
}

export interface UserCreatepermissionsInput {
  set?: Maybe<Permission[] | Permission>;
}

export interface BlogPostSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<BlogPostWhereInput>;
  AND?: Maybe<
    BlogPostSubscriptionWhereInput[] | BlogPostSubscriptionWhereInput
  >;
  OR?: Maybe<BlogPostSubscriptionWhereInput[] | BlogPostSubscriptionWhereInput>;
  NOT?: Maybe<
    BlogPostSubscriptionWhereInput[] | BlogPostSubscriptionWhereInput
  >;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface UserUpdateManyMutationInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
  resetToken?: Maybe<String>;
  resetTokenExpiry?: Maybe<Float>;
  permissions?: Maybe<UserUpdatepermissionsInput>;
}

export interface BlogPostWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  body?: Maybe<String>;
  body_not?: Maybe<String>;
  body_in?: Maybe<String[] | String>;
  body_not_in?: Maybe<String[] | String>;
  body_lt?: Maybe<String>;
  body_lte?: Maybe<String>;
  body_gt?: Maybe<String>;
  body_gte?: Maybe<String>;
  body_contains?: Maybe<String>;
  body_not_contains?: Maybe<String>;
  body_starts_with?: Maybe<String>;
  body_not_starts_with?: Maybe<String>;
  body_ends_with?: Maybe<String>;
  body_not_ends_with?: Maybe<String>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  user?: Maybe<UserWhereInput>;
  AND?: Maybe<BlogPostWhereInput[] | BlogPostWhereInput>;
  OR?: Maybe<BlogPostWhereInput[] | BlogPostWhereInput>;
  NOT?: Maybe<BlogPostWhereInput[] | BlogPostWhereInput>;
}

export interface UserUpdateDataInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
  resetToken?: Maybe<String>;
  resetTokenExpiry?: Maybe<Float>;
  permissions?: Maybe<UserUpdatepermissionsInput>;
}

export interface UserUpdatepermissionsInput {
  set?: Maybe<Permission[] | Permission>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
  email: String;
  password: String;
  resetToken?: String;
  resetTokenExpiry?: Float;
  permissions: Permission[];
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  resetToken: () => Promise<String>;
  resetTokenExpiry: () => Promise<Float>;
  permissions: () => Promise<Permission[]>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  resetToken: () => Promise<AsyncIterator<String>>;
  resetTokenExpiry: () => Promise<AsyncIterator<Float>>;
  permissions: () => Promise<AsyncIterator<Permission[]>>;
}

export interface BlogPost {
  id: ID_Output;
  title: String;
  body: String;
  updatedAt: DateTimeOutput;
  createdAt: DateTimeOutput;
}

export interface BlogPostPromise extends Promise<BlogPost>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  body: () => Promise<String>;
  updatedAt: () => Promise<DateTimeOutput>;
  createdAt: () => Promise<DateTimeOutput>;
  user: <T = UserPromise>() => T;
}

export interface BlogPostSubscription
  extends Promise<AsyncIterator<BlogPost>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  body: () => Promise<AsyncIterator<String>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  user: <T = UserSubscription>() => T;
}

export interface BlogPostNullablePromise
  extends Promise<BlogPost | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  body: () => Promise<String>;
  updatedAt: () => Promise<DateTimeOutput>;
  createdAt: () => Promise<DateTimeOutput>;
  user: <T = UserPromise>() => T;
}

export interface BlogPostSubscriptionPayload {
  mutation: MutationType;
  node: BlogPost;
  updatedFields: String[];
  previousValues: BlogPostPreviousValues;
}

export interface BlogPostSubscriptionPayloadPromise
  extends Promise<BlogPostSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = BlogPostPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = BlogPostPreviousValuesPromise>() => T;
}

export interface BlogPostSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<BlogPostSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = BlogPostSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = BlogPostPreviousValuesSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface User {
  id: ID_Output;
  name: String;
  email: String;
  password: String;
  resetToken?: String;
  resetTokenExpiry?: Float;
  permissions: Permission[];
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  resetToken: () => Promise<String>;
  resetTokenExpiry: () => Promise<Float>;
  permissions: () => Promise<Permission[]>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  resetToken: () => Promise<AsyncIterator<String>>;
  resetTokenExpiry: () => Promise<AsyncIterator<Float>>;
  permissions: () => Promise<AsyncIterator<Permission[]>>;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  resetToken: () => Promise<String>;
  resetTokenExpiry: () => Promise<Float>;
  permissions: () => Promise<Permission[]>;
}

export interface BlogPostPreviousValues {
  id: ID_Output;
  title: String;
  body: String;
  updatedAt: DateTimeOutput;
  createdAt: DateTimeOutput;
}

export interface BlogPostPreviousValuesPromise
  extends Promise<BlogPostPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  body: () => Promise<String>;
  updatedAt: () => Promise<DateTimeOutput>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface BlogPostPreviousValuesSubscription
  extends Promise<AsyncIterator<BlogPostPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  body: () => Promise<AsyncIterator<String>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface AggregateBlogPost {
  count: Int;
}

export interface AggregateBlogPostPromise
  extends Promise<AggregateBlogPost>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateBlogPostSubscription
  extends Promise<AsyncIterator<AggregateBlogPost>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BlogPostConnection {
  pageInfo: PageInfo;
  edges: BlogPostEdge[];
}

export interface BlogPostConnectionPromise
  extends Promise<BlogPostConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<BlogPostEdge>>() => T;
  aggregate: <T = AggregateBlogPostPromise>() => T;
}

export interface BlogPostConnectionSubscription
  extends Promise<AsyncIterator<BlogPostConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<BlogPostEdgeSubscription>>>() => T;
  aggregate: <T = AggregateBlogPostSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface BlogPostEdge {
  node: BlogPost;
  cursor: String;
}

export interface BlogPostEdgePromise
  extends Promise<BlogPostEdge>,
    Fragmentable {
  node: <T = BlogPostPromise>() => T;
  cursor: () => Promise<String>;
}

export interface BlogPostEdgeSubscription
  extends Promise<AsyncIterator<BlogPostEdge>>,
    Fragmentable {
  node: <T = BlogPostSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Permission",
    embedded: false
  },
  {
    name: "BlogPost",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `${process.env["PRISMA_ENDPOINT"]}`
});
export const prisma = new Prisma();
