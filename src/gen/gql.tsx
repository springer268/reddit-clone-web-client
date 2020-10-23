import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
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
  GetUserByNameWithTotalPosts?: Maybe<User>;
  GetPostByID?: Maybe<Post>;
  GetCommunityByID?: Maybe<Community>;
  GetCommunityByName?: Maybe<Community>;
  GetCommunities: Array<Community>;
  GetPostsFromCommunityByID?: Maybe<Array<Post>>;
  GetPostsFromCommunityByName?: Maybe<Array<Post>>;
};


export type QueryGetUserByIdArgs = {
  id: Scalars['String'];
};


export type QueryGetUserByNameWithTotalPostsArgs = {
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
  offset: Scalars['Float'];
  amount: Scalars['Float'];
  communityID: Scalars['String'];
};


export type QueryGetPostsFromCommunityByNameArgs = {
  offset: Scalars['Float'];
  amount: Scalars['Float'];
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


export type UserPostsArgs = {
  offset: Scalars['Float'];
  amount: Scalars['Float'];
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
  posts: Array<Post>;
};


export type CommunityPostsArgs = {
  offset: Scalars['Float'];
  amount: Scalars['Float'];
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

export type ShallowCommunityFragment = (
  { __typename?: 'Community' }
  & Pick<Community, 'id' | 'name' | 'followerCount'>
);

export type ShallowPostFragment = (
  { __typename?: 'Post' }
  & Pick<Post, 'id' | 'title' | 'content' | 'upvotes' | 'downvotes'>
);

export type ShallowUserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'name' | 'email' | 'description'>
);

export type TotalPostFragment = (
  { __typename?: 'Post' }
  & { author: (
    { __typename?: 'User' }
    & ShallowUserFragment
  ), community: (
    { __typename?: 'Community' }
    & ShallowCommunityFragment
  ) }
  & ShallowPostFragment
);

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
    & ShallowPostFragment
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
    & ShallowUserFragment
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
    & ShallowUserFragment
  ) }
);

export type GetCommunityByNameQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetCommunityByNameQuery = (
  { __typename?: 'Query' }
  & { GetCommunityByName?: Maybe<(
    { __typename?: 'Community' }
    & ShallowCommunityFragment
  )> }
);

export type GetCommunitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCommunitiesQuery = (
  { __typename?: 'Query' }
  & { GetCommunities: Array<(
    { __typename?: 'Community' }
    & ShallowCommunityFragment
  )> }
);

export type GetCommunityWithTotalPostsByNameQueryVariables = Exact<{
  name: Scalars['String'];
  amount: Scalars['Float'];
  offset: Scalars['Float'];
}>;


export type GetCommunityWithTotalPostsByNameQuery = (
  { __typename?: 'Query' }
  & { GetCommunityByName?: Maybe<(
    { __typename?: 'Community' }
    & { posts: Array<(
      { __typename?: 'Post' }
      & TotalPostFragment
    )> }
    & ShallowCommunityFragment
  )> }
);

export type GetPostByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetPostByIdQuery = (
  { __typename?: 'Query' }
  & { GetPostByID?: Maybe<(
    { __typename?: 'Post' }
    & TotalPostFragment
  )> }
);

export type GetSelfQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSelfQuery = (
  { __typename?: 'Query' }
  & { GetSelf?: Maybe<(
    { __typename?: 'User' }
    & ShallowUserFragment
  )> }
);

export type GetUserByNameWithTotalPostsQueryVariables = Exact<{
  name: Scalars['String'];
  amount: Scalars['Float'];
  offset: Scalars['Float'];
}>;


export type GetUserByNameWithTotalPostsQuery = (
  { __typename?: 'Query' }
  & { GetUserByNameWithTotalPosts?: Maybe<(
    { __typename?: 'User' }
    & { posts: Array<(
      { __typename?: 'Post' }
      & TotalPostFragment
    )> }
    & ShallowUserFragment
  )> }
);

