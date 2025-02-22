// Code generated by entc, DO NOT EDIT.

package ent

import (
	"context"
	"fmt"

	"github.com/Asus/app/ent/predicate"
	"github.com/Asus/app/ent/roomstatus"
	"github.com/facebookincubator/ent/dialect/sql"
	"github.com/facebookincubator/ent/dialect/sql/sqlgraph"
	"github.com/facebookincubator/ent/schema/field"
)

// RoomStatusDelete is the builder for deleting a RoomStatus entity.
type RoomStatusDelete struct {
	config
	hooks      []Hook
	mutation   *RoomStatusMutation
	predicates []predicate.RoomStatus
}

// Where adds a new predicate to the delete builder.
func (rsd *RoomStatusDelete) Where(ps ...predicate.RoomStatus) *RoomStatusDelete {
	rsd.predicates = append(rsd.predicates, ps...)
	return rsd
}

// Exec executes the deletion query and returns how many vertices were deleted.
func (rsd *RoomStatusDelete) Exec(ctx context.Context) (int, error) {
	var (
		err      error
		affected int
	)
	if len(rsd.hooks) == 0 {
		affected, err = rsd.sqlExec(ctx)
	} else {
		var mut Mutator = MutateFunc(func(ctx context.Context, m Mutation) (Value, error) {
			mutation, ok := m.(*RoomStatusMutation)
			if !ok {
				return nil, fmt.Errorf("unexpected mutation type %T", m)
			}
			rsd.mutation = mutation
			affected, err = rsd.sqlExec(ctx)
			mutation.done = true
			return affected, err
		})
		for i := len(rsd.hooks) - 1; i >= 0; i-- {
			mut = rsd.hooks[i](mut)
		}
		if _, err := mut.Mutate(ctx, rsd.mutation); err != nil {
			return 0, err
		}
	}
	return affected, err
}

// ExecX is like Exec, but panics if an error occurs.
func (rsd *RoomStatusDelete) ExecX(ctx context.Context) int {
	n, err := rsd.Exec(ctx)
	if err != nil {
		panic(err)
	}
	return n
}

func (rsd *RoomStatusDelete) sqlExec(ctx context.Context) (int, error) {
	_spec := &sqlgraph.DeleteSpec{
		Node: &sqlgraph.NodeSpec{
			Table: roomstatus.Table,
			ID: &sqlgraph.FieldSpec{
				Type:   field.TypeInt,
				Column: roomstatus.FieldID,
			},
		},
	}
	if ps := rsd.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	return sqlgraph.DeleteNodes(ctx, rsd.driver, _spec)
}

// RoomStatusDeleteOne is the builder for deleting a single RoomStatus entity.
type RoomStatusDeleteOne struct {
	rsd *RoomStatusDelete
}

// Exec executes the deletion query.
func (rsdo *RoomStatusDeleteOne) Exec(ctx context.Context) error {
	n, err := rsdo.rsd.Exec(ctx)
	switch {
	case err != nil:
		return err
	case n == 0:
		return &NotFoundError{roomstatus.Label}
	default:
		return nil
	}
}

// ExecX is like Exec, but panics if an error occurs.
func (rsdo *RoomStatusDeleteOne) ExecX(ctx context.Context) {
	rsdo.rsd.ExecX(ctx)
}
