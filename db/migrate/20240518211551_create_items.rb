class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.decimal :value, null: false
      t.integer :quantity, null: false, default: 0
      t.string :color
      t.string :size
      t.references :product, foreign_key: true
      t.timestamps
    end
  end
end