export const ShallowPostFragmentDoc = gql`
    fragment ShallowPost on Post {
  id
  title
  content
  upvotes
  downvotes
}
    `;
export const ShallowUserFragmentDoc = gql`
    fragment ShallowUser on User {
  id
  name
  email
  description
}
    `;
export const ShallowCommunityFragmentDoc = gql`
    fragment ShallowCommunity on Community {
  id
  name
  followerCount
}
    `;
export const TotalPostFragmentDoc = gql`
    fragment TotalPost on Post {
  ...ShallowPost
  author {
    ...ShallowUser
  }
  community {
    ...ShallowCommunity
  }
}
    ${ShallowPostFragmentDoc}
${ShallowUserFragmentDoc}
${ShallowCommunityFragmentDoc}`;
export const AddPostDocument = gql`
    mutation AddPost($communityID: String!, $authorID: String!, $title: String!, $content: String!) {
  AddPost(communityID: $communityID, authorID: $authorID, title: $title, content: $content) {
    ...ShallowPost
  }
}
    ${ShallowPostFragmentDoc}`;
export type AddPostMutationFn = Apollo.MutationFunction<AddPostMutation, AddPostMutationVariables>;
export type AddPostProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<AddPostMutation, AddPostMutationVariables>
    } & TChildProps;
export function withAddPost<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddPostMutation,
  AddPostMutationVariables,
  AddPostProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, AddPostMutation, AddPostMutationVariables, AddPostProps<TChildProps, TDataName>>(AddPostDocument, {
      alias: 'addPost',
      ...operationOptions
    });
};

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
    ...ShallowUser
  }
}
    ${ShallowUserFragmentDoc}`;
export type AddUserMutationFn = Apollo.MutationFunction<AddUserMutation, AddUserMutationVariables>;
export type AddUserProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<AddUserMutation, AddUserMutationVariables>
    } & TChildProps;
export function withAddUser<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddUserMutation,
  AddUserMutationVariables,
  AddUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, AddUserMutation, AddUserMutationVariables, AddUserProps<TChildProps, TDataName>>(AddUserDocument, {
      alias: 'addUser',
      ...operationOptions
    });
};

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
    ...ShallowUser
  }
}
    ${ShallowUserFragmentDoc}`;
export type AttemptLoginMutationFn = Apollo.MutationFunction<AttemptLoginMutation, AttemptLoginMutationVariables>;
export type AttemptLoginProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<AttemptLoginMutation, AttemptLoginMutationVariables>
    } & TChildProps;
export function withAttemptLogin<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AttemptLoginMutation,
  AttemptLoginMutationVariables,
  AttemptLoginProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, AttemptLoginMutation, AttemptLoginMutationVariables, AttemptLoginProps<TChildProps, TDataName>>(AttemptLoginDocument, {
      alias: 'attemptLogin',
      ...operationOptions
    });
};

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
    ...ShallowCommunity
  }
}
    ${ShallowCommunityFragmentDoc}`;
export type GetCommunityByNameProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetCommunityByNameQuery, GetCommunityByNameQueryVariables>
    } & TChildProps;
export function withGetCommunityByName<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetCommunityByNameQuery,
  GetCommunityByNameQueryVariables,
  GetCommunityByNameProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetCommunityByNameQuery, GetCommunityByNameQueryVariables, GetCommunityByNameProps<TChildProps, TDataName>>(GetCommunityByNameDocument, {
      alias: 'getCommunityByName',
      ...operationOptions
    });
};

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
export const GetCommunitiesDocument = gql`
    query GetCommunities {
  GetCommunities {
    ...ShallowCommunity
  }
}
    ${ShallowCommunityFragmentDoc}`;
export type GetCommunitiesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetCommunitiesQuery, GetCommunitiesQueryVariables>
    } & TChildProps;
export function withGetCommunities<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetCommunitiesQuery,
  GetCommunitiesQueryVariables,
  GetCommunitiesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetCommunitiesQuery, GetCommunitiesQueryVariables, GetCommunitiesProps<TChildProps, TDataName>>(GetCommunitiesDocument, {
      alias: 'getCommunities',
      ...operationOptions
    });
};

/**
 * __useGetCommunitiesQuery__
 *
 * To run a query within a React component, call `useGetCommunitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommunitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommunitiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCommunitiesQuery(baseOptions?: Apollo.QueryHookOptions<GetCommunitiesQuery, GetCommunitiesQueryVariables>) {
        return Apollo.useQuery<GetCommunitiesQuery, GetCommunitiesQueryVariables>(GetCommunitiesDocument, baseOptions);
      }
