import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  getUserByID?: Maybe<User>;
  GetUserByName?: Maybe<User>;
  GetPostByID?: Maybe<Post>;
  GetCommunityByID?: Maybe<Community>;
  GetCommunityByName?: Maybe<Community>;
};


export type QueryGetUserByIdArgs = {
  id: Scalars['String'];
};


export type QueryGetUserByNameArgs = {
  name: Scalars['String'];
};


export type QueryGetPostByIdArgs = {
  id: Scalars['String'];
};


export type QueryGetCommunityByIdArgs = {
  id: Scalars['String'];
};


export type QueryGetCommunityByNameArgs = {
  name: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
  description: Scalars['String'];
  posts: Array<Post>;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['ID'];
  author: User;
  title: Scalars['String'];
  content: Scalars['String'];
  community: Community;
  upvotes: Scalars['Int'];
  downvotes: Scalars['Int'];
};

export type Community = {
  __typename?: 'Community';
  id: Scalars['ID'];
  name: Scalars['String'];
  followerCount: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  AddUser: User;
  AddPost: Post;
  DeletePostByID: Scalars['Boolean'];
  AddCommunityByName: Community;
};


export type MutationAddUserArgs = {
  password: Scalars['String'];
  name: Scalars['String'];
};


export type MutationAddPostArgs = {
  communityID: Scalars['String'];
  authorID: Scalars['String'];
  content: Scalars['String'];
  title: Scalars['String'];
};


export type MutationDeletePostByIdArgs = {
  id: Scalars['String'];
};


export type MutationAddCommunityByNameArgs = {
  name: Scalars['String'];
};

export type GetCommunityByNameQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetCommunityByNameQuery = (
  { __typename?: 'Query' }
  & { GetCommunityByName?: Maybe<(
    { __typename?: 'Community' }
    & Pick<Community, 'id' | 'name' | 'followerCount'>
  )> }
);

export type GetPostByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetPostByIdQuery = (
  { __typename?: 'Query' }
  & { GetPostByID?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'content' | 'upvotes' | 'downvotes'>
    & { author: (
      { __typename?: 'User' }
      & Pick<User, 'name'>
    ), community: (
      { __typename?: 'Community' }
      & Pick<Community, 'name'>
    ) }
  )> }
);

export type GetUserByNameQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetUserByNameQuery = (
  { __typename?: 'Query' }
  & { GetUserByName?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'name' | 'email' | 'description'>
  )> }
);

export type GetUserByNameWithPostsQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetUserByNameWithPostsQuery = (
  { __typename?: 'Query' }
  & { GetUserByName?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'name' | 'email' | 'description'>
    & { posts: Array<(
      { __typename?: 'Post' }
      & Pick<Post, 'id' | 'title' | 'content' | 'upvotes' | 'downvotes'>
    )> }
  )> }
);


export const GetCommunityByNameDocument = gql`
    query GetCommunityByName($name: String!) {
  GetCommunityByName(name: $name) {
    id
    name
    followerCount
  }
}
    `;

