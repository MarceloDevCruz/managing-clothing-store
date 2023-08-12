class PostSerializer
  include JSONAPI::Serializer
  
  attributes :title, :content, :user_id

  attributes :image do |post|
    PostDecorator.new(post).image_url
  end

  attributes :image_alt do |post|
    PostDecorator.new(post).image_alt
  end

  attributes :user_name do |post|
    post.user.name
  end

  attribute :comments do |post|
    CommentSerializer.new(post.comments).as_json["data"].map{|i| i["attributes"]}
  end

  attributes :created_at do |post|
    I18n.l(post.created_at, format: '%d/%m/%Y')
  end
end