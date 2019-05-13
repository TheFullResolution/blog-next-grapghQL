export type Maybe<T> = T
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
}

export type BlogPost = {
  readonly id: Scalars['ID']
  readonly title: Scalars['String']
  readonly body: Scalars['String']
  readonly updatedAt: Scalars['DateTime']
  readonly createdAt: Scalars['DateTime']
  readonly user: User
}

export enum BlogPostOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  BodyAsc = 'body_ASC',
  BodyDesc = 'body_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
}

export type BlogPostWhereInput = {
  readonly id: Maybe<Scalars['ID']>
  readonly id_not: Maybe<Scalars['ID']>
  readonly id_in: Maybe<ReadonlyArray<Scalars['ID']>>
  readonly id_not_in: Maybe<ReadonlyArray<Scalars['ID']>>
  readonly id_lt: Maybe<Scalars['ID']>
  readonly id_lte: Maybe<Scalars['ID']>
  readonly id_gt: Maybe<Scalars['ID']>
  readonly id_gte: Maybe<Scalars['ID']>
  readonly id_contains: Maybe<Scalars['ID']>
  readonly id_not_contains: Maybe<Scalars['ID']>
  readonly id_starts_with: Maybe<Scalars['ID']>
  readonly id_not_starts_with: Maybe<Scalars['ID']>
  readonly id_ends_with: Maybe<Scalars['ID']>
  readonly id_not_ends_with: Maybe<Scalars['ID']>
  readonly title: Maybe<Scalars['String']>
  readonly title_not: Maybe<Scalars['String']>
  readonly title_in: Maybe<ReadonlyArray<Scalars['String']>>
  readonly title_not_in: Maybe<ReadonlyArray<Scalars['String']>>
  readonly title_lt: Maybe<Scalars['String']>
  readonly title_lte: Maybe<Scalars['String']>
  readonly title_gt: Maybe<Scalars['String']>
  readonly title_gte: Maybe<Scalars['String']>
  readonly title_contains: Maybe<Scalars['String']>
  readonly title_not_contains: Maybe<Scalars['String']>
  readonly title_starts_with: Maybe<Scalars['String']>
  readonly title_not_starts_with: Maybe<Scalars['String']>
  readonly title_ends_with: Maybe<Scalars['String']>
  readonly title_not_ends_with: Maybe<Scalars['String']>
  readonly body: Maybe<Scalars['String']>
  readonly body_not: Maybe<Scalars['String']>
  readonly body_in: Maybe<ReadonlyArray<Scalars['String']>>
  readonly body_not_in: Maybe<ReadonlyArray<Scalars['String']>>
  readonly body_lt: Maybe<Scalars['String']>
  readonly body_lte: Maybe<Scalars['String']>
  readonly body_gt: Maybe<Scalars['String']>
  readonly body_gte: Maybe<Scalars['String']>
  readonly body_contains: Maybe<Scalars['String']>
  readonly body_not_contains: Maybe<Scalars['String']>
  readonly body_starts_with: Maybe<Scalars['String']>
  readonly body_not_starts_with: Maybe<Scalars['String']>
  readonly body_ends_with: Maybe<Scalars['String']>
  readonly body_not_ends_with: Maybe<Scalars['String']>
  readonly updatedAt: Maybe<Scalars['DateTime']>
  readonly updatedAt_not: Maybe<Scalars['DateTime']>
  readonly updatedAt_in: Maybe<ReadonlyArray<Scalars['DateTime']>>
  readonly updatedAt_not_in: Maybe<ReadonlyArray<Scalars['DateTime']>>
  readonly updatedAt_lt: Maybe<Scalars['DateTime']>
  readonly updatedAt_lte: Maybe<Scalars['DateTime']>
  readonly updatedAt_gt: Maybe<Scalars['DateTime']>
  readonly updatedAt_gte: Maybe<Scalars['DateTime']>
  readonly createdAt: Maybe<Scalars['DateTime']>
  readonly createdAt_not: Maybe<Scalars['DateTime']>
  readonly createdAt_in: Maybe<ReadonlyArray<Scalars['DateTime']>>
  readonly createdAt_not_in: Maybe<ReadonlyArray<Scalars['DateTime']>>
  readonly createdAt_lt: Maybe<Scalars['DateTime']>
  readonly createdAt_lte: Maybe<Scalars['DateTime']>
  readonly createdAt_gt: Maybe<Scalars['DateTime']>
  readonly createdAt_gte: Maybe<Scalars['DateTime']>
  readonly user: Maybe<UserWhereInput>
  readonly AND: Maybe<ReadonlyArray<BlogPostWhereInput>>
  readonly OR: Maybe<ReadonlyArray<BlogPostWhereInput>>
  readonly NOT: Maybe<ReadonlyArray<BlogPostWhereInput>>
}

export type BlogPostWhereUniqueInput = {
  readonly id: Maybe<Scalars['ID']>
}

