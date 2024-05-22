class Item < ApplicationRecord
  has_one_attached :image
  belongs_to :product

  validates :title, presence: true
  validates :description, presence: true
  validates :value, presence: true
  validate :color
end
