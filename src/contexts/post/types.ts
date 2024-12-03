import type { ReactNode } from 'react'

import type {
  CreateCommentRequest,
  CreateCommentResponse,
} from '@/http/comments/create-comment'
import type {
  CreatePostRequest,
  CreatePostResponse,
} from '@/http/posts/create-post'
import type { IPost } from '@/http/posts/types'
import {
  CreateCommentReactionRequest,
  CreateCommentReactionResponse,
} from '@/http/reactions/create-comment-reaction'
import type {
  CreatePostReactionRequest,
  CreatePostReactionResponse,
} from '@/http/reactions/create-post-reaction'
import {
  DeleteCommentReactionRequest,
  DeleteCommentReactionResponse,
} from '@/http/reactions/delete-comment-reaction'
import type {
  DeletePostReactionRequest,
  DeletePostReactionResponse,
} from '@/http/reactions/delete-post-reaction'

export interface PostProviderProps {
  children: ReactNode
}

export interface PostContextType {
  posts: IPost[]
  onCreatePost(post: CreatePostRequest): Promise<CreatePostResponse>
  onCreateComment(comment: CreateCommentRequest): Promise<CreateCommentResponse>
  onCreatePostReaction(
    reaction: CreatePostReactionRequest,
  ): Promise<CreatePostReactionResponse>
  onDeletePostReaction(
    reaction: DeletePostReactionRequest,
  ): Promise<DeletePostReactionResponse>
  onCreateCommentReaction(
    reaction: CreateCommentReactionRequest,
  ): Promise<CreateCommentReactionResponse>
  onDeleteCommentReaction(
    reaction: DeleteCommentReactionRequest,
  ): Promise<DeleteCommentReactionResponse>
}
