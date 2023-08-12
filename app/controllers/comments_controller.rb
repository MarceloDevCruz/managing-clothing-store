class CommentsController < ApplicationController
    skip_before_action :verify_authenticity_token
  
    def create    
      # https://api.rubyonrails.org/classes/ActiveModel/Serialization.html -> Serializer
      # person.serializable_hash(include: :address)

      #attribute :content, :id, :created_at
  
      #attributes user_name do |comment|
        #comment.user.name
      #end

      #comment = Comment.find(:id)

      #render json: View::CommentSerializer.new(comment).serializable_hash
    #end
    #attributes :user_name do |comment|
    #comment.user.name
    #end

    # https://guides.rubyonrails.org/i18n.html

    # I18n.l(Comment.last.created_at, format: '%d/%m/%Y')

    # order(created_at: :desc)

    # post = Post.find post_id
    # comment = post.comments.find(comment_id)
    @comment = Comment.create_comment(params[:user_id], params[:post_id], params[:content], params[:user_name])
      if @comment.persisted?
        render json: CommentSerializer.new(@comment).serializable_hash, status: :created
      else
        render json: @comment.errors, status: :unprocessable_entity
      end
    end
  
    def index
      render json: CommentSerializer.new(Comment.all_comments).serializable_hash
    end
  
    def destroy
      @comment = Comment.find(params[:id])
      @comment.delete
      head :no_content
    end
  end
  