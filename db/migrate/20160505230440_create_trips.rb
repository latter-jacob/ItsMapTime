class CreateTrips < ActiveRecord::Migration
  def change
    create_table :trips do |t|
      t.text     "title",    null: false
      t.text     "description"
      t.float    "latitude"
      t.float    "longitude"
      t.json     "area"
    end
  end
end
