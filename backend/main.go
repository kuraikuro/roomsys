package main

import (
	"context"
	"log"

	"github.com/Asus/app/controllers"
	_ "github.com/Asus/app/docs"
	"github.com/Asus/app/ent"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	_ "github.com/mattn/go-sqlite3"
	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
)

type RoomStatuss struct {
	RoomStatus []RoomStatus
}

type RoomStatus struct {
	RoomStatus string
}

type RoomTypes struct {
	RoomType []RoomType
}

type RoomType struct {
	RoomType string
	Cost     int
}

type RoomInfos struct {
	RoomInfo []RoomInfo
}

type RoomInfo struct {
	Info string
}

// @title SUT SA Example API
// @version 1.0
// @description This is a sample server for SUT SE 2563
// @termsOfService http://swagger.io/terms/

// @contact.name API Support
// @contact.url http://www.swagger.io/support
// @contact.email support@swagger.io
// @license.name Apache 2.0
// @license.url http://www.apache.org/licenses/LICENSE-2.0.html

// @host localhost:8080
// @BasePath /api/v1

// @securityDefinitions.basic BasicAuth

// @securityDefinitions.apikey ApiKeyAuth
// @in header
// @name Authorization

// @securitydefinitions.oauth2.application OAuth2Application
// @tokenUrl https://example.com/oauth/token
// @scope.write Grants write access
// @scope.admin Grants read and write access to administrative information

// @securitydefinitions.oauth2.implicit OAuth2Implicit
// @authorizationUrl https://example.com/oauth/authorize
// @scope.write Grants write access
// @scope.admin Grants read and write access to administrative information

// @securitydefinitions.oauth2.password OAuth2Password
// @tokenUrl https://example.com/oauth/token
// @scope.read Grants read access
// @scope.write Grants write access
// @scope.admin Grants read and write access to administrative information

// @securitydefinitions.oauth2.accessCode OAuth2AccessCode
// @tokenUrl https://example.com/oauth/token
// @authorizationUrl https://example.com/oauth/authorize
// @scope.admin Grants read and write access to administrative information
func main() {
	router := gin.Default()
	router.Use(cors.Default())

	client, err := ent.Open("sqlite3", "file:ent.db?cache=shared&_fk=1")
	if err != nil {
		log.Fatalf("fail to open sqlite3: %v", err)
	}
	defer client.Close()

	if err := client.Schema.Create(context.Background()); err != nil {
		log.Fatalf("failed creating schema resources: %v", err)
	}

	v1 := router.Group("/api/v1")
	controllers.NewRoomStatusController(v1, client)
	controllers.NewRoomTypeController(v1, client)
	controllers.NewRoomInfoController(v1, client)
	controllers.NewRoomController(v1, client)

	// Set RoomStatus Data
	roomstatuss := RoomStatuss{
		RoomStatus: []RoomStatus{
			RoomStatus{"ห้องว่าง"},
			RoomStatus{"ห้องไม่ว่าง"},
		},
	}

	for _, s := range roomstatuss.RoomStatus {
		client.RoomStatus.
			Create().
			SetRoomStatus(s.RoomStatus).
			Save(context.Background())
	}

	// Set RoomType Data
	roomtypes := RoomTypes{
		RoomType: []RoomType{
			RoomType{"ห้องแอร์", 3500},
			RoomType{"ห้องพัดลม", 2500},
		},
	}

	for _, t := range roomtypes.RoomType {
		client.RoomType.
			Create().
			SetRoomType(t.RoomType).
			SetCost(t.Cost).
			Save(context.Background())
	}

	// Set RoomInfo Data
	roominfos := RoomInfos{
		RoomInfo: []RoomInfo{
			RoomInfo{"เตียงนอนขนาด 6 ฟุต 1 เตียง, ตู้เย็น 1, ตู้เสื้อผ้า 1, โต๊ะเขียนหนังสือ 1, เครื่องทำน้ำอุ่น 1, wifi 1, ทีวี 1, ชั้นวางรองเท้า 1"},
			RoomInfo{"เตียงนอนขนาด 3.5 ฟุต 2 เตียง, ตู้เย็น 1, ตู้เสื้อผ้า 2, โต๊ะเขียนหนังสือ 2, เครื่องทำน้ำอุ่น 1, wifi 1, ทีวี 1, ชั้นวางรองเท้า 1"},
		},
	}

	for _, i := range roominfos.RoomInfo {
		client.RoomInfo.
			Create().
			SetInfo(i.Info).
			Save(context.Background())
	}

	router.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))
	router.Run()
}
