class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    user = User.create(user_params)
    if user.valid?
      render json: { message: 'Usuário cadastrado com sucesso!' }
    else
      render json: { error: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def login
    user = User.find_by(email: params[:email])
    if user.present? && user.valid_password?(params[:password])
      sign_in(user)
      render json: { message: 'Login bem-sucedido!', user: user }
    else
      render json: { error: 'Email ou senha inválidos' }, status: :unauthorized
    end
  end

  def logout
    sign_out(current_user)
    render json: { message: 'Logout bem-sucedido!' }
  end

  private

  def user_params
    params.permit(:name, :email, :password)
  end
end
