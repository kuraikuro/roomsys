package schema

import (
	"github.com/facebookincubator/ent"
	"github.com/facebookincubator/ent/schema/edge"
	"github.com/facebookincubator/ent/schema/field"
)

// RoomStatus holds the schema definition for the Status entity.
type RoomStatus struct {
	ent.Schema
}

// Fields of the RoomStatus.
func (RoomStatus) Fields() []ent.Field {
	return []ent.Field{
		field.String("RoomStatus"),
	}
}

// Edges of the RoomStatus.
func (RoomStatus) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("room", Room.Type),
	}
}
