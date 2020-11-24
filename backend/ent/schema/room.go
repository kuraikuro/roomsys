package schema

import (
	"github.com/facebookincubator/ent"
	"github.com/facebookincubator/ent/schema/edge"
)

// Room holds the schema definition for the Room entity.
type Room struct {
	ent.Schema
}

// Edges of the Room.
func (Room) Edges() []ent.Edge {
	return []ent.Edge{
		edge.From("roomstatus", RoomStatus.Type).Ref("room").Unique(),
		edge.From("roomtype", RoomType.Type).Ref("room").Unique(),
		edge.From("roominfo", RoomInfo.Type).Ref("room").Unique(),
	}
}
