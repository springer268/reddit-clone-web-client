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
  GetUserByID: User;
  GetUserByName: User;
  GetPostByID: Post;
  GetCommunityByID?: Maybe<Community>;
  GetCommunityByName: Community;
  GetCommunities: Array<Community>;
  GetCommentByID: Comment;
  GetCommentsFromPostByID: Array<Comment>;
  GetCommentsFromUserByID: Array<Comment>;
  GetCommentsFromUserByName: Array<Comment>;
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


export type QueryGetCommentByIdArgs = {
  id: Scalars['String'];
};


export type QueryGetCommentsFromPostByIdArgs = {
  offset?: Maybe<Scalars['Float']>;
  amount: Scalars['Float'];
  postID: Scalars['String'];
};


export type QueryGetCommentsFromUserByIdArgs = {
  offset?: Maybe<Scalars['Float']>;
  amount: Scalars['Float'];
  userID: Scalars['String'];
};


export type QueryGetCommentsFromUserByNameArgs = {
  offset?: Maybe<Scalars['Float']>;
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
  comments: Array<Comment>;
  communities: Array<Community>;
};


export type UserPostsArgs = {
  offset: Scalars['Float'];
  amount: Scalars['Float'];
};


export type UserCommentsArgs = {
  offset?: Maybe<Scalars['Float']>;
  amount: Scalars['Float'];
};


export type UserCommunitiesArgs = {
  offset?: Maybe<Scalars['Float']>;
  amount: Scalars['Float'];
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['ID'];
  title: Scalars['String'];
  content: Scalars['String'];
  upvotes: Scalars['Int'];
  downvotes: Scalars['Int'];
  community: Community;
  author: User;
  comments: Array<Comment>;
};


export type PostCommentsArgs = {
  offset?: Maybe<Scalars['Float']>;
  amount: Scalars['Float'];
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

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['String'];
  path: Scalars['String'];
  content: Scalars['String'];
  upvotes: Scalars['Int'];
  downvotes: Scalars['Int'];
  author: User;
  parent?: Maybe<Comment>;
  replies: Array<Comment>;
  post: Post;
};

export type Mutation = {
  __typename?: 'Mutation';
  AttemptLogin: User;
  AddUser: User;
  AddPost: Post;
  AddCommunityByName: Community;
  AddCommentToPost: Comment;
  FollowCommunity: Scalars['Boolean'];
  UnfollowCommunity: Scalars['Boolean'];
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


export type MutationAddCommunityByNameArgs = {
  name: Scalars['String'];
};


export type MutationAddCommentToPostArgs = {
  parentID?: Maybe<Scalars['String']>;
  postID: Scalars['String'];
  authorID: Scalars['String'];
  content: Scalars['String'];
};


export type MutationFollowCommunityArgs = {
  communityID: Scalars['String'];
  userID: Scalars['String'];
};


export type MutationUnfollowCommunityArgs = {
  communityID: Scalars['String'];
  userID: Scalars['String'];
};

export type CommentFragment = (
  { __typename?: 'Comment' }
  & Pick<Comment, 'id' | 'content' | 'upvotes' | 'downvotes'>
  & { author: (
    { __typename?: 'User' }
    & UserFragment
  ) }
);

export type CommunityFragment = (
  { __typename?: 'Community' }
  & Pick<Community, 'id' | 'name' | 'followerCount'>
);

export type PostFragment = (
  { __typename?: 'Post' }
  & Pick<Post, 'id' | 'title' | 'content' | 'upvotes' | 'downvotes'>
  & { author: (
    { __typename?: 'User' }
    & UserFragment
  ), community: (
    { __typename?: 'Community' }
    & CommunityFragment
  ) }
);

export type UserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'name' | 'email' | 'description'>
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
    & PostFragment
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
    & UserFragment
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
    & UserFragment
  ) }
);

export type GetCommunitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCommunitiesQuery = (
  { __typename?: 'Query' }
  & { GetCommunities: Array<(
    { __typename?: 'Community' }
    & CommunityFragment
  )> }
);

export type GetCommunitiesByUserIdQueryVariables = Exact<{
  name: Scalars['String'];
  amount: Scalars['Float'];
  offset: Scalars['Float'];
}>;


