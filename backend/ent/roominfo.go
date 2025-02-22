// Code generated by entc, DO NOT EDIT.

package ent

import (
	"fmt"
	"strings"

	"github.com/Asus/app/ent/roominfo"
	"github.com/facebookincubator/ent/dialect/sql"
)

// RoomInfo is the model entity for the RoomInfo schema.
type RoomInfo struct {
	config `json:"-"`
	// ID of the ent.
	ID int `json:"id,omitempty"`
	// Info holds the value of the "Info" field.
	Info string `json:"Info,omitempty"`
	// Edges holds the relations/edges for other nodes in the graph.
	// The values are being populated by the RoomInfoQuery when eager-loading is set.
	Edges RoomInfoEdges `json:"edges"`
}

// RoomInfoEdges holds the relations/edges for other nodes in the graph.
type RoomInfoEdges struct {
	// Room holds the value of the room edge.
	Room []*Room
	// loadedTypes holds the information for reporting if a
	// type was loaded (or requested) in eager-loading or not.
	loadedTypes [1]bool
}

// RoomOrErr returns the Room value or an error if the edge
// was not loaded in eager-loading.
func (e RoomInfoEdges) RoomOrErr() ([]*Room, error) {
	if e.loadedTypes[0] {
		return e.Room, nil
	}
	return nil, &NotLoadedError{edge: "room"}
}

// scanValues returns the types for scanning values from sql.Rows.
func (*RoomInfo) scanValues() []interface{} {
	return []interface{}{
		&sql.NullInt64{},  // id
		&sql.NullString{}, // Info
	}
}

// assignValues assigns the values that were returned from sql.Rows (after scanning)
// to the RoomInfo fields.
func (ri *RoomInfo) assignValues(values ...interface{}) error {
	if m, n := len(values), len(roominfo.Columns); m < n {
		return fmt.Errorf("mismatch number of scan values: %d != %d", m, n)
	}
	value, ok := values[0].(*sql.NullInt64)
	if !ok {
		return fmt.Errorf("unexpected type %T for field id", value)
	}
	ri.ID = int(value.Int64)
	values = values[1:]
	if value, ok := values[0].(*sql.NullString); !ok {
		return fmt.Errorf("unexpected type %T for field Info", values[0])
	} else if value.Valid {
		ri.Info = value.String
	}
	return nil
}

// QueryRoom queries the room edge of the RoomInfo.
func (ri *RoomInfo) QueryRoom() *RoomQuery {
	return (&RoomInfoClient{config: ri.config}).QueryRoom(ri)
}

// Update returns a builder for updating this RoomInfo.
// Note that, you need to call RoomInfo.Unwrap() before calling this method, if this RoomInfo
// was returned from a transaction, and the transaction was committed or rolled back.
func (ri *RoomInfo) Update() *RoomInfoUpdateOne {
	return (&RoomInfoClient{config: ri.config}).UpdateOne(ri)
}

// Unwrap unwraps the entity that was returned from a transaction after it was closed,
// so that all next queries will be executed through the driver which created the transaction.
func (ri *RoomInfo) Unwrap() *RoomInfo {
	tx, ok := ri.config.driver.(*txDriver)
	if !ok {
		panic("ent: RoomInfo is not a transactional entity")
	}
	ri.config.driver = tx.drv
	return ri
}

// String implements the fmt.Stringer.
func (ri *RoomInfo) String() string {
	var builder strings.Builder
	builder.WriteString("RoomInfo(")
	builder.WriteString(fmt.Sprintf("id=%v", ri.ID))
	builder.WriteString(", Info=")
	builder.WriteString(ri.Info)
	builder.WriteByte(')')
	return builder.String()
}

// RoomInfos is a parsable slice of RoomInfo.
type RoomInfos []*RoomInfo

func (ri RoomInfos) config(cfg config) {
	for _i := range ri {
		ri[_i].config = cfg
	}
}