/**
 * __useGetCommunityByNameQuery__
 *
 * To run a query within a React component, call `useGetCommunityByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommunityByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommunityByNameQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetCommunityByNameQuery(baseOptions?: Apollo.QueryHookOptions<GetCommunityByNameQuery, GetCommunityByNameQueryVariables>) {
        return Apollo.useQuery<GetCommunityByNameQuery, GetCommunityByNameQueryVariables>(GetCommunityByNameDocument, baseOptions);
      }
export function useGetCommunityByNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommunityByNameQuery, GetCommunityByNameQueryVariables>) {
          return Apollo.useLazyQuery<GetCommunityByNameQuery, GetCommunityByNameQueryVariables>(GetCommunityByNameDocument, baseOptions);
        }
export type GetCommunityByNameQueryHookResult = ReturnType<typeof useGetCommunityByNameQuery>;
export type GetCommunityByNameLazyQueryHookResult = ReturnType<typeof useGetCommunityByNameLazyQuery>;
export type GetCommunityByNameQueryResult = Apollo.QueryResult<GetCommunityByNameQuery, GetCommunityByNameQueryVariables>;
export const GetPostByIdDocument = gql`
    query GetPostByID($id: String!) {
  GetPostByID(id: $id) {
    id
    title
    content
    upvotes
    downvotes
    author {
      name
    }
    community {
      name
    }
  }
}
    `;

/**
 * __useGetPostByIdQuery__
 *
 * To run a query within a React component, call `useGetPostByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPostByIdQuery(baseOptions?: Apollo.QueryHookOptions<GetPostByIdQuery, GetPostByIdQueryVariables>) {
        return Apollo.useQuery<GetPostByIdQuery, GetPostByIdQueryVariables>(GetPostByIdDocument, baseOptions);
      }
export function useGetPostByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostByIdQuery, GetPostByIdQueryVariables>) {
          return Apollo.useLazyQuery<GetPostByIdQuery, GetPostByIdQueryVariables>(GetPostByIdDocument, baseOptions);
        }
export type GetPostByIdQueryHookResult = ReturnType<typeof useGetPostByIdQuery>;
export type GetPostByIdLazyQueryHookResult = ReturnType<typeof useGetPostByIdLazyQuery>;
export type GetPostByIdQueryResult = Apollo.QueryResult<GetPostByIdQuery, GetPostByIdQueryVariables>;
export const GetUserByNameDocument = gql`
    query GetUserByName($name: String!) {
  GetUserByName(name: $name) {
    name
    email
    description
  }
}
    `;

/**
 * __useGetUserByNameQuery__
 *
 * To run a query within a React component, call `useGetUserByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByNameQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetUserByNameQuery(baseOptions?: Apollo.QueryHookOptions<GetUserByNameQuery, GetUserByNameQueryVariables>) {
        return Apollo.useQuery<GetUserByNameQuery, GetUserByNameQueryVariables>(GetUserByNameDocument, baseOptions);
      }
export function useGetUserByNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByNameQuery, GetUserByNameQueryVariables>) {
          return Apollo.useLazyQuery<GetUserByNameQuery, GetUserByNameQueryVariables>(GetUserByNameDocument, baseOptions);
        }
export type GetUserByNameQueryHookResult = ReturnType<typeof useGetUserByNameQuery>;
export type GetUserByNameLazyQueryHookResult = ReturnType<typeof useGetUserByNameLazyQuery>;
export type GetUserByNameQueryResult = Apollo.QueryResult<GetUserByNameQuery, GetUserByNameQueryVariables>;
export const GetUserByNameWithPostsDocument = gql`
    query GetUserByNameWithPosts($name: String!) {
  GetUserByName(name: $name) {
    name
    email
    description
    posts {
      id
      title
      content
      upvotes
      downvotes
    }
  }
}
    `;

/**
 * __useGetUserByNameWithPostsQuery__
 *
 * To run a query within a React component, call `useGetUserByNameWithPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByNameWithPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByNameWithPostsQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetUserByNameWithPostsQuery(baseOptions?: Apollo.QueryHookOptions<GetUserByNameWithPostsQuery, GetUserByNameWithPostsQueryVariables>) {
        return Apollo.useQuery<GetUserByNameWithPostsQuery, GetUserByNameWithPostsQueryVariables>(GetUserByNameWithPostsDocument, baseOptions);
      }
export function useGetUserByNameWithPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByNameWithPostsQuery, GetUserByNameWithPostsQueryVariables>) {
          return Apollo.useLazyQuery<GetUserByNameWithPostsQuery, GetUserByNameWithPostsQueryVariables>(GetUserByNameWithPostsDocument, baseOptions);
        }
export type GetUserByNameWithPostsQueryHookResult = ReturnType<typeof useGetUserByNameWithPostsQuery>;
export type GetUserByNameWithPostsLazyQueryHookResult = ReturnType<typeof useGetUserByNameWithPostsLazyQuery>;
export type GetUserByNameWithPostsQueryResult = Apollo.QueryResult<GetUserByNameWithPostsQuery, GetUserByNameWithPostsQueryVariables>;