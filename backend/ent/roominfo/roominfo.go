// Code generated by entc, DO NOT EDIT.

package roominfo

const (
	// Label holds the string label denoting the roominfo type in the database.
	Label = "room_info"
	// FieldID holds the string denoting the id field in the database.
	FieldID = "id"
	// FieldInfo holds the string denoting the info field in the database.
	FieldInfo = "info"

	// EdgeRoom holds the string denoting the room edge name in mutations.
	EdgeRoom = "room"

	// Table holds the table name of the roominfo in the database.
	Table = "room_infos"
	// RoomTable is the table the holds the room relation/edge.
	RoomTable = "rooms"
	// RoomInverseTable is the table name for the Room entity.
	// It exists in this package in order to avoid circular dependency with the "room" package.
	RoomInverseTable = "rooms"
	// RoomColumn is the table column denoting the room relation/edge.
	RoomColumn = "room_info_room"
)

// Columns holds all SQL columns for roominfo fields.
var Columns = []string{
	FieldID,
	FieldInfo,
}
