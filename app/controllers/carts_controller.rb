class CartsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    user = User.find_by(id: params[:user_id])
    item = Item.find_by(id: params[:item_id])
    address = user.address
    
    if user && item && address
      cart = Cart.new(user: user, item: item)

      if cart.save
        render json: { message: 'Cart created successfully', cart: cart }, status: :created
      else
        render json: { error: 'Failed to create cart', reasons: cart.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render json: { error: 'User or Item not found' }, status: :not_found
    end
  end

  def index
    user = User.find_by(id: params[:user_id])
    address = user.address
    
    if user
      carts = user.carts.includes(:item)
      carts_with_items = carts.map do |cart|
        {
          id: cart.id,
          user_id: cart.user_id,
          item_id: cart.item_id,
          address: address,
          item_quantity: 1,
          item: ItemSerializer.new(cart.item).serializable_hash[:data][:attributes]
        }
      end
      render json: { carts: carts_with_items, address: user.address }, status: :ok
    else
      render json: { error: 'User not found' }, status: :not_found
    end
  end

  def delete
    cart = Cart.find_by(id: params[:id])
  
    if cart
      if cart.destroy
        render json: { message: 'Cart excluído com sucesso!', cart: cart }, status: :ok
      else
        render json: { error: 'Cart não foi excluído' }, status: :unprocessable_entity
      end
    else
      render json: { error: 'Cart não encontrado' }, status: :not_found
    end
  end
  

  private

  def address_params
    params.permit(:id, :user_id, :item_id)
  end
end
