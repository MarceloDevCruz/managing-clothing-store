class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :recoverable, :rememberable

  has_many :posts, dependent: :destroy
  has_many :carts, dependent: :destroy
  has_many :items, through: :carts
  has_one :address

  validates :name, presence: true
  validates :email, presence: true
  validates :password, presence: true
  end
  