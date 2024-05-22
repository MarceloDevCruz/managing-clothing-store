ActiveAdmin.register Item do

  remove_filter :image_attachment, :image_blob

  permit_params :title, :description, :value, :quantity, :color, :image, :product_id, :size

  index do
    selectable_column
    id_column
    column :title
    column :description
    column :value
    column :quantity
    column :color
    column :product do |item|
      item.product.title
    end
    column :size
    actions
  end

  form partial: 'admin/item/form'
  
end
