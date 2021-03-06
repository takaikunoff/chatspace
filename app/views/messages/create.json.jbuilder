# frozen_string_literal: true

json.id @message.id
json.user_name @message.user.name
json.content @message.content
json.date @message.created_at.to_s(:default)
json.image @message.image.to_s
