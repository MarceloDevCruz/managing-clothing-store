class AddressSerializer
  include JSONAPI::Serializer
  
  attributes :zip_code, :neighborhood, :street, :city, :number, :complement

end