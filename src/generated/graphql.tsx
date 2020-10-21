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
  GetSelf?: Maybe<User>;
  GetUserByID?: Maybe<User>;
  GetUserByName?: Maybe<User>;
  GetPostByID?: Maybe<Post>;
  GetCommunityByID?: Maybe<Community>;
  GetCommunityByName?: Maybe<Community>;
  GetPostsFromCommunityByID?: Maybe<Array<Post>>;
};


export type QueryGetSelfArgs = {
  yeah: Scalars['String'];
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


export type QueryGetPostsFromCommunityByIdArgs = {
  communityID: Scalars['String'];
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
  AttemptLogin: User;
  AddUser: User;
  AddPost: Post;
  DeletePostByID: Scalars['Boolean'];
  AddCommunityByName: Community;
};


export type MutationAttemptLoginArgs = {
  password: Scalars['String'];
  name: Scalars['String'];
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

export type AddPostMutationVariables = Exact<{
  communityID: Scalars['String'];
  authorID: Scalars['String'];
  title: Scalars['String'];
  content: Scalars['String'];
}>;


export type AddPostMutation = (
  { __typename?: 'Mutation' }
  & { AddPost: (
    { __typename?: 'Post' }
    & Pick<Post, 'id'>
  ) }
);

export type AddUserMutationVariables = Exact<{
  name: Scalars['String'];
  password: Scalars['String'];
}>;


export type AddUserMutation = (
  { __typename?: 'Mutation' }
  & { AddUser: (
    { __typename?: 'User' }
    & Pick<User, 'name'>
  ) }
);

export type AttemptLoginMutationVariables = Exact<{
  name: Scalars['String'];
  password: Scalars['String'];
}>;


export type AttemptLoginMutation = (
  { __typename?: 'Mutation' }
  & { AttemptLogin: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email' | 'description'>
  ) }
);

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

export type GetPostsFromCommunityByIdQueryVariables = Exact<{
  communityID: Scalars['String'];
}>;


export type GetPostsFromCommunityByIdQuery = (
  { __typename?: 'Query' }
  & { GetPostsFromCommunityByID?: Maybe<Array<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'content' | 'upvotes' | 'downvotes'>
    & { author: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name' | 'email' | 'description'>
    ), community: (
      { __typename?: 'Community' }
      & Pick<Community, 'id' | 'name' | 'followerCount'>
    ) }
  )>> }
);

export type GetSelfQueryVariables = Exact<{
  yeah: Scalars['String'];
}>;


export type GetSelfQuery = (
  { __typename?: 'Query' }
  & { GetSelf?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'name' | 'id' | 'email' | 'description'>
    & { posts: Array<(
      { __typename?: 'Post' }
      & Pick<Post, 'id' | 'title' | 'content' | 'upvotes' | 'downvotes'>
      & { author: (
        { __typename?: 'User' }
        & Pick<User, 'name' | 'id' | 'email' | 'description'>
      ), community: (
        { __typename?: 'Community' }
        & Pick<Community, 'id' | 'name' | 'followerCount'>
      ) }
    )> }
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
      & { community: (
        { __typename?: 'Community' }
        & Pick<Community, 'id' | 'name' | 'followerCount'>
      ), author: (
        { __typename?: 'User' }
        & Pick<User, 'name' | 'id' | 'email' | 'description'>
      ) }
    )> }
  )> }
);


export const AddPostDocument = gql`
    mutation AddPost($communityID: String!, $authorID: String!, $title: String!, $content: String!) {
  AddPost(communityID: $communityID, authorID: $authorID, title: $title, content: $content) {
    id
  }
}
    `;
export type AddPostMutationFn = Apollo.MutationFunction<AddPostMutation, AddPostMutationVariables>;

