class Comment < ApplicationRecord
    belongs_to :user
    belongs_to :post
  
    validates :content, presence: true
  
    def self.create_comment(user_id, post_id, content, user_name)
      Comment.create(user_id: user_id, post_id: post_id, content: content, user_name: user_name)
    end
    
  end
  