export type GetCommunitiesByUserIdQuery = (
  { __typename?: 'Query' }
  & { GetUserByName: (
    { __typename?: 'User' }
    & { communities: Array<(
      { __typename?: 'Community' }
      & CommunityFragment
    )> }
  ) }
);

export type GetCommunityByNameQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetCommunityByNameQuery = (
  { __typename?: 'Query' }
  & { GetCommunityByName: (
    { __typename?: 'Community' }
    & CommunityFragment
  ) }
);

export type GetCommunityWithPostsByNameQueryVariables = Exact<{
  name: Scalars['String'];
  amount: Scalars['Float'];
  offset: Scalars['Float'];
}>;


export type GetCommunityWithPostsByNameQuery = (
  { __typename?: 'Query' }
  & { GetCommunityByName: (
    { __typename?: 'Community' }
    & { posts: Array<(
      { __typename?: 'Post' }
      & PostFragment
    )> }
    & CommunityFragment
  ) }
);

export type GetPostByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetPostByIdQuery = (
  { __typename?: 'Query' }
  & { GetPostByID: (
    { __typename?: 'Post' }
    & PostFragment
  ) }
);

export type GetPostWithCommentsByIdQueryVariables = Exact<{
  id: Scalars['String'];
  amount: Scalars['Float'];
  offset: Scalars['Float'];
}>;


export type GetPostWithCommentsByIdQuery = (
  { __typename?: 'Query' }
  & { GetPostByID: (
    { __typename?: 'Post' }
    & { comments: Array<(
      { __typename?: 'Comment' }
      & CommentFragment
    )> }
    & PostFragment
  ) }
);

export type GetSelfQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSelfQuery = (
  { __typename?: 'Query' }
  & { GetSelf?: Maybe<(
    { __typename?: 'User' }
    & UserFragment
  )> }
);

export type GetUserByNameWithPostsQueryVariables = Exact<{
  name: Scalars['String'];
  amount: Scalars['Float'];
  offset: Scalars['Float'];
}>;


export type GetUserByNameWithPostsQuery = (
  { __typename?: 'Query' }
  & { GetUserByName: (
    { __typename?: 'User' }
    & { posts: Array<(
      { __typename?: 'Post' }
      & PostFragment
    )> }
    & UserFragment
  ) }
);

export const UserFragmentDoc = gql`
    fragment User on User {
  id
  name
  email
  description
}
    `;
export const CommentFragmentDoc = gql`
    fragment Comment on Comment {
  id
  content
  upvotes
  downvotes
  author {
    ...User
  }
}
    ${UserFragmentDoc}`;
export const CommunityFragmentDoc = gql`
    fragment Community on Community {
  id
  name
  followerCount
}
    `;
