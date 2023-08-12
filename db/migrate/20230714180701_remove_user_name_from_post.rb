class RemoveUserNameFromPost < ActiveRecord::Migration[7.0]
  def change
    remove_column :posts, :user_name
  end
end
