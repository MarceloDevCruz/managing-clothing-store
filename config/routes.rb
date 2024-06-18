Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  root 'pages#home'

  resources :users, only: [:create]
  get 'users', to: 'devise/sessions#new', as: 'new_user'

  devise_for :users

  resources :posts, except: [:destroy, :new] do
    resources :comments, only: [:create, :index]
    member do
      get 'edit'
      patch 'update'
    end
  end

  resources :items, except: [:create, :new, :update] do
    member do
      patch 'update_quantity'
    end
  end
  
  resources :addresses, only: [:create]
  resources :carts, only: [:create, :index, :delete]


  get '/addresses/:user_id', to: "addresses#show", as: 'show_address'
  delete '/posts/:id', to: 'posts#destroy', as: 'delete_post'
  delete '/comment/:id', to: 'comments#destroy', as: 'delete_comment'

  post '/login', to: 'users#login'
  delete '/logout', to: 'users#logout'

  get '*path', to: 'pages#home', constraints: ->(request) { !request.xhr? && request.format.html? }
end