export const PostFragmentDoc = gql`
    fragment Post on Post {
  id
  title
  content
  upvotes
  downvotes
  author {
    ...User
  }
  community {
    ...Community
  }
}
    ${UserFragmentDoc}
${CommunityFragmentDoc}`;
export const AddPostDocument = gql`
    mutation AddPost($communityID: String!, $authorID: String!, $title: String!, $content: String!) {
  AddPost(communityID: $communityID, authorID: $authorID, title: $title, content: $content) {
    ...Post
  }
}
    ${PostFragmentDoc}`;
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
    ...User
  }
}
    ${UserFragmentDoc}`;
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
    ...User
  }
}
    ${UserFragmentDoc}`;
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
    ...Community
  }
}
    ${CommunityFragmentDoc}`;
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
export const GetCommunitiesByUserIdDocument = gql`
    query GetCommunitiesByUserID($name: String!, $amount: Float!, $offset: Float!) {
  GetUserByName(name: $name) {
    communities(amount: $amount, offset: $offset) {
      ...Community
    }
  }
}
    ${CommunityFragmentDoc}`;
export type GetCommunitiesByUserIdProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetCommunitiesByUserIdQuery, GetCommunitiesByUserIdQueryVariables>
    } & TChildProps;
export function withGetCommunitiesByUserId<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetCommunitiesByUserIdQuery,
  GetCommunitiesByUserIdQueryVariables,
  GetCommunitiesByUserIdProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetCommunitiesByUserIdQuery, GetCommunitiesByUserIdQueryVariables, GetCommunitiesByUserIdProps<TChildProps, TDataName>>(GetCommunitiesByUserIdDocument, {
      alias: 'getCommunitiesByUserId',
      ...operationOptions
    });
};

/**
 * __useGetCommunitiesByUserIdQuery__
 *
 * To run a query within a React component, call `useGetCommunitiesByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommunitiesByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommunitiesByUserIdQuery({
 *   variables: {
 *      name: // value for 'name'
 *      amount: // value for 'amount'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useGetCommunitiesByUserIdQuery(baseOptions?: Apollo.QueryHookOptions<GetCommunitiesByUserIdQuery, GetCommunitiesByUserIdQueryVariables>) {
        return Apollo.useQuery<GetCommunitiesByUserIdQuery, GetCommunitiesByUserIdQueryVariables>(GetCommunitiesByUserIdDocument, baseOptions);
      }
export function useGetCommunitiesByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommunitiesByUserIdQuery, GetCommunitiesByUserIdQueryVariables>) {
          return Apollo.useLazyQuery<GetCommunitiesByUserIdQuery, GetCommunitiesByUserIdQueryVariables>(GetCommunitiesByUserIdDocument, baseOptions);
        }
export type GetCommunitiesByUserIdQueryHookResult = ReturnType<typeof useGetCommunitiesByUserIdQuery>;
export type GetCommunitiesByUserIdLazyQueryHookResult = ReturnType<typeof useGetCommunitiesByUserIdLazyQuery>;
export type GetCommunitiesByUserIdQueryResult = Apollo.QueryResult<GetCommunitiesByUserIdQuery, GetCommunitiesByUserIdQueryVariables>;
export const GetCommunityByNameDocument = gql`
    query GetCommunityByName($name: String!) {
  GetCommunityByName(name: $name) {
    ...Community
  }
}
    ${CommunityFragmentDoc}`;
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
export const GetCommunityWithPostsByNameDocument = gql`
    query GetCommunityWithPostsByName($name: String!, $amount: Float!, $offset: Float!) {
  GetCommunityByName(name: $name) {
    ...Community
    posts(amount: $amount, offset: $offset) {
      ...Post
    }
  }
}
    ${CommunityFragmentDoc}
${PostFragmentDoc}`;
export type GetCommunityWithPostsByNameProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetCommunityWithPostsByNameQuery, GetCommunityWithPostsByNameQueryVariables>
    } & TChildProps;
export function withGetCommunityWithPostsByName<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetCommunityWithPostsByNameQuery,
  GetCommunityWithPostsByNameQueryVariables,
  GetCommunityWithPostsByNameProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetCommunityWithPostsByNameQuery, GetCommunityWithPostsByNameQueryVariables, GetCommunityWithPostsByNameProps<TChildProps, TDataName>>(GetCommunityWithPostsByNameDocument, {
      alias: 'getCommunityWithPostsByName',
      ...operationOptions
    });
};

