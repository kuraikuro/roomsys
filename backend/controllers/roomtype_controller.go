package controllers

import (
	"context"
	"fmt"
	"strconv"

	"github.com/Asus/app/ent"
	"github.com/Asus/app/ent/roomtype"
	"github.com/gin-gonic/gin"
)

// RoomTypeController defines the struct for the roomtype controller
type RoomTypeController struct {
	client *ent.Client
	router gin.IRouter
}

// CreateRoomType handles POST requests for adding roomtype entities
// @Summary Create roomtype
// @Description Create roomtype
// @ID create-roomtype
// @Accept   json
// @Produce  json
// @Param roomtype body ent.RoomType true "RoomType entity"
// @Success 200 {object} ent.RoomType
// @Failure 400 {object} gin.H
// @Failure 500 {object} gin.H
// @Router /roomtype [post]
func (ctl *RoomTypeController) CreateRoomType(c *gin.Context) {
	obj := ent.RoomType{}
	if err := c.ShouldBind(&obj); err != nil {
		c.JSON(400, gin.H{
			"error": "roomtype binding failed",
		})
		return
	}

	t, err := ctl.client.RoomType.
		Create().
		SetRoomType(obj.RoomType).
		SetCost(obj.Cost).
		Save(context.Background())
	if err != nil {
		c.JSON(400, gin.H{
			"error": "saving failed",
		})
		return
	}

	c.JSON(200, t)
}

// GetRoomType handles GET requests to retrieve a roomtype entity
// @Summary Get a roomtypes entity by ID
// @Description get roomtype by ID
// @ID get-roomtype
// @Produce  json
// @Param id path int true "RoomType ID"
// @Success 200 {object} ent.RoomType
// @Failure 400 {object} gin.H
// @Failure 404 {object} gin.H
// @Failure 500 {object} gin.H
// @Router /roomtype/{id} [get]
func (ctl *RoomTypeController) GetRoomType(c *gin.Context) {
	id, err := strconv.ParseInt(c.Param("id"), 10, 64)
	if err != nil {
		c.JSON(400, gin.H{
			"error": err.Error(),
		})
		return
	}

	t, err := ctl.client.RoomType.
		Query().
		Where(roomtype.IDEQ(int(id))).
		Only(context.Background())
	if err != nil {
		c.JSON(404, gin.H{
			"error": err.Error(),
		})
		return
	}

	c.JSON(200, t)
}

// ListRoomType handles request to get a list of roomtype entities
// @Summary List roomtype entities
// @Description list roomtype entities
// @ID list-roomtype
// @Produce json
// @Param limit  query int false "Limit"
// @Param offset query int false "Offset"
// @Success 200 {array} ent.RoomType
// @Failure 400 {object} gin.H
// @Failure 500 {object} gin.H
// @Router /roomtype [get]
func (ctl *RoomTypeController) ListRoomType(c *gin.Context) {
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

	roomtype, err := ctl.client.RoomType.
		Query().
		Limit(limit).
		Offset(offset).
		All(context.Background())
	if err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	c.JSON(200, roomtype)
}

// DeleteRoomType handles DELETE requests to delete a roomtype entity
// @Summary Delete a roomtype entity by ID
// @Description get roomtype by ID
// @ID delete-roomtype
// @Produce  json
// @Param id path int true "RoomType ID"
// @Success 200 {object} gin.H
// @Failure 400 {object} gin.H
// @Failure 404 {object} gin.H
// @Failure 500 {object} gin.H
// @Router /roomtype/{id} [delete]
func (ctl *RoomTypeController) DeleteRoomType(c *gin.Context) {
	id, err := strconv.ParseInt(c.Param("id"), 10, 64)
	if err != nil {
		c.JSON(400, gin.H{
			"error": err.Error(),
		})
		return
	}

	err = ctl.client.RoomType.
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

// UpdateRoomType handles PUT requests to update a roomtype entity
// @Summary Update a roomtype entity by ID
// @Description update roomtype by ID
// @ID update-roomtype
// @Accept   json
// @Produce  json
// @Param id path int true "RoomType ID"
// @Param roomtype body ent.RoomType true "RoomType entity"
// @Success 200 {object} ent.RoomType
// @Failure 400 {object} gin.H
// @Failure 500 {object} gin.H
// @Router /roomtype/{id} [put]
func (ctl *RoomTypeController) UpdateRoomType(c *gin.Context) {
	id, err := strconv.ParseInt(c.Param("id"), 10, 64)
	if err != nil {
		c.JSON(400, gin.H{
			"error": err.Error(),
		})
		return
	}

	obj := ent.RoomType{}
	if err := c.ShouldBind(&obj); err != nil {
		c.JSON(400, gin.H{
			"error": "roomtype binding failed",
		})
		return
	}
	obj.ID = int(id)
	t, err := ctl.client.RoomType.
		UpdateOne(&obj).
		SetRoomType(obj.RoomType).
		SetCost(obj.Cost).
		Save(context.Background())
	if err != nil {
		c.JSON(400, gin.H{"error": "update failed"})
		return
	}

	c.JSON(200, t)
}

// NewRoomTypeController creates and registers handles for the roomtype controller
func NewRoomTypeController(router gin.IRouter, client *ent.Client) *RoomTypeController {
	tc := &RoomTypeController{
		client: client,
		router: router,
	}
	tc.register()
	return tc
}

// InitRoomTypeController registers routes to the main engine
func (ctl *RoomTypeController) register() {
	roomtype := ctl.router.Group("/roomtype")

	roomtype.GET("", ctl.ListRoomType)

	// CRUD
	roomtype.POST("", ctl.CreateRoomType)
	roomtype.GET(":id", ctl.GetRoomType)
	roomtype.PUT(":id", ctl.UpdateRoomType)
	roomtype.DELETE(":id", ctl.DeleteRoomType)
}