export type Mutation = {
  readonly createBlogPost: Maybe<BlogPost>
  readonly signin: User
}

export type MutationCreateBlogPostArgs = {
  title: Scalars['String']
  body: Scalars['String']
}

export type MutationSigninArgs = {
  email: Scalars['String']
  password: Scalars['String']
}

export enum Permission {
  Admin = 'ADMIN',
  User = 'USER',
  Itemcreate = 'ITEMCREATE',
  Itemupdate = 'ITEMUPDATE',
  Itemdelete = 'ITEMDELETE',
  Permissionupdate = 'PERMISSIONUPDATE',
}

export type Query = {
  readonly blogPosts: ReadonlyArray<Maybe<BlogPost>>
  readonly me: Maybe<User>
  readonly blogPost: Maybe<BlogPost>
}

export type QueryBlogPostsArgs = {
  where: Maybe<BlogPostWhereInput>
  orderBy: Maybe<BlogPostOrderByInput>
  skip: Maybe<Scalars['Int']>
  after: Maybe<Scalars['String']>
  before: Maybe<Scalars['String']>
  first: Maybe<Scalars['Int']>
  last: Maybe<Scalars['Int']>
}

export type QueryBlogPostArgs = {
  where: BlogPostWhereUniqueInput
}

export type User = {
  readonly id: Scalars['ID']
  readonly name: Scalars['String']
  readonly email: Scalars['String']
  readonly password: Scalars['String']
  readonly resetToken: Maybe<Scalars['String']>
  readonly resetTokenExpiry: Maybe<Scalars['Float']>
  readonly permissions: ReadonlyArray<Permission>
}

export type UserWhereInput = {
  readonly id: Maybe<Scalars['ID']>
  readonly id_not: Maybe<Scalars['ID']>
  readonly id_in: Maybe<ReadonlyArray<Scalars['ID']>>
  readonly id_not_in: Maybe<ReadonlyArray<Scalars['ID']>>
  readonly id_lt: Maybe<Scalars['ID']>
  readonly id_lte: Maybe<Scalars['ID']>
  readonly id_gt: Maybe<Scalars['ID']>
  readonly id_gte: Maybe<Scalars['ID']>
  readonly id_contains: Maybe<Scalars['ID']>
  readonly id_not_contains: Maybe<Scalars['ID']>
  readonly id_starts_with: Maybe<Scalars['ID']>
  readonly id_not_starts_with: Maybe<Scalars['ID']>
  readonly id_ends_with: Maybe<Scalars['ID']>
  readonly id_not_ends_with: Maybe<Scalars['ID']>
  readonly name: Maybe<Scalars['String']>
  readonly name_not: Maybe<Scalars['String']>
  readonly name_in: Maybe<ReadonlyArray<Scalars['String']>>
  readonly name_not_in: Maybe<ReadonlyArray<Scalars['String']>>
  readonly name_lt: Maybe<Scalars['String']>
  readonly name_lte: Maybe<Scalars['String']>
  readonly name_gt: Maybe<Scalars['String']>
  readonly name_gte: Maybe<Scalars['String']>
  readonly name_contains: Maybe<Scalars['String']>
  readonly name_not_contains: Maybe<Scalars['String']>
  readonly name_starts_with: Maybe<Scalars['String']>
  readonly name_not_starts_with: Maybe<Scalars['String']>
  readonly name_ends_with: Maybe<Scalars['String']>
  readonly name_not_ends_with: Maybe<Scalars['String']>
  readonly email: Maybe<Scalars['String']>
  readonly email_not: Maybe<Scalars['String']>
  readonly email_in: Maybe<ReadonlyArray<Scalars['String']>>
  readonly email_not_in: Maybe<ReadonlyArray<Scalars['String']>>
  readonly email_lt: Maybe<Scalars['String']>
  readonly email_lte: Maybe<Scalars['String']>
  readonly email_gt: Maybe<Scalars['String']>
  readonly email_gte: Maybe<Scalars['String']>
  readonly email_contains: Maybe<Scalars['String']>
  readonly email_not_contains: Maybe<Scalars['String']>
  readonly email_starts_with: Maybe<Scalars['String']>
  readonly email_not_starts_with: Maybe<Scalars['String']>
  readonly email_ends_with: Maybe<Scalars['String']>
  readonly email_not_ends_with: Maybe<Scalars['String']>
  readonly password: Maybe<Scalars['String']>
  readonly password_not: Maybe<Scalars['String']>
  readonly password_in: Maybe<ReadonlyArray<Scalars['String']>>
  readonly password_not_in: Maybe<ReadonlyArray<Scalars['String']>>
  readonly password_lt: Maybe<Scalars['String']>
  readonly password_lte: Maybe<Scalars['String']>
  readonly password_gt: Maybe<Scalars['String']>
  readonly password_gte: Maybe<Scalars['String']>
  readonly password_contains: Maybe<Scalars['String']>
  readonly password_not_contains: Maybe<Scalars['String']>
  readonly password_starts_with: Maybe<Scalars['String']>
  readonly password_not_starts_with: Maybe<Scalars['String']>
  readonly password_ends_with: Maybe<Scalars['String']>
  readonly password_not_ends_with: Maybe<Scalars['String']>
  readonly resetToken: Maybe<Scalars['String']>
  readonly resetToken_not: Maybe<Scalars['String']>
  readonly resetToken_in: Maybe<ReadonlyArray<Scalars['String']>>
  readonly resetToken_not_in: Maybe<ReadonlyArray<Scalars['String']>>
  readonly resetToken_lt: Maybe<Scalars['String']>
  readonly resetToken_lte: Maybe<Scalars['String']>
  readonly resetToken_gt: Maybe<Scalars['String']>
  readonly resetToken_gte: Maybe<Scalars['String']>
  readonly resetToken_contains: Maybe<Scalars['String']>
  readonly resetToken_not_contains: Maybe<Scalars['String']>
  readonly resetToken_starts_with: Maybe<Scalars['String']>
  readonly resetToken_not_starts_with: Maybe<Scalars['String']>
  readonly resetToken_ends_with: Maybe<Scalars['String']>
  readonly resetToken_not_ends_with: Maybe<Scalars['String']>
  readonly resetTokenExpiry: Maybe<Scalars['Float']>
  readonly resetTokenExpiry_not: Maybe<Scalars['Float']>
  readonly resetTokenExpiry_in: Maybe<ReadonlyArray<Scalars['Float']>>
  readonly resetTokenExpiry_not_in: Maybe<ReadonlyArray<Scalars['Float']>>
  readonly resetTokenExpiry_lt: Maybe<Scalars['Float']>
  readonly resetTokenExpiry_lte: Maybe<Scalars['Float']>
  readonly resetTokenExpiry_gt: Maybe<Scalars['Float']>
  readonly resetTokenExpiry_gte: Maybe<Scalars['Float']>
  readonly AND: Maybe<ReadonlyArray<UserWhereInput>>
  readonly OR: Maybe<ReadonlyArray<UserWhereInput>>
  readonly NOT: Maybe<ReadonlyArray<UserWhereInput>>
}
export type SigninMutationVariables = {
  email: Scalars['String']
  password: Scalars['String']
}

