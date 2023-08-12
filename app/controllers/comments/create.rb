class CommentsController < ApplicationController
  def command
    result = CommentsCommand.exec(params)
    # post = current_user.posts.find params[:post_id]
    # comment = post.build_comment(comment_params)
  end
end


class CommentsCommand
  def self.exec(params)
    Comment.new
    @comment = Comment.create_comment(params[:user_id], params[:post_id], params[:content], params[:user_name])
    LOGICA_AVISAR_USUARIO_DONO_DO_POST
 
  end
end

