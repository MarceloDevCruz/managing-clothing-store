class PostDecorator < Draper::Decorator
  delegate_all

  def image_url
    if model.image.attached?
      h.rails_blob_path(model.image, disposition: "attachment", only_path: true)
    else
      'sem-imagem'
    end
  end

  def image_alt
    if model.image.attached?
      model.image.attachment.filename
    else
      "Sem imagem"
    end
  end
end