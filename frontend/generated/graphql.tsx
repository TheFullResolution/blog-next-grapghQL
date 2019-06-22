import gql from 'graphql-tag'
import * as ReactApollo from 'react-apollo'
import * as React from 'react'
export type Maybe<T> = T
export type MaybePromise<T> = Promise<T> | T
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
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

export type Like = {
  readonly id: Scalars['ID']
  readonly user: User
  readonly blogPost: BlogPost
}

export enum LikeOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
}

export type LikeWhereInput = {
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
  readonly user: Maybe<UserWhereInput>
  readonly blogPost: Maybe<BlogPostWhereInput>
  readonly AND: Maybe<ReadonlyArray<LikeWhereInput>>
  readonly OR: Maybe<ReadonlyArray<LikeWhereInput>>
  readonly NOT: Maybe<ReadonlyArray<LikeWhereInput>>
}

export type LikeWithIdOnly = {
  readonly id: Scalars['ID']
}

export type Mutation = {
  readonly createBlogPost: BlogPost
  readonly createLike: LikeWithIdOnly
  readonly updateBlogPost: BlogPost
  readonly deleteLike: Maybe<LikeWithIdOnly>
  readonly deleteBlogPost: Maybe<BlogPost>
  readonly login: User
  readonly logout: Maybe<SuccessMessage>
  readonly signup: User
}

export type MutationCreateBlogPostArgs = {
  title: Scalars['String']
  body: Scalars['String']
}

export type MutationCreateLikeArgs = {
  blogPost: Scalars['ID']
}

export type MutationUpdateBlogPostArgs = {
  id: Scalars['ID']
  title: Scalars['String']
  body: Scalars['String']
}

export type MutationDeleteLikeArgs = {
  id: Scalars['ID']
}

export type MutationDeleteBlogPostArgs = {
  id: Scalars['ID']
}

export type MutationLoginArgs = {
  email: Scalars['String']
  password: Scalars['String']
}