export function useGetCommunitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommunitiesQuery, GetCommunitiesQueryVariables>) {
          return Apollo.useLazyQuery<GetCommunitiesQuery, GetCommunitiesQueryVariables>(GetCommunitiesDocument, baseOptions);
        }
export type GetCommunitiesQueryHookResult = ReturnType<typeof useGetCommunitiesQuery>;
export type GetCommunitiesLazyQueryHookResult = ReturnType<typeof useGetCommunitiesLazyQuery>;
export type GetCommunitiesQueryResult = Apollo.QueryResult<GetCommunitiesQuery, GetCommunitiesQueryVariables>;
export const GetCommunityWithTotalPostsByNameDocument = gql`
    query GetCommunityWithTotalPostsByName($name: String!, $amount: Float!, $offset: Float!) {
  GetCommunityByName(name: $name) {
    ...ShallowCommunity
    posts(amount: $amount, offset: $offset) {
      ...TotalPost
    }
  }
}
    ${ShallowCommunityFragmentDoc}
${TotalPostFragmentDoc}`;
export type GetCommunityWithTotalPostsByNameProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetCommunityWithTotalPostsByNameQuery, GetCommunityWithTotalPostsByNameQueryVariables>
    } & TChildProps;
export function withGetCommunityWithTotalPostsByName<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetCommunityWithTotalPostsByNameQuery,
  GetCommunityWithTotalPostsByNameQueryVariables,
  GetCommunityWithTotalPostsByNameProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetCommunityWithTotalPostsByNameQuery, GetCommunityWithTotalPostsByNameQueryVariables, GetCommunityWithTotalPostsByNameProps<TChildProps, TDataName>>(GetCommunityWithTotalPostsByNameDocument, {
      alias: 'getCommunityWithTotalPostsByName',
      ...operationOptions
    });
};

