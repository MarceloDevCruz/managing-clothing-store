class AddressesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def show
    user = User.find_by(id: params[:user_id])
    address = user.address
    if user && address
      render json: { address: user.address }
    else
      render json: { error: 'User not have address' }, status: :not_found
    end
  end

  def create
    @address = current_user.address || current_user.build_address
    @address.attributes = address_params
  
    if @address.save
      render json: { message: "Address created successfully", address: @address }, status: :created
    else
      render json: { error: @address.errors.full_messages }, status: :unprocessable_entity
    end
  end
  

  private

  def address_params
    params.permit(:zip_code, :neighborhood, :street, :city, :number, :complement, :user_id)
  end
end