export type MutationSignupArgs = {
  email: Scalars['String']
  password: Scalars['String']
  name: Scalars['String']
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
  readonly likes: ReadonlyArray<Maybe<Like>>
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

export type QueryLikesArgs = {
  where: Maybe<LikeWhereInput>
  orderBy: Maybe<LikeOrderByInput>
  skip: Maybe<Scalars['Int']>
  after: Maybe<Scalars['String']>
  before: Maybe<Scalars['String']>
  first: Maybe<Scalars['Int']>
  last: Maybe<Scalars['Int']>
}

export type QueryBlogPostArgs = {
  where: BlogPostWhereUniqueInput
}

export type SuccessMessage = {
  readonly message: Maybe<Scalars['String']>
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
export type LoginMutationVariables = {
  email: Scalars['String']
  password: Scalars['String']
}

export type LoginMutation = { readonly login: Pick<User, 'id'> }

export type SignupMutationVariables = {
  email: Scalars['String']
  password: Scalars['String']
  name: Scalars['String']
}

export type SignupMutation = { readonly signup: Pick<User, 'id'> }

export type Create_Blog_PostMutationVariables = {
  title: Scalars['String']
  body: Scalars['String']
}

export type Create_Blog_PostMutation = {
  readonly createBlogPost: Pick<BlogPost, 'id'>
}

export type Delete_Blog_PostMutationVariables = {
  id: Scalars['ID']
}

export type Delete_Blog_PostMutation = {
  readonly deleteBlogPost: Maybe<Pick<BlogPost, 'id'>>
}

export type LogoutMutationVariables = {}

export type LogoutMutation = {
  readonly logout: Maybe<Pick<SuccessMessage, 'message'>>
}

export type All_Blog_PostsQueryVariables = {}

export type All_Blog_PostsQuery = {
  readonly blogPosts: ReadonlyArray<
    Maybe<Pick<BlogPost, 'id' | 'title' | 'body'>>
  >
}

export type Likes_For_BlogpostQueryVariables = {
  id: Scalars['ID']
}

export type Likes_For_BlogpostQuery = {
  readonly likes: ReadonlyArray<
    Maybe<Pick<Like, 'id'> & { readonly user: Pick<User, 'id'> }>
  >
}

export type Delete_LikeMutationVariables = {
  id: Scalars['ID']
}

export type Delete_LikeMutation = {
  readonly deleteLike: Maybe<Pick<LikeWithIdOnly, 'id'>>
}

export type Create_LikeMutationVariables = {
  id: Scalars['ID']
}

export type Create_LikeMutation = {
  readonly createLike: Pick<LikeWithIdOnly, 'id'>
}

export type Blog_PostQueryVariables = {
  id: Scalars['ID']
}

export type Blog_PostQuery = {
  readonly blogPost: Maybe<
    Pick<BlogPost, 'id' | 'title' | 'body'> & {
      readonly user: Pick<User, 'id'>
    }
  >
}

export type Update_Blog_PostMutationVariables = {
  id: Scalars['ID']
  title: Scalars['String']
  body: Scalars['String']
}

export type Update_Blog_PostMutation = {
  readonly updateBlogPost: Pick<BlogPost, 'id'>
}

export type UserDataQueryVariables = {}

export type UserDataQuery = {
  readonly me: Maybe<Pick<User, 'id' | 'email' | 'name' | 'permissions'>>
}

export type User_Blog_PostsQueryVariables = {
  id: Scalars['ID']
}

export type User_Blog_PostsQuery = {
  readonly blogPosts: ReadonlyArray<
    Maybe<Pick<BlogPost, 'id' | 'title' | 'body'>>
  >
}

export const LoginDocument = gql`
  mutation LOGIN($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
    }
  }
`
export type LoginMutationFn = ReactApollo.MutationFn<
  LoginMutation,
  LoginMutationVariables
>
export type LoginComponentProps = Omit<
  ReactApollo.MutationProps<LoginMutation, LoginMutationVariables>,
  'mutation'
>

export const LoginComponent = (props: LoginComponentProps) => (
  <ReactApollo.Mutation<LoginMutation, LoginMutationVariables>
    mutation={LoginDocument}
    {...props}
  />
)

export const SignupDocument = gql`
  mutation SIGNUP($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      id
    }
  }
`
export type SignupMutationFn = ReactApollo.MutationFn<
  SignupMutation,
  SignupMutationVariables
>
export type SignupComponentProps = Omit<
  ReactApollo.MutationProps<SignupMutation, SignupMutationVariables>,
  'mutation'
>

export const SignupComponent = (props: SignupComponentProps) => (
  <ReactApollo.Mutation<SignupMutation, SignupMutationVariables>
    mutation={SignupDocument}
    {...props}
  />
)

export const Create_Blog_PostDocument = gql`
  mutation CREATE_BLOG_POST($title: String!, $body: String!) {
    createBlogPost(title: $title, body: $body) {
      id
    }
  }
`
export type Create_Blog_PostMutationFn = ReactApollo.MutationFn<
  Create_Blog_PostMutation,
  Create_Blog_PostMutationVariables
>
export type Create_Blog_PostComponentProps = Omit<
  ReactApollo.MutationProps<
    Create_Blog_PostMutation,
    Create_Blog_PostMutationVariables
  >,
  'mutation'
>

export const Create_Blog_PostComponent = (
  props: Create_Blog_PostComponentProps,
) => (
  <ReactApollo.Mutation<
    Create_Blog_PostMutation,
    Create_Blog_PostMutationVariables
  >
    mutation={Create_Blog_PostDocument}
    {...props}
  />
)

export const Delete_Blog_PostDocument = gql`
  mutation DELETE_BLOG_POST($id: ID!) {
    deleteBlogPost(id: $id) {
      id
    }
  }
`
export type Delete_Blog_PostMutationFn = ReactApollo.MutationFn<
  Delete_Blog_PostMutation,
  Delete_Blog_PostMutationVariables
>
export type Delete_Blog_PostComponentProps = Omit<
  ReactApollo.MutationProps<
    Delete_Blog_PostMutation,
    Delete_Blog_PostMutationVariables
  >,
  'mutation'
>

export const Delete_Blog_PostComponent = (
  props: Delete_Blog_PostComponentProps,
) => (
  <ReactApollo.Mutation<
    Delete_Blog_PostMutation,
    Delete_Blog_PostMutationVariables
  >
    mutation={Delete_Blog_PostDocument}
    {...props}
  />
)

export const LogoutDocument = gql`
  mutation LOGOUT {
    logout {
      message
    }
  }
`
export type LogoutMutationFn = ReactApollo.MutationFn<
  LogoutMutation,
  LogoutMutationVariables
>
export type LogoutComponentProps = Omit<
  ReactApollo.MutationProps<LogoutMutation, LogoutMutationVariables>,
  'mutation'
>

export const LogoutComponent = (props: LogoutComponentProps) => (
  <ReactApollo.Mutation<LogoutMutation, LogoutMutationVariables>
    mutation={LogoutDocument}
    {...props}
  />
)

export const All_Blog_PostsDocument = gql`
  query ALL_BLOG_POSTS {
    blogPosts {
      id
      title
      body
    }
  }
`
export type All_Blog_PostsComponentProps = Omit<
  ReactApollo.QueryProps<All_Blog_PostsQuery, All_Blog_PostsQueryVariables>,
  'query'
>

export const All_Blog_PostsComponent = (
  props: All_Blog_PostsComponentProps,
) => (
  <ReactApollo.Query<All_Blog_PostsQuery, All_Blog_PostsQueryVariables>
    query={All_Blog_PostsDocument}
    {...props}
  />
)

export const Likes_For_BlogpostDocument = gql`
  query LIKES_FOR_BLOGPOST($id: ID!) {
    likes(where: { blogPost: { id: $id } }) {
      id
      user {
        id
      }
    }
  }
`
export type Likes_For_BlogpostComponentProps = Omit<
  ReactApollo.QueryProps<
    Likes_For_BlogpostQuery,
    Likes_For_BlogpostQueryVariables
  >,
  'query'
> &
  (
    | { variables: Likes_For_BlogpostQueryVariables; skip?: false }
    | { skip: true })

export const Likes_For_BlogpostComponent = (
  props: Likes_For_BlogpostComponentProps,
) => (
  <ReactApollo.Query<Likes_For_BlogpostQuery, Likes_For_BlogpostQueryVariables>
    query={Likes_For_BlogpostDocument}
    {...props}
  />
)

export const Delete_LikeDocument = gql`
  mutation DELETE_LIKE($id: ID!) {
    deleteLike(id: $id) {
      id
    }
  }
`
export type Delete_LikeMutationFn = ReactApollo.MutationFn<
  Delete_LikeMutation,
  Delete_LikeMutationVariables
>
export type Delete_LikeComponentProps = Omit<
  ReactApollo.MutationProps<Delete_LikeMutation, Delete_LikeMutationVariables>,
  'mutation'
>

export const Delete_LikeComponent = (props: Delete_LikeComponentProps) => (
  <ReactApollo.Mutation<Delete_LikeMutation, Delete_LikeMutationVariables>
    mutation={Delete_LikeDocument}
    {...props}
  />
)

export const Create_LikeDocument = gql`
  mutation CREATE_LIKE($id: ID!) {
    createLike(blogPost: $id) {
      id
    }
  }
`
export type Create_LikeMutationFn = ReactApollo.MutationFn<
  Create_LikeMutation,
  Create_LikeMutationVariables
>
export type Create_LikeComponentProps = Omit<
  ReactApollo.MutationProps<Create_LikeMutation, Create_LikeMutationVariables>,
  'mutation'
>

export const Create_LikeComponent = (props: Create_LikeComponentProps) => (
  <ReactApollo.Mutation<Create_LikeMutation, Create_LikeMutationVariables>
    mutation={Create_LikeDocument}
    {...props}
  />
)

export const Blog_PostDocument = gql`
  query BLOG_POST($id: ID!) {
    blogPost(where: { id: $id }) {
      id
      title
      body
      user {
        id
      }
    }
  }
`
export type Blog_PostComponentProps = Omit<
  ReactApollo.QueryProps<Blog_PostQuery, Blog_PostQueryVariables>,
  'query'
> &
  ({ variables: Blog_PostQueryVariables; skip?: false } | { skip: true })

export const Blog_PostComponent = (props: Blog_PostComponentProps) => (
  <ReactApollo.Query<Blog_PostQuery, Blog_PostQueryVariables>
    query={Blog_PostDocument}
    {...props}
  />
)

export const Update_Blog_PostDocument = gql`
  mutation UPDATE_BLOG_POST($id: ID!, $title: String!, $body: String!) {
    updateBlogPost(id: $id, title: $title, body: $body) {
      id
    }
  }
`
export type Update_Blog_PostMutationFn = ReactApollo.MutationFn<
  Update_Blog_PostMutation,
  Update_Blog_PostMutationVariables
>
export type Update_Blog_PostComponentProps = Omit<
  ReactApollo.MutationProps<
    Update_Blog_PostMutation,
    Update_Blog_PostMutationVariables
  >,
  'mutation'
>

export const Update_Blog_PostComponent = (
  props: Update_Blog_PostComponentProps,
) => (
  <ReactApollo.Mutation<
    Update_Blog_PostMutation,
    Update_Blog_PostMutationVariables
  >
    mutation={Update_Blog_PostDocument}
    {...props}
  />
)

export const UserDataDocument = gql`
  query UserData {
    me {
      id
      email
      name
      permissions
    }
  }
`
export type UserDataComponentProps = Omit<
  ReactApollo.QueryProps<UserDataQuery, UserDataQueryVariables>,
  'query'
>

export const UserDataComponent = (props: UserDataComponentProps) => (
  <ReactApollo.Query<UserDataQuery, UserDataQueryVariables>
    query={UserDataDocument}
    {...props}
  />
)

export const User_Blog_PostsDocument = gql`
  query USER_BLOG_POSTS($id: ID!) {
    blogPosts(where: { user: { id: $id } }) {
      id
      title
      body
    }
  }
`
export type User_Blog_PostsComponentProps = Omit<
  ReactApollo.QueryProps<User_Blog_PostsQuery, User_Blog_PostsQueryVariables>,
  'query'
> &
  ({ variables: User_Blog_PostsQueryVariables; skip?: false } | { skip: true })

export const User_Blog_PostsComponent = (
  props: User_Blog_PostsComponentProps,
) => (
  <ReactApollo.Query<User_Blog_PostsQuery, User_Blog_PostsQueryVariables>
    query={User_Blog_PostsDocument}
    {...props}
  />
)
