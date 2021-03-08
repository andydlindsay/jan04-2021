class CreatePublishers < ActiveRecord::Migration[6.1]
  def change
    create_table :publishers do |t|

      t.timestamps
    end
  end
end
