Rails.application.routes.draw do
  resources :publishers
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # namespace :admin do
  #   resources :authors 
  # end
  
  
  # resources :authors
  # resources :books


  resources :authors do
    resources :books
  end
  
end
