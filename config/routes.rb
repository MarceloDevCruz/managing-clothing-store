Rails.application.routes.draw do
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

  delete '/posts/:id', to: 'posts#destroy', as: 'delete_post'
  delete '/comment/:id', to: 'comments#destroy', as: 'delete_comment'

  post '/login', to: 'users#login'
  delete '/logout', to: 'users#logout'

  get '*path', to: 'pages#home', constraints: ->(request) { !request.xhr? && request.format.html? }
end