export type SigninMutation = { readonly signin: Pick<User, 'id'> }

export type Create_ItemMutationVariables = {
  title: Scalars['String']
  body: Scalars['String']
}

export type Create_ItemMutation = {
  readonly createBlogPost: Maybe<Pick<BlogPost, 'id'>>
}

export type All_ArticlesQueryVariables = {}

export type All_ArticlesQuery = {
  readonly blogPosts: ReadonlyArray<
    Maybe<Pick<BlogPost, 'id' | 'title' | 'body'>>
  >
}

import gql from 'graphql-tag'
import * as React from 'react'
import * as ReactApollo from 'react-apollo'
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export const SigninDocument = gql`
  mutation SIGNIN($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
    }
  }
`
export type SigninMutationFn = ReactApollo.MutationFn<
  SigninMutation,
  SigninMutationVariables
>

export const SigninComponent = (
  props: Omit<
    Omit<
      ReactApollo.MutationProps<SigninMutation, SigninMutationVariables>,
      'mutation'
    >,
    'variables'
  > & { variables?: SigninMutationVariables },
) => (
  <ReactApollo.Mutation<SigninMutation, SigninMutationVariables>
    mutation={SigninDocument}
    {...props}
  />
)

export const Create_ItemDocument = gql`
  mutation CREATE_ITEM($title: String!, $body: String!) {
    createBlogPost(title: $title, body: $body) {
      id
    }
  }
`
export type Create_ItemMutationFn = ReactApollo.MutationFn<
  Create_ItemMutation,
  Create_ItemMutationVariables
>

export const Create_ItemComponent = (
  props: Omit<
    Omit<
      ReactApollo.MutationProps<
        Create_ItemMutation,
        Create_ItemMutationVariables
      >,
      'mutation'
    >,
    'variables'
  > & { variables?: Create_ItemMutationVariables },
) => (
  <ReactApollo.Mutation<Create_ItemMutation, Create_ItemMutationVariables>
    mutation={Create_ItemDocument}
    {...props}
  />
)

export const All_ArticlesDocument = gql`
  query ALL_ARTICLES {
    blogPosts {
      id
      title
      body
    }
  }
`

export const All_ArticlesComponent = (
  props: Omit<
    Omit<
      ReactApollo.QueryProps<All_ArticlesQuery, All_ArticlesQueryVariables>,
      'query'
    >,
    'variables'
  > & { variables?: All_ArticlesQueryVariables },
) => (
  <ReactApollo.Query<All_ArticlesQuery, All_ArticlesQueryVariables>
    query={All_ArticlesDocument}
    {...props}
  />
)
