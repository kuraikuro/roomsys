package controllers

import (
	"context"
	"fmt"
	"strconv"

	"github.com/Asus/app/ent"
	"github.com/Asus/app/ent/room"
	"github.com/Asus/app/ent/roominfo"
	"github.com/Asus/app/ent/roomstatus"
	"github.com/Asus/app/ent/roomtype"
	"github.com/gin-gonic/gin"
)

// RoomController defines the struct for the room controller
type RoomController struct {
	client *ent.Client
	router gin.IRouter
}

type Room struct {
	RoomStatus int
	RoomType   int
	RoomInfo   int
}

// CreateRoom handles POST requests for adding room entities
// @Summary Create room
// @Description Create room
// @ID create-room
// @Accept   json
// @Produce  json
// @Param room body Room true "Room entity"
// @Success 200 {object} ent.Room
// @Failure 400 {object} gin.H
// @Failure 500 {object} gin.H
// @Router /room [post]
func (ctl *RoomController) CreateRoom(c *gin.Context) {
	obj := Room{}
	if err := c.ShouldBind(&obj); err != nil {
		c.JSON(400, gin.H{
			"error": "room binding failed",
		})
		return
	}

	s, err := ctl.client.RoomStatus.
		Query().
		Where(roomstatus.IDEQ(int(obj.RoomStatus))).
		Only(context.Background())
	if err != nil {
		c.JSON(400, gin.H{
			"error": "saving failed",
		})
		return
	}

	t, err := ctl.client.RoomType.
		Query().
		Where(roomtype.IDEQ(int(obj.RoomType))).
		Only(context.Background())
	if err != nil {
		c.JSON(400, gin.H{
			"error": "saving failed",
		})
		return
	}

	i, err := ctl.client.RoomInfo.
		Query().
		Where(roominfo.IDEQ(int(obj.RoomInfo))).
		Only(context.Background())
	if err != nil {
		c.JSON(400, gin.H{
			"error": "saving failed",
		})
		return
	}

	r, err := ctl.client.Room.
		Create().
		SetRoomstatus(s).
		SetRoomtype(t).
		SetRoominfo(i).
		Save(context.Background())
	if err != nil {
		c.JSON(400, gin.H{
			"error": "saving failed",
		})
		return
	}

	c.JSON(200, r)
}

// GetRoom handles GET requests to retrieve a room entity
// @Summary Get a room entity by ID
// @Description get room by ID
// @ID get-room
// @Produce  json
// @Param id path int true "Room ID"
// @Success 200 {object} ent.Room
// @Failure 400 {object} gin.H
// @Failure 404 {object} gin.H
// @Failure 500 {object} gin.H
// @Router /room/{id} [get]
func (ctl *RoomController) GetRoom(c *gin.Context) {
	id, err := strconv.ParseInt(c.Param("id"), 10, 64)
	if err != nil {
		c.JSON(400, gin.H{
			"error": err.Error(),
		})
		return
	}

	r, err := ctl.client.Room.
		Query().
		Where(room.IDEQ(int(id))).
		Only(context.Background())
	if err != nil {
		c.JSON(404, gin.H{
			"error": err.Error(),
		})
		return
	}

	c.JSON(200, r)
}

// ListRoom handles request to get a list of room entities
// @Summary List room entities
// @Description list room entities
// @ID list-room
// @Produce json
// @Param limit  query int false "Limit"
// @Param offset query int false "Offset"
// @Success 200 {array} ent.Room
// @Failure 400 {object} gin.H
// @Failure 500 {object} gin.H
// @Router /room [get]
func (ctl *RoomController) ListRoom(c *gin.Context) {
	limitQuery := c.Query("limit")
	limit := 10
	if limitQuery != "" {
		limit64, err := strconv.ParseInt(limitQuery, 10, 64)
		if err == nil {
			limit = int(limit64)
		}
	}

	offsetQuery := c.Query("offset")
	offset := 0
	if offsetQuery != "" {
		offset64, err := strconv.ParseInt(offsetQuery, 10, 64)
		if err == nil {
			offset = int(offset64)
		}
	}

	room, err := ctl.client.Room.
		Query().
		WithRoomstatus().
		WithRoomtype().
		WithRoominfo().
		Limit(limit).
		Offset(offset).
		All(context.Background())
	if err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	c.JSON(200, room)
}

// DeleteRoom handles DELETE requests to delete a room entity
// @Summary Delete a room entity by ID
// @Description get room by ID
// @ID delete-room
// @Produce  json
// @Param id path int true "Room ID"
// @Success 200 {object} gin.H
// @Failure 400 {object} gin.H
// @Failure 404 {object} gin.H
// @Failure 500 {object} gin.H
// @Router /room/{id} [delete]
func (ctl *RoomController) DeleteRoom(c *gin.Context) {
	id, err := strconv.ParseInt(c.Param("id"), 10, 64)
	if err != nil {
		c.JSON(400, gin.H{
			"error": err.Error(),
		})
		return
	}

	err = ctl.client.Room.
		DeleteOneID(int(id)).
		Exec(context.Background())
	if err != nil {
		c.JSON(404, gin.H{
			"error": err.Error(),
		})
		return
	}

	c.JSON(200, gin.H{"result": fmt.Sprintf("ok deleted %v", id)})
}

// UpdateRoom handles PUT requests to update a room entity
// @Summary Update a room entity by ID
// @Description update room by ID
// @ID update-room
// @Accept   json
// @Produce  json
// @Param id path int true "Room ID"
// @Param room body ent.Room true "Room entity"
// @Success 200 {object} ent.Room
// @Failure 400 {object} gin.H
// @Failure 500 {object} gin.H
// @Router /room/{id} [put]
func (ctl *RoomController) UpdateRoom(c *gin.Context) {
	id, err := strconv.ParseInt(c.Param("id"), 10, 64)
	if err != nil {
		c.JSON(400, gin.H{
			"error": err.Error(),
		})
		return
	}

	obj := ent.Room{}
	if err := c.ShouldBind(&obj); err != nil {
		c.JSON(400, gin.H{
			"error": "room binding failed",
		})
		return
	}
	obj.ID = int(id)
	r, err := ctl.client.Room.
		UpdateOne(&obj).
		Save(context.Background())
	if err != nil {
		c.JSON(400, gin.H{"error": "update failed"})
		return
	}

	c.JSON(200, r)
}

// NewRoomController creates and registers handles for the room controller
func NewRoomController(router gin.IRouter, client *ent.Client) *RoomController {
	rc := &RoomController{
		client: client,
		router: router,
	}
	rc.register()
	return rc
}

// InitRoomController registers routes to the main engine
func (ctl *RoomController) register() {
	room := ctl.router.Group("/room")

	room.GET("", ctl.ListRoom)

	// CRUD
	room.POST("", ctl.CreateRoom)
	room.GET(":id", ctl.GetRoom)
	room.PUT(":id", ctl.UpdateRoom)
	room.DELETE(":id", ctl.DeleteRoom)
}
