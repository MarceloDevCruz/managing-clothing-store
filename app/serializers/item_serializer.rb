class ItemSerializer
  include JSONAPI::Serializer
  
  attributes :id, :title, :description, :size, :quantity, :value, :color

  attribute :image do |item|
    ItemDecorator.new(item).image_url
  end

  attribute :image_alt do |item|
    ItemDecorator.new(item).image_alt
  end

  attribute :created_at do |item|
    I18n.l(item.created_at, format: '%d/%m/%Y')
  end

  attribute :product do |item|
    item.product.title
  end
end