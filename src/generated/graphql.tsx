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
  GetUserByName?: Maybe<User>;
  GetPostByID?: Maybe<Post>;
  GetCommunityByID?: Maybe<Community>;
  GetCommunityByName?: Maybe<Community>;
  GetCommunities: Array<Community>;
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

export type CompleteUserFragment = (
  { __typename?: 'User' }
  & { posts: Array<(
    { __typename?: 'Post' }
    & TotalPostFragment
  )> }
  & PartialUserFragment
);

export type PartialCommunityFragment = (
  { __typename?: 'Community' }
  & Pick<Community, 'id' | 'name' | 'followerCount'>
);

export type PartialPostFragment = (
  { __typename?: 'Post' }
  & Pick<Post, 'id' | 'title' | 'content' | 'upvotes' | 'downvotes'>
);

export type PartialUserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'name' | 'email' | 'description'>
);

export type TotalPostFragment = (
  { __typename?: 'Post' }
  & { author: (
    { __typename?: 'User' }
    & PartialUserFragment
  ), community: (
    { __typename?: 'Community' }
    & PartialCommunityFragment
  ) }
  & PartialPostFragment
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
    & Pick<User, 'id'>
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

export type GetCommunitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCommunitiesQuery = (
  { __typename?: 'Query' }
  & { GetCommunities: Array<(
    { __typename?: 'Community' }
    & PartialCommunityFragment
  )> }
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
    & TotalPostFragment
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
    & PartialUserFragment
  )> }
);

export type GetUserByNameQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetUserByNameQuery = (
  { __typename?: 'Query' }
  & { GetUserByName?: Maybe<(
    { __typename?: 'User' }
    & CompleteUserFragment
  )> }
);

export const PartialUserFragmentDoc = gql`
    fragment PartialUser on User {
  id
  name
  email
  description
}
    `;
export const PartialPostFragmentDoc = gql`
    fragment PartialPost on Post {
  id
  title
  content
  upvotes
  downvotes
}
    `;
export const PartialCommunityFragmentDoc = gql`
    fragment PartialCommunity on Community {
  id
  name
  followerCount
}
    `;
export const TotalPostFragmentDoc = gql`
    fragment TotalPost on Post {
  ...PartialPost
  author {
    ...PartialUser
  }
  community {
    ...PartialCommunity
  }
}
    ${PartialPostFragmentDoc}
${PartialUserFragmentDoc}
${PartialCommunityFragmentDoc}`;
export const CompleteUserFragmentDoc = gql`
    fragment CompleteUser on User {
  ...PartialUser
  posts {
    ...TotalPost
  }
}
    ${PartialUserFragmentDoc}
${TotalPostFragmentDoc}`;
export const AddPostDocument = gql`
    mutation AddPost($communityID: String!, $authorID: String!, $title: String!, $content: String!) {
  AddPost(communityID: $communityID, authorID: $authorID, title: $title, content: $content) {
    id
  }
}
    `;
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
    id
  }
}
    `;
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
    id
    name
    email
    description
  }
}
    `;
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
export const GetCommunitiesDocument = gql`
    query GetCommunities {
  GetCommunities {
    ...PartialCommunity
  }
}
    ${PartialCommunityFragmentDoc}`;
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
export const GetCommunityByNameDocument = gql`
    query GetCommunityByName($name: String!) {
  GetCommunityByName(name: $name) {
    id
    name
    followerCount
  }
}
    `;
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
export type GetPostsFromCommunityByIdProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPostsFromCommunityByIdQuery, GetPostsFromCommunityByIdQueryVariables>
    } & TChildProps;
export function withGetPostsFromCommunityById<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPostsFromCommunityByIdQuery,
  GetPostsFromCommunityByIdQueryVariables,
  GetPostsFromCommunityByIdProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPostsFromCommunityByIdQuery, GetPostsFromCommunityByIdQueryVariables, GetPostsFromCommunityByIdProps<TChildProps, TDataName>>(GetPostsFromCommunityByIdDocument, {
      alias: 'getPostsFromCommunityById',
      ...operationOptions
    });
};

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
    ...PartialUser
  }
}
    ${PartialUserFragmentDoc}`;
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
    ...CompleteUser
  }
}
    ${CompleteUserFragmentDoc}`;
export type GetUserByNameProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetUserByNameQuery, GetUserByNameQueryVariables>
    } & TChildProps;
export function withGetUserByName<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetUserByNameQuery,
  GetUserByNameQueryVariables,
  GetUserByNameProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetUserByNameQuery, GetUserByNameQueryVariables, GetUserByNameProps<TChildProps, TDataName>>(GetUserByNameDocument, {
      alias: 'getUserByName',
      ...operationOptions
    });
};

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