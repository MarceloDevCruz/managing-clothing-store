# app/admin/*.rb

ActiveAdmin.register Comments do
  actions :all, except: [:comments]
end
