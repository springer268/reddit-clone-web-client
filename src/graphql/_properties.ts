const user = 'name id email description'
const post = 'id title content upvotes downvotes'
const community = 'id name followerCount'
const totalPosts = `posts { ${post} author { ${user} } community { ${community} }}`
const completeUser = `${user} ${totalPosts}`

export const properties = {
	user,
	post,
	community,
	totalPosts,
	completeUser
}
