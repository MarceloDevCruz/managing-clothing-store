class CommentSerializer
    include JSONAPI::Serializer

    attributes :content, :id

    attributes :user_id do |comment|
        comment.user_id
    end

    attributes :user_name do |comment|
        comment.user.name
    end

    attributes :created_at do |comment|
        I18n.l(comment.created_at, format: '%d/%m/%Y')
    end
end