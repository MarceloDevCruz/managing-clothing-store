ActiveAdmin.register Product do

  config.filters = false

  permit_params :title
  
end
