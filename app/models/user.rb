class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :recoverable, :rememberable

  has_many :posts, dependent: :destroy

  validates :name, presence: true
  validates :email, presence: true
  validates :password, presence: true
  end
  