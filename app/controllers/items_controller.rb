class ItemsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: ItemSerializer.new(Item.order(created_at: :desc)).serializable_hash
  end

  def show
    render json: ItemSerializer.new(Item.find(params[:id])).serializable_hash
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