/**
 * __useGetCommunityWithTotalPostsByNameQuery__
 *
 * To run a query within a React component, call `useGetCommunityWithTotalPostsByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommunityWithTotalPostsByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommunityWithTotalPostsByNameQuery({
 *   variables: {
 *      name: // value for 'name'
 *      amount: // value for 'amount'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useGetCommunityWithTotalPostsByNameQuery(baseOptions?: Apollo.QueryHookOptions<GetCommunityWithTotalPostsByNameQuery, GetCommunityWithTotalPostsByNameQueryVariables>) {
        return Apollo.useQuery<GetCommunityWithTotalPostsByNameQuery, GetCommunityWithTotalPostsByNameQueryVariables>(GetCommunityWithTotalPostsByNameDocument, baseOptions);
      }
export function useGetCommunityWithTotalPostsByNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommunityWithTotalPostsByNameQuery, GetCommunityWithTotalPostsByNameQueryVariables>) {
          return Apollo.useLazyQuery<GetCommunityWithTotalPostsByNameQuery, GetCommunityWithTotalPostsByNameQueryVariables>(GetCommunityWithTotalPostsByNameDocument, baseOptions);
        }
export type GetCommunityWithTotalPostsByNameQueryHookResult = ReturnType<typeof useGetCommunityWithTotalPostsByNameQuery>;
export type GetCommunityWithTotalPostsByNameLazyQueryHookResult = ReturnType<typeof useGetCommunityWithTotalPostsByNameLazyQuery>;
export type GetCommunityWithTotalPostsByNameQueryResult = Apollo.QueryResult<GetCommunityWithTotalPostsByNameQuery, GetCommunityWithTotalPostsByNameQueryVariables>;
export const GetPostByIdDocument = gql`
    query GetPostByID($id: String!) {
  GetPostByID(id: $id) {
    ...TotalPost
  }
}
    ${TotalPostFragmentDoc}`;
export type GetPostByIdProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPostByIdQuery, GetPostByIdQueryVariables>
    } & TChildProps;
export function withGetPostById<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPostByIdQuery,
  GetPostByIdQueryVariables,
  GetPostByIdProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPostByIdQuery, GetPostByIdQueryVariables, GetPostByIdProps<TChildProps, TDataName>>(GetPostByIdDocument, {
      alias: 'getPostById',
      ...operationOptions
    });
};

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
export const GetSelfDocument = gql`
    query GetSelf {
  GetSelf {
    ...ShallowUser
  }
}
    ${ShallowUserFragmentDoc}`;
export type GetSelfProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetSelfQuery, GetSelfQueryVariables>
    } & TChildProps;
export function withGetSelf<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetSelfQuery,
  GetSelfQueryVariables,
  GetSelfProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetSelfQuery, GetSelfQueryVariables, GetSelfProps<TChildProps, TDataName>>(GetSelfDocument, {
      alias: 'getSelf',
      ...operationOptions
    });
};

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
export const GetUserByNameWithTotalPostsDocument = gql`
    query GetUserByNameWithTotalPosts($name: String!, $amount: Float!, $offset: Float!) {
  GetUserByNameWithTotalPosts(name: $name) {
    ...ShallowUser
    posts(amount: $amount, offset: $offset) {
      ...TotalPost
    }
  }
}
    ${ShallowUserFragmentDoc}
${TotalPostFragmentDoc}`;
export type GetUserByNameWithTotalPostsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetUserByNameWithTotalPostsQuery, GetUserByNameWithTotalPostsQueryVariables>
    } & TChildProps;
export function withGetUserByNameWithTotalPosts<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetUserByNameWithTotalPostsQuery,
  GetUserByNameWithTotalPostsQueryVariables,
  GetUserByNameWithTotalPostsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetUserByNameWithTotalPostsQuery, GetUserByNameWithTotalPostsQueryVariables, GetUserByNameWithTotalPostsProps<TChildProps, TDataName>>(GetUserByNameWithTotalPostsDocument, {
      alias: 'getUserByNameWithTotalPosts',
      ...operationOptions
    });
};

/**
 * __useGetUserByNameWithTotalPostsQuery__
 *
 * To run a query within a React component, call `useGetUserByNameWithTotalPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByNameWithTotalPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByNameWithTotalPostsQuery({
 *   variables: {
 *      name: // value for 'name'
 *      amount: // value for 'amount'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useGetUserByNameWithTotalPostsQuery(baseOptions?: Apollo.QueryHookOptions<GetUserByNameWithTotalPostsQuery, GetUserByNameWithTotalPostsQueryVariables>) {
        return Apollo.useQuery<GetUserByNameWithTotalPostsQuery, GetUserByNameWithTotalPostsQueryVariables>(GetUserByNameWithTotalPostsDocument, baseOptions);
      }
export function useGetUserByNameWithTotalPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByNameWithTotalPostsQuery, GetUserByNameWithTotalPostsQueryVariables>) {
          return Apollo.useLazyQuery<GetUserByNameWithTotalPostsQuery, GetUserByNameWithTotalPostsQueryVariables>(GetUserByNameWithTotalPostsDocument, baseOptions);
        }
export type GetUserByNameWithTotalPostsQueryHookResult = ReturnType<typeof useGetUserByNameWithTotalPostsQuery>;
export type GetUserByNameWithTotalPostsLazyQueryHookResult = ReturnType<typeof useGetUserByNameWithTotalPostsLazyQuery>;
export type GetUserByNameWithTotalPostsQueryResult = Apollo.QueryResult<GetUserByNameWithTotalPostsQuery, GetUserByNameWithTotalPostsQueryVariables>;