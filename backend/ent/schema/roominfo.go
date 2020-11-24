package schema

import (
	"github.com/facebookincubator/ent"
	"github.com/facebookincubator/ent/schema/edge"
	"github.com/facebookincubator/ent/schema/field"
)

// RoomInfo holds the schema definition for the InfoRoom entity.
type RoomInfo struct {
	ent.Schema
}

// Fields of the RoomInfo.
func (RoomInfo) Fields() []ent.Field {
	return []ent.Field{
		field.String("Info"),
	}
}

// Edges of the RoomInfo.
func (RoomInfo) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("room", Room.Type),
	}
}
