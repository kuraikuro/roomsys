package schema

import (
	"github.com/facebookincubator/ent"
	"github.com/facebookincubator/ent/schema/edge"
	"github.com/facebookincubator/ent/schema/field"
)

// RoomType holds the schema definition for the Roomtype entity.
type RoomType struct {
	ent.Schema
}

// Fields of the Type.
func (RoomType) Fields() []ent.Field {
	return []ent.Field{
		field.String("RoomType"),
		field.Int("Cost"),
	}
}

// Edges of the Type.
func (RoomType) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("room", Room.Type),
	}
}
