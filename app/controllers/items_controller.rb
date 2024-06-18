class ItemsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: ItemSerializer.new(Item.order(created_at: :desc)).serializable_hash
  end

  def show
    render json: ItemSerializer.new(Item.find(params[:id])).serializable_hash
  end

  def update_quantity
    item = Item.find(params[:id])
    puts "Item found: #{item.inspect}"  
  
    if item.quantity > 0
      if item.quantity == 1
        item.destroy!
        puts "Item destroyed"  
        render json: { success: true, quantity: 0, message: 'Item deleted' }
      else
        item.update!(quantity: item.quantity - 1)
        puts "Item quantity decremented: #{item.quantity}"  
        render json: { success: true, quantity: item.quantity }
      end
    else
      puts "Invalid quantity"  
      render json: { success: false, error: 'Quantidade não pode ser menor ou igual a zero' }, status: :unprocessable_entity
    end
  rescue ActiveRecord::RecordNotFound
    render json: { success: false, error: 'Item not found' }, status: :not_found
  rescue StandardError => e
    puts "Error updating quantity: #{e.message}"
    render json: { success: false, error: 'Ocorreu um erro ao atualizar a quantidade do item' }, status: :unprocessable_entity
  end
  


  private

  def post_params
    params.permit(
      :title,
      :description,
      :value,
      :quantity,
      :color,
      :size,
      :image,
      :product_id,
    )
  end
end