/**
 * __useAddPostMutation__
 *
 * To run a mutation, you first call `useAddPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPostMutation, { data, loading, error }] = useAddPostMutation({
 *   variables: {
 *      communityID: // value for 'communityID'
 *      authorID: // value for 'authorID'
 *      title: // value for 'title'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useAddPostMutation(baseOptions?: Apollo.MutationHookOptions<AddPostMutation, AddPostMutationVariables>) {
        return Apollo.useMutation<AddPostMutation, AddPostMutationVariables>(AddPostDocument, baseOptions);
      }
export type AddPostMutationHookResult = ReturnType<typeof useAddPostMutation>;
export type AddPostMutationResult = Apollo.MutationResult<AddPostMutation>;
export type AddPostMutationOptions = Apollo.BaseMutationOptions<AddPostMutation, AddPostMutationVariables>;
export const AddUserDocument = gql`
    mutation AddUser($name: String!, $password: String!) {
  AddUser(name: $name, password: $password) {
    name
  }
}
    `;
export type AddUserMutationFn = Apollo.MutationFunction<AddUserMutation, AddUserMutationVariables>;

/**
 * __useAddUserMutation__
 *
 * To run a mutation, you first call `useAddUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserMutation, { data, loading, error }] = useAddUserMutation({
 *   variables: {
 *      name: // value for 'name'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useAddUserMutation(baseOptions?: Apollo.MutationHookOptions<AddUserMutation, AddUserMutationVariables>) {
        return Apollo.useMutation<AddUserMutation, AddUserMutationVariables>(AddUserDocument, baseOptions);
      }
export type AddUserMutationHookResult = ReturnType<typeof useAddUserMutation>;
export type AddUserMutationResult = Apollo.MutationResult<AddUserMutation>;
export type AddUserMutationOptions = Apollo.BaseMutationOptions<AddUserMutation, AddUserMutationVariables>;
export const AttemptLoginDocument = gql`
    mutation AttemptLogin($name: String!, $password: String!) {
  AttemptLogin(name: $name, password: $password) {
    id
    name
    email
    description
  }
}
    `;
export type AttemptLoginMutationFn = Apollo.MutationFunction<AttemptLoginMutation, AttemptLoginMutationVariables>;

/**
 * __useAttemptLoginMutation__
 *
 * To run a mutation, you first call `useAttemptLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAttemptLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [attemptLoginMutation, { data, loading, error }] = useAttemptLoginMutation({
 *   variables: {
 *      name: // value for 'name'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useAttemptLoginMutation(baseOptions?: Apollo.MutationHookOptions<AttemptLoginMutation, AttemptLoginMutationVariables>) {
        return Apollo.useMutation<AttemptLoginMutation, AttemptLoginMutationVariables>(AttemptLoginDocument, baseOptions);
      }
export type AttemptLoginMutationHookResult = ReturnType<typeof useAttemptLoginMutation>;
export type AttemptLoginMutationResult = Apollo.MutationResult<AttemptLoginMutation>;
export type AttemptLoginMutationOptions = Apollo.BaseMutationOptions<AttemptLoginMutation, AttemptLoginMutationVariables>;
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
export const GetPostsFromCommunityByIdDocument = gql`
    query GetPostsFromCommunityByID($communityID: String!) {
  GetPostsFromCommunityByID(communityID: $communityID) {
    id
    title
    content
    upvotes
    downvotes
    author {
      id
      name
      email
      description
    }
    community {
      id
      name
      followerCount
    }
  }
}
    `;

/**
 * __useGetPostsFromCommunityByIdQuery__
 *
 * To run a query within a React component, call `useGetPostsFromCommunityByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsFromCommunityByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsFromCommunityByIdQuery({
 *   variables: {
 *      communityID: // value for 'communityID'
 *   },
 * });
 */
export function useGetPostsFromCommunityByIdQuery(baseOptions?: Apollo.QueryHookOptions<GetPostsFromCommunityByIdQuery, GetPostsFromCommunityByIdQueryVariables>) {
        return Apollo.useQuery<GetPostsFromCommunityByIdQuery, GetPostsFromCommunityByIdQueryVariables>(GetPostsFromCommunityByIdDocument, baseOptions);
      }
export function useGetPostsFromCommunityByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostsFromCommunityByIdQuery, GetPostsFromCommunityByIdQueryVariables>) {
          return Apollo.useLazyQuery<GetPostsFromCommunityByIdQuery, GetPostsFromCommunityByIdQueryVariables>(GetPostsFromCommunityByIdDocument, baseOptions);
        }
export type GetPostsFromCommunityByIdQueryHookResult = ReturnType<typeof useGetPostsFromCommunityByIdQuery>;
export type GetPostsFromCommunityByIdLazyQueryHookResult = ReturnType<typeof useGetPostsFromCommunityByIdLazyQuery>;
export type GetPostsFromCommunityByIdQueryResult = Apollo.QueryResult<GetPostsFromCommunityByIdQuery, GetPostsFromCommunityByIdQueryVariables>;
export const GetSelfDocument = gql`
    query GetSelf($yeah: String!) {
  GetSelf(yeah: $yeah) {
    name
    id
    email
    description
    posts {
      id
      title
      content
      upvotes
      downvotes
      author {
        name
        id
        email
        description
      }
      community {
        id
        name
        followerCount
      }
    }
  }
}
    `;

/**
 * __useGetSelfQuery__
 *
 * To run a query within a React component, call `useGetSelfQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSelfQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSelfQuery({
 *   variables: {
 *      yeah: // value for 'yeah'
 *   },
 * });
 */
export function useGetSelfQuery(baseOptions?: Apollo.QueryHookOptions<GetSelfQuery, GetSelfQueryVariables>) {
        return Apollo.useQuery<GetSelfQuery, GetSelfQueryVariables>(GetSelfDocument, baseOptions);
      }
export function useGetSelfLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSelfQuery, GetSelfQueryVariables>) {
          return Apollo.useLazyQuery<GetSelfQuery, GetSelfQueryVariables>(GetSelfDocument, baseOptions);
        }
export type GetSelfQueryHookResult = ReturnType<typeof useGetSelfQuery>;
export type GetSelfLazyQueryHookResult = ReturnType<typeof useGetSelfLazyQuery>;
export type GetSelfQueryResult = Apollo.QueryResult<GetSelfQuery, GetSelfQueryVariables>;
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
      community {
        id
        name
        followerCount
      }
      author {
        name
        id
        email
        description
      }
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