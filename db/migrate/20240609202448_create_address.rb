class CreateAddress < ActiveRecord::Migration[7.0]
  def change
    create_table :addresses do |t|
      t.string :zip_code
      t.string :neighborhood
      t.string :street
      t.string :city
      t.string :number
      t.string :complement
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
