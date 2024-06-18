class Item < ApplicationRecord
  has_one_attached :image
  belongs_to :product
  has_many :carts, dependent: :destroy
  has_many :users, through: :carts

  validates :title, presence: true
  validates :description, presence: true
  validates :value, presence: true
  validate :color
end