/**
 * __useGetCommunityWithPostsByNameQuery__
 *
 * To run a query within a React component, call `useGetCommunityWithPostsByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommunityWithPostsByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommunityWithPostsByNameQuery({
 *   variables: {
 *      name: // value for 'name'
 *      amount: // value for 'amount'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useGetCommunityWithPostsByNameQuery(baseOptions?: Apollo.QueryHookOptions<GetCommunityWithPostsByNameQuery, GetCommunityWithPostsByNameQueryVariables>) {
        return Apollo.useQuery<GetCommunityWithPostsByNameQuery, GetCommunityWithPostsByNameQueryVariables>(GetCommunityWithPostsByNameDocument, baseOptions);
      }
export function useGetCommunityWithPostsByNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommunityWithPostsByNameQuery, GetCommunityWithPostsByNameQueryVariables>) {
          return Apollo.useLazyQuery<GetCommunityWithPostsByNameQuery, GetCommunityWithPostsByNameQueryVariables>(GetCommunityWithPostsByNameDocument, baseOptions);
        }
export type GetCommunityWithPostsByNameQueryHookResult = ReturnType<typeof useGetCommunityWithPostsByNameQuery>;
export type GetCommunityWithPostsByNameLazyQueryHookResult = ReturnType<typeof useGetCommunityWithPostsByNameLazyQuery>;
export type GetCommunityWithPostsByNameQueryResult = Apollo.QueryResult<GetCommunityWithPostsByNameQuery, GetCommunityWithPostsByNameQueryVariables>;
export const GetPostByIdDocument = gql`
    query GetPostByID($id: String!) {
  GetPostByID(id: $id) {
    ...Post
  }
}
    ${PostFragmentDoc}`;
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
export const GetPostWithCommentsByIdDocument = gql`
    query GetPostWithCommentsByID($id: String!, $amount: Float!, $offset: Float!) {
  GetPostByID(id: $id) {
    ...Post
    comments(amount: $amount, offset: $offset) {
      ...Comment
    }
  }
}
    ${PostFragmentDoc}
${CommentFragmentDoc}`;
export type GetPostWithCommentsByIdProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPostWithCommentsByIdQuery, GetPostWithCommentsByIdQueryVariables>
    } & TChildProps;
export function withGetPostWithCommentsById<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPostWithCommentsByIdQuery,
  GetPostWithCommentsByIdQueryVariables,
  GetPostWithCommentsByIdProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPostWithCommentsByIdQuery, GetPostWithCommentsByIdQueryVariables, GetPostWithCommentsByIdProps<TChildProps, TDataName>>(GetPostWithCommentsByIdDocument, {
      alias: 'getPostWithCommentsById',
      ...operationOptions
    });
};

/**
 * __useGetPostWithCommentsByIdQuery__
 *
 * To run a query within a React component, call `useGetPostWithCommentsByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostWithCommentsByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostWithCommentsByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *      amount: // value for 'amount'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useGetPostWithCommentsByIdQuery(baseOptions?: Apollo.QueryHookOptions<GetPostWithCommentsByIdQuery, GetPostWithCommentsByIdQueryVariables>) {
        return Apollo.useQuery<GetPostWithCommentsByIdQuery, GetPostWithCommentsByIdQueryVariables>(GetPostWithCommentsByIdDocument, baseOptions);
      }
export function useGetPostWithCommentsByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostWithCommentsByIdQuery, GetPostWithCommentsByIdQueryVariables>) {
          return Apollo.useLazyQuery<GetPostWithCommentsByIdQuery, GetPostWithCommentsByIdQueryVariables>(GetPostWithCommentsByIdDocument, baseOptions);
        }
export type GetPostWithCommentsByIdQueryHookResult = ReturnType<typeof useGetPostWithCommentsByIdQuery>;
export type GetPostWithCommentsByIdLazyQueryHookResult = ReturnType<typeof useGetPostWithCommentsByIdLazyQuery>;
export type GetPostWithCommentsByIdQueryResult = Apollo.QueryResult<GetPostWithCommentsByIdQuery, GetPostWithCommentsByIdQueryVariables>;
export const GetSelfDocument = gql`
    query GetSelf {
  GetSelf {
    ...User
  }
}
    ${UserFragmentDoc}`;
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
export const GetUserByNameWithPostsDocument = gql`
    query GetUserByNameWithPosts($name: String!, $amount: Float!, $offset: Float!) {
  GetUserByName(name: $name) {
    ...User
    posts(amount: $amount, offset: $offset) {
      ...Post
    }
  }
}
    ${UserFragmentDoc}
${PostFragmentDoc}`;
export type GetUserByNameWithPostsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetUserByNameWithPostsQuery, GetUserByNameWithPostsQueryVariables>
    } & TChildProps;
export function withGetUserByNameWithPosts<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetUserByNameWithPostsQuery,
  GetUserByNameWithPostsQueryVariables,
  GetUserByNameWithPostsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetUserByNameWithPostsQuery, GetUserByNameWithPostsQueryVariables, GetUserByNameWithPostsProps<TChildProps, TDataName>>(GetUserByNameWithPostsDocument, {
      alias: 'getUserByNameWithPosts',
      ...operationOptions
    });
};

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
 *      amount: // value for 'amount'
 *      offset: // value for 'offset'
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